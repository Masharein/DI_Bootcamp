export const AGE_UP = 'AGE_UP';
export const AGE_DOWN = 'AGE_DOWN';

export const ageUp = () => {
  return {
    type: AGE_UP,
    value: 1
  };
};

export const ageDown = () => {
  return {
    type: AGE_DOWN,
    value: 1
  };
};
