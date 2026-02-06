// 配置常數
const CONFIG = {
    CAMPUS_ORDER: ["蘭潭", "民雄", "新民", "林森"],
    DATE_FORMAT: {
        YEAR_MONTH: "YYYY-MM",
        YEAR: "YYYY",
        MONTH: "M"
    },
    EXCLUDED_IDS: {
        WATER: ['51-06329700-9'],
        METER: ['000002', '000003', '000004', '']
    },
    POWER_IDS: ['09-55-6206-20-0', '09-55-6206-00-6', '09-18-5706-95-7', '09-16-6291-00-2',
        '09-05-7116-00-8', '09-05-7116-10-0', '09-18-5706-92-4', '09-16-6190-13-5', '09-16-6190-00-0', '09-21-6454-20-0'],
    TPWR_PROP: [
        {
            "電號": "09-16-6190-00-0",
            "電號別名": "蘭潭教學行政區",
            "校區": "蘭潭"
        },
        {
            "電號": "09-16-6190-13-5",
            "電號別名": "蘭潭畜牧場區",
            "校區": "蘭潭"
        },
        {
            "電號": "09-16-6291-00-2",
            "電號別名": "蘭潭宿舍區",
            "校區": "蘭潭"
        },
        {
            "電號": "09-55-6206-00-6",
            "電號別名": "民雄主校區",
            "校區": "民雄"
        },
        {
            "電號": "09-55-6206-20-0",
            "電號別名": "民雄大學館創意樓",
            "校區": "民雄"
        },
        {
            "電號": "09-05-7116-00-8",
            "電號別名": "林森主校區",
            "校區": "林森"
        },
        {
            "電號": "09-05-7116-10-0",
            "電號別名": "林森樂育堂",
            "校區": "林森"
        },
        {
            "電號": "09-18-5706-95-7",
            "電號別名": "新民主校區",
            "校區": "新民"
        },
        {
            "電號": "09-18-5706-92-4",
            "電號別名": "新民動物醫院及泳池區",
            "校區": "新民"
        },
        {
            "電號": "09-21-6454-20-0",
            "電號別名": "新民賢德樓宿舍",
            "校區": "新民"
        }
    ],
    WATER_PROP: [
        {
            "校區": "蘭潭",
            "供水區": "蘭潭主校區",
            "水號": "51-18000201-5"
        },
        {
            "校區": "蘭潭",
            "供水區": "蘭潭能源系、育成中心",
            "水號": "51-18025522-8"
        },
        {
            "校區": "蘭潭",
            "供水區": "蘭潭宿舍1、2舍及昆蟲、咖啡、綠建築",
            "水號": "51-18000200-K"
        },
        {
            "校區": "蘭潭",
            "供水區": "蘭潭宿舍2、3、5、6舍",
            "水號": "51-18000100-6"
        },
        {
            "校區": "民雄",
            "供水區": "民雄全校區",
            "水號": "5Y-24001800-5"
        },
        {
            "校區": "林森",
            "供水區": "林森全校區",
            "水號": "51-03000800-2"
        },
        {
            "校區": "新民",
            "供水區": "新民管院及宿舍",
            "水號": "51-30963840-0"
        },
        {
            "校區": "新民",
            "供水區": "新民動物醫院",
            "水號": "51-19326740-5"
        },
        {
            "校區": "新民",
            "供水區": "新民游泳池",
            "水號": "51-19326735-8"
        },
        {
            "校區": "新民",
            "供水區": "新民賢德樓",
            "水號": "51-19325255-6"
        }
    ],
    METER_PROP: [
        { "DeviceID": "yy-meter-5", "area": "蘭潭", "MeterName": "行政中心" },
        { "DeviceID": "yy-meter-9", "area": "蘭潭", "MeterName": "應化一館" },
        { "DeviceID": "yy-meter-11", "area": "蘭潭", "MeterName": "電物二館、應化二館、農藝場管理室、電物一館" },
        { "DeviceID": "yy-meter-13", "area": "蘭潭", "MeterName": "活動中心" },
        { "DeviceID": "yy-meter-14", "area": "蘭潭", "MeterName": "理工大樓" },
        { "DeviceID": "yy-meter-15", "area": "蘭潭", "MeterName": "嘉禾館總" },
        { "DeviceID": "yy-meter-16", "area": "蘭潭", "MeterName": "動科館" },
        { "DeviceID": "yy-meter-17", "area": "蘭潭", "MeterName": "森林館總" },
        { "DeviceID": "yy-meter-18", "area": "蘭潭", "MeterName": "應物二館、應化二館MP" },
        { "DeviceID": "yy-meter-19", "area": "蘭潭", "MeterName": "應物二館、應化二館ML" },
        { "DeviceID": "yy-meter-20", "area": "蘭潭", "MeterName": "魚保中心" },
        { "DeviceID": "yy-meter-21", "area": "蘭潭", "MeterName": "生資館" },
        { "DeviceID": "yy-meter-22", "area": "蘭潭", "MeterName": "生農一、二館、植醫系" },
        { "DeviceID": "yy-meter-23", "area": "蘭潭", "MeterName": "生科館" },
        { "DeviceID": "yy-meter-24", "area": "蘭潭", "MeterName": "材料試驗場" },
        { "DeviceID": "yy-meter-25", "area": "蘭潭", "MeterName": "國際交流學園" },
        { "DeviceID": "yy-meter-27", "area": "蘭潭", "MeterName": "機能系+創新育成大樓" },
        { "DeviceID": "yy-meter-29", "area": "蘭潭", "MeterName": "瑞穗館+警衛室+學生活動廣場" },
        { "DeviceID": "yy-meter-30", "area": "蘭潭", "MeterName": "單身宿舍、教職員宿舍" },
        { "DeviceID": "yy-meter-31", "area": "蘭潭", "MeterName": "綠建築" },
        { "DeviceID": "yy-meter-32", "area": "蘭潭", "MeterName": "昆蟲館" },
        { "DeviceID": "yy-meter-33", "area": "蘭潭", "MeterName": "禾康園" },
        { "DeviceID": "yy-meter-34", "area": "蘭潭", "MeterName": "食品科學館" },
        { "DeviceID": "yy-meter-35", "area": "蘭潭", "MeterName": "機電館" },
        { "DeviceID": "yy-meter-36", "area": "蘭潭", "MeterName": "園藝技藝中心" },
        { "DeviceID": "yy-meter-38", "area": "蘭潭", "MeterName": "食品加工廠" },
        { "DeviceID": "yy-meter-39", "area": "蘭潭", "MeterName": "景觀學系大樓" },
        { "DeviceID": "yy-meter-40", "area": "蘭潭", "MeterName": "生技健康館" },
        { "DeviceID": "yy-meter-41", "area": "蘭潭", "MeterName": "生物機械產業實驗室" },
        { "DeviceID": "yy-meter-42", "area": "蘭潭", "MeterName": "工程館" },
        { "DeviceID": "yy-meter-43", "area": "蘭潭", "MeterName": "農園館" },
        { "DeviceID": "yy-meter-44", "area": "蘭潭", "MeterName": "綜合教學大樓" },
        { "DeviceID": "yy-meter-45", "area": "蘭潭", "MeterName": "圖書資訊館" },
        { "DeviceID": "yy-meter-46", "area": "蘭潭", "MeterName": "園藝場管理室" },
        { "DeviceID": "yy-meter-62", "area": "蘭潭", "MeterName": "菇舍" },
        { "DeviceID": "yy-meter-63", "area": "蘭潭", "MeterName": "植物園" },
        { "DeviceID": "yy-meter-65", "area": "蘭潭", "MeterName": "生物多樣性館" },
        { "DeviceID": "yy-meter-66", "area": "蘭潭", "MeterName": "生農一、二館" },
        { "DeviceID": "yy-meter-67", "area": "蘭潭", "MeterName": "植醫系館" },
        { "DeviceID": "yy-meter-71", "area": "蘭潭", "MeterName": "畜牧場" },
        { "DeviceID": "yy-meter-72", "area": "蘭潭", "MeterName": "木材工廠" },
        { "DeviceID": "yy-meter-74", "area": "民雄", "MeterName": "學人宿舍" },
        { "DeviceID": "yy-meter-75", "area": "民雄", "MeterName": "第9變電站、學人宿舍、男女宿舍、餐廳" },
        { "DeviceID": "yy-meter-76", "area": "民雄", "MeterName": "樂育堂、工友室、游泳池、司令台、運動場" },
        { "DeviceID": "yy-meter-77", "area": "民雄", "MeterName": "初教館、行政大樓" },
        { "DeviceID": "yy-meter-78", "area": "民雄", "MeterName": "圖書館、教育館" },
        { "DeviceID": "yy-meter-79", "area": "民雄", "MeterName": "科學館" },
        { "DeviceID": "yy-meter-81", "area": "民雄", "MeterName": "教育館" },
        { "DeviceID": "yy-meter-82", "area": "民雄", "MeterName": "大學館與創意樓" },
        { "DeviceID": "yy-meter-84", "area": "民雄", "MeterName": "人文館" },
        { "DeviceID": "yy-meter-85", "area": "民雄", "MeterName": "音樂館、社團教室、文薈館、藝術館" },
        { "DeviceID": "sb-meter-12", "area": "新民", "MeterName": "新民A棟" },
        { "DeviceID": "sb-meter-21", "area": "新民", "MeterName": "MVCBB B棟" },
        { "DeviceID": "sb-meter-22", "area": "新民", "MeterName": "LBS1 明德樓" },
        { "DeviceID": "sb-meter-31", "area": "新民", "MeterName": "動物總電表" },
        { "DeviceID": "sb-meter-32", "area": "新民", "MeterName": "游泳池電表" },
        { "DeviceID": "sb-meter-33", "area": "新民", "MeterName": "動物醫院電表" }
    ]
};

