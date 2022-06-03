let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
//append_imports_end
export class weatherserver {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'weatherserver';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new weatherserver(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_weatherserver_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: weatherserver');

    //appendnew_flow_weatherserver_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: weatherserver');

    if (!this.swaggerDocument['paths']['/weather']) {
      this.swaggerDocument['paths']['/weather'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/weather']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/weather`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.constructParams(bh);
          //appendnew_next_sd_lIK81GkrnreOHqLm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lIK81GkrnreOHqLm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_weatherserver_HttpIn
  }
  //   service flows_weatherserver

  //appendnew_flow_weatherserver_start

  async constructParams(bh) {
    try {
      bh.url = `${process.env.weatherProviderURL}?q=${bh.input.query.cityName}&appid=${process.env.apiId}&units=metric`;
      bh.qparams = {
        q: bh.input.query.cityName,
        APPID: process.env.apiId,
        units: 'metric',
      };
      bh = await this.sd_3XEr5G6We2ym57ZE(bh);
      //appendnew_next_constructParams
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EB0pPbnd88aIwqax');
    }
  }

  async sd_3XEr5G6We2ym57ZE(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: false,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.result = responseMsg;
      await this.sendResponse(bh);
      this.logResult(bh);
      //appendnew_next_sd_3XEr5G6We2ym57ZE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3XEr5G6We2ym57ZE');
    }
  }

  async sendResponse(bh) {
    try {
      bh.web.res.status(bh.result.statusCode).send(bh.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L0ZCbdPdmA1dgkPO');
    }
  }

  async logResult(bh) {
    try {
      let logobj: any = bh.result;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      //appendnew_next_logResult
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V8Ang1Yk0cCrb5IZ');
    }
  }

  async sd_8fNFViKaTXjPLncg(bh) {
    try {
      bh.web.res.status(500).send({ message: 'Something went wrong!' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8fNFViKaTXjPLncg');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_QtvQGFogbhcgpgwD(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_QtvQGFogbhcgpgwD(bh) {
    const catchConnectedNodes = ['sd_8fNFViKaTXjPLncg'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_8fNFViKaTXjPLncg(bh);
    //appendnew_next_sd_QtvQGFogbhcgpgwD
    return true;
  }
  //appendnew_flow_weatherserver_Catch
}
