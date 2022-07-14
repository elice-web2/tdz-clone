import { mealhistoryModel, MealHistoryModel } from '../db';
import {
  MealHistoryInfo,
  MealHistoryData,
} from '../customType/mealhistory.type';
import { calendarService, userService } from '../services';
import { CalendarModel, calendarModel } from '../db';
import { CalendarInfo, CalendarData } from '../customType/calendar.type';
import { DayInfo, FromToInfo } from '../customType/chart.type';

// 1. 일간 합 : 하루의 각합을 7일 전 정보까지 받아서 돌려주기

// 2. 주간 합 : 7일로 총합하는 서비스 <- 이걸 4번 하면 월간

// 3. 월간 합 : 월별로 합하는 서비스

// 4. 주간 합을 받아서 4주 평균을 내기

// 5. 월간 합을 받아서 3개월 평균을 내기

class ChartService {
  constructor(private calendarModel: CalendarModel) {}

  async getOneDayChart(fromToInfo: FromToInfo) {
    return await this.calendarModel.findByDate(fromToInfo);
  }
}

const chartService = new ChartService(calendarModel);
export { chartService };