// 共用工具函數
const Utils = {
    getCurrentTime() {
        const time = new Date();
        return {
            year: time.getFullYear() - 1911,
            month: time.getMonth() + 1,
            lastYear: time.getFullYear() - 1912
        };
    },

    formatDate(date, format) {
        return moment(date).format(format);
    },

    debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
};

// DOM 元素管理
const DOMManager = {
    elements: {
        output: $("#output"),
        head: document.querySelector('#head')
    },

    updateTitle(title) {
        this.elements.head.innerText = title;
    },

    showLoading() {
        this.elements.output.html('<div class="loading">資料載入中...</div>');
    },

    showError(message) {
        this.elements.output.html(`<div class="error">${message}</div>`);
    },

    updateLastRefreshTime() {
        const now = new Date();
        this.elements.head.innerHTML += `<small>最後更新: ${now.toLocaleString()}</small>`;
    }
};

// 數據處理器
const DataProcessor = {
    validateData(data) {
        if (!data || !Array.isArray(data)) {
            throw new Error('無效的數據格式');
        }
        return data.filter(item => item && typeof item === 'object');
    },

    processElectricityData(rawData) {
        const result = JSON.parse(JSON.stringify(rawData));
        result.forEach(e => {
            e.收費年 = new Date(e.收費月份).getFullYear() - 1911 + '年';
            e.收費月 = new Date(e.收費月份).getMonth() + 1 + '月';
            const prop = CONFIG.TPWR_PROP.find(e1 => e1.電號 == e.電號);
            e.電號別名 = prop?.電號別名;
            e.校區 = prop?.校區;
        });
        return result;
    },

    processWaterData(rawData) {
        const result = JSON.parse(JSON.stringify(rawData));
        result.forEach(e => {
            e.水費年 = new Date(e.繳費年月).getFullYear() - 1911 + '年';
            e.水費月 = new Date(e.繳費年月).getMonth() + 1 + '月';
            const prop = CONFIG.WATER_PROP.find(e1 => e1.水號 == e.水號);
            e.校區 = prop?.校區;
            e.供水區 = prop?.供水區;
        });
        return result.filter(list => !CONFIG.EXCLUDED_IDS.WATER.includes(list.水號));
    },

    processMeterData(rawData) {
        let ary = [];
        for (let ii = 0; ii < rawData.length; ii++) {
            for (let i = 1; i < Object.keys(rawData[0]).length; i++) {
                const deviceId = Object.keys(rawData[ii])[i];
                const prop = CONFIG.METER_PROP.find(e => e.DeviceID == deviceId);
                ary.push({
                    帳單年: moment(rawData[ii].DataTimeStamp).add(1, 'month').format('YYYY') - 1911 + '年',
                    帳單月: moment(rawData[ii].DataTimeStamp).add(1, 'month').format('M月'),
                    DeviceID: deviceId,
                    建築物: prop?.MeterName,
                    校區: prop?.area,
                    MonthUsageDegree: rawData[ii][deviceId],
                });
            }
        }
        return ary.filter(e => e.建築物);
    }
};

