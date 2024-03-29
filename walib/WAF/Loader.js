/*
* This file is part of Wakanda software, licensed by 4D under
*  (i) the GNU General Public License version 3 (GNU GPL v3), or
*  (ii) the Affero General Public License version 3 (AGPL v3) or
*  (iii) a commercial license.
* This file remains the exclusive property of 4D and/or its licensors
* and is protected by national and international legislations.
* In any event, Licensee's compliance with the terms and conditions
* of the applicable license constitutes a prerequisite to any use of this file.
* Except as otherwise expressly stated in the applicable license,
* such license does not include any other license or rights on this file,
* 4D's and/or its licensors' trademarks and/or other proprietary rights.
* Consequently, no title, copyright or other proprietary rights
* other than those specified in the applicable license is granted.
*/
/**
 * 
 * @module WAF
 */

/**
 * WAF
 *
 * @class WAF
 */
if (typeof(WAF) === 'undefined') {
    WAF = {

        /**
         * The version of the framework
         *
         * @static
         * @property VERSION
         * @type String
         **/
        'VERSION': '3',
        /**
         * The version of the platform (OS, browser, device)
         *
         * @static
         * @property platform
         * @type Object
         **/
        'PLATFORM': {},
        /**
         * The build number of the framework
         *
         * @static
         * @property BUILD
         * @type String
         **/
        'BUILD'  : '122625',
		
        wildchar : '*',

        /**
         * The configuration of the framework
         *
         * @static
         * @property config
         * @type Object
         **/
        config: {
			phoneGap   : true,
            openAjax   : null,
            debugMode  : false,
            uniTest    : false,
            load       : '',
            reporting  : {
                path  : '',
                walib : '' 
            },
            rpc: {
                namespace: '',
                module   : '',
                methods  : ''
            },
            baseURL    : '',
            tld        : null,
            taglib     : [],
            widget     : {}
        },

        /**
         * modulesInfo
         *
         * @static
         * @property modulesInfo
         * @type Object
         **/
        modulesInfo  : {
            // 'allmodules' : {
                // css : [
                // /* WAF */
                // '+/lib/jquery-ui/themes/base/jquery.ui.core.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.resizable.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.selectable.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.accordion.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.autocomplete.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.button.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.dialog.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.slider.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.tabs.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.datepicker.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.progressbar.css',
                // '+/lib/jquery-ui/themes/base/jquery.ui.theme.css',				   
                // '+/lib/selectbox/jquery-selectbox.css',
                // /* WAF WIDGET */
                // '+/widget/css/widget.css',
                // '+/widget/skin/default/css/widget-skin-default.css',
                // '+/widget/skin/metal/css/widget-skin-metal.css',
                // '+/widget/skin/light/css/widget-skin-light.css',
                // '+/widget/skin/cupertino/css/widget-skin-cupertino.css',
                // /* Datepicker */
                // '+/widget/datepicker/skin/default/css/widget-datepicker-skin-default.css',
                // '+/widget/datepicker/skin/metal/css/widget-datepicker-skin-metal.css',
                // '+/widget/datepicker/skin/light/css/widget-datepicker-skin-light.css',
                // /* WAF GRID */
                // '+/widget/dataGrid/css/widget-dataGrid.css',
                // '+/widget/dataGrid/skin/default/css/widget-dataGrid-skin-default.css',
                // '+/widget/dataGrid/skin/metal/css/widget-dataGrid-skin-metal.css',
                // '+/widget/dataGrid/skin/light/css/widget-dataGrid-skin-light.css',
                // /* NOTIFY */
                // '+/lib/notify/ui.notify.css',
                // /* WAF AUTOFORM */
                // '+/widget/autoForm/css/widget-autoForm.css',
                // '+/widget/autoForm/skin/default/css/widget-autoForm-skin-default.css',
                // '+/widget/autoForm/skin/metal/css/widget-autoForm-skin-metal.css',
                // '+/widget/autoForm/skin/light/css/widget-autoForm-skin-light.css',
                // '+/widget/autoForm/skin/roundy/css/widget-autoForm-skin-roundy.css',
                // /* WAF CONTAINER */
                // '+/widget/container/css/widget-container.css',
                // '+/widget/container/skin/default/css/widget-container-skin-default.css',
                // '+/widget/container/skin/metal/css/widget-container-skin-metal.css',
                // '+/widget/container/skin/light/css/widget-container-skin-light.css',
                // /* WAF MATRIX */
                // '+/widget/matrix/css/widget-matrix.css',
                // '+/widget/matrix/skin/default/css/widget-matrix-skin-default.css',
                // '+/widget/matrix/skin/metal/css/widget-matrix-skin-metal.css',
                // '+/widget/matrix/skin/light/css/widget-matrix-skin-light.css',
                // /* WAF IMAGE */
                // '+/widget/image/css/widget-image.css',
                // /* WAF ICON */
                // '+/widget/icon/css/widget-icon.css',
                // /* WAF TEXTFIELD */
                // '+/widget/textField/css/widget-textField.css',
                // '+/widget/textField/skin/default/css/widget-textField-skin-default.css',
                // '+/widget/textField/skin/metal/css/widget-textField-skin-metal.css',
                // '+/widget/textField/skin/light/css/widget-textField-skin-light.css',
                // /* WAF BUTTON */
                // '+/widget/button/css/widget-button.css',
                // '+/widget/button/skin/default/css/widget-button-skin-default.css',
                // '+/widget/button/skin/metal/css/widget-button-skin-metal.css',
                // '+/widget/button/skin/light/css/widget-button-skin-light.css',
                // '+/widget/button/skin/image/css/widget-button-skin-image.css',
                // /* WAF BUTTON IMAGE */
                // '+/widget/buttonImage/css/widget-buttonImage.css',
                // /* WAF RICHTEXT */
                // '+/widget/richText/css/widget-richText.css',
                // /* WAF SLIDER */
                // '+/widget/slider/css/widget-slider.css',
                // '+/widget/slider/skin/default/css/widget-slider-skin-default.css',
                // '+/widget/slider/skin/metal/css/widget-slider-skin-metal.css',
                // '+/widget/slider/skin/light/css/widget-slider-skin-light.css',
                // /* WAF PROGRESS BAR */
                // '+/widget/progressBar/css/widget-progressBar.css',
                // '+/widget/progressBar/skin/default/css/widget-progressBar-skin-default.css',
                // '+/widget/progressBar/skin/metal/css/widget-progressBar-skin-metal.css',
                // '+/widget/progressBar/skin/light/css/widget-progressBar-skin-light.css',
                // '+/widget/progressBar/skin/roundy/css/widget-progressBar-skin-roundy.css',
                // /* WAF YAHOO WEATHER */
                // '+/widget/yahooWeather/css/widget-yahooWeather.css',
                // /* WAF Google Maps */
                // '+/widget/googleMaps/css/widget-googleMaps.css',
                // /* WAF Combobox */
                // '+/widget/combobox/css/widget-combobox.css',
                // '+/widget/combobox/skin/default/css/widget-combobox-skin-default.css',
                // '+/widget/combobox/skin/metal/css/widget-combobox-skin-metal.css',
                // '+/widget/combobox/skin/light/css/widget-combobox-skin-light.css',
                // /* WAF select */
                // '+/widget/select/css/widget-select.css',
                // '+/widget/select/skin/default/css/widget-select-skin-default.css',
                // '+/widget/select/skin/metal/css/widget-select-skin-metal.css',
                // '+/widget/select/skin/light/css/widget-select-skin-light.css',
                // '+/widget/select/skin/cupertino/css/widget-select-skin-cupertino.css',
                // /* WAF Radio Group */
                // '+/widget/radiogroup/css/widget-radiogroup.css',
                // '+/widget/radiogroup/skin/default/css/widget-radiogroup-skin-default.css',
                // '+/widget/radiogroup/skin/metal/css/widget-radiogroup-skin-metal.css',
                // '+/widget/radiogroup/skin/light/css/widget-radiogroup-skin-light.css',
                // '+/widget/radiogroup/skin/cupertino/css/widget-radiogroup-skin-cupertino.css',
                // /* WAF Label */
                // '+/widget/label/css/widget-label.css',             
                // /* WAF checkbox */
                // '+/widget/checkbox/css/widget-checkbox.css',
                // '+/widget/checkbox/skin/default/css/widget-checkbox-skin-default.css',
                // '+/widget/checkbox/skin/metal/css/widget-checkbox-skin-metal.css',
                // '+/widget/checkbox/skin/light/css/widget-checkbox-skin-light.css',
                // /* WAF switchBox */
                // '+/widget/switchBox/css/widget-switchbox.css',
                // '+/widget/switchBox/skin/cupertino/css/widget-switchBox-skin-cupertino.css',
                // /* WAF menubar */
                // '+/widget/menubar/css/widget-menubar.css',
                // '+/widget/menubar/skin/default/css/widget-menubar-skin-default.css',
                // '+/widget/menubar/skin/metal/css/widget-menubar-skin-metal.css',
                // '+/widget/menubar/skin/light/css/widget-menubar-skin-light.css',
                // '+/widget/menubar/skin/cupertino/css/widget-menubar-skin-cupertino.css',
                // /* WAF menuitem */
                // '+/widget/menuitem/css/widget-menuitem.css',
                // '+/widget/menuitem/skin/default/css/widget-menuitem-skin-default.css',
                // '+/widget/menuitem/skin/metal/css/widget-menuitem-skin-metal.css',
                // '+/widget/menuitem/skin/light/css/widget-menuitem-skin-light.css',
                // '+/widget/menuitem/skin/cupertino/css/widget-menuitem-skin-cupertino.css',
                // /* WAF login */
                // '+/widget/login/css/widget-login.css',
                // '+/widget/login/skin/default/css/widget-login-skin-default.css',
                // '+/widget/login/skin/metal/css/widget-login-skin-metal.css',
                // '+/widget/login/skin/light/css/widget-login-skin-light.css',        
                // /* WAF Component */
                // '+/widget/component/css/widget-component.css',
                // /* WAF Chart */
                // '+/widget/chart/css/widget-chart.css',
                // /* WAF FileUpload */
                // '+/widget/fileUpload/css/widget-fileUpload.css',
                // /* WAF Frame */
                // '+/widget/frame/css/widget-frame.css',
                // /* WAF Canvas */
                // '+/widget/canvas/css/widget-canvas.css',
                // /* WAF Video */
                // '+/widget/video/css/widget-video.css',
                // /* Error Div */
                // '+/widget/errorDiv/css/widget-errorDiv.css',
                // /* WAF tabview */
                // '+/widget/tabview/css/widget-tabview.css',
                // '+/widget/tabview/skin/default/css/widget-tabview-skin-default.css',
                // '+/widget/tabview/skin/metal/css/widget-tabview-skin-metal.css',
                // '+/widget/tabview/skin/light/css/widget-tabview-skin-light.css',
                // '+/widget/tabview/skin/cupertino/css/widget-tabview-skin-cupertino.css',
                // /* WAF dialog */
                // '+/widget/dialog/css/widget-dialog.css',
                // '+/widget/dialog/skin/default/css/widget-dialog-skin-default.css',
                // '+/widget/dialog/skin/metal/css/widget-dialog-skin-metal.css',
                // '+/widget/dialog/skin/light/css/widget-dialog-skin-light.css',
                // /* WAF WYSIWYG Editor */
                // '+/widget/tinymce/css/widget-tinymce.css',
                // /* WAF Calendar Picker */
                // '+/widget/calendar/css/widget-calendar.css',
                // '+/widget/calendar/css/datepicker.css',
                // /* WAF beautytips */
                // '+/lib/beautytips/beautytips.css'
                
                // /* ADD LINKS TO THE CSS FILES FOR YOUR CUSTOM WIDGETS HERE */
               
                // ],
                // require: [
                // /* WAF */
                // '+/Core/Native/Rest.js',
                // '+/Core/Utils/Timers.js',
                // '+/Core/Utils/DebugTools.js',
                // '+/Core/Utils/Environment.js',
                // '+/Core/Utils/Strings.js',
                // '+/Core/Utils/Dates.js',
                // '+/DataProvider/Data-Provider.js',
                // '+/DataSource/Data-Source.js',
                // '+/DataSource/Selection.js',
                // '+/DataSource/ErrorHandling.js',
                // '+/rpc/Rpc.js',
                // '+/Tags/taglib.js',
                // '+/Tags/tags.js',

                // /* jQuery */
                // '+/lib/jquery/jquery.min.js',
                
                // /* jQuery svg*/
                // '+/lib/jquery.svg/jquery.svg.min.js',
                
                // /* External Librairy */
                // '+/lib/raphael/raphael-min.js',
                // '+/lib/graphael/g.raphael-min.js',
                // '+/lib/graphael/g.line-min.js',
                // '+/lib/graphael/g.bar-min.js',
                // '+/lib/graphael/g.pie-min.js',
                // '+/lib/jquery-ui/jquery-ui.min.js',
                // '+/lib/jquery-ui/jquery-ui-i18n.js',
                // '+/lib/selectbox/jquery-selectbox.js',
                // '+/lib/combobox/jquery-combobox.js',
                // '+/lib/beautytips/beautytips.js',
                
                // /* Tag Library Descritors */
                // '+/Tags/list/tags-list.js',
                // '+/Tags/list/descriptor/tags-list-descriptor.js',
                // '+/Tags/list/propertydescriptor/tags-list-propertydescriptor.js',
                // '+/Tags/list/column/tags-list-column.js',
                // '+/Tags/descriptor/tags-descriptor.js',
                // '+/Tags/descriptor/attribute/tags-descriptor-attribute.js',
                // '+/Tags/descriptor/event/tags-descriptor-event.js',
                // '+/Tags/descriptor/structure/tags-descriptor-structure.js',
                // '+/Tags/descriptor/style/tags-descriptor-style.js',
                // '+/Tags/descriptor/property/tags-descriptor-property-style.js',
                // '+/Tags/descriptor/column/tags-descriptor-column.js',
                // '+/Tags/descriptor/column/attribute/tags-descriptor-attributecolumn.js',

                // /* Notify */
                // '+/lib/notify/jquery.notify.js',
                
                // /* widgets */
                // '+/widget/widget.js',                
                // '+/Component/Component.js',                
                // '+/widget/icon/widget-icon.js',
                // '+/widget/icon/widget-icon-conf.js',
                // '+/widget/button/widget-button.js',
                // '+/widget/button/widget-button-conf.js',
                // '+/widget/buttonImage/widget-buttonImage.js',
                // '+/widget/buttonImage/widget-buttonImage-conf.js',
                // '+/widget/checkbox/widget-checkbox.js',
                // '+/widget/checkbox/widget-checkbox-conf.js',
                // '+/widget/switchBox/widget-switchbox.js',
                // '+/widget/switchBox/widget-switchbox-conf.js',
                // '+/widget/container/widget-container.js',
                // '+/widget/container/widget-container-conf.js',
                // '+/widget/richText/widget-richText.js',
                // '+/widget/richText/widget-richText-conf.js',
                // '+/widget/errorDiv/widget-errorDiv.js',
                // '+/widget/errorDiv/widget-errorDiv-conf.js',
                // '+/widget/dataGrid/widget-dataGrid.js',
                // '+/widget/dataGrid/widget-dataGrid-conf.js',
                // '+/widget/autoForm/widget-autoForm.js',
                // '+/widget/autoForm/widget-autoForm-conf.js',
                // '+/widget/queryForm/widget-queryForm.js',
                // '+/widget/queryForm/widget-queryForm-conf.js',
                // '+/widget/image/widget-image.js',
                // '+/widget/image/widget-image-conf.js',
                // '+/widget/label/widget-label.js',
                // '+/widget/label/widget-label-conf.js',
                // '+/widget/slider/widget-slider.js',
                // '+/widget/slider/widget-slider-conf.js',
                // '+/widget/textField/widget-textField.js',
                // '+/widget/textField/widget-textField-conf.js',				
                // '+/widget/googleMap/widget-googleMap.js',
                // '+/widget/googleMap/widget-googleMap-conf.js',                								
                // '+/widget/yahooWeather/widget-yahooWeather.js',
                // '+/widget/yahooWeather/widget-yahooWeather-conf.js',				
                // '+/widget/progressBar/widget-progressBar.js',
                // '+/widget/progressBar/widget-progressBar-conf.js',                
                // '+/widget/matrix/widget-matrix.js',
                // '+/widget/matrix/widget-matrix-conf.js',
                // '+/widget/toolbar/widget-toolbar.js',
                // '+/widget/combobox/widget-combobox.js',
                // '+/widget/combobox/widget-combobox-conf.js',
                // '+/widget/select/widget-select.js',
                // '+/widget/select/widget-select-conf.js',
                // '+/widget/radiogroup/widget-radiogroup.js',
                // '+/widget/radiogroup/widget-radiogroup-conf.js',
                // '+/widget/menubar/widget-menubar.js',
                // '+/widget/menubar/widget-menubar-conf.js',
                // '+/widget/menuitem/widget-menuitem.js',
                // '+/widget/menuitem/widget-menuitem-conf.js',
                // '+/widget/login/widget-login.js',
                // '+/widget/login/widget-login-conf.js',
                // '+/widget/component/widget-component-conf.js',
                // '+/widget/component/widget-component.js',
                // '+/widget/chart/widget-chart-conf.js',
                // '+/widget/chart/widget-chart.js',
                // '+/widget/fileUpload/widget-fileUpload-conf.js',
                // '+/widget/fileUpload/widget-fileUpload.js',
                // '+/widget/tabview/widget-tabview.js',
                // '+/widget/tabview/widget-tabview-conf.js',
                // '+/widget/dialog/widget-dialog.js',
                // '+/widget/dialog/widget-dialog-conf.js',
                // '+/widget/tinymce/widget-tinymce.js',
                // '+/widget/tinymce/widget-tinymce-conf.js',
                // '+/widget/frame/widget-frame.js',
                // '+/widget/frame/widget-frame-conf.js',
                // '+/widget/video/widget-video.js',
                // '+/widget/video/widget-video-conf.js',
                // '+/widget/canvas/widget-canvas.js',
                // '+/widget/canvas/widget-canvas-conf.js',
                // '+/widget/calendar/widget-calendar.js',
                // '+/widget/calendar/widget-calendar-conf.js',
                // '+/widget/googleMaps/widget-googleMaps.js',
                // '+/widget/googleMaps/widget-googleMaps-conf.js',
                // '+/widget/calendar/js/datepicker.js'
                
                // /* ADD LINKS TO THE JS FILES FOR YOUR CUSTOM WIDGETS HERE */

                // ]
            // },
           
            'mobile' : {
                css : [
                /* WAF */
                '+/lib/jquery-ui/themes/base/jquery.ui.core.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.resizable.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.selectable.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.accordion.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.autocomplete.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.button.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.dialog.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.slider.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.tabs.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.datepicker.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.progressbar.css',
                '+/lib/jquery-ui/themes/base/jquery.ui.theme.css',				   
                '+/lib/selectbox/jquery-selectbox.css',
                /* WAF WIDGET */
                '+/widget/css/widget-mobile.css',
                '+/widget/skin/default/css/widget-skin-default.css',
                '+/widget/skin/metal/css/widget-skin-metal.css',
                '+/widget/skin/light/css/widget-skin-light.css',
                '+/widget/skin/cupertino/css/widget-skin-cupertino.css',
                /* WAF login */
                '+/widget/login/css/widget-login.css',
                '+/widget/login/skin/default/css/widget-login-skin-default.css',
                '+/widget/login/skin/metal/css/widget-login-skin-metal.css',
                '+/widget/login/skin/light/css/widget-login-skin-light.css',
                /* Datepicker */
                '+/widget/datepicker/skin/default/css/widget-datepicker-skin-default.css',
                '+/widget/datepicker/skin/metal/css/widget-datepicker-skin-metal.css',
                '+/widget/datepicker/skin/light/css/widget-datepicker-skin-light.css',
                /* WAF GRID */
                '+/widget/dataGrid/css/widget-dataGrid-mobile.css',
                '+/widget/dataGrid/skin/default/css/widget-dataGrid-skin-default.css',
                '+/widget/dataGrid/skin/metal/css/widget-dataGrid-skin-metal.css',
                '+/widget/dataGrid/skin/light/css/widget-dataGrid-skin-light.css',
                '+/widget/dataGrid/skin/cupertino/css/widget-dataGrid-skin-cupertino.css',
                /* WAF AUTOFORM */
                '+/widget/autoForm/css/widget-autoForm.css',
                '+/widget/autoForm/skin/default/css/widget-autoForm-skin-default.css',
                '+/widget/autoForm/skin/metal/css/widget-autoForm-skin-metal.css',
                '+/widget/autoForm/skin/light/css/widget-autoForm-skin-light.css',
                '+/widget/autoForm/skin/roundy/css/widget-autoForm-skin-roundy.css',
                /* WAF CONTAINER */
                '+/widget/container/css/widget-container.css',
                '+/widget/container/skin/default/css/widget-container-skin-default.css',
                '+/widget/container/skin/metal/css/widget-container-skin-metal.css',
                '+/widget/container/skin/light/css/widget-container-skin-light.css',
                '+/widget/container/skin/cupertino/css/widget-container-skin-cupertino.css',
                /* WAF MATRIX */
                '+/widget/matrix/css/widget-matrix.css',
                '+/widget/matrix/skin/metal/css/widget-matrix-skin-metal-mobile.css',
                '+/widget/matrix/skin/cupertino/css/widget-matrix-skin-cupertino.css',
                /* WAF IMAGE */
                '+/widget/image/css/widget-image.css',
                /* WAF ICON */
                '+/widget/icon/css/widget-icon.css',
                /* WAF TEXTFIELD */
                '+/widget/textField/css/widget-textField.css',
                '+/widget/textField/skin/default/css/widget-textField-skin-default.css',
                '+/widget/textField/skin/metal/css/widget-textField-skin-metal.css',
                '+/widget/textField/skin/cupertino/css/widget-textField-skin-cupertino.css',
                /* WAF BUTTON */
                '+/widget/button/css/widget-button.css',
                '+/widget/button/skin/default/css/widget-button-skin-default.css',
                '+/widget/button/skin/metal/css/widget-button-skin-metal.css',
                '+/widget/button/skin/light/css/widget-button-skin-light.css',
                '+/widget/button/skin/image/css/widget-button-skin-image.css',
                '+/widget/button/skin/cupertino/css/widget-button-skin-cupertino.css',
                /* WAF BUTTON IMAGE */
                '+/widget/buttonImage/css/widget-buttonImage.css',
                '+/widget/buttonImage/skin/cupertino/css/widget-buttonImage-skin-cupertino.css',
                /* WAF RICHTEXT */
                '+/widget/richText/css/widget-richText.css',
                /* WAF SLIDER */
                '+/widget/slider/css/widget-slider.css',
                '+/widget/slider/skin/default/css/widget-slider-skin-default.css',
                '+/widget/slider/skin/metal/css/widget-slider-skin-metal.css',
                '+/widget/slider/skin/light/css/widget-slider-skin-light.css',
                '+/widget/slider/skin/cupertino/css/widget-slider-skin-cupertino.css',
                /* WAF PROGRESS BAR */
                '+/widget/progressBar/css/widget-progressBar.css',
                '+/widget/progressBar/skin/default/css/widget-progressBar-skin-default.css',
                '+/widget/progressBar/skin/metal/css/widget-progressBar-skin-metal.css',
                '+/widget/progressBar/skin/light/css/widget-progressBar-skin-light.css',
                '+/widget/progressBar/skin/roundy/css/widget-progressBar-skin-roundy.css',
                '+/widget/progressBar/skin/cupertino/css/widget-progressBar-skin-cupertino.css',
                /* WAF YAHOO WEATHER */
                '+/widget/yahooWeather/css/widget-yahooWeather.css',
                /* WAF Combobox */
                '+/widget/combobox/css/widget-combobox.css',
                '+/widget/combobox/skin/default/css/widget-combobox-skin-default.css',
                '+/widget/combobox/skin/metal/css/widget-combobox-skin-metal.css',
                '+/widget/combobox/skin/light/css/widget-combobox-skin-light.css',
                /* WAF select */
                '+/widget/select/css/widget-select.css',
                '+/widget/select/skin/default/css/widget-select-skin-default.css',
                '+/widget/select/skin/metal/css/widget-select-skin-metal.css',
                '+/widget/select/skin/light/css/widget-select-skin-light.css',
                '+/widget/select/skin/cupertino/css/widget-select-skin-cupertino.css',
                /* WAF Radio Group */
                '+/widget/radiogroup/css/widget-radiogroup.css',
                '+/widget/radiogroup/skin/default/css/widget-radiogroup-skin-default.css',
                '+/widget/radiogroup/skin/metal/css/widget-radiogroup-skin-metal.css',
                '+/widget/radiogroup/skin/light/css/widget-radiogroup-skin-light.css',
                '+/widget/radiogroup/skin/cupertino/css/widget-radiogroup-skin-cupertino.css',
                /* WAF Label */
                '+/widget/label/css/widget-label.css',
                /* WAF checkbox */
                '+/widget/checkbox/css/widget-checkbox.css',
                '+/widget/checkbox/skin/default/css/widget-checkbox-skin-default.css',
                '+/widget/checkbox/skin/metal/css/widget-checkbox-skin-metal.css',
                '+/widget/checkbox/skin/light/css/widget-checkbox-skin-light.css',
                /* WAF switchBox */
                '+/widget/switchBox/css/widget-switchbox.css',
                '+/widget/switchBox/skin/cupertino/css/widget-switchBox-skin-cupertino.css',
                /* WAF splitView */
                '+/widget/splitView/css/widget-splitView.css',
                '+/widget/splitView/skin/cupertino/css/widget-splitView-skin-cupertino.css',
                /* WAF menubar */
                '+/widget/menubar/css/widget-menubar.css',
                '+/widget/menubar/skin/default/css/widget-menubar-skin-default.css',
                '+/widget/menubar/skin/metal/css/widget-menubar-skin-metal.css',
                '+/widget/menubar/skin/light/css/widget-menubar-skin-light.css',
                '+/widget/menubar/skin/cupertino/css/widget-menubar-skin-cupertino.css',
                /* WAF menuitem */
                '+/widget/menuitem/css/widget-menuitem.css',
                '+/widget/menuitem/skin/default/css/widget-menuitem-skin-default.css',
                '+/widget/menuitem/skin/metal/css/widget-menuitem-skin-metal.css',
                '+/widget/menuitem/skin/light/css/widget-menuitem-skin-light.css',
                '+/widget/menuitem/skin/cupertino/css/widget-menuitem-skin-cupertino.css',
                /* WAF login */
                '+/widget/login/css/widget-login.css',
                '+/widget/login/skin/default/css/widget-login-skin-default.css',
                '+/widget/login/skin/metal/css/widget-login-skin-metal.css',
                '+/widget/login/skin/light/css/widget-login-skin-light.css',        
                /* WAF Component */
                '+/widget/component/css/widget-component.css',
                /* WAF Chart */
                '+/widget/chart/css/widget-chart.css',
                /* WAF FileUpload */
                '+/widget/fileUpload/css/widget-fileUpload.css',
                /* Error Div */
                '+/widget/errorDiv/css/widget-errorDiv.css',
                /* WAF tabview */
                '+/widget/tabview/css/widget-tabview.css',
                '+/widget/tabview/skin/default/css/widget-tabview-skin-default.css',
                '+/widget/tabview/skin/metal/css/widget-tabview-skin-metal.css',
                '+/widget/tabview/skin/light/css/widget-tabview-skin-light.css',
                '+/widget/tabview/skin/cupertino/css/widget-tabview-skin-cupertino.css',
                /* WAF navigationView */
                '+/widget/navigationView/css/widget-navigationView.css',
                '+/widget/navigationView/skin/cupertino/css/widget-navigationView-skin-cupertino.css',
                /* WAF tabview */
                '+/widget/tabview/css/widget-tabview.css',
                '+/widget/tabview/skin/default/css/widget-tabview-skin-default.css',
                '+/widget/tabview/skin/metal/css/widget-tabview-skin-metal.css',
                '+/widget/tabview/skin/light/css/widget-tabview-skin-light.css',
                /* WAF dialog */
                '+/widget/dialog/css/widget-dialog.css',
                '+/widget/dialog/skin/default/css/widget-dialog-skin-default.css',
                '+/widget/dialog/skin/metal/css/widget-dialog-skin-metal.css',
                '+/widget/dialog/skin/light/css/widget-dialog-skin-light.css',
                /* WAF WYSIWYG Editor */
                '+/widget/tinymce/css/widget-tinymce.css',
                /* WAF Calendar Picker */
                '+/widget/calendar/css/widget-calendar.css',
                '+/widget/calendar/css/datepicker.css',
                /* WAF Frame */
                '+/widget/frame/css/widget-frame.css',
                /* WAF Video */
                '+/widget/video/css/widget-video.css',
                /* WAF Canvas */
                '+/widget/canvas/css/widget-canvas.css',
                /* WAF beautytips */
                '+/lib/beautytips/beautytips.css',
                /* WAF mobiscroll */
                '+/lib/mobile/mobiscroll/css/mobiscroll-1.5.3.min.css' 
                
                /* ADD LINKS TO THE CSS FILES FOR YOUR CUSTOM WIDGETS HERE */
                
                ],
                require: [
                /* WAF */
                '+/Core/Native/Rest.js',
                '+/Core/Utils/Timers.js',
                '+/Core/Utils/DebugTools.js',
                '+/Core/Utils/Environment.js',
                '+/Core/Utils/Strings.js',
                '+/Core/Utils/Dates.js',
                '+/DataProvider/Data-Provider.js',
                '+/DataSource/Data-Source.js',
                '+/DataSource/Selection.js',
                '+/DataSource/ErrorHandling.js',
                '+/rpc/Rpc.js',
                '+/Tags/taglib.js',
                '+/Tags/tags.js',

                /* jQuery */
                '+/lib/jquery/jquery.min.js',
                '+/lib/jquery-ui/jquery-ui.min.js',
                '+/lib/jquery-ui/jquery-ui-i18n.js',
                
                /* External Librairy */
                '+/lib/raphael/raphael-min.js',
                '+/lib/graphael/g.raphael-min.js',
                '+/lib/graphael/g.line-min.js',
                '+/lib/graphael/g.bar-min.js',
                '+/lib/graphael/g.pie-min.js',
                '+/lib/jquery.svg/jquery.svg.min.js',
                '+/lib/selectbox/jquery-selectbox.js',
                '+/lib/combobox/jquery-combobox.js',
                '+/lib/beautytips/beautytips.js',
                
                /* Tag Library Descritors */
                '+/Tags/list/tags-list.js',
                '+/Tags/list/descriptor/tags-list-descriptor.js',
                '+/Tags/list/propertydescriptor/tags-list-propertydescriptor.js',
                '+/Tags/list/column/tags-list-column.js',
                '+/Tags/descriptor/tags-descriptor.js',
                '+/Tags/descriptor/attribute/tags-descriptor-attribute.js',
                '+/Tags/descriptor/event/tags-descriptor-event.js',
                '+/Tags/descriptor/structure/tags-descriptor-structure.js',
                '+/Tags/descriptor/style/tags-descriptor-style.js',
                '+/Tags/descriptor/property/tags-descriptor-property-style.js',
                '+/Tags/descriptor/column/tags-descriptor-column.js',
                '+/Tags/descriptor/column/attribute/tags-descriptor-attributecolumn.js',
                
                /* jQuery svg*/
                '+/lib/jquery.svg/jquery.svg.min.js',
                
                /* widgets */
                '+/widget/widget.js',
                '+/widget/icon/widget-icon.js',
                '+/widget/icon/widget-icon-conf.js',
                '+/widget/button/widget-button.js',
                '+/widget/button/widget-button-conf.js',
                '+/widget/buttonImage/widget-buttonImage.js',
                '+/widget/buttonImage/widget-buttonImage-conf.js',
                '+/widget/checkbox/widget-checkbox.js',
                '+/widget/checkbox/widget-checkbox-conf.js',
                '+/widget/switchBox/widget-switchbox.js',
                '+/widget/switchBox/widget-switchbox-conf.js',
                '+/widget/container/widget-container.js',
                '+/widget/container/widget-container-conf.js',
                '+/widget/richText/widget-richText.js',
                '+/widget/richText/widget-richText-conf.js',
                '+/widget/errorDiv/widget-errorDiv.js',
                '+/widget/errorDiv/widget-errorDiv-conf.js',
                '+/widget/dataGrid/widget-dataGrid.js',
                '+/widget/dataGrid/widget-dataGrid-conf.js',
                '+/widget/autoForm/widget-autoForm.js',
                '+/widget/autoForm/widget-autoForm-conf.js',
                '+/widget/queryForm/widget-queryForm.js',
                '+/widget/queryForm/widget-queryForm-conf.js',
                '+/widget/image/widget-image.js',
                '+/widget/image/widget-image-conf.js',
                '+/widget/label/widget-label.js',
                '+/widget/label/widget-label-conf.js',
                '+/widget/slider/widget-slider.js',
                '+/widget/slider/widget-slider-conf.js',
                '+/widget/textField/widget-textField.js',
                '+/widget/textField/widget-textField-conf.js',				
                '+/widget/googleMap/widget-googleMap.js',
                '+/widget/googleMap/widget-googleMap-conf.js',                								
                '+/widget/yahooWeather/widget-yahooWeather.js',
                '+/widget/yahooWeather/widget-yahooWeather-conf.js',				
                '+/widget/progressBar/widget-progressBar.js',
                '+/widget/progressBar/widget-progressBar-conf.js',                
                '+/widget/matrix/widget-matrix.js',
                '+/widget/matrix/widget-matrix-conf.js',
                '+/widget/toolbar/widget-toolbar.js',
                '+/widget/combobox/widget-combobox.js',
                '+/widget/combobox/widget-combobox-conf.js',
                '+/widget/select/widget-select.js',
                '+/widget/select/widget-select-conf.js',
                '+/widget/radiogroup/widget-radiogroup.js',
                '+/widget/radiogroup/widget-radiogroup-conf.js',
                '+/widget/menubar/widget-menubar.js',
                '+/widget/menubar/widget-menubar-conf.js',
                '+/widget/menuitem/widget-menuitem.js',
                '+/widget/menuitem/widget-menuitem-conf.js',
                '+/widget/login/widget-login.js',
                '+/widget/login/widget-login-conf.js',
                '+/widget/chart/widget-chart-conf.js',
                '+/widget/chart/widget-chart.js',
                '+/widget/fileUpload/widget-fileUpload-conf.js',
                '+/widget/fileUpload/widget-fileUpload.js',
                '+/widget/navigationView/widget-navigationView.js',
                '+/widget/navigationView/widget-navigationView-conf.js',
                '+/widget/tabview/widget-tabview.js',
                '+/widget/tabview/widget-tabview-conf.js',
                '+/widget/dialog/widget-dialog.js',
                '+/widget/dialog/widget-dialog-conf.js',
                '+/widget/tinymce/widget-tinymce.js',
                '+/widget/tinymce/widget-tinymce-conf.js',
                '+/widget/frame/widget-frame.js',
                '+/widget/frame/widget-frame-conf.js',
                '+/widget/video/widget-video.js',
                '+/widget/video/widget-video-conf.js',
                '+/widget/canvas/widget-canvas.js',
                '+/widget/canvas/widget-canvas-conf.js',
                '+/widget/login/widget-login.js',
                '+/widget/login/widget-login-conf.js',
                '+/widget/splitView/widget-splitView.js',
                '+/widget/splitView/widget-splitView-conf.js',
                '+/widget/calendar/widget-calendar.js',
                '+/widget/calendar/widget-calendar-conf.js',
                '+/widget/calendar/js/datepicker.js',
                '+/widget/googleMaps/widget-googleMaps.js',
                '+/widget/googleMaps/widget-googleMaps-conf.js',
                
                /* mobile */ 
                '+/lib/mobile/iscroll/iscroll-lite.js',
                '+/lib/mobile/jquery.ui.ipad.altfix.js',
                '+/lib/mobile/mobiscroll/js/mobiscroll-1.5.3.min.js'
                
                /* ADD LINKS TO THE JS FILES FOR YOUR CUSTOM WIDGETS HERE */
                
                ]
            }
        },

        /**
         * The constants of the framework
         *
         * @static
         * @property constants
         * @type Object
         **/
        constants: {},

        /**
         * The classes of the framework
         *
         * @static
         * @property classes
         * @type Object
         **/
        classes  : {},

        /**
         * utils
         *
         * @static
         * @property utils
         * @type Object
         **/
        utils: {
            debug: {
                console: {
                    log: function (string) { }
                }
            },
            
            ucFirst : function (str) {
                var
                f;

                f = str.charAt(0).toUpperCase();
                
                return f + str.substr(1);
            }
        },

        /**
         * core
         *
         * @static
         * @property core
         * @type Object
         **/
        core: {},

        /**
         * dataStore
         *
         * @static
         * @property core
         * @type WAF.dataProviderFactory|Null
         **/
        ds: null,

        /**
         * _private
         *
         * @static
         * @private
         * @property _private
         * @type Object
         **/
        _private: {
            globals: {
                modulesToLoad: {}
            },
            catalogLoaded : false,
            functions: {},
            handlers: {}
        },

        /**
         * widgets
         *
         * @static
         * @property widgets
         * @type Object
         **/
        widgets: {},       
        
        /**
         * components definition
         *
         * @static
         * @property components
         * @type Object
         **/
        components : {
        },
                
        /**
         * components core class
         *
         * @static
         * @property component
         * @type Object
         **/
        component : {
            
        },

        /**
         * widget
         *
         * @static
         * @property widget
         * @type Object
         **/
        widget: {
            themes      : {
                inherited   : {
                    key     : 'inherited',
                    value   : 'Inherited'
                },
                'default'   : {
                    key     : 'default',
                    value   : 'Default',
                    mobile  : "false"
                }/*,
                orange      : {
                    key     : 'orange',
                    value   : 'Light - orange'
                },
                blue        : {
                    key     : 'blue',
                    value   : 'Light - blue'
                }*/,
                metal       : {
                    key     : 'metal',
                    value   : 'Metal',
                    mobile  : "false"
                },
                light       : {
                    key     : 'light',
                    value   : 'Light',
                    mobile  : "false"
                },
                cupertino   : {
                    key     : 'cupertino',
                    value   : 'Cupertino',
                    mobile  : "true"
                }
            /*,
                roundy      : {
                    key     : 'roundy',
                    value   : 'Roundy'
                }*/
            }
        },

        /**
         * forms
         *
         * @static
         * @property forms
         * @type Object
         **/
        forms: {},

        /**
         * source
         *
         * @static
         * @property source
         * @type Object
         **/
        source: {},

        /**
         * event
         *
         * @static
         * @property events
         * @type Object
         **/
        events: {}
    };
	
    // aliases
    WAF.sources = WAF.source;
    source = WAF.source;
    sources = WAF.source;
    waf = WAF;
    
    /**
     * get the value of the parameter
     * 
     * @static
     * @method getUrlValue
     * @param {String} name parameter name
     * @return {String} value of the param
     */
    WAF.getUrlValue = function (name) {
        var regexS = '',
        regex = '',
        results = '';
    
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        regexS = "[\\?&]"+name+"=([^&#]*)";
        regex = new RegExp( regexS );
        results = regex.exec(window.location.href);
        if (results == null) {
            return '';
        } else {
            return results[1];
        }
    };
	
    /**
     * on after init
     * 
     * @static
     * @event onAfterInit
     */
    WAF.onAfterInit = function () {};
    
    /**
     * on ready   
     * @static
     * @method onReady
     */  
    WAF.onReady = function () {
        WAF.utils.init();
        //console.log("WAF.onReady");
        if (true)
        {
            // compatibility
            WAF.widget.ComponentPlaceHolder = WAF.widget.Component;
            
            WAF.onAfterInit();
        }
        else
        {
            try {            
                // compatibility
                WAF.widget.ComponentPlaceHolder = WAF.widget.Component;
	            
                WAF.onAfterInit();
            } catch (e) {
                if (typeof console !== 'undefined' && 'log' in console) {
                    console.log('There is an error in WAF.afterInit method', e);
                } else {
                    alert('There is an error in WAF.afterInit method' + e.message);
                }
            }
        }
    };

    /**
     * <p>Create a namespace</p>
     *
     * @static
     * @method namespace
     * @param {String} namespace namespace to create
     * @return {Object}
     */
    WAF.namespace = function (namespace) {
        var tabNameSpace = [],
        i = 0,
        container = window;

        tabNameSpace = namespace.split('.');

        for (i = 0; i < tabNameSpace.length; i++) {
            container[tabNameSpace[i]] = container[tabNameSpace[i]] || {};
            container = container[tabNameSpace[i]];
        }

        return container;
    };

    /**
     * Create a listener
     *
     * @static
     * @method addListener
     * @param {String} obj object wher to apply the event
     * @param {String} event event to create
     * @param {Function} callback callback
     * @param {String} lib namespace to create
     * @param {String} option option to pass
     */
    WAF.addListener = function (obj, event, callback, lib, option) {
        var ref = {},
        objtemp = null,
        params = {},
        eventName = '';

        lib = lib || 'waf';
        lib = lib.toLowerCase();
                      
        if (typeof callback === 'undefined') {            
            return false;
        }
                      
        if (typeof(obj) == 'string') {
            objtemp = WAF.widgets[obj];
            if (typeof(objtemp) == 'undefined') {
            } else {
                obj = objtemp;
            }
        }

        // keep events into WAF.events
        eventName = event.replace('on','');

        // change scope of the callback
        function changeScope(scope, fn) {
            return function () {
                var undefVar;
                return fn ? fn.apply(scope, arguments) : undefVar;
            };
        } 
        
        if (obj.id) {
            if (!WAF.events[obj.id]) {
                WAF.events[obj.id] = [];
            }
            WAF.events[obj.id].push({
                name    : (event == 'onResize' || event == 'startResize' || event == 'stopResize') ? event : eventName,
                fn      : callback
            });
                
            callback = changeScope($$(obj.id), callback);  
        }
        
        if (event == 'onResize' || event == 'startResize' || event == 'stopResize') {
            
        } else {
            switch (lib.toLowerCase()) {
                case 'yui':
                    obj.subscribe(event, callback);
                    break;
                case 'extjs':
                    obj.on(event, callback);
                    break;
                case 'jquery':
                    $.listen(event, obj, callback);
                    break;
                case 'waf':

                    if (obj.kind) { // check for dataSource
                        switch(obj.kind) {		
                            case 'slider':
                                $("#" + obj.renderId).bind(event, {}, function(e, ui){
                                    e.data.value    = ui.value;                                    
                                    e.data.values   = ui.values;                             
                                    
                                    this._callbackEvent = callback;
                                    this._callbackEvent(e);
                                });
                                break;
                                
                            //                            case 'treeView' :
                            //                                $("#" + obj.renderId).bind('select_node.jstree',function(e, data) {
                            //                                    e["key"] = $(data.rslt.obj[0]).attr("id").replace("node_", "");
                            //                                    e["dataNode"] = data;
                            //                                    callback(e);
                            //                                });
                            //                                break;
                                
                            //                            case 'chart':
                            //
                            //                                $$(obj.id)["_callback_" + event ] = function(){
                            //                                    if(typeof $$(obj.id).chart !== 'undefined'){
                            //                                        $$(obj.id).chart[event](callback);
                            //                                        delete $$(obj.id)["_callback_" + event ];
                            //                                    } else {
                            //                                        setTimeout($$(obj.id)["_callback_" + event ], 10);
                            //                                    }
                            //                                }
                            //                                setTimeout($$(obj.id)["_callback_" + event ], 10);
                            //                                break;  
                            
                            case 'googleMaps':
                                $(obj).bind(event , callback);
                                break;
                            case 'dataGrid':
                                ref = obj.gridController;
                                ref[event] = callback;
                                break;  
                            case 'chart' :
                            case 'fileUpload':
                            case 'wysiwyg':
                            case 'calendar' :
                                if(!/^on/i.test(event)){
                                    obj.$domNode.bind(event , callback);
                                }
                                obj.events = obj.events || {};
                                obj.events[event] = callback;
                                break;
                                
                            case 'frame':
                                $(obj).bind(event , callback);
                                break

                            case 'login':
                                obj['on'+event] = callback;
                                break;      
                                
                            case 'combobox':
                                var htmlInput;

                                htmlInput = $("#" + obj.renderId).children('input');

                                switch(event) {
                                    case 'change':
                                        break;

                                    case 'focus':
                                    case 'blur':
                                        htmlInput.bind( event, callback);
                                        break;

                                    default:
                                        $('#' + obj.renderId).bind(event.replace('on',''), callback);

                                        break;
                                }
                                break;       

                            case 'button':
                            case 'container':
                            case 'checkbox':
                            case 'displayText':
                            case 'errorDiv':
                            case 'image':
                            case 'list':
                            default :
                                var evt = event.replace('on','');
                                try {
                                    if (obj.kind === 'matrix' && event === 'onChildrenDraw') {
                                    // Exception on children draw events
                                    } else {
                                        obj.$domNode.on(evt, callback);

                                        if (obj.isDisabled()) {

                                            obj._tmpEvents = obj._tmpEvents || [];

                                            obj._tmpEvents.push({
                                                type    : evt,
                                                handler : callback
                                            });

                                            obj.$domNode.off(evt);
                                        }
                                    }
                                } catch (e) {
                                }
                                break;
                        }
                    } else {
                        // dataSource
                        if (WAF.source[obj]) {
                            params = {};
                            if (option) {
                                params.attributeName = option;
                                event = 'onAttributeChange';
                            }
                            else if (event == 'onAttributeChange')
                            {
                                params.attributeName = obj;
                            }
                            callback = changeScope(WAF.source[obj], callback); 
                            WAF.source[obj].addListener(event, callback, params);  						
                        } else {
                            // Onload for body or onorientationchange for window
                            if (event == 'onorientationchange') {
                                callback = changeScope(document, callback); 
                                window.onorientationchange = callback;
                            } else if (event == 'onLoad') {
                                callback = changeScope(document, callback); 
                                $(document).ready(callback)
                            } else if (document.getElementById(obj)) {
                                if (document.getElementById(obj).addEventListener){
                                    document.getElementById(obj).addEventListener(event.replace('on',''), callback, false);
                                } else if (document.getElementById(obj).attachEvent) {
                                    document.getElementById(obj).attachEvent('on' + event.replace('on',''), callback);
                                }
                            }
                        }
                    }
                    break;
                default:
                    try {
                        if (document.getElementById(obj).addEventListener) {
                            document.getElementById(obj).addEventListener(event.replace('on',''), callback, false);
                        } else if (document.getElementById(obj).attachEvent) {
                            document.getElementById(obj).attachEvent('on' + event.replace('on',''), callback);
                        }
                    } catch (e) {

                    }
            }
        }
    };
    
    /**
     * Get the description of the library
     * (TLD for Tag Library Descriptors)
     * @method getTld
     * @return {WAF.tags.list.Descriptor}
     */  
    WAF.getTld = function () {
        return WAF.config.tld;
    };  
    
    /**
     * Open a Dialog System
     * @method openDialog
     * @param {JSON} config configuration of a dialog system
     */
    WAF.openDialog = function(config){
        var
        id,
        dialog,
        render,
        linkedTags,
        defaultConf;
        
        defaultConf = {
            left        : 0,
            top         : 0,
            height      : 240,
            width       : 500,
            minHeight   : 0,
            minWidth    : 0,
            maxHeight   : -1,
            maxWidth    : -1,
            draggable   : false,
            resizable   : false,
            autoOpen    : true,
            modal       : false
        }
        
        config = $.extend(true, defaultConf , config);
        
        function getUuidlet () {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        
        function getNewID(){
            var
            id,
            tag;
            
            while(typeof tag == 'undefined' || tag.length > 0){
                id = 'dialog' + getUuidlet();
                tag = $('#' + id);
            }
            
            return id;
        }
        
        id = getNewID();
        
        linkedTags = [
        id + '_titlebar',
        id + '_icon',
        id + '_minimize',
        id + '_maximize',
        id + '_close',
        id + '_content',
        id + '_toolbar',
        id + '_title'
        ];
        
        render = $('<div>');
        render.attr({
            'id'			: id,
            'class' 			: 'waf-widget waf-dialog default inherited',
            'data-theme'            	: 'metal inherited',
            'data-linked-tag'           : linkedTags.join(),
            'data-maxheight'            : config.maxHeight,
            'data-minheight'            : config.minHeight,
            'data-maxwidth'             : config.maxWidth,
            'data-minwidth'             : config.minWidth,
            'data-autoopen'             : !config.autoOpen,
            'data-modal'                : config.modal
        });
        
        render.css({
            width   : config.width,
            height  : config.height,
            left    : config.left,
            top     : config.top,
            position: 'absolute'
        });

        render.appendTo($('body'));
        
        dialog = new WAF.widget.Dialog({
            'id'			: id,
            'class' 			: 'waf-widget waf-dialog default inherited',
            'data-theme'            	: 'metal inherited',
            'data-linked-tag'           : linkedTags.join(),
            'data-maxHeight'            : config.maxHeight,
            'data-minHeight'            : config.minHeight,
            'data-maxWidth'             : config.maxWidth,
            'data-minWidth'             : config.minWidth,
            'data-resizable'            : config.resizable + '',
            'data-draggable'            : config.draggable + '',
            'data-autoopen'             : !config.autoOpen  + '',
            'data-modal'                : config.modal     + ''
        });
        
        dialog._createNew(config);
        
        return dialog;
    };
    
    /**
     * Add a new widget into WAF    
     * @method addWidget
     * @param {JSON} config configuration of a widget
     */  
    WAF.addWidget = function (config) {
        config = config || {};       
        
        if (config.lib) {
            if (typeof WAF.config.widget[config.lib] === 'undefined') {
                WAF.config.widget[config.lib] = {};
            }
            WAF.config.widget[config.lib][config.type] = config;
        } else {
            WAF.config.widget['WAF'][config.type] = config;
        }
        
        WAF.config.taglib.push(config);        
    };  
    
          
    /**
     * Loader
     * 
     * @class WAF.loader
     */
    WAF.loader = {
                                              
        simplePath: {},
		
        /**
         * scripts to load
         *
         * @static
         * @property scriptToLoad
         * @type Array
         */
        scriptToLoad : [],
        scriptSupToLoad : [],

        /**
         * css to load
         *
         * @static
         * @property styleToLoad
         * @type Array
         */
        styleToLoad : [],
        styleSupToLoad : [],
        
        /**
         * manage the components loading
         *
         * @static
         * @property componentsManager
         * @type object
         */
        componentsManager : {            
            
            _components: 0,
            
            init : function () {
                WAF.loader.componentsManager._components = 0;
            },
            
            add : function () {
                WAF.loader.componentsManager._components++;              
            },
            
            remove : function (callback) {
                WAF.loader.componentsManager._components--;
                callback();
            },

            hasComponent : function () {
                return !(WAF.loader.componentsManager._components == 0);
            }
        },
        
        /**
         * manage the rpc file loading
         *
         * @static
         * @property rpcFileManager
         * @type object
         */
        rpcFileManager : {            
            
            _files : 0,
            
            init : function () {
                WAF.loader.rpcFileManager._files = 0;
            },
            
            add : function () {
                WAF.loader.rpcFileManager._files++;              
            },
            
            remove : function (callback) {
                WAF.loader.rpcFileManager._files--;
                callback();
            },

            hasRpcFile : function () {
                return !(WAF.loader.rpcFileManager._files == 0);
            }
        },

        /**
         * init the loading of required files
         *
         * @static
         * @method loadModules
         * @param {String} moduleName name of the module to load
         */
        loadModules : function (moduleName) {
            var i = 0,
            supCSS = [],
            allAtOnce = false,
            style = '',
            styles = [],
            nbstyles = 0,
            fullCSSList = [],
            pattern = WAF.config.pattern,
            xhref = '',
            path = '',
            fullJSList = '',
            supJS = [];
            
            if (WAF.modulesInfo[moduleName]) {

                // init
                WAF.loader.scriptToLoad = WAF.modulesInfo[moduleName].require;
                WAF.loader.styleToLoad = WAF.modulesInfo[moduleName].css;

                supCSS = WAF.config.loadCSS;
                for (i = 0; i < supCSS.length; i++) {
                    // WAF.loader.styleToLoad.push(supCSS[i]);
                    WAF.loader.styleSupToLoad.push(supCSS[i]);
                }                
                
                supJS = WAF.config.loadJS;
                for (i = 0; i < supJS.length; i++) {
                    //WAF.loader.scriptToLoad.push(supJS[i]);
                    WAF.loader.scriptSupToLoad.push(supJS[i]);
                }

                // load
                if (WAF.config.load) {
                    //WAF.loader.scriptToLoad.push(WAF.config.load);
                    WAF.loader.scriptSupToLoad.push(WAF.config.load);
                }
				
                if (WAF.getUrlValue('debug') !== '1') {                    
                    allAtOnce = true;
                    WAF.loader.simplePath = {};
					
                    styles = WAF.loader.styleToLoad;
                    WAF.loader.styleToLoad = [];
                    nbstyles = styles.length;
                    for (i = 0; i < nbstyles; i++) {
                        style = styles[i];
                        fullCSSList.push(style);
                    }                    
                    fullCSSList = fullCSSList.join(',');
                    xhref = window.location.href.split('/').join('\\');
                    //path = "/waf-optimize?referer='" + encodeURIComponent(xhref) + "'&files='" + fullCSSList + "'";
					
                    path = "/waf-optimize?files='" + fullCSSList + "'";
					if ( WAF.config.phoneGap == true ) {
						
						path	= './walib/WAF/waf-optimize-mobile.css';
					
					}
                    if (pattern != null) {
                        path = '/' + pattern + path;
                    }
                    WAF.loader.styleToLoad.push(path);
                    WAF.loader.simplePath[path] = true;
					
                    fullJSList = WAF.loader.scriptToLoad.join(',');
                    //path = "/waf-optimize?referer='" + encodeURIComponent(xhref) + "'&files='" + fullJSList + "'";
                    path = "/waf-optimize?files='" + fullJSList + "'";
					if ( WAF.config.phoneGap == true ) {
						
						path	= './walib/WAF/waf-optimize-mobile.js';
					
					}
                    if (pattern != null) {
                        path = '/' + pattern + path;
                    }
                    WAF.loader.scriptToLoad = [path];
                    WAF.loader.simplePath[path] = true;					
                } else {
                    // get non minify jquery
                    WAF.loader.scriptToLoad = WAF.loader.scriptToLoad.join('@@@').replace('jquery.min.js', 'jquery.js').split('@@@');
                }
                               
                if (WAF.loader.styleToLoad.length > 0 || WAF.loader.styleSupToLoad.length > 0) {
                    WAF.loader.loadStyles(allAtOnce);
                }
                if (WAF.loader.scriptToLoad.length > 0 || WAF.loader.scriptSupToLoad.length > 0) {                    
                    WAF.loader.loadScripts(allAtOnce);
                }
            } else {
                // if module unknow, we load only user script
                if (WAF.config.load) {                    
                    
                    //WAF.loader.scriptToLoad.push(WAF.config.load);
                    WAF.loader.scriptSupToLoad.push(WAF.config.load);
                    WAF.loader.loadScripts();
                }
            }
        },

        /**
         * Load script
         *
         * @static
         * @method loadScripts
         */
        loadScripts : function (allAtOnce) {
            var path;
            if (WAF.loader.scriptToLoad.length > 0)
                path = WAF.loader.scriptToLoad[0];
            else
                path = WAF.loader.scriptSupToLoad[0];
            var head = null,
            script = null,
            loadHandler = null,
            compManager = WAF.loader.componentsManager,
            rpcFileManager = WAF.loader.rpcFileManager;
            
            // case of jQuery is already defined
            if (typeof jQuery != 'undefined' && path.indexOf('jquery.js') != -1) {
                WAF.loader.scriptToLoad = WAF.loader.scriptToLoad.slice(1);
                if (WAF.loader.scriptToLoad.length > 0 || WAF.loader.scriptSupToLoad.length > 0) {
                    WAF.loader.loadScripts();
                } 
            } else {                        
                head = document.getElementsByTagName('head')[0];
                script = document.createElement('script');
                script.type = 'text/javascript';
                // WAF modules                                              
                if (path[0] == '+' && !allAtOnce) {
                    script.src = WAF.config.baseURL + path.slice(1);
                } else {
                    script.src = path;
                }                
                
              
                loadHandler = function (event) {
                 
                    if (WAF.loader.waitForStyleLoading != null)
                    {
                        window.setTimeout(loadHandler, 100);
                    }
                    else
                    {
                        //console.log("scripts ready");
                        if (WAF.loader.scriptToLoad.length > 0)					        
                            WAF.loader.scriptToLoad = WAF.loader.scriptToLoad.slice(1);
                        else
                            WAF.loader.scriptSupToLoad = WAF.loader.scriptSupToLoad.slice(1);
                        if (WAF.loader.scriptToLoad.length > 0 || WAF.loader.scriptSupToLoad.length > 0) {
                            WAF.loader.loadScripts();
                        } else {    		
	                        
                            var onCatalogLoad = function (event) {
                                var length = 0, 
                                i = 0, 
                                j = 0,
                                desc = {},
                                nbComponents = 0,
                                component = null,
                                components = [];
	                                                        
                                if (event.error != null) {
                                    WAF.ds = null;
                                }
								
                                ds = WAF.ds; // ds is a global variable and an alias to the dataStore                            
							
                                // get the description of tags
                                if (WAF.config.widget) {
                                    WAF.config.tld = new WAF.tags.list.Descriptor();
                                    length = WAF.config.taglib.length;
                                    for (i = 0; i < length; i++) {
                                        desc = WAF.config.taglib[i];
                                        WAF.config.tld.add(new WAF.tags.Descriptor(desc));
                                    }
                                }
							
                                if (typeof(WAF.tags) !== 'undefined') {
	                                
                                    // check if components need to be loaded
                                    components = $('[data-type=component]');
                                    nbComponents = components.length;
                                    if (components.length > 0) {
                                        compManager.init();
                                        for (j = 0; j < nbComponents; j++) {
                                            component = components[j];
	                                        
                                            // check if we need to load
                                            if (component.getAttribute('data-start-load') == null || component.getAttribute('data-start-load') == 'true') {
	                                        
                                                // check if we have a valid path
                                                if (component.getAttribute('data-path') != null && component.getAttribute('data-path') != '') {
                                                    compManager.add();
                                                }
                                            }
                                        }                                                                      
                                    }                                                                
	                                
                                    WAF.tags.createView();
	                                
                                    // show body
                                    document.body.style.display = 'block';   
                                    document.body.style.visibility = 'visible';   
                                }
	                            
                                WAF._private.catalogLoaded = true;
                                if (!compManager.hasComponent() && !rpcFileManager.hasRpcFile()) {             
                                    WAF.onReady();	
                                }       

                                /*
                                     * Trigger on ready event on WAF : usefull for widgets events
                                     */
                                $(WAF).trigger('onWAFReady');
                            }
						
                            if (WAF.DataStore != null) {
                                WAF.ds = new WAF.DataStore({
                                    onSuccess: onCatalogLoad,
                                    onError  : onCatalogLoad
                                })
                            }															
                        }
                    }
                };
                
                            
                if (script.addEventListener) {
                    script.addEventListener('load', loadHandler, false);
                } else {
                    script.onreadystatechange = function() {
                        if (this.readyState === 'complete' || this.readyState === 'loaded') {
                            loadHandler();
                        }
                    }
                }
                
                head.appendChild(script);
            }
        },
        
       
        /**
         * Load rpc files
         *
         * @static
         * @method loadRpcFile
         * @param {array}
         */
        loadRpcFile : function (rpcFiles) {
            var src = '',
            i = 0,
            length = rpcFiles.length,
            rpcFile = null,
            head = null,
            script = null,
            loadHandler = null,
            compManager = WAF.loader.componentsManager,
            rpcFileManager = WAF.loader.rpcFileManager;
                                     
            head = document.getElementsByTagName('head')[0];
            
            for (i = 0; i < length; i++) {
                
                rpcFile = rpcFiles[i];
                      
                script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = rpcFile.replace('//','/');           
  
                loadHandler = function (event) {                    
                    rpcFileManager.remove(
                        function () {                            
                            if (!rpcFileManager.hasRpcFile() && !compManager.hasComponent() && WAF._private.catalogLoaded) {
                                WAF.onReady();
                            }
                        });                                        

                };

                if (script.addEventListener) {
                    script.addEventListener('load', loadHandler, false);
                    script.addEventListener('error', loadHandler, false);
                } else {
                    script.onreadystatechange = function() {
                        if (this.readyState === 'complete' || this.readyState === 'loaded') {
                            loadHandler();
                        }
                    }
                }

                head.appendChild(script);
            }
            
        },
        
        /**
         * Load style
         *
         * @static
         * @method loadStyles
         */
        loadStyles : function (allAtOnce) {
            var path = '',
            head = null,
            link = null,
            wafCss = null,
            req = null;
                        
            if (WAF.loader.styleToLoad.length > 0 || WAF.loader.styleSupToLoad.length > 0) {
                if (WAF.loader.styleToLoad.length > 0)
                {
                    path = WAF.loader.styleToLoad[0];
                    WAF.loader.styleToLoad = WAF.loader.styleToLoad.slice(1);
                }
                else
                {
                    path = WAF.loader.styleSupToLoad[0];
                    WAF.loader.styleSupToLoad = WAF.loader.styleSupToLoad.slice(1);
                }
                
                head = document.getElementsByTagName('head')[0];
                link = document.createElement('link');
                link.type = 'text/css';
                link.rel = 'stylesheet';
                
                if (path[0] == '+' && !allAtOnce) {
                    link.href = WAF.config.baseURL + path.slice(1);
                } else {
                    link.href = path;
                }                

                wafCss = document.getElementById('waf-interface-css');
                var ie = false;
                if (waf.PLATFORM != null && waf.PLATFORM.browser != null && waf.PLATFORM.browser.toLowerCase() === "msie")
                    ie = true;
                
                if (wafCss) {                    
                    // check for url limitation on IE9
                    if (link.href.length > 4000 && ie) {                    
                        req = new XMLHttpRequest();
                        req.open('POST', link.href, false);
                        WAF.loader.waitForStyleLoading = true;
                        req.onreadystatechange = function (evt) {
                            if (req.readyState == 4) {
                                if (req.status == 200) {
                                    //console.log("styles loaded");
                                    var style = document.createElement('style');
                                    style.setAttribute('id', 'waf-page');
                                    if (style.styleSheet) {
                                        style.type = 'text/css';
                                        style.styleSheet.cssText = req.responseText;
                                    } else {
                                        style.innerHTML = req.responseText;                                                                                              
                                    }   
                                    wafCss.parentNode.insertBefore(style, wafCss);
                                    WAF.loader.waitForStyleLoading = null;
                                }
                            }
                        };
                        
                        req.send(null);                    
                    } else {
                        wafCss.parentNode.insertBefore(link, wafCss);
                    }
                                        
                } else {
                    // check for url limitation on IE9
                    if (link.href.length > 4000 && ie) {                    
                        req = new XMLHttpRequest();
                        req.open('POST', link.href, false);
                        WAF.loader.waitForStyleLoading = true;
                        req.onreadystatechange = function (evt) {
                            if (req.readyState == 4) {
                                if (req.status == 200) {
                                    //console.log("styles loaded");
                                    var style = document.createElement('style');
                                    style.setAttribute('id', 'waf-page');
                                    style.innerHTML = req.responseText;
                                    head.appendChild(style);
                                    WAF.loader.waitForStyleLoading = null;
                                }
                            }
                        };
                        
                        req.send(null);                    
                    } else {
                        head.appendChild(link);
                    }                                                          
                }

                WAF.loader.loadStyles();
            }
        },
        
        /**
         * return the platform info : OS, device, device type (phone, tablet, desktop)
         *
         * @static
         * @method getPlatformInfo
         */
        getPlatformInfo : function () {            
            var 
            platform        = {},
            appVersion      = navigator.userAgent,
            detect,
            version,
            place,
            thestring;
             
            var checkIt = function ( string ) {
                place = detect.indexOf(string) + 1;
                thestring = string;
                if ( place ) {
                    return true;
                } else {
                    return false
                }
            };
                      
            switch ( true ) {

                case (/iPhone/i).test(appVersion) :
                    platform.device = "iPhone"; 
                    platform.OS     = "iOs";
                    platform.type   = "phone";
                    break;
                case (/iPod/i).test(appVersion) :
                    platform.device = "iPod";
                    platform.OS     = "iOs";
                    platform.type   = "phone";
                    break;
                case (/iPad/i).test(appVersion) :
                    platform.device = "iPad";
                    platform.OS     = "iOs";
                    platform.type   = "tablet";
                    break;
                case (/Android/i).test(appVersion) :
                    if( (/Xoom|Streak|SCH-I800/i).test(appVersion) ) {   //known Android tablet devices
                        platform.device = "";
                        platform.OS     = "android";
                        platform.type   = "tablet";
                    } else {
                        if ( (/Mobile/i).test(appVersion) ) {            //Most of Android phones devices have the "Mobile" tag despite of the tablets
                            platform.device = "";
                            platform.OS     = "android";
                            platform.type   = "phone"; 
                        } else {                                        //in this case we presume the device is a tablet
                            platform.device = "";
                            platform.OS     = "android";
                            platform.type   = "tablet";
                        }
                    }
                    break;
                default:		    
                    platform.device = "unknown";
                    platform.type   = "desktop";
           		    
                    detect = navigator.userAgent.toLowerCase();
                    
                    switch ( true ) {
                        case checkIt('konqueror'):
                            platform.browser = "Konqueror";
                            platform.OS = "Linux";
                            break;
                        case checkIt('firefox'):
                            platform.browser = "Firefox";
                            break;
                        case checkIt('chrome'):
                            platform.browser = "Chrome";
                            break;
                        case checkIt('safari'):
                            platform.browser = "Safari";
                            break;
                        case checkIt('omniweb'):
                            platform.browser = "OmniWeb";
                            break;
                        case checkIt('icab'):
                            platform.browser = "iCab";
                            break;
                        case checkIt('msie'):
                            platform.browser = "msie";
                            break;
                        default:
                            platform.browser = "unknown";
                    }
                    
                    platform.browserVersion = detect.charAt(place + thestring.length);

                    if ( !platform.OS ) {
                        switch ( true ) {
                            case checkIt('linux'):
                                platform.OS = "Linux";
                                break;
                            case checkIt('x11'):
                                platform.OS = "Unix";
                                break;
                            case checkIt('mac'):
                                platform.OS = "Mac";
                                break;
                            case checkIt('win'):
                                platform.OS = "Windows";
                                break;
                            default:
                                platform.OS = "unknown";
                        }
                    
                    }

            }
            
            if (platform.OS === "iOs") {
                if ((/OS 5/i).test(appVersion)) {
                    platform.OSVersion = "5";
                } else if ((/OS 4/i).test(appVersion)) {
                    platform.OSVersion = "4";
                } else if ((/OS 3/i).test(appVersion)) {
                    platform.OSVersion = "3";
                } else {
                    platform.OSVersion = "unknown";    
                }
            } else {
                platform.OSVersion = "unknown"; 
            }
            
            //look for touch capabilities
            platform.isTouch = this.isTouchDevice();
            //html5 features supported
            platform.html5Support = this.detectHtml5Features();

            WAF.PLATFORM = platform;              
        },
        
        /**
         * return the moduleString by device type
         *
         * @static
         * @method getModuleByDeviceType
         * @retutn {string}
         */
        getModuleByDeviceType : function() {
            var platform = WAF.PLATFORM,
            module;
            
            switch ( platform.type ) {
                case "tablet":
                    module = "mobile";
                    break; 
                case "phone":
                    module = "mobile"; 
                    break;
                default:
                    module = "allmodules";
            }
            
            return module;
            
        },
        
        /**
         * set WAF.ISTOUCH value. Desfined if the browser has touch capabilities
         *
         * @static
         * @method isTouchDevice
         */
        isTouchDevice : function() {
            var el = document.createElement('div');
            el.setAttribute('ontouchstart', 'return;');
            if( typeof el.ontouchstart == "function" ) {
                return true;
            } else {
                return false;
            }
            
        },

        /**
         * set WAF.html5Support value. 
         *
         * @static
         * @method detectHtml5Features
         */
        detectHtml5Features : function() {
            // html5attributes to be tested: only test input attributes for now
            var	attributes = {
                input: {},
                textarea: {}
            },
            i = 0;

            var inputEl = document.createElement('input'),	// check for special input attributes
            textareaEl = document.createElement('textarea'),
            list = 'placeholder'.split(' ');

            for (i = 0; i < list.length; i++) {
                attributes['input'][list[i]] = !!(list[i] in inputEl);
            }

            for (i = 0; i < list.length; i++) {
                attributes['textarea'][list[i]] = !!(list[i] in textareaEl);
            }

            return attributes;
        },		

        /**
         * init the loading of required files
         *
         * @static
         * @method init
         */ 
        init : function () { 
            var i = 0,
            j = 0,
            scriptsList = '',
            script = 0,
            modulesString = 'allmodules',
            metaTags = '',
            modules = '', 
            content = '',
            pattern = null,
            req = null;
                        
            WAF.config.loadCSS = [];
            WAF.config.loadJS = [];
            WAF.config.loadRPC = [];            			

            // Get the base URL
			if ( WAF.config.phoneGap == true ) {
			
				WAF.config.baseURL = './';
			
			} else {
				scriptsList = document.getElementsByTagName('script');
				for (script = 0; script < scriptsList.length; script++) {
					if (scriptsList[script].src.search(/loader.js/i) !== -1) {
						WAF.config.baseURL = scriptsList[script].src.substring(0, scriptsList[script].src.search(/loader.js/i) - 1);
					}
				}
			}

            //set platform info
            this.getPlatformInfo();
            
            // fix font-face with safari on japanese
            if (navigator.language && navigator.language.indexOf('jp') != -1 && navigator.userAgent && navigator.userAgent.indexOf('Safari')) {
                WAF.modulesInfo.allmodules.css[14] = '+/widget/skin/default/css/widget-skin-default-fix-japanese.css';
            }

            // look for the meta tags WAF.config.x
            metaTags = document.getElementsByTagName('meta');

            for (i= 0; i < metaTags.length; i++) {                                
                switch (metaTags[i].name) {
                    case 'WAF.config':
                        break;
                    case 'WAF.config.modules':
                        modulesString = (metaTags[i].content === '') ? 'allmodules' : metaTags[i].content;                        
                        if ( modulesString === 'tablet' || modulesString === 'smartphone' ) {
                            modulesString = "mobile";
                        }
                        if ( modulesString === 'auto' ) {
                            modulesString = this.getModuleByDeviceType();
                        }
                        
                        modulesString = modulesString.toLowerCase();
                        WAF.PLATFORM.modulesString = modulesString;
                        
                        break;
                    case 'WAF.config.openAjax':
                        WAF.config.openAjax = (metaTags[i].content === '') ? 'null' : metaTags[i].content;
                        break;
                    case 'WAF.config.debug':
                        WAF.config.debugMode = (metaTags[i].content === 'true') ? true : false;
                        break;
                    case 'WAF.config.uniTest':
                        WAF.config.uniTest = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    case 'WAF.config.load':
                        WAF.config.load = (metaTags[i].content === '') ? '' : metaTags[i].content;
                        break;
                    case 'WAF.config.loadJS':
                        content = metaTags[i].content;
                        if (content != null) {
                            WAF.config.loadJS.push(content);
                            WAF.loader.simplePath[content] = true;
                        }
                        break;
                    case 'WAF.config.loadCSS':
                        content = metaTags[i].content;
                        if (content != null) {
                            WAF.config.loadCSS.push(content);
                            WAF.loader.simplePath[content] = true;
                        }
                        break;						
                    case 'WAF.config.rpc':
                        WAF.config.rpc = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    case 'WAF.config.rpc.namespace':
                        WAF.config.rpc.namespace = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    case 'WAF.config.rpc.module':
                        WAF.config.rpc.module = (metaTags[i].content === '') ? '' : metaTags[i].content;
                        break;
                    case 'WAF.config.rpc.methods':
                        WAF.config.rpc.methods = (metaTags[i].content === '') ? '' : metaTags[i].content;
                        break;
                    case 'WAF.config.rpc.validation':
                        WAF.config.rpc.validation = (metaTags[i].content === '') ? 'false' : metaTags[i].content;
                        break;
                    case 'WAF.config.rpc.file':
                        content = metaTags[i].content;
                        if (content != null) {
                            WAF.config.loadRPC.push(content);
                            WAF.loader.rpcFileManager.add();
                        }
                        break;
                    default:
                        break;
                }
            }            
            
            // get the pattern            
            req = new XMLHttpRequest();
            req.open('GET', document.location, false);
            req.send(null);
            pattern = req.getResponseHeader('X-WA-Pattern');
            if (pattern == null || pattern == "") {
                pattern = null;
            }
            
            
            WAF.config.pattern = pattern;

            // Load the modules
            modules = modulesString.split(',');

            for (j = 0; j < modules.length; j++) {
                WAF.loader.loadModules(modules[j]);
            }
            
            // load the rpc files, if any
            WAF.loader.loadRpcFile(WAF.config.loadRPC);

        }
    };

    WAF.loader.init();
}

/**
 * Get a reference to a WAF widget
 *
 * @param {String} id id of the widget
 * @return {WAF.Widget} a widget
 */
function $$(id) {
    return WAF.widgets[id];
}
