import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale('vi');

export const formatDate = (
  date: string | number | Date | dayjs.Dayjs | null | undefined,
  format: string = 'DD/MM/YYYY',
  hasTime: boolean = false,
  hasSeconds: boolean = false,
) => {
  if (hasTime) {
    return hasSeconds
      ? dayjs(date).format(`${format} HH:mm:ss`)
      : dayjs(date).format(`${format} HH:mm`);
  }

  return dayjs(date).format(format);
};

export default dayjs;