// 圖表渲染器
const ChartRenderer = {
    defaultConfig: {
        sorters: {
            "校區": $.pivotUtilities.sortAs(CONFIG.CAMPUS_ORDER)
        },
        rendererOptions: {
            rowSubtotalDisplay: { disableAfter: 1 },
            colSubtotalDisplay: { disableAfter: 0 }
        }
    },

    getRenderers() {
        return $.extend(
            $.pivotUtilities.subtotal_renderers,
            $.pivotUtilities.plotly_renderers,
            $.pivotUtilities.d3_renderers,
            $.pivotUtilities.export_renderers
        );
    },

    renderPivotTable(data, options) {
        DOMManager.elements.output.pivot(data, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: this.getRenderers(),
            ...this.defaultConfig,
            ...options
        });
    },

    renderPivotUITable(data, options) {
        DOMManager.elements.output.pivotUI(data, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: this.getRenderers(),
            ...this.defaultConfig,
            ...options
        });
    }
};

// 數據載入器
const DataLoader = {
    loadCSV(filename, options = {}) {
        return new Promise((resolve, reject) => {
            Papa.parse(filename, {
                header: true,
                download: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                ...options,
                complete: (results) => resolve(results.data),
                error: (error) => reject(error)
            });
        });
    },

    async initializeData() {
        try {
            DOMManager.showLoading();

            const [usageData, waterData, powerData, meterData] = await Promise.all([
                this.loadCSV('usage.txt'),
                this.loadCSV('water.txt'),
                this.loadCSV('tpwr.txt'),
                this.loadCSV('output.csv')
            ]);

            window.results = usageData;
            window.wresults = waterData;
            window.tresults = powerData;
            window.mresults = meterData.filter(e => moment(e.DataTimeStamp) < moment().add(-1, 'M'));

            DOMManager.updateLastRefreshTime();
            return true;
        } catch (error) {
            console.error('數據載入錯誤:', error);
            DOMManager.showError('數據載入失敗，請稍後再試');
            return false;
        }
    }
};

