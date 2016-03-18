import {Injectable} from 'angular2/core';
@Injectable()
export class Logger {
  logs:string[] = []; // capture logs for testing
  log1(message: string){
    this.logs.push(message);
    console.log(message);
  }

  log(message, data, source, showToast) {
      this.logIt(message, data, source, showToast, 'info');
  }

  logWarning(message, data, source, showToast) {
      this.logIt(message, data, source, showToast, 'warning');
  }

  logSuccess(message, data, source, showToast) {
      this.logIt(message, data, source, showToast, 'success');
  }

  logError(message, data, source, showToast) {
      this.logIt(message, data, source, showToast, 'error');
  }

  logDebug(message, data, source, showToast, toastType) {
      source = source ? '[' + source + '] ' : '';
      console.debug(source, message, data);
      if (toastType == 'debug') {
          //toastr.warning(message);
      }
  }

  logIt(message, data, source, showToast, toastType) {
      source = source ? '[' + source + '] ' : '';

      if (toastType === 'error') { // always show errors
        console.error(source, message, data);
        //toastr.error(message);
        return;
      }
      if (toastType === 'warning') {
        console.warn(source, message, data);
        //toastr.warning(message);
      } else if (toastType === 'success') {
        console.info(source, message, data);
        //toastr.success(message);
      } else {
        console.debug(source, message, data);
        //toastr.info(message);
      }
      //}
  }

}
