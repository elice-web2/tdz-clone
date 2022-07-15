import { mealhistoryModel, MealHistoryModel } from '../db';
import {
  MealHistoryInfo,
  MealHistoryData,
} from '../customType/mealhistory.type';
import { calendarService, userService } from '../services';
import { CalendarModel, calendarModel } from '../db';
import { CalendarInfo, CalendarData } from '../customType/calendar.type';
import { ChartData, DayInfo, FromToInfo } from '../customType/chart.type';

// 1. 일간 합 : 하루의 각합을 7일 전 정보까지 받아서 돌려주기

// 2. 주간 합 : 7일로 총합하는 서비스 <- 이걸 4번 하면 월간

// 3. 월간 합 : 월별로 합하는 서비스

// 4. 주간 합을 받아서 4주 평균을 내기

// 5. 월간 합을 받아서 3개월 평균을 내기

class ChartService {
  constructor(private calendarModel: CalendarModel) {}

  async getOneDayChart(fromToInfo: FromToInfo): Promise<CalendarData[] | null> {
    return await this.calendarModel.findByDate(fromToInfo);
  }

  async getDailyChart(dayInfo: DayInfo): Promise<ChartData | null> {
    //받은 날짜로 계산
    const toDate: Date = new Date(dayInfo.date);
    const fromDate: Date = new Date(toDate);
    fromDate.setDate(toDate.getDate() - 6);
    toDate.setDate(toDate.getDate() + 1);
    const from: string = fromDate.toISOString().slice(0, 10);
    const to: string = toDate.toISOString().slice(0, 10);
    console.log(from);
    console.log(to);

    const updatedInfo: FromToInfo = {
      user_id: dayInfo.user_id,
      from,
      to,
    };

    //전체 데이터 받음
    const data = await this.calendarModel.findByDate(updatedInfo);

    if (!data) {
      return {} as ChartData;
    }

    //인터페이스 초기화
    let dailyData: ChartData = {
      userId: 'undefined',
      weight: [],
      kcalAvg: [],
      carbAvg: [],
      proteinAvg: [],
      kcalSum: 0,
      carbSum: 0,
      proteinSum: 0,
      fatSum: 0,
      sugarsSum: 0,
      natriumSum: 0,
      cholesterolSum: 0,
      saturatedfattySum: 0,
      transfatSum: 0,
    };

    dailyData.userId = data[0].userId;

    console.log(data);

    for (let i = 0; i < data.length; i++) {
      dailyData.weight.push(data[i].todayWeight);
      dailyData.kcalAvg.push(data[i].currentKcal);
      dailyData.carbAvg.push(data[i].carbSum);
      dailyData.proteinAvg.push(data[i].proteinSum);
      dailyData.kcalSum =
        Number(data[i].currentKcal) + Number(dailyData.kcalSum);
      dailyData.carbSum = Number(data[i].carbSum) + Number(dailyData.carbSum);
      dailyData.proteinSum =
        Number(data[i].proteinSum) + Number(dailyData.proteinSum);
      dailyData.fatSum = Number(data[i].fatSum) + Number(dailyData.fatSum);
      dailyData.sugarsSum =
        Number(data[i].sugarsSum) + Number(dailyData.sugarsSum);
      dailyData.natriumSum =
        Number(data[i].natriumSum) + Number(dailyData.natriumSum);
      dailyData.cholesterolSum =
        Number(data[i].cholesterolSum) + Number(dailyData.cholesterolSum);
      dailyData.saturatedfattySum =
        Number(data[i].saturatedfattySum) + Number(dailyData.saturatedfattySum);
      dailyData.transfatSum =
        Number(data[i].transfatSum) + Number(dailyData.transfatSum);
    }

    return dailyData;
  }

  async getWeeklyChart(dayInfo: DayInfo): Promise<ChartData | null> {
    //받은 날짜로 계산
    const toDate: Date = new Date(dayInfo.date);
    const fromDate: Date = new Date(toDate);
    fromDate.setDate(toDate.getDate() - 6);
    toDate.setDate(toDate.getDate() + 1);
    const from: string = fromDate.toISOString().slice(0, 10);
    const to: string = toDate.toISOString().slice(0, 10);
    console.log(from);
    console.log(to);

    const updatedInfo: FromToInfo = {
      user_id: dayInfo.user_id,
      from,
      to,
    };

    //전체 데이터 받음
    const data = await this.calendarModel.findByDate(updatedInfo);

    if (!data) {
      return {} as ChartData;
    }

    //인터페이스 초기화
    let dailyData: ChartData = {
      userId: 'undefined',
      weight: [],
      kcalAvg: [],
      carbAvg: [],
      proteinAvg: [],
      kcalSum: 0,
      carbSum: 0,
      proteinSum: 0,
      fatSum: 0,
      sugarsSum: 0,
      natriumSum: 0,
      cholesterolSum: 0,
      saturatedfattySum: 0,
      transfatSum: 0,
    };

    dailyData.userId = data[0].userId;

    console.log(data);

    for (let i = 0; i < data.length; i++) {
      dailyData.weight.push(data[i].todayWeight);
      dailyData.kcalAvg.push(data[i].currentKcal);
      dailyData.carbAvg.push(data[i].carbSum);
      dailyData.proteinAvg.push(data[i].proteinSum);
      dailyData.kcalSum =
        Number(data[i].currentKcal) + Number(dailyData.kcalSum);
      dailyData.carbSum = Number(data[i].carbSum) + Number(dailyData.carbSum);
      dailyData.proteinSum =
        Number(data[i].proteinSum) + Number(dailyData.proteinSum);
      dailyData.fatSum = Number(data[i].fatSum) + Number(dailyData.fatSum);
      dailyData.sugarsSum =
        Number(data[i].sugarsSum) + Number(dailyData.sugarsSum);
      dailyData.natriumSum =
        Number(data[i].natriumSum) + Number(dailyData.natriumSum);
      dailyData.cholesterolSum =
        Number(data[i].cholesterolSum) + Number(dailyData.cholesterolSum);
      dailyData.saturatedfattySum =
        Number(data[i].saturatedfattySum) + Number(dailyData.saturatedfattySum);
      dailyData.transfatSum =
        Number(data[i].transfatSum) + Number(dailyData.transfatSum);
    }

    return dailyData;
  }
}

const chartService = new ChartService(calendarModel);
export { chartService };
