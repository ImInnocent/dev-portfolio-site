import React, { useState } from 'react';

/**
 * string 타입의 state를 안정적으로 관리
 * 
 * @param {string | null} init 초기 데이터
 * @returns {[string, (any) => void]} 데이터와 set함수 반환
 */
export default function useString(init?: string): [string, (value: any) => void] {
  const [str, setStr] = useState<string>(init === undefined ? '' : init);

  /**
   * type과 null을 체크한 후 설정
   * 
   * @param {any} value 새로운 값
   */
  const stringFilter = (value: any) => {
    if (value === null || value === undefined) {
      setStr('');
    } else if (typeof value === 'string') {
      setStr(value);
    } else {
      console.warn('unsupported types: ' + (typeof value));
    }
  }

  return [str, stringFilter];
}
