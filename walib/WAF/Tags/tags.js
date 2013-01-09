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
 * The engine that converts static HTML tags into dynamic Widgets
 *
 * @module Tags
 *
 * @author			The Wakanda Team
 * @date			march 2010
 * @version			0.1
 */

/**
 * Tags namespace
 *
 * @class WAF.tags
 */
WAF.tags = {
    
    /**
     * Parse the document to find Wakanda Widget and Datasource markup and create them
     *
     * @static
     * @method createView
     */
    createView: function createView() {    
        var tabDataSources = [],
        tabDom = [],
        i = 0,
        source = {},
        nbComponent = -1,
        nbDataSource = -1,
        dataSourceList = [],
        privateData = {},
        domobj = [];
        
        $.datepicker.setDefaults($.datepicker.regional['']);

        // create first the data source
        tabDataSources = $('[data-type=dataSource]');
        
        for (i = 0, nbDataSource = tabDataSources.length; i < nbDataSource; i++) {
            domobj = tabDataSources[i];
            this.createComponent(domobj, true);
        }

        dataSourceList = WAF.dataSource.list;
		
        // if some sources depends from others, need a second pass
        WAF.dataSource.fullyInitAllSources();
		
        // then the widgets
        tabDom = $('[data-type]');
        
        for (i = 0, nbComponent = tabDom.length; i < nbComponent; i++) {
            domobj = tabDom[i];            
            this.createComponent(domobj, false);
            if (false) {
                // catch the error if there is a pb with the dataSource
                try {
                    this.createComponent(domobj, false);
                } catch (e) {
                    // TODO change alert on a kind of Error
                    if (typeof console !== 'undefined' && 'log' in console) {
                        console.log('There is an error with the tag of id ' + domobj.id, e);
                    } else {
                        alert('You have an error with the tag of id ' + domobj.id + '\r\nerror: ' + e.message);
                    }
                }
            }
        }
		
        // resolve the source
        for (var e in dataSourceList)  {
            source = dataSourceList[e];
            privateData = source._private;
            if (source.mustResolveOnFirstLevel()) {
                source.resolveSource();
                if (false) {					
                    // catch the error if there is a pb with the dataSource
                    try {                        
                        source.resolveSource();
                    } catch (e) {
                        // TODO change alert on a kind of Error
                        if (typeof console !== 'undefined' && 'log' in console) {
                            console.log('There is an error with the datasource of id ' + privateData.id, e);
                        } else {
                            alert('There is an error with the datasource of id ' + privateData.id + '\r\nerror: ' + e.message);
                        }
                    }				
                }				
            }
        }

    },

    /**
     * Create the widget or the datasource from the DOM
     * 
     * @static
     * @method createComponent
     * @param {Object} domObj DOM object
     * @param {Boolean} isDataSource true if the component a dataSource (false by default)
     * @return {WAF.Widget|WAF.DataSource|Null}
     **/
    createComponent: function createComponent(domObj, isDataSource) {        
        var lib = '',
        type = '',
        nbAttributes = {},
        attributeName = '',
        i = 0,
        definition = null,
        config = {},
        elt = {},
        eltStyle = {},
        value = '',
        component = null,
        widget = WAF.config.widget,
        sID = '';

        if (isDataSource === undefined || isDataSource === null) {
            isDataSource = false;
        }

        // create the factory
        lib = domObj.getAttribute('data-lib');
        lib = lib || 'WAF';

        // find the component definition
        // and create the component
        type = domObj.getAttribute('data-type');
        type = type || '';

        if (!isDataSource && type !== 'dataSource') {

            // initializing columns names and attributes
            if (domObj.getAttribute('data-column-name')) {
                config['data-column-name'] = domObj.getAttribute('data-column-name');
            }

            if (domObj.getAttribute('data-column-attribute')) {
                config['data-column-attribute'] = domObj.getAttribute('data-column-attribute');
            }

            if (domObj.getAttribute('data-column-width')) {
                config['data-column-width'] = domObj.getAttribute('data-column-width');
            }            
            
            if (widget[lib] && widget[lib][type]) {
                            
                definition = widget[lib][type];
                                                
                // create the config
                for (i = 0, nbAttributes = definition.attributes.length; i < nbAttributes; i++) {
                    attributeName = definition.attributes[i].name;
                    value = domObj.getAttribute(attributeName);
                    if (value && value.replace) {
                        value = value.replace(/&quot;/g, '"');
                    }     
                    config[attributeName] = value;
                }

                // force getting the mandatory attribute
                attributeName = 'id';
                config[attributeName] = domObj.getAttribute(attributeName);
                attributeName = 'data-type';
                config[attributeName] = domObj.getAttribute(attributeName);
                attributeName = 'data-lib';
                config[attributeName] = domObj.getAttribute(attributeName);
                attributeName = 'data-hideonload';
                config[attributeName] = domObj.getAttribute(attributeName);

                // creation of the component
                component = definition.onInit(config);

                elt = document.getElementById(config.id);
                
                if (elt) {
                    eltStyle = elt.style;
                    if (eltStyle.borderWidth && config['data-type'].match(new RegExp('(^button$)|(^textField$)'))) {
                        eltStyle.width = parseInt(eltStyle.width, 10) + (parseInt(eltStyle.borderWidth, 10) * 2) + 'px';
                        eltStyle.height = parseInt(eltStyle.height, 10) + (parseInt(eltStyle.borderWidth, 10) * 2) + 'px';
                    }
                }
                return component;                
            }            
        } else {        
            if (isDataSource && type === 'dataSource') {
                          
                definition = widget['WAF']['dataSource'];                   
                    
                // create the config
                nbAttributes = definition.attributes.length;
                for (i = 0; i < nbAttributes; i++) {
                    attributeName = definition.attributes[i].name;         
                    config[attributeName] = domObj.getAttribute(attributeName);
                }

                // force getting the mandatory attribute
                sID = domObj.getAttribute('data-id');
                if (sID == null || sID == '') {
                    attributeName = 'id';
                    config[attributeName] = domObj.getAttribute(attributeName);
                } else {
                    config.id = sID;
                }
                attributeName = 'data-type';
                config[attributeName] = domObj.getAttribute(attributeName);
                attributeName = 'data-lib';
                config[attributeName] = domObj.getAttribute(attributeName);

                // creation of the component
                component = definition.onInit(config);
                
                // creation of the variable if dataSource variable
                if (config['data-source-type'] == 'scalar') {
                    switch (config['data-dataType']) {
                        case 'number':
                            if (typeof window[config.id] === 'undefined') {
                                window[config.id] = 0;
                            }
                            break;
                        case 'boolean':
                            if (typeof window[config.id] === 'undefined') {
                                window[config.id] = false;
                            }
                            break;
                        case 'object':
                            if (typeof window[config.id] === 'undefined') {
                                window[config.id] = {};
                            }
                            break;
                        case 'date':
                            if (typeof window[config.id] === 'undefined') {
                                window[config.id] = new Date();
                            }
                            break;
                        default:
                            if (typeof window[config.id] === 'undefined') {
                                window[config.id] = '';
                            }
                            break;
                    }
                    return component;
                }
                if (config['data-source-type'] == 'object') {
                    if (typeof window[config.id] === 'undefined') {
                        window[config.id] = {};
                    }
                    return component;
                }
                if (config['data-source-type'] == 'array') {
                    if (typeof window[config.id] === 'undefined') {
                        window[config.id] = [];
                    }
                    return component;
                }
                if (config['data-source-type'] == 'date') {
                    if (typeof window[config.id] === 'undefined') {
                        window[config.id] = new Date();
                    }
                    return component;
                }                

                return component;                                    
            }
        }

        return null;
    },
    
    /**
     * Create the widget or the datasource from a framgment
     * 
     * @static
     * @method generate
     * @param {String} id id of the element where to integrate the fragment
     * @param {Boolean} includeItself do we have to genrate from the DOM id itself
     * (otherwise it is from its children) 
     **/
    generate : function generate(id, includeItself) {
        var tabDom = [],
        domobj = null, 
        domId = '',
        domDataType = '',
        domDataScope = '',
        i = 0,
        nbDom = 0,
        container = $$(id),
        source = null,
        internalSources = {},
        nbComponent = 0,
        privateData = '',
        position = 0,
        tabDomBindings = [],
        lstDomBindings = {},
        binding = {},
        dataSourceNameGlobalList = {},
        components = [],
        compManager = WAF.loader.componentsManager,
        nbComponents = 0,
        component = null;
        
        if (typeof includeItself === 'undefined') {
            includeItself = true;
        } 
        
        var tabDomFirst = $('#' + id + '[data-type]');
		
        tabDom = $('#' + id + ' [data-type]');
        if (tabDomFirst.length != 0 && includeItself) {
            tabDom.push(tabDomFirst[0]);
        }
			
        nbComponent = tabDom.length;
        
        // create first the data source        
        for (i = 0; i < nbComponent; i++) {
            domobj = tabDom[i];
            domId = domobj.getAttribute('data-id');
            domDataType = domobj.getAttribute('data-type');
            domDataScope = domobj.getAttribute('data-scope');
                      
            if (sources && typeof (sources[domId]) === 'undefined' && domDataType === 'dataSource') {                      
                if (domDataScope == 'global') {
                    dataSourceNameGlobalList[domId] = domId;
                }                
                source = this.createComponent(domobj, true);
                internalSources[domId] = source;
            } else {
                if (sources && typeof (sources[domId]) !== 'undefined' && domDataType === 'dataSource') {
                    internalSources[domId] = sources[domId];
                }
            }                        
        }
        		
        // if some sources depends from others, need a second pass
        WAF.dataSource.fullyInitAllSources();
        
        // check if components need to be loaded
        components = $('#' + id + ' [data-type=component]');
        nbComponents = components.length;
        if (nbComponents > 0) {
            
            for (i = 0; i < nbComponents; i++) {
                component = components[i];
	                                        
                // check if we need to load
                if (component.getAttribute('data-start-load') == null || component.getAttribute('data-start-load') == 'true') {
	                                        
                    // check if we have a valid path
                    if (component.getAttribute('data-path') != null && component.getAttribute('data-path') != '') {
                        compManager.add();
                    }
                }
            }                                                                      
        } 
        
                
        // create then the widget      
        for (i = 0, nbComponent; i < nbComponent; i++) {
            domobj = tabDom[i];
            this.createComponent(domobj, false);
        }
        
        // check for datasource in use in widgets
        tabDomBindings = $('#' + id + ' [data-binding]');
        nbDom = tabDomBindings.length;
        for (i = 0; i < nbDom; i++) {
            binding = tabDomBindings[i].getAttribute('data-binding');
            if (binding) {
                binding = binding.split('.')[0];
                lstDomBindings[binding] = binding;
            }
        }
                
        // resolve the source
        for (var e in internalSources)  {
            source = internalSources[e];
            privateData = source._private;
            position = source.getPosition();
            if (lstDomBindings[source.getID()]) {             
                // catch the error if there is a pb with the dataSource
                try {   
                    
                    if (position >= 0) {                    
                        if (source.select) {
                            if (position > 0) {
                                source.select(0);
                            } else {
                                source.select(1);
                            }
                        }                    
                        if (dataSourceNameGlobalList[e]) {
                            source.resolveSource(); 
                        }                                            
                        if (source.select) {
                            source.select(position);
                        }            
                    } else {
                        source.resolveSource(); 
                    }                    
                } catch (e) {
                    // TODO change alert on a kind of Error
                    if (typeof console !== 'undefined' && 'log' in console) {
                        console.log('There is an error with the datasource of id ' + privateData.id, e);
                    } else {
                        alert('There is an error with the datasource of id ' + privateData.id + '\r\nerror: ' + e.message);
                    }
                }				                				
            }
        }
        
        // resizable
        if (container && container.resizable && $('#'+ id).data('resizable') == true) {
            container.resizable(true);           
        }
        
        // draggable
        if (container && container.resizable && $('#'+ id).data('draggable') == true) {           
            container.draggable(true);          
        }
        
        //modal
        if ($('#'+ id).data('modal') == true) {
         
            $('#'+ id).css('z-index', '99999');            
            $('#'+ id).parent().append('<div id="waf-component-fade"></div>'); 
            $('#waf-component-fade').css({
                'filter': 'alpha(opacity=50)'
            }).fadeIn();                                                   
        }   
    }
}; 