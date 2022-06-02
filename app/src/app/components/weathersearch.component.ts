/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-weathersearch',
  templateUrl: './weathersearch.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class weathersearchComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_BV4rt2BRTulN5OnK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_BV4rt2BRTulN5OnK(bh) {
    try {
      bh = this.sd_h9pZPfeFZDZt3D7w(bh);
      //appendnew_next_sd_BV4rt2BRTulN5OnK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BV4rt2BRTulN5OnK');
    }
  }

  updateLog(logobject: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { logobject: logobject };
      bh.local = {};
      bh = this.sd_1aVNclKMNApPQJKb(bh);
      //appendnew_next_updateLog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ccAr7tPwMRdYasU9');
    }
  }

  processWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = {};
      bh = this.sd_YkPlqEESwoHFkmv7(bh);
      //appendnew_next_processWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uJuOef5OvBxEOoWB');
    }
  }

  getWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = { ssdWeatherApiUrl: undefined };
      bh = this.cityNameNullCheck(bh);
      //appendnew_next_getWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TX7zFbxEmBkg1354');
    }
  }

  //appendnew_flow_weathersearchComponent_start

  sd_h9pZPfeFZDZt3D7w(bh) {
    try {
      this.page.searchString = undefined;
      this.page.logArray = [];
      //appendnew_next_sd_h9pZPfeFZDZt3D7w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h9pZPfeFZDZt3D7w');
    }
  }

  sd_1aVNclKMNApPQJKb(bh) {
    try {
      const page = this.page;
      page.logArray.push(bh.input.logobject);
      //appendnew_next_sd_1aVNclKMNApPQJKb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1aVNclKMNApPQJKb');
    }
  }

  sd_YkPlqEESwoHFkmv7(bh) {
    try {
      const page = this.page;
      this.page.showCard =
        typeof this.page.weatherdata === 'object' &&
        Object.keys(this.page.weatherdata).length > 2;
      bh = this.sd_d3Cjh6Kawb10vz1J(bh);
      //appendnew_next_sd_YkPlqEESwoHFkmv7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YkPlqEESwoHFkmv7');
    }
  }

  async sd_d3Cjh6Kawb10vz1J(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          this.page.showCard,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.successLog(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_x6XN7iW4VFpO5h59(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d3Cjh6Kawb10vz1J');
    }
  }

  successLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.input.successlog);

      //appendnew_next_successLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RRPddxxqCkZttsXV');
    }
  }

  sd_x6XN7iW4VFpO5h59(bh) {
    try {
      const page = this.page;
      localStorage.lastCity = bh.input.cityName;
      bh.input.successlog = {
        type: 'info',
        message:
          'Successfully Retrieved the Weather Data for city: ' +
          bh.input.cityName,
      };
      bh = this.errorLog(bh);
      //appendnew_next_sd_x6XN7iW4VFpO5h59
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x6XN7iW4VFpO5h59');
    }
  }

  errorLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.input.errorlog);

      //appendnew_next_errorLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LCfJdN0U6iy6TtlZ');
    }
  }

  sd_gVdyJmlN7r73XZdS(bh) {
    try {
      const page = this.page;
      bh.input.errorlog = {
        type: 'error',
        message: `Weather Data Not Found${
          bh.input.cityName ? ` For the City: ${bh.input.cityName}` : ''
        }!`,
      };
      bh = this.successLog(bh);
      //appendnew_next_sd_gVdyJmlN7r73XZdS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gVdyJmlN7r73XZdS');
    }
  }

  cityNameNullCheck(bh) {
    try {
      if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['null'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['empty'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'string',
          undefined,
          undefined
        )
      ) {
        bh = this.constructApiUrl(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zl1BN1WeLGuOhbWX');
    }
  }

  snackbar(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('invalid City Name', 'Okay', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_snackbar
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fB3wc6SsjXvtqh89');
    }
  }

  constructApiUrl(bh) {
    try {
      const page = this.page;
      bh.local.ssdWeatherApiUrl = `${bh.system.environment.properties.ssdURL}weather`;
      bh.local.qparams = {
        cityName: bh.input.cityName,
      };
      bh = this.callServerFlow(bh);
      //appendnew_next_constructApiUrl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tbwyG2FFQ6gD1D8a');
    }
  }

  async callServerFlow(bh) {
    try {
      let requestOptions = {
        url: bh.local.ssdWeatherApiUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.qparams,
        body: undefined,
      };
      this.page.weatherdata = await this.sdService.nHttpRequest(requestOptions);
      bh = this.callProcessWeather(bh);
      this.logSsWeatherApiUrl(bh);
      //appendnew_next_callServerFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rG9p1auqaV0wr9kq');
    }
  }

  callProcessWeather(bh) {
    try {
      let outputVariables = this.processWeather(bh.input.cityName);

      //appendnew_next_callProcessWeather
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_92LVTYcc4xMNM0iT');
    }
  }

  logSsWeatherApiUrl(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.ssWeatherApiUrl);
      //appendnew_next_logSsWeatherApiUrl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P2HuyNiWKfXBJov9');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_jbjA2gZ591ns0cN0(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_jbjA2gZ591ns0cN0(bh) {
    const nodes = ['sd_rG9p1auqaV0wr9kq'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_gVdyJmlN7r73XZdS(bh);
      //appendnew_next_sd_jbjA2gZ591ns0cN0
      return true;
    }
    return false;
  }
  //appendnew_flow_weathersearchComponent_Catch
}
