import { format, compareAsc, parseISO, add } from "date-fns";

const dateFunctions = (() => {

    const convertToDateObj = (stringDate) => {
        return parseISO(stringDate, "yyyy-MM-dd", new Date());
    }

    const isDue = (todoDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        todoDate = convertToDateObj(todoDate);
        if(compareAsc(today, todoDate) < 0) {
            return false;
        }
        return true;
    }

    const formatDate = (todoDate) => {
        const dateObj = convertToDateObj(todoDate);
        let formattedDate = format(dateObj, 'd MMM yyyy');
        // remove the year if the todo year matches current year
        if(new Date().getFullYear() == dateObj.getFullYear()) {
            formattedDate = formattedDate.replace(/ \d{4}/, '');
        };
        
        return formattedDate;
    }

    const formatDateSimple = (dateObj) => {
        return format(dateObj, 'yyyy-MM-dd');
    }

    const daysFromToday = (days) => {
        const today = new Date();
        const newDate = add(today, {days});
        return formatDateSimple(newDate);
    }
    
    return {
        isDue,
        formatDate,
        daysFromToday
    };
})();

export default dateFunctions;