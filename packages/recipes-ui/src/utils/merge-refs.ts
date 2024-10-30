/**
 * Handles setting callback refs and MutableRefObjects.
 * @param ref The ref to use for the instance.
 * @param instance The instance being set.
 */
function setRef<TInstance>(ref: React.Ref<TInstance>, instance: TInstance) {
  if (ref instanceof Function) {
    ref(instance);
  } else if (ref != null) {
    (ref as React.MutableRefObject<TInstance>).current = instance;
  }
}

/**
 * Combines multiple refs into a single ref.
 * @param refs The refs to combine.
 * @returns A callback ref that sets all the refs.
 * @see https://github.com/ally-ui/ally-ui/blob/main/packages/common/react/lib/useMultipleRefs.react.tsx
 */
export function combinedRef<TInstance>(refs: React.Ref<TInstance>[]) {
  return (instance: TInstance | null) =>
    refs.forEach((ref) => setRef(ref, instance));
}
