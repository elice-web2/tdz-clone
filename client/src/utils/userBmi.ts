interface bmiParams {
  height: number;
  current_weight: number;
}
// 몸무게 / (키(m) * 키(m))
export const userBmi = ({ height, current_weight }: bmiParams) => {
  const weight = current_weight * 0.01;
  return height / (weight * weight);
};
