// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = Record<string, any>;

/**
 * Merges two sets of React props, giving priority to the child props.
 * This is useful for combining props from a parent and child component.
 * @param parentProps The parent props.
 * @param childProps The child props.
 * @returns The merged props.
 *
 * @see https://github.com/ally-ui/ally-ui/blob/main/packages/common/react/lib/mergeReactProps.ts
 */
export function mergeReactProps(parentProps: AnyProps, childProps: AnyProps) {
  // All child props should override.
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const parentPropValue = parentProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    // If it's a handler, modify the override by composing the base handler.
    if (isHandler) {
      // Only compose the handlers if both exist.
      if (childPropValue && parentPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue?.(...args);
          parentPropValue?.(...args);
        };
        // Otherwise, avoid creating an unnecessary callback.
      } else if (parentPropValue) {
        overrideProps[propName] = parentPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...parentPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [parentPropValue, childPropValue]
        .filter(Boolean)
        .join(" ");
    }
  }

  return { ...parentProps, ...overrideProps };
}
