export interface MealInfo {
  code: string;
  name: String;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  sugars: number;
  natruim: number;
  cholesterol: number;
  saturatedfatty: number;
  transfat: number;
  servingSize: number;
  totalGram: number;
  quantity: number;
  updated_date: Date;
}

export interface MealData {
  _id: string;
  code: string;
  name: string;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  sugars: number;
  natruim: number;
  cholesterol: number;
  saturatedfatty: number;
  transfat: number;
  servingSize: number;
  totalGram: number;
  quantity: number;
  updated_date: Date;
}
