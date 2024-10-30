/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { mergeReactProps } from "../../utils/merge-props.ts";
import { combinedRef } from "../../utils/merge-refs.ts";

type SlotProps = {
  children: React.ReactNode;
};

export const Slot = React.forwardRef<HTMLElement, SlotProps>((props, ref) => {
  const { children, ...slotProps } = props;

  if (!React.isValidElement(children)) {
    return null;
  }

  return React.cloneElement(children, {
    ...mergeReactProps(slotProps, children.props),
    ref: combinedRef([ref, (children as any).ref]),
  } as any);
});
