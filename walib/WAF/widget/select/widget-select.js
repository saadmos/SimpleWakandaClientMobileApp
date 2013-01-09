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
//// "use strict";

/*global WAF,window*/

/*jslint white: true, browser: true, onevar: true, undef: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */

WAF.Widget.provide(

    /**
     *      
     * @class TODO: give a name to this class (ex: WAF.widget.DataGrid)
     * @extends WAF.Widget
     */
    'Select',   
    {        
    },
    /**
     * @constructor
     * @param {Object} inConfig configuration of the widget
     */

    /**
     * The constructor of the widget
     *
     * @shared
     * @property constructor
     * @type Function
     **/
    function WAFWidget(config, data, shared) { 
        var 
        dataBinding,
        comboboxHtml,
        comboboxID,
        htmlObject,
        _key,
        sourceIn,
        sourceOut,
        autoDispatch,
        options,
        primary,
        inputHtmlObject,
        buttonHtmlObject,
        listHtmlObject,
        listClass,
        buttonSize,
        widget,
        i,
        visibleText = "...",
        selectLabel,
        selectElement,
        optionsLength;

        this._limit     = !data['limit'] ? this._limit : parseInt(data['limit']);
        this._autoDispatch  = !data['autoDispatch'] || data['autoDispatch'] == 'false' ? false : true; 

        widget          = this;
        htmlObject      = $(this.containerNode);
        theme           = $.trim(this.getTheme().replace('inherited', ''));
        comboboxID      = config.id;

        selectElement   = htmlObject.find("select");
        selectMask      = $('<div class="waf-select-mask"></div>');
        selectLabel     = $('<span class="waf-select-label"></span>');
        selectButton    = $('<span class="waf-select-button"></span>');
        selectIcon      = $('<span class="waf-icon waf-icon-svg waf-select-icon">');
        selectIcon.svg({
            loadURL: '/walib/WAF/widget/select/skin/' + theme + '/svg/widget-select-skin-' + theme + '.svg',
            onLoad: function(svg) {
                svg.configure({
                        width: '100%',
                        height: '100%',
                        preserveAspectRatio: 'none'
                });
            }
        });
        
        selectButton.append(selectIcon);
        
        dataBinding = config['data-binding'];
        _key        = data['binding-key'];

        if (_key === null) {
            _key = widget._primary;
        }

        this.key = _key;
        this.dataBinding = dataBinding;

        if (data['binding-options'] != null && dataBinding != null) { 
            options = data['binding-options'].replace(/\[/g, '').replace(/\]/g, '').split(' ');
        } else {
            options = selectElement.html();
        }

        optionsLength   = options.length;
     
        htmlObject
            .empty()
            .append(selectMask, '<select name="">' + options + '</select>');
    
        //selectElement.html(options);        
        selectElement   = htmlObject.find("select");
        
        selectLabel
            .css('line-height', this.getHeight() + 'px')
            .html(this.getValue());

        selectMask.append(selectLabel, selectButton);
        
         // ********* <STATES EVENTS> *********
         htmlObject.bind("onChange", this, function(event) {
            //event.data.onChange(event);
         })

        if (WAF.PLATFORM.isTouch) {
            htmlObject.bind({
                touchstart: function() {
                    $(this).addClass('waf-state-active');
                },
                focusout: function() {
                    $(this).removeClass('waf-state-active');
                }
            });
        }
        //  else {
        //     htmlObject.bind({
        //         mousedown: function() {
        //             console.log('mousedown')
        //             $(this).addClass('waf-state-active');
        //         }
        //     });
        // }
         // ********* </STATES EVENTS> ********
        
        selectElement.change(function(){
            selectLabel.html($(this).find('option:selected').text());
            //htmlObject.trigger("onChange");
            

            // htmlObject.removeClass('waf-state-active');
        });
   
        sourceIn        = data['binding'];
        autoDispatch    = data['autoDispatch'];
        sourceOut       = data['binding-out'];
        

          this.createSelect= function(divID, binding, params){ 

            if (widget.sourceAtt) {

                var listenerConfig = {
                    listenerID  :divID,
                    listenerType:'dropDown',
                    subID       : params.subID ? params.subID : null
                };

                //result.source.addListener("all", function(e) {    


                widget.sourceAtt.addListener(function(e) { 
                    var dsID        = e.dataSource.getID(),
                        kind        = e.eventKind;
                        dataSource  = e.dataSource;
                        dsID        = e.dataSource.getID();
              
                    switch(e.eventKind) {
                        case  'onCurrentElementChange' : 

                            function manageValue() {

                                widget.setValue(value);

                                if ((autoDispatch && autoDispatch !== 'false' )|| autoDispatch === 'true') {                                
                                    if (sourceOut) { 
                   
                                        value = e.dataSource.getAttribute(_key).getValue();

                                    } else {  
                                        if (dsID !== _key && _key) { 
                                            value = e.dataSource.getAttribute(_key).getValue();
                                        }
                                    }
                                    selectElement.find("option[value='"+value+"']").prop("selected", "selected");
                                    selectLabel.html(selectElement.find("option:selected").text());
                                                                
                                }
                            }

                            if (widget._autoDispatch) {      

                                ds = dataSource;   

                                if (ds._private.sourceType != 'dataClass' && ds._private.sourceType != 'relatedEntities') {
                                    widget._primary = ds._private.attNameList[0];
                                }
                                            
                                value = e.dataSource.getAttribute(_key).getValue();

                                if (widget.$domNode.find('option[value="' + value + '"]').length == 0) {

                                    var
                                    i,
                                    pos,
                                    first,
                                    count,
                                    collection,
                                    selOptions;

                                    i           = 0;
                                    count       = 0;
                                    pos         = ds.getPosition();
                                    collection  = ds.getEntityCollection();

                                    widget._tmp = {};

                                    selectElement.html("");

                                    if (!collection) {
                                        return;
                                    }
                                    
                                    if (pos + 5 > collection.length) {
                                        first = collection.length - 5;
                                    } else {
                                        first = pos;
                                    }

                                    widget._posInCombo = {};
                                    selectElement.html("");
                                    selOptions = "";
                                    collection.each(function(elt) {
                                        var 
                                        j,
                                        values;

                                        if (i >= first && count < widget._limit) {
                                            values = [];

                                            for (j = 0; j < optionsLength; j += 1) {
                                                attribute   = options[j];
                                                if (attribute) { 
                                                    values.push(elt.entity[attribute].value);
                                                }
                                            }

                                            selOptions = selOptions + '<option value="'+elt.entity[_key].value+'">'+values.join(' ')+'</option>';

                                            count += 1;
                                        }
                                        
                                        if (collection.length === i+1 ) { 
                                            selectElement.html(selOptions);
                                            manageValue();
                                        }

                                        i += 1;
                                    });
                                    
                                } else {
                                    
                                    manageValue(); 
                                }

                            } else {

                                manageValue(); 
                                
                            }

                            break;

                        case  'onCollectionChange' :
                        case  'onAttributeChange' :
                          
                            if (sourceIn) {
                                selectElement.children().remove();

                                var dsLength    = dataSource.length,
                                    i,
                                    selOptions  = "";

                                for (i = 0; i < dsLength; i += 1) { 
                                    if (dataSource._private.sourceType === "array" || (!widget._limit || i < widget._limit)) {

                                        dataSource.getElement(i, {
                                            onSuccess : function(e){   
                                                var
                                                i,
                                                option;

                                                option = [];
                                                for (i = 0; i < optionsLength; i += 1) {
                                                    if (options[i]) { 
                                                        option.push(e.element[options[i]]);
                                                    }
                                                }                                   
                                                selOptions = selOptions + '<option value="'+e.element[_key]+'">'+option.join(' ')+'</option>';
                                                if (e.position === dsLength-1 || e.position === widget._limit-1) {
                                                    selectElement.html(selOptions);
                                                    if (e.dataSource && _key) {
                                                       selectLabel.html(selectElement.find("option[value='"+dataSource.getAttribute(_key).getValue()+"']").text()); 
                                                    }
                                                    /*
                                                     * Select sourceout value after sourcein has been loaded
                                                     */
                                                    if (widget._tmpValue && widget.sourceOut) {
                                                        widget.setValue(widget._tmpValue);
                                                    }
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                            break;
                    }
                }, listenerConfig, {
                    widget:widget
                });

                // Change current entity on change event
       
                selectElement.bind( "change", function(event, ui) { 
                    
                    //var value = widget.source[_key];
                    var value = selectElement.find('option:selected', this)[0].value;
                    if ((autoDispatch && autoDispatch !== 'false' )|| autoDispatch === 'true' ) {
                        if (!dataSource.selectByKey) {
                            widget.source.select(selectElement.find('option:selected', this).index());
                        } else {
                            dataSource.selectByKey(value);
                        }                        
                    }

                    // Save value if binding "out" is defined
                    if (sourceOut) {
                        var bindingInfo = WAF.dataSource.solveBinding(sourceOut);

                        if (typeof(value) === 'undefined' && widget.source.getID() === _key) { 
                            //widget.source.select(selectElement.find('option:selected', this).index());
                            widget.source.selectByKey(value);
                            bindingInfo.dataSource[widget.source.getID()].set(widget.source);
                        } else { 
                            //bindingInfo.dataSource.getAttribute(bindingInfo.attName).setValue(event.target.value);
                            widget._sourceOutInfo = WAF.dataSource.solveBinding(config['data-binding-out']);
      
                            switch (widget._sourceOutInfo.dataClassAtt.kind) {
                                case 'relatedEntity': 

                                    source = widget._getRelatedAttribute(widget._sourceOutInfo.dataSource, widget.source.getID());

                                    if (source) { 

                                        widget.source.getDataClass().getEntity(value, {
                                            onSuccess: function(e) {
                                                e.userData.source.set(e.entity);
                                            }
                                        }, {source : source})
                                    }
                                    break;

                                default : 
                                    bindingInfo.dataSource.getAttribute(widget._sourceOutInfo.attName).setValue(value);
                                    break;
                            }


                        }
                    }
                });

                /*if (sourceOut) {
                    var bindingInfo = WAF.dataSource.solveBinding(sourceOut);
                    var thisDS = bindingInfo.dataSource;
                            
                    thisDS.addListener('onCurrentElementChange', function(e) {
                        var value = e.dataSource.getAttribute(bindingInfo.attName).getValue();

                        if (e.data.source.getID() === e.data.search) {
                            e.dataSource[e.data.source.getID()].load({
                                onSuccess : function(e) {
                                    if (e.entity) {
                                        //comboboxHtml.combobox('setValue', e.entity[primary].getValue());
                                    }
                                }
                            });
                        } else {
                            //comboboxHtml.combobox('setValue', value);
                        }

                        if ((autoDispatch && autoDispatch !== 'false' )|| autoDispatch === 'true' ) {
                            widget.source.select($('option:selected', selectElement).index());
                        }
                    }, {}, {
                        search : _key,
                        source : widget.source
                    })
                }*/
            } else {
                // Change current entity on change event
                selectElement.bind( "change", function(event, ui) {
                    // Save value if binding "out" is defined
                    if (sourceOut) {
                        var bindingInfo = WAF.dataSource.solveBinding(sourceOut);
                        bindingInfo.dataSource.getAttribute(bindingInfo.attName).setValue(selectElement.val());
                    }
                });
            }
       }

          this.createSelect(comboboxID, sourceIn ? sourceIn : '', config);    
            
    },        
    {

        /**
         * Get the related attribute depending on the binding datasource
         * @method _getRelatedAttribute
         * @param {object} source
         * @param {string} attr
         */
        _getRelatedAttribute : function select_get_related_attribute(source, attr) {
            var
            i,
            result,
            widget,
            currentSource;
            
            widget = this;
            
            for (i in source) {
                currentSource = source[i];
                
                if (currentSource && currentSource.emAtt) {
                    if (WAF.utils.ucFirst(attr) == currentSource.emAtt.path) {
                        result = currentSource
                    }
                }
            }
            
            return result;
        },
        /**
        * getValue
        *
        * @/shared
        * @/method getValue
        **/
        getValue: function getValue() {


           if (this.dataBinding) {
                return source[this.dataBinding].getAttribute(this.key).getValue(); 
           } else {
                return $(this.containerNode).find('option:selected').text();
           }
            
            
        
        },
        /**
        * setValue
        *
        * @/shared
        * @/method setValue
        * @returns selectedValue (can be the previous one if itemValue couldn't be found)
        **/
        setValue: function setValue(itemValue){
            
            var cont = $(this.containerNode),
                label = '',
                returnValue = this.getValue(),
                matchedOption = null;
            
            // don't do anything if widget is disabled, or its value is undefined/invalid
            if (!this.isDisabled() && typeof(itemValue) != 'undefined' && itemValue !== returnValue) {
                // first check we have a valid itemValue
                matchedOption = cont.find('select option[value=' + itemValue + ']');
                if (matchedOption.length) {
                    returnValue = itemValue;
                    
                    // set standard select object's value
                    cont.find("select").val(itemValue);
                    label = cont.find('option:selected').text();
                    cont.find(".waf-select-label").get(0).innerHTML = label;

                    // only trigger the change event if the value could be changed
                    this.$domNode.trigger('change');                                
                }
            }

            return returnValue;
        },
        /**
        * onChange
        *
        * @/shared
        * @/method onChange
        **/
        onChange: function onChange(event) {
            //event code
        }
    }
);
