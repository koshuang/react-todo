import { createContext, useReducer, useEffect, useRef, Context } from "react";

type Filter = 'all' | 'ongoing' | 'completed';

export interface IPubSubContext {
  subscribe?(channel: any, handler: any): void;
  unsubscribe?(channel: any, handler: any): void;
  publish?(channel: any, message: any): void;
}

interface IPubSub {
  PubSubContext: Context<IPubSubContext>;
}

//Provide an app wide pub sub context
export const DefaultPubSubContext: Context<IPubSubContext> = createContext<IPubSubContext>({
});

export const usePubSub = (context: Context<IPubSubContext>) => {
  let PubSubContext: Context<IPubSubContext> = DefaultPubSubContext;
  if (context) PubSubContext = context;

  const [, dispatch] = useReducer(
    (state, action) => {
      let current = { ...state };
      switch (action.type) {
        case "Subscribe":
          current.channels = { ...state.channels };

          let handlers = current.channels[action.channel] || [];
          handlers = [...handlers];

          handlers.push(action.handler);
          current.channels[action.channel] = handlers;
          break;
        case "Unsubscribe":
          //current.channels = { ...state.channels };
          let unsubHandlers = current.channels[action.channel] || [];
          unsubHandlers = [...unsubHandlers];

          let i = unsubHandlers.indexOf(action.handler);
          if (i > -1) unsubHandlers.splice(i, 1);

          current.channels[action.channel] = unsubHandlers;

          break;
        case "Publish":
          let channel = current.channels[action.channel] || [];
          for (let i = 0; i < channel.length; i++) {
            channel[i](action.message);
          }
          break;
        default:
          //Return exiting state
          return state;
      }
      return current;
    },
    { channels: {} }
  );
  let ref = useRef({ dispatch });
  useEffect(
    () => {
      ref.current = { dispatch };
    },
    [dispatch]
  );

  let subscribe = (channel: any, handler: any) => {
    if (!ref.current) return () => {};
    ref.current.dispatch({ type: "Subscribe", channel, handler });
    return () => unsubscribe(channel, handler);
  };
  let unsubscribe = (channel: any, handler: any) => {
    if (!ref.current) return () => {};
    ref.current.dispatch({ type: "Unsubscribe", channel, handler });
  };
  let publish = (channel: any, message: any) => {
    if (!ref.current) return () => {};
    ref.current.dispatch({ type: "Publish", channel, message });
  };
  return {
    subscribe,
    unsubscribe,
    publish,
    PubSubContext
  };
};
