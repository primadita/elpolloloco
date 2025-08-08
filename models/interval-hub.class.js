export class IntervalHub{
    // #region ATTRIBUTES
    static allIntervals= [];
    // #endregion

    // #region METHODS
    static startInterval(func, timer){
        const newInterval = setInterval(func, timer);
        IntervalHub.allIntervals.push(newInterval);
    }

    static stopAllIntervals(){
        IntervalHub.allIntervals.forEach(clearInterval);
        IntervalHub.allIntervals = [];
    }
    // #endregion
}