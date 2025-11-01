/**
 * 문자열의 일부를 '*'로 마스킹 처리
 * @param text 마스킹할 텍스트
 * @param showStart 시작부분에 보여줄 문자 수
 * @returns 마스킹된 텍스트
 */
export const maskText = (text: string, showStart: number = 2): string => {
  if (!text || text.length <= showStart) return text;
  const visiblePart = text.slice(0, showStart);
  const maskedPart = '*'.repeat(text.length - showStart);
  return `${visiblePart}${maskedPart}`;
};
