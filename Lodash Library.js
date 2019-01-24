const _ = {

  pad (str, num) {
      if (str.length >= num) {
        return str;
      } else {
        let padding = num - str.length;
        let startPadding = Math.floor(padding / 2);
        let endPadding = padding - startPadding;
        return ' '.repeat(startPadding) + str + ' '.repeat(endPadding);
      }
    };

     words(str) {
      return str.split(' ');
    };

    inRange(value, startValue, endValue) {
      if (typeof(endValue) === 'undefined') {
        endValue = startValue;
        startValue = 0;
      }
      if (startValue > endValue) {
        let temp = endValue
        endValue = startValue
        startValue = temp
      }
      if (value > startValue && value < endValue) {
        return true;
      } else {
        return false;
      }
    };

    clamp(value, lowerBound, upperBound) {
      return Math.min(Math.max(value, lowerBound), upperBound)
    }


}
