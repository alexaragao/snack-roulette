export type Slice = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

export function createRouletteSlices(numSlices: number): Slice[] {
  const slices: Slice[] = [];
  const slicePercentage = 1 / numSlices;

  let startAngle: number, endAngle: number;

  for (let i = 0; i < numSlices; i++) {
    startAngle = 2 * Math.PI * (i * slicePercentage);
    endAngle = 2 * Math.PI * ((1 + i) * slicePercentage);

    slices.push({
      startX: Math.cos(startAngle),
      startY: Math.sin(startAngle),
      endX: Math.cos(endAngle),
      endY: Math.sin(endAngle),
    });
  }

  return slices;
}
