```javascript
/**
 * Chart view update data, used for update chart, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
 */
export interface ChartViewUpdateData {
    /**
     * the target path that needs to be updated, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
     */
    targetPath: Array<any>;
    /**
     * The update action
     */
    action: 'array_append_start' | 'array_append_end' | 'array_merge_start' | 'array_merge_end' | 'object_merge' | 'delete' | 'replace' | 'increase' | 'decrease';
    /**
     * The target data that needs to be updated, some update actions do not need to pass, such as delete
     */
    data?: any;
}
/**
 * Chart helper, can be used only for chart scripts, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
 */
export declare class ChartHelper {
    /**
     * Set init option of chart, can be used only for chart option scripts, for more please read: https://doc.ttqm.app/#/en/chart/option
     * @param option chart option
     */
    static setOption(option: any): void;
    /**
     * Get chart view update data, can be used only for chart scripts, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
     * @param targetPath the target path that needs to be updated
     * @param action The update action
     * @param [data] The target data that needs to be updated, some update actions do not need to pass, such as delete
     * @returns chart view update data
     */
    static getChartViewUpdateData(targetPath: Array<any>, action: 'array_append_start' | 'array_append_end' | 'array_merge_start' | 'array_merge_end' | 'object_merge' | 'delete' | 'replace' | 'increase' | 'decrease', data?: any): ChartViewUpdateData;
    /**
     * Update chart view data, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
     * @param chartViewData the chart view update data, the chart view update data, you can update option with single ChartViewUpdateData, or update with an array like [ChartViewUpdateData,ChartViewUpdateData], and the Chart will be updated in the order of the array one by one
     */
    static updateChartViewData(chartViewData: ChartViewUpdateData | Array<ChartViewUpdateData>): void;
}
```