// 主要功能實現
const UsageAnalytics = {
    // 能管系統用電統計
    async MeterThisYear() {
        const { year } = Utils.getCurrentTime();
        const result = DataProcessor.processMeterData(mresults)
            .filter(e => e.帳單年 == moment().format('YYYY') - 1911 + '年');

        const month1 = Math.max(...[...new Set(result
            .filter(e => e.帳單年 == year + '年')
            .map(e => e.帳單月.replace('月', '')))]);

        DOMManager.updateTitle(`國立嘉義大學能源管理系統各棟建築物用電情形${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`);

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "建築物", "帳單年"],
            cols: ["帳單月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["MonthUsageDegree"])
        });
    },


    async MeterAll() {
        const result = DataProcessor.processMeterData(mresults);
        DOMManager.updateTitle('國立嘉義大學能源管理系統各棟建築物所有年度用電情形');

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "建築物", "帳單年"],
            cols: ["帳單月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["MonthUsageDegree"])
        });
    },
    async MeterComparison() {
        const { year } = Utils.getCurrentTime();
        const result = DataProcessor.processMeterData(mresults)
            .filter(e => [0, -1].map(e => e + year + '年').includes(e.帳單年));

        const month1 = Math.max(...[...new Set(result
            .filter(e => e.帳單年 == year + '年')
            .map(e => e.帳單月.replace('月', '')))]);

        DOMManager.updateTitle(`國立嘉義大學能源管理系統各棟建築物用電情形與去年相比${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`);

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "建築物", "帳單年"],
            cols: ["帳單月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["MonthUsageDegree"])
        });
    },
    async MeterLast5Years() {
        const { year } = Utils.getCurrentTime();
        const result = DataProcessor.processMeterData(mresults)
            .filter(e => [0, -1, -2, -3, -4].map(e => e + year + '年').includes(e.帳單年));

        const month1 = Math.max(...[...new Set(result
            .filter(e => e.帳單年 == year + '年')
            .map(e => e.帳單月.replace('月', '')))]);

        DOMManager.updateTitle(`國立嘉義大學能源管理系統各棟建築物用電情形與去年相比${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`);

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "建築物", "帳單年"],
            cols: ["帳單月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["MonthUsageDegree"])
        });
    },

    async MeterRaw() {
        const result = DataProcessor.processMeterData(mresults);
        DOMManager.updateTitle('國立嘉義大學能源管理系統各棟建築物所有年度用電情形');

        ChartRenderer.renderPivotUITable(result, {
            rows: ["校區", "建築物", "帳單年"],
            cols: ["帳單月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["MonthUsageDegree"])
        });
    },

    // 水費統計相關方法
    async renderWaterUsage() {
        const { year } = Utils.getCurrentTime();
        const result = DataProcessor.processWaterData(wresults)
            .filter(e => e.水費年 == year + '年');

        const month1 = Math.max(...[...new Set(result.map(e => parseInt(e.水費月)))]);

        DOMManager.updateTitle(`國立嘉義大學本年度用水情形${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`);

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "供水區"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"])
        });
    },

    async renderWaterUsageComparison() {
        const { year } = Utils.getCurrentTime();
        const result = DataProcessor.processWaterData(wresults)
            .filter(e => [0, -1].map(e => e + year + '年').includes(e.水費年));

        const month1 = Math.max(...[...new Set(result.filter(e => e.水費年 == year + '年').map(e => parseInt(e.水費月)))]);

        DOMManager.updateTitle(`國立嘉義大學本年度用水情形與去年相比${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`);

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "供水區", "水費年"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"])
        });
    },

    async renderWaterUsageLast5Years() {
        const { year } = Utils.getCurrentTime();
        const result = DataProcessor.processWaterData(wresults)
            .filter(e => [0, -1, -2, -3, -4].map(e => e + year + '年').includes(e.水費年));
        const month1 = Math.max(...[...new Set(result.filter(e => e.水費年 == year + '年').map(e => parseInt(e.水費月)))]);

        DOMManager.updateTitle(`國立嘉義大學近5年度用水情形${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`);

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "供水區", "水費年"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"])
        });
    },

    async renderWaterUsageAllYears() {
        const result = DataProcessor.processWaterData(wresults);
        DOMManager.updateTitle('國立嘉義大學所有年度用水情形');

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "供水區", "水費年"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"])
        });
    },

    async renderWaterUsageCustom() {
        const result = DataProcessor.processWaterData(wresults);
        DOMManager.updateTitle('國立嘉義大學用水情形自行定義報表');

        ChartRenderer.renderPivotUITable(result, {
            rows: ["校區", "供水區", "水費年"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"])
        });
    },

    // 台電用電統計相關方法
    async renderPowerUsage() {
        const { year } = Utils.getCurrentTime();
        const result = DataProcessor.processElectricityData(tresults)
            .filter(list => CONFIG.POWER_IDS.includes(list.電號))
            .filter(e => e.收費年 == year + '年');

        const month1 = Math.max(...[...new Set(result.map(e => parseInt(e.收費月)))]);

        DOMManager.updateTitle(`國立嘉義大學本年度用電情形${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`);

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "電號別名"],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電度數"])
        });
    },

    async renderPowerUsageComparison() {
        const { year } = Utils.getCurrentTime();
        const result = DataProcessor.processElectricityData(tresults)
            .filter(list => CONFIG.POWER_IDS.includes(list.電號))
            .filter(e => [0, -1].map(e => e + year + '年').includes(e.收費年));

        const month1 = Math.max(...[...new Set(result.filter(e => e.收費年 == year + '年').map(e => parseInt(e.收費月)))]);

        DOMManager.updateTitle(`國立嘉義大學本年度用電情形與去年相比${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`);

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "電號別名", "收費年"],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電度數"])
        });
    },

    async renderPowerUsageLast5Years() {
        const { year } = Utils.getCurrentTime();
        const result = DataProcessor.processElectricityData(tresults)
            .filter(list => CONFIG.POWER_IDS.includes(list.電號))
            .filter(e => [0, -1, -2, -3, -4].map(e => e + year + '年').includes(e.收費年));

        const month1 = Math.max(...[...new Set(result.filter(e => e.收費年 == year + '年').map(e => parseInt(e.收費月)))]);

        DOMManager.updateTitle(`國立嘉義大學近5年度用電情形${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`);

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "電號別名", "收費年"],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電度數"])
        });
    },

    async renderPowerUsageAllYears() {
        const result = DataProcessor.processElectricityData(tresults)
            .filter(list => CONFIG.POWER_IDS.includes(list.電號));

        DOMManager.updateTitle('國立嘉義大學所有年度用電情形');

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "電號別名", "收費年"],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電度數"])
        });
    },

    async renderPowerUsageCustom() {
        const result = DataProcessor.processElectricityData(tresults)
            .filter(list => CONFIG.POWER_IDS.includes(list.電號));

        DOMManager.updateTitle('國立嘉義大學用電情形自行定義報表');

        ChartRenderer.renderPivotUITable(result, {
            rows: ["校區", "電號別名", "收費年"],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Sum"](["用電度數"])
        });
    },

    // 自設電錶統計相關方法
    async renderLegacyMeterAllYears() {
        const result = JSON.parse(JSON.stringify(results));
        result.forEach(function (element) {
            element["帳單月"] = element["帳單月"] + "月";
            element["公開報表序號"] = element["公開報表序號"] + " " + element["用電建築物"];
            element["帳單年"] = element["帳單年"] + "年";
        });

        DOMManager.updateTitle('國立嘉義大學自設電錶所有年度各棟建築物用電情形');

        ChartRenderer.renderPivotTable(result, {
            rows: ["校區", "公開報表序號", "帳單年"],
            cols: ["帳單月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["總用電度"])
        });
    },

    async renderLegacyMeterCustom() {
        const result = JSON.parse(JSON.stringify(results));
        DOMManager.updateTitle('國立嘉義大學自設電錶各棟建築物用電情形自行定義報表');

        ChartRenderer.renderPivotUITable(result, {
            rows: ["校區", "用電建築物", "公開報表序號", "帳單年"],
            cols: ["帳單月"],
            aggregator: $.pivotUtilities.aggregators["Sum"](["總用電度"])
        });
    }
};

// 註冊視窗大小變化監聽
window.addEventListener('resize', Utils.debounce(() => {
    // 重新渲染當前圖表
    if (window.currentChart) {
        ChartRenderer.renderPivotTable(window.currentData, window.currentOptions);
    }
}, 250));

// 把需要的函數和物件掛到 window 上，以供其他腳本使用
window.UsageAnalytics = UsageAnalytics;
window.DataProcessor = DataProcessor;
window.ChartRenderer = ChartRenderer;
window.DOMManager = DOMManager;
window.Utils = Utils;

// 啟動應用
DataLoader.initializeData().then(() => {
    UsageAnalytics.MeterThisYear();
});