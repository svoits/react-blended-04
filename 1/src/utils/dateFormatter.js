import { formatDistanceToNow ,  format} from 'date-fns';


export const formatDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formatFullDate = date =>{
  return format(new Date(date), "dd-MM-yyyy' 'HH:mm:ss")

}
