import { useRef, useCallback, useEffect } from "react";

/**
 * 创建一个始终引用最新函数的稳定回调，用于在 effect 中避免 stale closure。
 */
export function useEffectEvent<T extends (...args: any[]) => any>(fn: T): T {
  const fnRef = useRef(fn);

  // 始终更新最新的函数引用
  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  // 返回一个稳定的回调
  return useCallback(
    ((...args) => {
      return fnRef.current(...args);
    }) as T,
    []
  );
}
