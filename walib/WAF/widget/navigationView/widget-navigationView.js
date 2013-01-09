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
     * TODO: Write a description of this WAF widget
     *
     * @class TODO: give a name to this class (ex: WAF.widget.DataGrid)
     * @extends WAF.Widget
     */
    'navigationView', // TODO: set the widget constructor name in CamelCase (ex: "DataGrid")
    
                
    {
    // Shared private properties and methods
    // NOTE: "this" is NOT available in this context to access the current to widget instance
    // These methods and properties are available from the constrctor through "shared"

    // /**
    //  * A Private shared Method
    //  *
    //  * @/private
    //  * @/shared
    //  * @/method privateSharedMethod
    //  * @/param {String} inWidget
    //  **/
    // privateSharedMethod: function privateSharedMethod(inWidget) {
    //    can work on the widget instance through inWidget
    // }
        
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
     * @default TODO: set to the name to this class (ex: WAF.widget.DataGrid)
     **/
    function WAFWidget(config, data, shared) {

        var
        containerID = config.id,
        $container  = $('#'+containerID),
        that        = this,
        $header,
        childs,
        $content,
        val, 
        span, 
        vIndex,
        dataJSON,
        viewsList;
     
        this.hasBackButton = false;
     
        that.$container         = $container;
        //$content                = $("#"+containerID+"_content");
        $content                = $container.find(".waf-navigationView-content"),
        that.visibleView        = 1;
        that.previousVisible    = [];
        childs                  = $content.children(),
        dataJSON                = data.views.replace(/\'/gi, "\"");
        viewsList               = jQuery.parseJSON(dataJSON);
        that.viewsList          = viewsList;


        $.each(viewsList, function(idx, val) { 
          
            $view =  that.$container.find(".waf-navigation-view"+val.Index);

            $header = $container.find(".waf-widget-header");

            $view.css({
                width: $container.width()+"px",
                height: $container.height()+"px"
            });

            if (idx != 0) {
                $view.css("left", "-"+$container.width()+"px");
                $view.find("input").prop('disabled', true);
                $view.find("select").prop('disabled', true);
                $view.find("textarea").prop('disabled', true);
            } else { 
                that.visibleView = val.Index;
                $view.find(".waf-navigationView-header-back-button").hide();
            }


        });

        if (WAF.PLATFORM.isTouch) {
            $("#"+containerID+" .waf-navigationView-header-back-button").bind("touchend", function(){            
                waf.widgets[containerID].goToPreviousView();  
            })
        } else {
            $("#"+containerID+" .waf-navigationView-header-back-button").bind("click", function(){            
                waf.widgets[containerID].goToPreviousView();  
            })
        }

        var eventHandlerFunction = function(event)
        {
            var widget = event.data.widget;
            var source = event.dataSource;
            
            // PUT THE CODE TO EXECUTE WHEN THE EVENT HAPPENS HERE
        }

        if ('source' in this) {
            /*this.source.addListener("attributeChange", eventHandlerFunction, {
                attributeName: this.att.name
                }, {
                widget:this
            });*/
        /*
            this.source.subscribe(
                {
                    widget: this,
                    id: this.id,
                    eventKind: 'attributeChange', // event to listen
                    attributeName: this.att.name,
                    notify: function notify(inNotifyEvent) {
                    
                            // PUT THE CODE TO EXECUTE WHEN THE EVENT HAPPENS HERE
                            
                    }
                }
            );
	*/
        }

    },
    
                
    {
    // [Prototype]
    // The public shared properties and methods inherited by all the instances
    // NOTE: "this" is available in this context
    // These methods and properties are available from the constructor through "this" 
    // NOTE 2: private properties and methods are not available in this context


    /**
     * Custom ready function
     * @method ready
     */
    ready : function navigationView_ready(){

        var widID = this.id;

        $($$(this.id)).bind('widgetResize', function(e, type){ 
            window.setTimeout(function(){
                $$(widID).onContainerResize();
            }, 100);
        });
        
        //force resize & backfaceVisibility value at the end of the process
        window.setTimeout(function(){
            $$(widID).onContainerResize();
            $("#"+widID).get()[0].style.backfaceVisibility = "hidden";
        }, 0);    
        
    },
    
    onResize: function() {
        
    },

    /**
    * onContainerResize
    *
    * @/shared
    * @/method onContainerResize
    **/
    onContainerResize: function onContainerResize() {

        var
        $container  = this.$container,
        val,
        left;

        //var childs = $("#"+this.id+"_content").children();
        var childs = $("#"+this.id+" .waf-navigationView-content").children();

        $.each(childs, function(index, view) {
            $view =  $(view);
            left = parseInt($view.css("left"))
            if (left != 0) {
                if( left > 0) {
                    $view.css("left", $container.width()+"px");
                } else {
                    $view.css("left", "-"+$container.width()+"px"); 
                }
            }
            $view.css({
           	    width: $container.width()+"px",
           	    height: $container.height()+"px"
            });
        });
        
    },
    slideToNextView: function slideToNextView() {
        
    },
    onTouchStart: function onTouchStart() {
        
        //this.currentPos
    
    },
    /**
    * goToView
    *
    * @param {number} viewIndex index of the view
    * @param {string} backButtonLabel allow to override the label of the backbutton
    * @/shared
    * @/method goToView
    **/
    goToView: function goToView( viewIndex, backButtonLabel ) {

        if (parseInt(this.visibleView) === viewIndex) {
            return false;
        }
        
        var
        containerWidth  = this.$container.width(),
        //visibleView     = $("#"+this.id+"_view"+this.visibleView).get()[0],
        $visibleView    = this.$container.find(".waf-navigation-view"+this.visibleView),
        visibleView     = $visibleView.get()[0],
        title,
        $elem,
        backButton,
        transformVis,
        transformNew,
        tp,
        $toDisplay,
        toDisplay,
        elem,
        that;

        $visibleView.find("input").prop('disabled', true);
        $visibleView.find("select").prop('disabled', true);
        $visibleView.find("textarea").prop('disabled', true);

        if (viewIndex) {

            $elem           = this.$container.find(".waf-navigation-view"+viewIndex);//$("#"+this.id+"_view"+viewIndex);
            backButton      = $elem.find(".waf-navigationView-header-back-button");

            $elem.get()[0].style.webkitTransition   = '-webkit-transform 0.5s';
            visibleView.style.webkitTransition      = '-webkit-transform 0.5s';
            
            if (backButtonLabel) {
                backButton.find("span").get()[0].textContent = backButtonLabel;
            }

            backButton.show();
            this.hasBackButton = true;

            transformNew = parseInt(getComputedStyle($elem.get()[0], null).webkitTransform.split(",")[4]);
                        
            if (transformNew && transformNew !== 0) {
                tp = containerWidth+(-transformNew);
                $elem.css("left", tp+"px");
                $elem.get()[0].style.webkitTransform = 'translateX(-'+tp+'px)';
            } else {
                $elem.css("left", containerWidth+"px");
                $elem.get()[0].style.webkitTransform = 'translateX(-'+containerWidth+'px)';
            }
            
            transformVis = parseInt(getComputedStyle(visibleView, null).webkitTransform.split(",")[4]); //$("#"+this.id+"_view"+this.visibleView).get()[0]
            
            if (transformVis) {
                tp = containerWidth+(-transformVis);
                visibleView.style.webkitTransform = 'translateX(-'+tp+'px)';
            } else {
                visibleView.style.webkitTransform = 'translateX(-'+containerWidth+'px)';
            }
            
            $toDisplay = this.$container.find(".waf-navigation-view"+this.visibleView);//$("#"+this.id+"_view"+this.visibleView);
            toDisplay = $toDisplay.get()[0];
            elem = $elem.get()[0];
            that = this;

            window.setTimeout(function(){
                
                elem.style.webkitTransition = '-webkit-transform 0s';
                elem.style.webkitTransform = 'none';
                $elem.css("left", "0px");
                
                toDisplay.style.webkitTransition = '-webkit-transform 0s';
                toDisplay.style.webkitTransform = 'none';
                $toDisplay.css("left", -containerWidth+"px");

                $elem.find("input").prop('disabled', false);
                $elem.find("select").prop('disabled', false);
                $elem.find("textarea").prop('disabled', false);

            },500);

            this.previousVisible.push(this.visibleView);
            this.visibleView = viewIndex;
        }
    },
    
    /**
    * goToPreviousView
    *
    * @/shared
    * @/method goToPreviousView
    **/
    goToPreviousView: function goToPreviousView() {

        var
        viewToDisplay   = this.previousVisible.pop(),
        containerWidth  = this.$container.width(),
        $toDisplay      = this.$container.find(".waf-navigation-view"+viewToDisplay),//$("#"+this.id+"_view"+viewToDisplay),
        toDisplay       = $toDisplay.get()[0],
        $elem           = this.$container.find(".waf-navigation-view"+this.visibleView),//$("#"+this.id+"_view"+this.visibleView),
        elem            = $elem.get()[0],
        backButton      = $toDisplay.find(".waf-navigationView-header-back-button"),
        res             = false,
        title,
        transformNew,
        transformVis,
        computedStype,
        tp;


        if (viewToDisplay) {


            $elem.find("input").prop('disabled', true);
            $elem.find("select").prop('disabled', true);
            $elem.find("textarea").prop('disabled', true);

            res = true;

            computedStype   = getComputedStyle(toDisplay, null);
            transformNew    = parseInt(computedStype.webkitTransform.split(",")[4]);

            toDisplay.style.webkitTransition = '-webkit-transform 0.5s';
            elem.style.webkitTransition = '-webkit-transform 0.5s';

            toDisplay.style.webkitTransform = 'translateX('+containerWidth+'px)';
            elem.style.webkitTransform = 'translateX('+containerWidth+'px)';

            var that = this;

            window.setTimeout(function(){
                
                toDisplay.style.webkitTransition = '-webkit-transform 0s';
                toDisplay.style.webkitTransform = 'none';
                $toDisplay.css("left", "0px");
                
                elem.style.webkitTransition = '-webkit-transform 0s';
                elem.style.webkitTransform = 'none';
                $elem.css("left", -containerWidth+"px");

                $toDisplay.find("input").prop('disabled', false);
                $toDisplay.find("select").prop('disabled', false);
                $toDisplay.find("textarea").prop('disabled', false);

            }, 600);

            this.visibleView = viewToDisplay;

            if(  this.previousVisible.length === 0 ) { //viewToDisplay === 1 &&
                backButton.hide();
                this.hasBackButton = false;
            }
            
        }

        return res;
    },
    /**
    * goToNextView
    *
    * @/shared
    * @/method goToNextView
    **/
    goToNextView: function goToNextView() {

        var 
        that            = this,
        currentIndex    = null,
        viewIndex       = null,
        res             = false,
        nextIndex;

        $.each(that.viewsList, function(idx, val) {
 
            if (val.Index+"" === that.visibleView+"") {
                currentIndex = idx;
                return false;
            }

        });

        nextIndex = currentIndex + 1;

        if (that.viewsList[nextIndex]) {
        
            viewIndex = that.viewsList[nextIndex].Index;
            that.goToView(viewIndex);
            res = true;
        }
        
        return res;        
    }
    }

);
