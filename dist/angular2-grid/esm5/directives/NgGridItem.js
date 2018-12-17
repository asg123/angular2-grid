/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgGrid } from './NgGrid';
import { Directive, ElementRef, Renderer2, EventEmitter, KeyValueDiffers, ViewContainerRef, Output } from '@angular/core';
var NgGridItem = /** @class */ (function () {
    //	Constructor
    function NgGridItem(_differs, _ngEl, _renderer, _ngGrid, containerRef) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._ngGrid = _ngGrid;
        this.containerRef = containerRef;
        //	Event Emitters
        this.onItemChange = new EventEmitter(false);
        this.onDragStart = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragStop = new EventEmitter();
        this.onDragAny = new EventEmitter();
        this.onResizeStart = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onResizeStop = new EventEmitter();
        this.onResizeAny = new EventEmitter();
        this.onChangeStart = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onChangeStop = new EventEmitter();
        this.onChangeAny = new EventEmitter();
        this.ngGridItemChange = new EventEmitter();
        this.isFixed = false;
        this.isDraggable = true;
        this.isResizable = true;
        this.minWidth = 0;
        this.minHeight = 0;
        this.uid = null;
        this._currentPosition = { col: 1, row: 1 };
        this._size = { x: 1, y: 1 };
        this._config = NgGridItem.CONST_DEFAULT_CONFIG;
        this._userConfig = null;
        this._added = false;
        this._maxCols = 0;
        this._minCols = 0;
        this._maxRows = 0;
        this._minRows = 0;
    }
    Object.defineProperty(NgGridItem.prototype, "config", {
        //	[ng-grid-item] handler
        set: 
        //	[ng-grid-item] handler
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._userConfig = v;
            /** @type {?} */
            var configObject = Object.assign({}, NgGridItem.CONST_DEFAULT_CONFIG, v);
            for (var x in NgGridItem.CONST_DEFAULT_CONFIG)
                if (configObject[x] == null)
                    configObject[x] = NgGridItem.CONST_DEFAULT_CONFIG[x];
            this.setConfig(configObject);
            if (this._userConfig != null) {
                if (this._differ == null) {
                    this._differ = this._differs.find(this._userConfig).create();
                }
                this._differ.diff(this._userConfig);
            }
            if (!this._added) {
                this._added = true;
                this._ngGrid.addItem(this);
            }
            this._recalculateDimensions();
            this._recalculatePosition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "sizex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "sizey", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "col", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition.col;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "row", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition.row;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "currentCol", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition.col;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "currentRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition.row;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgGridItem.prototype.onResizeStartEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onResizeStart.emit(event);
        this.onResizeAny.emit(event);
        this.onChangeStart.emit(event);
        this.onChangeAny.emit(event);
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onResizeEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onResize.emit(event);
        this.onResizeAny.emit(event);
        this.onChange.emit(event);
        this.onChangeAny.emit(event);
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onResizeStopEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onResizeStop.emit(event);
        this.onResizeAny.emit(event);
        this.onChangeStop.emit(event);
        this.onChangeAny.emit(event);
        this.onConfigChangeEvent();
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onDragStartEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onDragStart.emit(event);
        this.onDragAny.emit(event);
        this.onChangeStart.emit(event);
        this.onChangeAny.emit(event);
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onDragEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onDrag.emit(event);
        this.onDragAny.emit(event);
        this.onChange.emit(event);
        this.onChangeAny.emit(event);
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onDragStopEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = this.getEventOutput();
        this.onDragStop.emit(event);
        this.onDragAny.emit(event);
        this.onChangeStop.emit(event);
        this.onChangeAny.emit(event);
        this.onConfigChangeEvent();
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.onCascadeEvent = /**
     * @return {?}
     */
    function () {
        this.onConfigChangeEvent();
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._ngEl.nativeElement, 'grid-item');
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'position', 'absolute');
        this._recalculateDimensions();
        this._recalculatePosition();
        //	Force a config update in case there is no config assigned
        this.config = this._userConfig;
    };
    //	Public methods
    //	Public methods
    /**
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype.canDrag = 
    //	Public methods
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isDraggable)
            return false;
        if (this._dragHandle) {
            return this.findHandle(this._dragHandle, e.target);
        }
        return true;
    };
    /**
     * @param {?} handleSelector
     * @param {?} startElement
     * @return {?}
     */
    NgGridItem.prototype.findHandle = /**
     * @param {?} handleSelector
     * @param {?} startElement
     * @return {?}
     */
    function (handleSelector, startElement) {
        try {
            /** @type {?} */
            var targetElem = startElement;
            while (targetElem && targetElem != this._ngEl.nativeElement) {
                if (this.elementMatches(targetElem, handleSelector))
                    return true;
                targetElem = targetElem.parentElement;
            }
        }
        catch (err) { }
        return false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype.canResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isResizable)
            return null;
        if (this._resizeHandle) {
            if (typeof this._resizeHandle === "string") {
                return this.findHandle(this._resizeHandle, e.target) ? 'bottomright' : null;
            }
            if (typeof this._resizeHandle !== "object")
                return null;
            /** @type {?} */
            var resizeDirections = ['bottomright', 'bottomleft', 'topright', 'topleft', 'right', 'left', 'bottom', 'top'];
            try {
                for (var resizeDirections_1 = tslib_1.__values(resizeDirections), resizeDirections_1_1 = resizeDirections_1.next(); !resizeDirections_1_1.done; resizeDirections_1_1 = resizeDirections_1.next()) {
                    var direction = resizeDirections_1_1.value;
                    if (direction in this._resizeHandle) {
                        if (this.findHandle(this._resizeHandle[direction], e.target)) {
                            return direction;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (resizeDirections_1_1 && !resizeDirections_1_1.done && (_a = resizeDirections_1.return)) _a.call(resizeDirections_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        }
        if (this._borderSize <= 0)
            return null;
        /** @type {?} */
        var mousePos = this._getMousePosition(e);
        if (mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize
            && mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize) {
            return 'bottomright';
        }
        else if (mousePos.left < this._borderSize && mousePos.top < this._elemHeight
            && mousePos.top > this._elemHeight - this._borderSize) {
            return 'bottomleft';
        }
        else if (mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize
            && mousePos.top < this._borderSize) {
            return 'topright';
        }
        else if (mousePos.left < this._borderSize && mousePos.top < this._borderSize) {
            return 'topleft';
        }
        else if (mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize) {
            return 'right';
        }
        else if (mousePos.left < this._borderSize) {
            return 'left';
        }
        else if (mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize) {
            return 'bottom';
        }
        else if (mousePos.top < this._borderSize) {
            return 'top';
        }
        return null;
        var e_1, _a;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype.onMouseMove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this._ngGrid.autoStyle) {
            if (this._ngGrid.resizeEnable) {
                /** @type {?} */
                var resizeDirection = this.canResize(e);
                /** @type {?} */
                var cursor = "default";
                switch (resizeDirection) {
                    case "bottomright":
                    case "topleft":
                        cursor = "nwse-resize";
                        break;
                    case "topright":
                    case "bottomleft":
                        cursor = "nesw-resize";
                        break;
                    case "top":
                    case "bottom":
                        cursor = "ns-resize";
                        break;
                    case "left":
                    case "right":
                        cursor = "ew-resize";
                        break;
                    default:
                        if (this._ngGrid.dragEnable && this.canDrag(e)) {
                            cursor = 'move';
                        }
                        break;
                }
                this._renderer.setStyle(this._ngEl.nativeElement, 'cursor', cursor);
            }
            else if (this._ngGrid.dragEnable && this.canDrag(e)) {
                this._renderer.setStyle(this._ngEl.nativeElement, 'cursor', 'move');
            }
            else {
                this._renderer.setStyle(this._ngEl.nativeElement, 'cursor', 'default');
            }
        }
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._added)
            this._ngGrid.removeItem(this);
    };
    //	Getters
    //	Getters
    /**
     * @return {?}
     */
    NgGridItem.prototype.getElement = 
    //	Getters
    /**
     * @return {?}
     */
    function () {
        return this._ngEl;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getDragHandle = /**
     * @return {?}
     */
    function () {
        return this._dragHandle;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getResizeHandle = /**
     * @return {?}
     */
    function () {
        return this._resizeHandle;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getDimensions = /**
     * @return {?}
     */
    function () {
        return { 'width': this._elemWidth, 'height': this._elemHeight };
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getSize = /**
     * @return {?}
     */
    function () {
        return this._size;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return { 'left': this._elemLeft, 'top': this._elemTop };
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getGridPosition = /**
     * @return {?}
     */
    function () {
        return this._currentPosition;
    };
    //	Setters
    //	Setters
    /**
     * @param {?} config
     * @return {?}
     */
    NgGridItem.prototype.setConfig = 
    //	Setters
    /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config = config;
        this._payload = config.payload;
        this._currentPosition.col = config.col ? config.col : NgGridItem.CONST_DEFAULT_CONFIG.col;
        this._currentPosition.row = config.row ? config.row : NgGridItem.CONST_DEFAULT_CONFIG.row;
        this._size.x = config.sizex ? config.sizex : NgGridItem.CONST_DEFAULT_CONFIG.sizex;
        this._size.y = config.sizey ? config.sizey : NgGridItem.CONST_DEFAULT_CONFIG.sizey;
        this._dragHandle = config.dragHandle;
        this._resizeHandle = config.resizeHandle;
        this._borderSize = config.borderSize;
        this.isDraggable = config.draggable ? true : false;
        this.isResizable = config.resizable ? true : false;
        this.isFixed = config.fixed ? true : false;
        this._maxCols = !isNaN(config.maxCols) && isFinite(config.maxCols) ? config.maxCols : 0;
        this._minCols = !isNaN(config.minCols) && isFinite(config.minCols) ? config.minCols : 0;
        this._maxRows = !isNaN(config.maxRows) && isFinite(config.maxRows) ? config.maxRows : 0;
        this._minRows = !isNaN(config.minRows) && isFinite(config.minRows) ? config.minRows : 0;
        this.minWidth = !isNaN(config.minWidth) && isFinite(config.minWidth) ? config.minWidth : 0;
        this.minHeight = !isNaN(config.minHeight) && isFinite(config.minHeight) ? config.minHeight : 0;
        if (this._minCols > 0 && this._maxCols > 0 && this._minCols > this._maxCols)
            this._minCols = 0;
        if (this._minRows > 0 && this._maxRows > 0 && this._minRows > this._maxRows)
            this._minRows = 0;
        if (this._added) {
            this._ngGrid.updateItem(this);
        }
        this._size = this.fixResize(this._size);
        this._recalculatePosition();
        this._recalculateDimensions();
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ != null) {
            /** @type {?} */
            var changes = this._differ.diff(this._userConfig);
            if (changes != null) {
                return this._applyChanges(changes);
            }
        }
        return false;
    };
    /**
     * @param {?} newSize
     * @param {?=} update
     * @return {?}
     */
    NgGridItem.prototype.setSize = /**
     * @param {?} newSize
     * @param {?=} update
     * @return {?}
     */
    function (newSize, update) {
        if (update === void 0) { update = true; }
        newSize = this.fixResize(newSize);
        this._size = newSize;
        if (update)
            this._recalculateDimensions();
        this.onItemChange.emit(this.getEventOutput());
    };
    /**
     * @param {?} gridPosition
     * @param {?=} update
     * @return {?}
     */
    NgGridItem.prototype.setGridPosition = /**
     * @param {?} gridPosition
     * @param {?=} update
     * @return {?}
     */
    function (gridPosition, update) {
        if (update === void 0) { update = true; }
        this._currentPosition = gridPosition;
        if (update)
            this._recalculatePosition();
        this.onItemChange.emit(this.getEventOutput());
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.getEventOutput = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            uid: this.uid,
            payload: this._payload,
            col: this._currentPosition.col,
            row: this._currentPosition.row,
            sizex: this._size.x,
            sizey: this._size.y,
            width: this._elemWidth,
            height: this._elemHeight,
            left: this._elemLeft,
            top: this._elemTop
        }));
    };
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    NgGridItem.prototype.setPosition = /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        switch (this._cascadeMode) {
            case 'up':
            case 'left':
            default:
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', x + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', y + 'px');
                break;
            case 'right':
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', x + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', y + 'px');
                break;
            case 'down':
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', x + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', y + 'px');
                break;
        }
        this._elemLeft = x;
        this._elemTop = y;
    };
    /**
     * @param {?} cascade
     * @return {?}
     */
    NgGridItem.prototype.setCascadeMode = /**
     * @param {?} cascade
     * @return {?}
     */
    function (cascade) {
        this._cascadeMode = cascade;
        switch (cascade) {
            case 'up':
            case 'left':
            default:
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', this._elemLeft + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', this._elemTop + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'right':
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', this._elemLeft + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', this._elemTop + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', null);
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', null);
                break;
            case 'down':
                this._renderer.setStyle(this._ngEl.nativeElement, 'left', this._elemLeft + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'bottom', this._elemTop + 'px');
                this._renderer.setStyle(this._ngEl.nativeElement, 'right', null);
                this._renderer.setStyle(this._ngEl.nativeElement, 'top', null);
                break;
        }
    };
    /**
     * @param {?} w
     * @param {?} h
     * @return {?}
     */
    NgGridItem.prototype.setDimensions = /**
     * @param {?} w
     * @param {?} h
     * @return {?}
     */
    function (w, h) {
        if (w < this.minWidth)
            w = this.minWidth;
        if (h < this.minHeight)
            h = this.minHeight;
        this._renderer.setStyle(this._ngEl.nativeElement, 'width', w + 'px');
        this._renderer.setStyle(this._ngEl.nativeElement, 'height', h + 'px');
        this._elemWidth = w;
        this._elemHeight = h;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.startMoving = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._ngEl.nativeElement, 'moving');
        /** @type {?} */
        var style = window.getComputedStyle(this._ngEl.nativeElement);
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'z-index', (parseInt(style.getPropertyValue('z-index')) + 1).toString());
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.stopMoving = /**
     * @return {?}
     */
    function () {
        this._renderer.removeClass(this._ngEl.nativeElement, 'moving');
        /** @type {?} */
        var style = window.getComputedStyle(this._ngEl.nativeElement);
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'z-index', (parseInt(style.getPropertyValue('z-index')) - 1).toString());
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype.recalculateSelf = /**
     * @return {?}
     */
    function () {
        this._recalculatePosition();
        this._recalculateDimensions();
    };
    /**
     * @param {?} newSize
     * @return {?}
     */
    NgGridItem.prototype.fixResize = /**
     * @param {?} newSize
     * @return {?}
     */
    function (newSize) {
        if (this._maxCols > 0 && newSize.x > this._maxCols)
            newSize.x = this._maxCols;
        if (this._maxRows > 0 && newSize.y > this._maxRows)
            newSize.y = this._maxRows;
        if (this._minCols > 0 && newSize.x < this._minCols)
            newSize.x = this._minCols;
        if (this._minRows > 0 && newSize.y < this._minRows)
            newSize.y = this._minRows;
        /** @type {?} */
        var itemWidth = (newSize.x * this._ngGrid.colWidth) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (newSize.x - 1));
        if (itemWidth < this.minWidth)
            newSize.x = Math.ceil((this.minWidth + this._ngGrid.marginRight + this._ngGrid.marginLeft) / (this._ngGrid.colWidth + this._ngGrid.marginRight + this._ngGrid.marginLeft));
        /** @type {?} */
        var itemHeight = (newSize.y * this._ngGrid.rowHeight) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (newSize.y - 1));
        if (itemHeight < this.minHeight)
            newSize.y = Math.ceil((this.minHeight + this._ngGrid.marginBottom + this._ngGrid.marginTop) / (this._ngGrid.rowHeight + this._ngGrid.marginBottom + this._ngGrid.marginTop));
        return newSize;
    };
    //	Private methods
    //	Private methods
    /**
     * @private
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    NgGridItem.prototype.elementMatches = 
    //	Private methods
    /**
     * @private
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    function (element, selector) {
        if (!element)
            return false;
        if (element.matches)
            return element.matches(selector);
        if (element.oMatchesSelector)
            return element.oMatchesSelector(selector);
        if (element.msMatchesSelector)
            return element.msMatchesSelector(selector);
        if (element.mozMatchesSelector)
            return element.mozMatchesSelector(selector);
        if (element.webkitMatchesSelector)
            return element.webkitMatchesSelector(selector);
        if (!element.document || !element.ownerDocument)
            return false;
        /** @type {?} */
        var matches = (element.document || element.ownerDocument).querySelectorAll(selector);
        /** @type {?} */
        var i = matches.length;
        while (--i >= 0 && matches.item(i) !== element) { }
        return i > -1;
    };
    /**
     * @private
     * @return {?}
     */
    NgGridItem.prototype._recalculatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = (this._ngGrid.colWidth + this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._currentPosition.col - 1) + this._ngGrid.marginLeft + this._ngGrid.screenMargin;
        /** @type {?} */
        var y = (this._ngGrid.rowHeight + this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._currentPosition.row - 1) + this._ngGrid.marginTop;
        this.setPosition(x, y);
    };
    /**
     * @private
     * @return {?}
     */
    NgGridItem.prototype._recalculateDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._size.x < this._ngGrid.minCols)
            this._size.x = this._ngGrid.minCols;
        if (this._size.y < this._ngGrid.minRows)
            this._size.y = this._ngGrid.minRows;
        /** @type {?} */
        var newWidth = (this._ngGrid.colWidth * this._size.x) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._size.x - 1));
        /** @type {?} */
        var newHeight = (this._ngGrid.rowHeight * this._size.y) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._size.y - 1));
        /** @type {?} */
        var w = Math.max(this.minWidth, this._ngGrid.minWidth, newWidth);
        /** @type {?} */
        var h = Math.max(this.minHeight, this._ngGrid.minHeight, newHeight);
        this.setDimensions(w, h);
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype._getMousePosition = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.originalEvent && e.originalEvent.touches) {
            /** @type {?} */
            var oe = e.originalEvent;
            e = oe.touches.length ? oe.touches[0] : (oe.changedTouches.length ? oe.changedTouches[0] : e);
        }
        else if (e.touches) {
            e = e.touches.length ? e.touches[0] : (e.changedTouches.length ? e.changedTouches[0] : e);
        }
        /** @type {?} */
        var refPos = this._ngEl.nativeElement.getBoundingClientRect();
        return {
            left: e.clientX - refPos.left,
            top: e.clientY - refPos.top
        };
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    NgGridItem.prototype._applyChanges = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var changed = false;
        /** @type {?} */
        var changeCheck = function (record) {
            if (_this._config[record.key] !== record.currentValue) {
                _this._config[record.key] = record.currentValue;
                changed = true;
            }
        };
        changes.forEachAddedItem(changeCheck);
        changes.forEachChangedItem(changeCheck);
        changes.forEachRemovedItem(function (record) {
            changed = true;
            delete _this._config[record.key];
        });
        if (changed) {
            this.setConfig(this._config);
        }
        return changed;
    };
    /**
     * @private
     * @return {?}
     */
    NgGridItem.prototype.onConfigChangeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._userConfig === null)
            return;
        this._config.sizex = this._userConfig.sizex = this._size.x;
        this._config.sizey = this._userConfig.sizey = this._size.y;
        this._config.col = this._userConfig.col = this._currentPosition.col;
        this._config.row = this._userConfig.row = this._currentPosition.row;
        this.ngGridItemChange.emit(this._userConfig);
    };
    //	Default config
    NgGridItem.CONST_DEFAULT_CONFIG = {
        uid: null,
        col: 1,
        row: 1,
        sizex: 1,
        sizey: 1,
        dragHandle: null,
        resizeHandle: null,
        fixed: false,
        draggable: true,
        resizable: true,
        borderSize: 25
    };
    NgGridItem.decorators = [
        { type: Directive, args: [{
                    selector: '[ngGridItem]',
                    inputs: ['config: ngGridItem']
                },] },
    ];
    NgGridItem.ctorParameters = function () { return [
        { type: KeyValueDiffers },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgGrid },
        { type: ViewContainerRef }
    ]; };
    NgGridItem.propDecorators = {
        onItemChange: [{ type: Output }],
        onDragStart: [{ type: Output }],
        onDrag: [{ type: Output }],
        onDragStop: [{ type: Output }],
        onDragAny: [{ type: Output }],
        onResizeStart: [{ type: Output }],
        onResize: [{ type: Output }],
        onResizeStop: [{ type: Output }],
        onResizeAny: [{ type: Output }],
        onChangeStart: [{ type: Output }],
        onChange: [{ type: Output }],
        onChangeStop: [{ type: Output }],
        onChangeAny: [{ type: Output }],
        ngGridItemChange: [{ type: Output }]
    };
    return NgGridItem;
}());
export { NgGridItem };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgGridItem.CONST_DEFAULT_CONFIG;
    /** @type {?} */
    NgGridItem.prototype.onItemChange;
    /** @type {?} */
    NgGridItem.prototype.onDragStart;
    /** @type {?} */
    NgGridItem.prototype.onDrag;
    /** @type {?} */
    NgGridItem.prototype.onDragStop;
    /** @type {?} */
    NgGridItem.prototype.onDragAny;
    /** @type {?} */
    NgGridItem.prototype.onResizeStart;
    /** @type {?} */
    NgGridItem.prototype.onResize;
    /** @type {?} */
    NgGridItem.prototype.onResizeStop;
    /** @type {?} */
    NgGridItem.prototype.onResizeAny;
    /** @type {?} */
    NgGridItem.prototype.onChangeStart;
    /** @type {?} */
    NgGridItem.prototype.onChange;
    /** @type {?} */
    NgGridItem.prototype.onChangeStop;
    /** @type {?} */
    NgGridItem.prototype.onChangeAny;
    /** @type {?} */
    NgGridItem.prototype.ngGridItemChange;
    /** @type {?} */
    NgGridItem.prototype.isFixed;
    /** @type {?} */
    NgGridItem.prototype.isDraggable;
    /** @type {?} */
    NgGridItem.prototype.isResizable;
    /** @type {?} */
    NgGridItem.prototype.minWidth;
    /** @type {?} */
    NgGridItem.prototype.minHeight;
    /** @type {?} */
    NgGridItem.prototype.uid;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._payload;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._currentPosition;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._size;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._config;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._userConfig;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._dragHandle;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._resizeHandle;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._borderSize;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._elemWidth;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._elemHeight;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._elemLeft;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._elemTop;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._added;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._differ;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._cascadeMode;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._maxCols;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._minCols;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._maxRows;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._minRows;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._differs;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._ngEl;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    NgGridItem.prototype._ngGrid;
    /** @type {?} */
    NgGridItem.prototype.containerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmdHcmlkSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWdyaWQvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL05nR3JpZEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWtCLGVBQWUsRUFBcUIsZ0JBQWdCLEVBQUUsTUFBTSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBRXRLO0lBb0hDLGNBQWM7SUFDZCxvQkFDUyxRQUF5QixFQUN6QixLQUFpQixFQUNqQixTQUFvQixFQUNwQixPQUFlLEVBQ2hCLFlBQThCO1FBSjdCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQXJIdEMsaUJBQWlCO1FBQ0EsaUJBQVksR0FBa0MsSUFBSSxZQUFZLENBQWtCLEtBQUssQ0FBQyxDQUFDO1FBQ3ZGLGdCQUFXLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2pGLFdBQU0sR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDNUUsZUFBVSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNoRixjQUFTLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQy9FLGtCQUFhLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ25GLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDOUUsaUJBQVksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbEYsZ0JBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDakYsa0JBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1C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TSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMvRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUUvRixFQUFFLENBQUMsQ0FBQyxJQUFJLENB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LElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU5RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOztZQUV4RSxTQUFTLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FB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Ozs7SUFDN0IsOEJBQTZCOzs7OztJQUM3Qiw4QkFBNkI7Ozs7O0lBQzdCLDhCQUE2Qjs7Ozs7SUFDN0IsOEJBQTZCOzs7OztJQXdENUIsOEJBQWlDOzs7OztJQUNqQywyQkFBeUI7Ozs7O0lBQ3pCLCtCQUE0Qjs7Ozs7SUFDNUIsNkJBQXVCOztJQUN2QixrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0dyaWQgfSBmcm9tICcuL05nR3JpZCc7XHJcbmltcG9ydCB7IE5nR3JpZEl0ZW1Db25maWcsIE5nR3JpZEl0ZW1FdmVudCwgTmdHcmlkSXRlbVBvc2l0aW9uLCBOZ0dyaWRJdGVtU2l6ZSwgTmdHcmlkUmF3UG9zaXRpb24sIE5nR3JpZEl0ZW1EaW1lbnNpb25zLCBSZXNpemVIYW5kbGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lOZ0dyaWQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRXZlbnRFbWl0dGVyLCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NvbnRhaW5lclJlZiwgT3V0cHV0LCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tuZ0dyaWRJdGVtXScsXHJcblx0aW5wdXRzOiBbJ2NvbmZpZzogbmdHcmlkSXRlbSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0dyaWRJdGVtIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG5cdC8vXHRFdmVudCBFbWl0dGVyc1xyXG5cdEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PihmYWxzZSk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uRHJhZzogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uRHJhZ1N0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvbkRyYWdBbnk6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG5cdEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemU6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZVN0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZUFueTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlU3RhcnQ6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlU3RvcDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlQW55OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG5cdEBPdXRwdXQoKSBwdWJsaWMgbmdHcmlkSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1Db25maWc+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtQ29uZmlnPigpO1xyXG5cclxuXHQvL1x0RGVmYXVsdCBjb25maWdcclxuXHRwcml2YXRlIHN0YXRpYyBDT05TVF9ERUZBVUxUX0NPTkZJRzogTmdHcmlkSXRlbUNvbmZpZyA9IHtcclxuXHRcdHVpZDogbnVsbCxcclxuXHRcdGNvbDogMSxcclxuXHRcdHJvdzogMSxcclxuXHRcdHNpemV4OiAxLFxyXG5cdFx0c2l6ZXk6IDEsXHJcblx0XHRkcmFnSGFuZGxlOiBudWxsLFxyXG5cdFx0cmVzaXplSGFuZGxlOiBudWxsLFxyXG5cdFx0Zml4ZWQ6IGZhbHNlLFxyXG5cdFx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdFx0cmVzaXphYmxlOiB0cnVlLFxyXG5cdFx0Ym9yZGVyU2l6ZTogMjVcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgaXNGaXhlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHB1YmxpYyBpc0RyYWdnYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHVibGljIGlzUmVzaXphYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRwdWJsaWMgbWluV2lkdGg6IG51bWJlciA9IDA7XHJcblx0cHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gMDtcclxuXHRwdWJsaWMgdWlkOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuXHQvL1x0UHJpdmF0ZSB2YXJpYWJsZXNcclxuXHRwcml2YXRlIF9wYXlsb2FkOiBhbnk7XHJcblx0cHJpdmF0ZSBfY3VycmVudFBvc2l0aW9uOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSB7IGNvbDogMSwgcm93OiAxIH07XHJcblx0cHJpdmF0ZSBfc2l6ZTogTmdHcmlkSXRlbVNpemUgPSB7IHg6IDEsIHk6IDEgfTtcclxuXHRwcml2YXRlIF9jb25maWcgPSBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHO1xyXG5cdHByaXZhdGUgX3VzZXJDb25maWcgPSBudWxsO1xyXG5cdHByaXZhdGUgX2RyYWdIYW5kbGU6IHN0cmluZztcclxuXHRwcml2YXRlIF9yZXNpemVIYW5kbGU6IFJlc2l6ZUhhbmRsZTtcclxuXHRwcml2YXRlIF9ib3JkZXJTaXplOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfZWxlbVdpZHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfZWxlbUhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX2VsZW1MZWZ0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfZWxlbVRvcDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX2FkZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBfZGlmZmVyOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XHJcblx0cHJpdmF0ZSBfY2FzY2FkZU1vZGU6IHN0cmluZztcclxuXHRwcml2YXRlIF9tYXhDb2xzOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgX21pbkNvbHM6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBfbWF4Um93czogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIF9taW5Sb3dzOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvL1x0W25nLWdyaWQtaXRlbV0gaGFuZGxlclxyXG5cdHNldCBjb25maWcodjogTmdHcmlkSXRlbUNvbmZpZykge1xyXG5cdFx0dGhpcy5fdXNlckNvbmZpZyA9IHY7XHJcblxyXG5cdFx0Y29uc3QgY29uZmlnT2JqZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRywgdik7XHJcblx0XHRmb3IgKGxldCB4IGluIE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcpXHJcblx0XHRcdGlmIChjb25maWdPYmplY3RbeF0gPT0gbnVsbClcclxuXHRcdFx0XHRjb25maWdPYmplY3RbeF0gPSBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHW3hdO1xyXG5cclxuXHRcdHRoaXMuc2V0Q29uZmlnKGNvbmZpZ09iamVjdCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3VzZXJDb25maWcgIT0gbnVsbCkge1xyXG5cdFx0XHRpZiAodGhpcy5fZGlmZmVyID09IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLl9kaWZmZXIgPSB0aGlzLl9kaWZmZXJzLmZpbmQodGhpcy5fdXNlckNvbmZpZykuY3JlYXRlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuX3VzZXJDb25maWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5fYWRkZWQpIHtcclxuXHRcdFx0dGhpcy5fYWRkZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLl9uZ0dyaWQuYWRkSXRlbSh0aGlzKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuXHRcdHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuXHR9XHJcblxyXG5cdGdldCBzaXpleCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NpemUueDtcclxuXHR9XHJcblxyXG5cdGdldCBzaXpleSgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NpemUueTtcclxuXHR9XHJcblxyXG5cdGdldCBjb2woKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sO1xyXG5cdH1cclxuXHJcblx0Z2V0IHJvdygpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3c7XHJcblx0fVxyXG5cclxuXHRnZXQgY3VycmVudENvbCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5jb2w7XHJcblx0fVxyXG5cclxuXHRnZXQgY3VycmVudFJvdygpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3c7XHJcblx0fVxyXG5cclxuXHQvL1x0Q29uc3RydWN0b3JcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2RpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcclxuXHRcdHByaXZhdGUgX25nRWw6IEVsZW1lbnRSZWYsXHJcblx0XHRwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG5cdFx0cHJpdmF0ZSBfbmdHcmlkOiBOZ0dyaWQsXHJcblx0XHRwdWJsaWMgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG5cdCkgeyB9XHJcblxyXG5cdHB1YmxpYyBvblJlc2l6ZVN0YXJ0RXZlbnQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG5cdFx0dGhpcy5vblJlc2l6ZVN0YXJ0LmVtaXQoZXZlbnQpO1xyXG5cdFx0dGhpcy5vblJlc2l6ZUFueS5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2VTdGFydC5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBvblJlc2l6ZUV2ZW50KCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuXHRcdHRoaXMub25SZXNpemUuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uUmVzaXplQW55LmVtaXQoZXZlbnQpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBvblJlc2l6ZVN0b3BFdmVudCgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcblx0XHR0aGlzLm9uUmVzaXplU3RvcC5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25SZXNpemVBbnkuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlU3RvcC5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcblxyXG5cdFx0dGhpcy5vbkNvbmZpZ0NoYW5nZUV2ZW50KCk7XHJcblx0fVxyXG5cdHB1YmxpYyBvbkRyYWdTdGFydEV2ZW50KCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuXHRcdHRoaXMub25EcmFnU3RhcnQuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uRHJhZ0FueS5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2VTdGFydC5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBvbkRyYWdFdmVudCgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcblx0XHR0aGlzLm9uRHJhZy5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25EcmFnQW55LmVtaXQoZXZlbnQpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBvbkRyYWdTdG9wRXZlbnQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG5cdFx0dGhpcy5vbkRyYWdTdG9wLmVtaXQoZXZlbnQpO1xyXG5cdFx0dGhpcy5vbkRyYWdBbnkuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlU3RvcC5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcblxyXG5cdFx0dGhpcy5vbkNvbmZpZ0NoYW5nZUV2ZW50KCk7XHJcblx0fVxyXG5cdHB1YmxpYyBvbkNhc2NhZGVFdmVudCgpOiB2b2lkIHtcclxuXHRcdHRoaXMub25Db25maWdDaGFuZ2VFdmVudCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnZ3JpZC1pdGVtJyk7XHJcblx0XHRpZiAodGhpcy5fbmdHcmlkLmF1dG9TdHlsZSkgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcclxuXHRcdHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cdFx0dGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG5cclxuXHRcdC8vXHRGb3JjZSBhIGNvbmZpZyB1cGRhdGUgaW4gY2FzZSB0aGVyZSBpcyBubyBjb25maWcgYXNzaWduZWRcclxuXHRcdHRoaXMuY29uZmlnID0gdGhpcy5fdXNlckNvbmZpZztcclxuXHR9XHJcblxyXG5cdC8vXHRQdWJsaWMgbWV0aG9kc1xyXG5cdHB1YmxpYyBjYW5EcmFnKGU6IGFueSk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKCF0aGlzLmlzRHJhZ2dhYmxlKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RyYWdIYW5kbGUpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZmluZEhhbmRsZSh0aGlzLl9kcmFnSGFuZGxlLCBlLnRhcmdldCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmluZEhhbmRsZShoYW5kbGVTZWxlY3Rvcjogc3RyaW5nLCBzdGFydEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgdGFyZ2V0RWxlbTogYW55ID0gc3RhcnRFbGVtZW50O1xyXG5cclxuXHRcdFx0d2hpbGUgKHRhcmdldEVsZW0gJiYgdGFyZ2V0RWxlbSAhPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5lbGVtZW50TWF0Y2hlcyh0YXJnZXRFbGVtLCBoYW5kbGVTZWxlY3RvcikpIHJldHVybiB0cnVlO1xyXG5cclxuXHRcdFx0XHR0YXJnZXRFbGVtID0gdGFyZ2V0RWxlbS5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnIpIHt9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNhblJlc2l6ZShlOiBhbnkpOiBzdHJpbmcge1xyXG5cdFx0aWYgKCF0aGlzLmlzUmVzaXphYmxlKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRpZiAodGhpcy5fcmVzaXplSGFuZGxlKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5fcmVzaXplSGFuZGxlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZEhhbmRsZSh0aGlzLl9yZXNpemVIYW5kbGUsIGUudGFyZ2V0KSA/ICdib3R0b21yaWdodCcgOiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuX3Jlc2l6ZUhhbmRsZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHRjb25zdCByZXNpemVEaXJlY3Rpb25zID0gWyAnYm90dG9tcmlnaHQnLCAnYm90dG9tbGVmdCcsICd0b3ByaWdodCcsICd0b3BsZWZ0JywgJ3JpZ2h0JywgJ2xlZnQnLCAnYm90dG9tJywgJ3RvcCcgXTtcclxuXHRcdFx0Zm9yIChsZXQgZGlyZWN0aW9uIG9mIHJlc2l6ZURpcmVjdGlvbnMpIHtcclxuXHRcdFx0XHRpZiAoZGlyZWN0aW9uIGluIHRoaXMuX3Jlc2l6ZUhhbmRsZSkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZmluZEhhbmRsZSh0aGlzLl9yZXNpemVIYW5kbGVbZGlyZWN0aW9uXSwgZS50YXJnZXQpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkaXJlY3Rpb247XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5fYm9yZGVyU2l6ZSA8PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRjb25zdCBtb3VzZVBvczogTmdHcmlkUmF3UG9zaXRpb24gPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG5cclxuXHRcdGlmIChtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fZWxlbVdpZHRoICYmIG1vdXNlUG9zLmxlZnQgPiB0aGlzLl9lbGVtV2lkdGggLSB0aGlzLl9ib3JkZXJTaXplXHJcblx0XHRcdCYmIG1vdXNlUG9zLnRvcCA8IHRoaXMuX2VsZW1IZWlnaHQgJiYgbW91c2VQb3MudG9wID4gdGhpcy5fZWxlbUhlaWdodCAtIHRoaXMuX2JvcmRlclNpemUpIHtcclxuXHRcdFx0cmV0dXJuICdib3R0b21yaWdodCc7XHJcblx0XHR9IGVsc2UgaWYgKG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9ib3JkZXJTaXplICYmIG1vdXNlUG9zLnRvcCA8IHRoaXMuX2VsZW1IZWlnaHRcclxuXHRcdFx0JiYgbW91c2VQb3MudG9wID4gdGhpcy5fZWxlbUhlaWdodCAtIHRoaXMuX2JvcmRlclNpemUpIHtcclxuXHRcdFx0cmV0dXJuICdib3R0b21sZWZ0JztcclxuXHRcdH0gZWxzZSBpZiAobW91c2VQb3MubGVmdCA8IHRoaXMuX2VsZW1XaWR0aCAmJiBtb3VzZVBvcy5sZWZ0ID4gdGhpcy5fZWxlbVdpZHRoIC0gdGhpcy5fYm9yZGVyU2l6ZVxyXG5cdFx0XHQmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9ib3JkZXJTaXplKSB7XHJcblx0XHRcdHJldHVybiAndG9wcmlnaHQnO1xyXG5cdFx0fSBlbHNlIGlmIChtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fYm9yZGVyU2l6ZSAmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9ib3JkZXJTaXplKSB7XHJcblx0XHRcdHJldHVybiAndG9wbGVmdCc7XHJcblx0XHR9IGVsc2UgaWYgKG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9lbGVtV2lkdGggJiYgbW91c2VQb3MubGVmdCA+IHRoaXMuX2VsZW1XaWR0aCAtIHRoaXMuX2JvcmRlclNpemUpIHtcclxuXHRcdFx0cmV0dXJuICdyaWdodCc7XHJcblx0XHR9IGVsc2UgaWYgKG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9ib3JkZXJTaXplKSB7XHJcblx0XHRcdHJldHVybiAnbGVmdCc7XHJcblx0XHR9IGVsc2UgaWYgKG1vdXNlUG9zLnRvcCA8IHRoaXMuX2VsZW1IZWlnaHQgJiYgbW91c2VQb3MudG9wID4gdGhpcy5fZWxlbUhlaWdodCAtIHRoaXMuX2JvcmRlclNpemUpIHtcclxuXHRcdFx0cmV0dXJuICdib3R0b20nO1xyXG5cdFx0fSBlbHNlIGlmIChtb3VzZVBvcy50b3AgPCB0aGlzLl9ib3JkZXJTaXplKSB7XHJcblx0XHRcdHJldHVybiAndG9wJztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbk1vdXNlTW92ZShlOiBhbnkpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB7XHJcblx0XHRcdGlmICh0aGlzLl9uZ0dyaWQucmVzaXplRW5hYmxlKSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzaXplRGlyZWN0aW9uID0gdGhpcy5jYW5SZXNpemUoZSk7XHJcblxyXG5cdFx0XHRcdGxldCBjdXJzb3I6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xyXG5cdFx0XHRcdHN3aXRjaCAocmVzaXplRGlyZWN0aW9uKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiYm90dG9tcmlnaHRcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJ0b3BsZWZ0XCI6XHJcblx0XHRcdFx0XHRcdGN1cnNvciA9IFwibndzZS1yZXNpemVcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwidG9wcmlnaHRcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJib3R0b21sZWZ0XCI6XHJcblx0XHRcdFx0XHRcdGN1cnNvciA9IFwibmVzdy1yZXNpemVcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwidG9wXCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiYm90dG9tXCI6XHJcblx0XHRcdFx0XHRcdGN1cnNvciA9IFwibnMtcmVzaXplXCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcImxlZnRcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJyaWdodFwiOlxyXG5cdFx0XHRcdFx0XHRjdXJzb3IgPSBcImV3LXJlc2l6ZVwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLl9uZ0dyaWQuZHJhZ0VuYWJsZSAmJiB0aGlzLmNhbkRyYWcoZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRjdXJzb3IgPSAnbW92ZSc7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCBjdXJzb3IpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuX25nR3JpZC5kcmFnRW5hYmxlICYmIHRoaXMuY2FuRHJhZyhlKSkge1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICdtb3ZlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX2FkZGVkKSB0aGlzLl9uZ0dyaWQucmVtb3ZlSXRlbSh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8vXHRHZXR0ZXJzXHJcblx0cHVibGljIGdldEVsZW1lbnQoKTogRWxlbWVudFJlZiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbmdFbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXREcmFnSGFuZGxlKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZHJhZ0hhbmRsZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRSZXNpemVIYW5kbGUoKTogUmVzaXplSGFuZGxlIHtcclxuXHRcdHJldHVybiB0aGlzLl9yZXNpemVIYW5kbGU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0RGltZW5zaW9ucygpOiBOZ0dyaWRJdGVtRGltZW5zaW9ucyB7XHJcblx0XHRyZXR1cm4geyAnd2lkdGgnOiB0aGlzLl9lbGVtV2lkdGgsICdoZWlnaHQnOiB0aGlzLl9lbGVtSGVpZ2h0IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0U2l6ZSgpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2l6ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRQb3NpdGlvbigpOiBOZ0dyaWRSYXdQb3NpdGlvbiB7XHJcblx0XHRyZXR1cm4geyAnbGVmdCc6IHRoaXMuX2VsZW1MZWZ0LCAndG9wJzogdGhpcy5fZWxlbVRvcCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEdyaWRQb3NpdGlvbigpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbjtcclxuXHR9XHJcblxyXG5cdC8vXHRTZXR0ZXJzXHJcblx0cHVibGljIHNldENvbmZpZyhjb25maWc6IE5nR3JpZEl0ZW1Db25maWcpOiB2b2lkIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcblx0XHR0aGlzLl9wYXlsb2FkID0gY29uZmlnLnBheWxvYWQ7XHJcblx0XHR0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sID0gY29uZmlnLmNvbCA/IGNvbmZpZy5jb2wgOiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHLmNvbDtcclxuXHRcdHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3cgPSBjb25maWcucm93ID8gY29uZmlnLnJvdyA6IE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcucm93O1xyXG5cdFx0dGhpcy5fc2l6ZS54ID0gY29uZmlnLnNpemV4ID8gY29uZmlnLnNpemV4IDogTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRy5zaXpleDtcclxuXHRcdHRoaXMuX3NpemUueSA9IGNvbmZpZy5zaXpleSA/IGNvbmZpZy5zaXpleSA6IE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcuc2l6ZXk7XHJcblx0XHR0aGlzLl9kcmFnSGFuZGxlID0gY29uZmlnLmRyYWdIYW5kbGU7XHJcblx0XHR0aGlzLl9yZXNpemVIYW5kbGUgPSBjb25maWcucmVzaXplSGFuZGxlO1xyXG5cdFx0dGhpcy5fYm9yZGVyU2l6ZSA9IGNvbmZpZy5ib3JkZXJTaXplO1xyXG5cdFx0dGhpcy5pc0RyYWdnYWJsZSA9IGNvbmZpZy5kcmFnZ2FibGUgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR0aGlzLmlzUmVzaXphYmxlID0gY29uZmlnLnJlc2l6YWJsZSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdHRoaXMuaXNGaXhlZCA9IGNvbmZpZy5maXhlZCA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLl9tYXhDb2xzID0gIWlzTmFOKGNvbmZpZy5tYXhDb2xzKSAmJiBpc0Zpbml0ZShjb25maWcubWF4Q29scykgPyBjb25maWcubWF4Q29scyA6IDA7XHJcblx0XHR0aGlzLl9taW5Db2xzID0gIWlzTmFOKGNvbmZpZy5taW5Db2xzKSAmJiBpc0Zpbml0ZShjb25maWcubWluQ29scykgPyBjb25maWcubWluQ29scyA6IDA7XHJcblx0XHR0aGlzLl9tYXhSb3dzID0gIWlzTmFOKGNvbmZpZy5tYXhSb3dzKSAmJiBpc0Zpbml0ZShjb25maWcubWF4Um93cykgPyBjb25maWcubWF4Um93cyA6IDA7XHJcblx0XHR0aGlzLl9taW5Sb3dzID0gIWlzTmFOKGNvbmZpZy5taW5Sb3dzKSAmJiBpc0Zpbml0ZShjb25maWcubWluUm93cykgPyBjb25maWcubWluUm93cyA6IDA7XHJcblxyXG5cdFx0dGhpcy5taW5XaWR0aCA9ICFpc05hTihjb25maWcubWluV2lkdGgpICYmIGlzRmluaXRlKGNvbmZpZy5taW5XaWR0aCkgPyBjb25maWcubWluV2lkdGggOiAwO1xyXG5cdFx0dGhpcy5taW5IZWlnaHQgPSAhaXNOYU4oY29uZmlnLm1pbkhlaWdodCkgJiYgaXNGaW5pdGUoY29uZmlnLm1pbkhlaWdodCkgPyBjb25maWcubWluSGVpZ2h0IDogMDtcclxuXHJcblx0XHRpZiAodGhpcy5fbWluQ29scyA+IDAgJiYgdGhpcy5fbWF4Q29scyA+IDAgJiYgdGhpcy5fbWluQ29scyA+IHRoaXMuX21heENvbHMpIHRoaXMuX21pbkNvbHMgPSAwO1xyXG5cdFx0aWYgKHRoaXMuX21pblJvd3MgPiAwICYmIHRoaXMuX21heFJvd3MgPiAwICYmIHRoaXMuX21pblJvd3MgPiB0aGlzLl9tYXhSb3dzKSB0aGlzLl9taW5Sb3dzID0gMDtcclxuXHJcblx0XHRpZiAodGhpcy5fYWRkZWQpIHtcclxuXHRcdFx0dGhpcy5fbmdHcmlkLnVwZGF0ZUl0ZW0odGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fc2l6ZSA9IHRoaXMuZml4UmVzaXplKHRoaXMuX3NpemUpO1xyXG5cclxuXHRcdHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuXHRcdHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5nRG9DaGVjaygpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLl9kaWZmZXIgIT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBjaGFuZ2VzOiBhbnkgPSB0aGlzLl9kaWZmZXIuZGlmZih0aGlzLl91c2VyQ29uZmlnKTtcclxuXHJcblx0XHRcdGlmIChjaGFuZ2VzICE9IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fYXBwbHlDaGFuZ2VzKGNoYW5nZXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFNpemUobmV3U2l6ZTogTmdHcmlkSXRlbVNpemUsIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuXHRcdG5ld1NpemUgPSB0aGlzLmZpeFJlc2l6ZShuZXdTaXplKTtcclxuXHRcdHRoaXMuX3NpemUgPSBuZXdTaXplO1xyXG5cdFx0aWYgKHVwZGF0ZSkgdGhpcy5fcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcblxyXG5cdFx0dGhpcy5vbkl0ZW1DaGFuZ2UuZW1pdCh0aGlzLmdldEV2ZW50T3V0cHV0KCkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEdyaWRQb3NpdGlvbihncmlkUG9zaXRpb246IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5fY3VycmVudFBvc2l0aW9uID0gZ3JpZFBvc2l0aW9uO1xyXG5cdFx0aWYgKHVwZGF0ZSkgdGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG5cclxuXHRcdHRoaXMub25JdGVtQ2hhbmdlLmVtaXQodGhpcy5nZXRFdmVudE91dHB1dCgpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRFdmVudE91dHB1dCgpOiBOZ0dyaWRJdGVtRXZlbnQge1xyXG5cdFx0cmV0dXJuIDxOZ0dyaWRJdGVtRXZlbnQ+e1xyXG5cdFx0XHR1aWQ6IHRoaXMudWlkLFxyXG5cdFx0XHRwYXlsb2FkOiB0aGlzLl9wYXlsb2FkLFxyXG5cdFx0XHRjb2w6IHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5jb2wsXHJcblx0XHRcdHJvdzogdGhpcy5fY3VycmVudFBvc2l0aW9uLnJvdyxcclxuXHRcdFx0c2l6ZXg6IHRoaXMuX3NpemUueCxcclxuXHRcdFx0c2l6ZXk6IHRoaXMuX3NpemUueSxcclxuXHRcdFx0d2lkdGg6IHRoaXMuX2VsZW1XaWR0aCxcclxuXHRcdFx0aGVpZ2h0OiB0aGlzLl9lbGVtSGVpZ2h0LFxyXG5cdFx0XHRsZWZ0OiB0aGlzLl9lbGVtTGVmdCxcclxuXHRcdFx0dG9wOiB0aGlzLl9lbGVtVG9wXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRzd2l0Y2ggKHRoaXMuX2Nhc2NhZGVNb2RlKSB7XHJcblx0XHRcdGNhc2UgJ3VwJzpcclxuXHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHggKyAncHgnKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB5ICsgJ3B4Jyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIHggKyAncHgnKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB5ICsgJ3B4Jyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Rvd24nOlxyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB4ICsgJ3B4Jyk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgeSArICdweCcpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2VsZW1MZWZ0ID0geDtcclxuXHRcdHRoaXMuX2VsZW1Ub3AgPSB5O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldENhc2NhZGVNb2RlKGNhc2NhZGU6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0dGhpcy5fY2FzY2FkZU1vZGUgPSBjYXNjYWRlO1xyXG5cdFx0c3dpdGNoIChjYXNjYWRlKSB7XHJcblx0XHRcdGNhc2UgJ3VwJzpcclxuXHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHRoaXMuX2VsZW1MZWZ0ICsgJ3B4Jyk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgdGhpcy5fZWxlbVRvcCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgbnVsbCk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgbnVsbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIHRoaXMuX2VsZW1MZWZ0ICsgJ3B4Jyk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgdGhpcy5fZWxlbVRvcCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBudWxsKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCBudWxsKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZG93bic6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHRoaXMuX2VsZW1MZWZ0ICsgJ3B4Jyk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgdGhpcy5fZWxlbVRvcCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgbnVsbCk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgbnVsbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0RGltZW5zaW9ucyh3OiBudW1iZXIsIGg6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHcgPCB0aGlzLm1pbldpZHRoKSB3ID0gdGhpcy5taW5XaWR0aDtcclxuXHRcdGlmIChoIDwgdGhpcy5taW5IZWlnaHQpIGggPSB0aGlzLm1pbkhlaWdodDtcclxuXHJcblx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHcgKyAncHgnKTtcclxuXHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGggKyAncHgnKTtcclxuXHJcblx0XHR0aGlzLl9lbGVtV2lkdGggPSB3O1xyXG5cdFx0dGhpcy5fZWxlbUhlaWdodCA9IGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhcnRNb3ZpbmcoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdtb3ZpbmcnKTtcclxuXHRcdGNvbnN0IHN0eWxlOiBhbnkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQpO1xyXG5cdFx0aWYgKHRoaXMuX25nR3JpZC5hdXRvU3R5bGUpIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3otaW5kZXgnLCAocGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnei1pbmRleCcpKSArIDEpLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0b3BNb3ZpbmcoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdtb3ZpbmcnKTtcclxuXHRcdGNvbnN0IHN0eWxlOiBhbnkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQpO1xyXG5cdFx0aWYgKHRoaXMuX25nR3JpZC5hdXRvU3R5bGUpIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3otaW5kZXgnLCAocGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnei1pbmRleCcpKSAtIDEpLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlY2FsY3VsYXRlU2VsZigpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuXHRcdHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGZpeFJlc2l6ZShuZXdTaXplOiBOZ0dyaWRJdGVtU2l6ZSk6IE5nR3JpZEl0ZW1TaXplIHtcclxuXHRcdGlmICh0aGlzLl9tYXhDb2xzID4gMCAmJiBuZXdTaXplLnggPiB0aGlzLl9tYXhDb2xzKSBuZXdTaXplLnggPSB0aGlzLl9tYXhDb2xzO1xyXG5cdFx0aWYgKHRoaXMuX21heFJvd3MgPiAwICYmIG5ld1NpemUueSA+IHRoaXMuX21heFJvd3MpIG5ld1NpemUueSA9IHRoaXMuX21heFJvd3M7XHJcblxyXG5cdFx0aWYgKHRoaXMuX21pbkNvbHMgPiAwICYmIG5ld1NpemUueCA8IHRoaXMuX21pbkNvbHMpIG5ld1NpemUueCA9IHRoaXMuX21pbkNvbHM7XHJcblx0XHRpZiAodGhpcy5fbWluUm93cyA+IDAgJiYgbmV3U2l6ZS55IDwgdGhpcy5fbWluUm93cykgbmV3U2l6ZS55ID0gdGhpcy5fbWluUm93cztcclxuXHJcblx0XHRjb25zdCBpdGVtV2lkdGggPSAobmV3U2l6ZS54ICogdGhpcy5fbmdHcmlkLmNvbFdpZHRoKSArICgodGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQpICogKG5ld1NpemUueCAtIDEpKTtcclxuXHRcdGlmIChpdGVtV2lkdGggPCB0aGlzLm1pbldpZHRoKSBuZXdTaXplLnggPSBNYXRoLmNlaWwoKHRoaXMubWluV2lkdGggKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCkgLyAodGhpcy5fbmdHcmlkLmNvbFdpZHRoICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQpKTtcclxuXHJcblx0XHRjb25zdCBpdGVtSGVpZ2h0ID0gKG5ld1NpemUueSAqIHRoaXMuX25nR3JpZC5yb3dIZWlnaHQpICsgKCh0aGlzLl9uZ0dyaWQubWFyZ2luVG9wICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSkgKiAobmV3U2l6ZS55IC0gMSkpO1xyXG5cdFx0aWYgKGl0ZW1IZWlnaHQgPCB0aGlzLm1pbkhlaWdodCkgbmV3U2l6ZS55ID0gTWF0aC5jZWlsKCh0aGlzLm1pbkhlaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20gKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wKSAvICh0aGlzLl9uZ0dyaWQucm93SGVpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3ApKTtcclxuXHJcblx0XHRyZXR1cm4gbmV3U2l6ZTtcclxuXHR9XHJcblxyXG5cdC8vXHRQcml2YXRlIG1ldGhvZHNcclxuXHRwcml2YXRlIGVsZW1lbnRNYXRjaGVzKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XHJcblx0XHRpZiAoZWxlbWVudC5tYXRjaGVzKSByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcclxuXHRcdGlmIChlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5cdFx0aWYgKGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHRcdGlmIChlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHRcdGlmIChlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcblx0XHRpZiAoIWVsZW1lbnQuZG9jdW1lbnQgfHwgIWVsZW1lbnQub3duZXJEb2N1bWVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0IG1hdGNoZXM6IGFueSA9IChlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0XHRsZXQgaTogbnVtYmVyID0gbWF0Y2hlcy5sZW5ndGg7XHJcblx0XHR3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSBlbGVtZW50KSB7IH1cclxuXHRcdHJldHVybiBpID4gLTE7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgeDogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5jb2xXaWR0aCArIHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0ICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0KSAqICh0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sIC0gMSkgKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5zY3JlZW5NYXJnaW47XHJcblx0XHRjb25zdCB5OiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLnJvd0hlaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3AgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tKSAqICh0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93IC0gMSkgKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wO1xyXG5cclxuXHRcdHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5fc2l6ZS54IDwgdGhpcy5fbmdHcmlkLm1pbkNvbHMpIHRoaXMuX3NpemUueCA9IHRoaXMuX25nR3JpZC5taW5Db2xzO1xyXG5cdFx0aWYgKHRoaXMuX3NpemUueSA8IHRoaXMuX25nR3JpZC5taW5Sb3dzKSB0aGlzLl9zaXplLnkgPSB0aGlzLl9uZ0dyaWQubWluUm93cztcclxuXHJcblx0XHRjb25zdCBuZXdXaWR0aDogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5jb2xXaWR0aCAqIHRoaXMuX3NpemUueCkgKyAoKHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0ICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0KSAqICh0aGlzLl9zaXplLnggLSAxKSk7XHJcblx0XHRjb25zdCBuZXdIZWlnaHQ6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQucm93SGVpZ2h0ICogdGhpcy5fc2l6ZS55KSArICgodGhpcy5fbmdHcmlkLm1hcmdpblRvcCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20pICogKHRoaXMuX3NpemUueSAtIDEpKTtcclxuXHJcblx0XHRjb25zdCB3OiBudW1iZXIgPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLl9uZ0dyaWQubWluV2lkdGgsIG5ld1dpZHRoKTtcclxuXHRcdGNvbnN0IGg6IG51bWJlciA9IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCB0aGlzLl9uZ0dyaWQubWluSGVpZ2h0LCBuZXdIZWlnaHQpO1xyXG5cclxuXHRcdHRoaXMuc2V0RGltZW5zaW9ucyh3LCBoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2dldE1vdXNlUG9zaXRpb24oZTogYW55KTogTmdHcmlkUmF3UG9zaXRpb24ge1xyXG5cdFx0aWYgKGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcykge1xyXG5cdFx0XHRjb25zdCBvZTogYW55ID0gZS5vcmlnaW5hbEV2ZW50O1xyXG5cdFx0XHRlID0gb2UudG91Y2hlcy5sZW5ndGggPyBvZS50b3VjaGVzWzBdIDogKG9lLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/IG9lLmNoYW5nZWRUb3VjaGVzWzBdIDogZSk7XHJcblx0XHR9IGVsc2UgaWYgKGUudG91Y2hlcykge1xyXG5cdFx0XHRlID0gZS50b3VjaGVzLmxlbmd0aCA/IGUudG91Y2hlc1swXSA6IChlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0Y29uc3QgcmVmUG9zOiBOZ0dyaWRSYXdQb3NpdGlvbiA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsZWZ0OiBlLmNsaWVudFggLSByZWZQb3MubGVmdCxcclxuXHRcdFx0dG9wOiBlLmNsaWVudFkgLSByZWZQb3MudG9wXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfYXBwbHlDaGFuZ2VzKGNoYW5nZXM6IGFueSk6IGJvb2xlYW4ge1xyXG5cdFx0bGV0IGNoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdGNvbnN0IGNoYW5nZUNoZWNrID0gKHJlY29yZDogYW55KSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLl9jb25maWdbcmVjb3JkLmtleV0gIT09IHJlY29yZC5jdXJyZW50VmFsdWUpIHtcclxuXHRcdFx0XHR0aGlzLl9jb25maWdbcmVjb3JkLmtleV0gPSByZWNvcmQuY3VycmVudFZhbHVlO1xyXG5cdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Y2hhbmdlcy5mb3JFYWNoQWRkZWRJdGVtKGNoYW5nZUNoZWNrKTtcclxuXHRcdGNoYW5nZXMuZm9yRWFjaENoYW5nZWRJdGVtKGNoYW5nZUNoZWNrKTtcclxuXHRcdGNoYW5nZXMuZm9yRWFjaFJlbW92ZWRJdGVtKChyZWNvcmQ6IGFueSkgPT4ge1xyXG5cdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChjaGFuZ2VkKSB7XHJcblx0XHRcdHRoaXMuc2V0Q29uZmlnKHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNoYW5nZWQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uQ29uZmlnQ2hhbmdlRXZlbnQoKSB7XHJcblx0XHRpZiAodGhpcy5fdXNlckNvbmZpZyA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuX2NvbmZpZy5zaXpleCA9IHRoaXMuX3VzZXJDb25maWcuc2l6ZXggPSB0aGlzLl9zaXplLng7XHJcblx0XHR0aGlzLl9jb25maWcuc2l6ZXkgPSB0aGlzLl91c2VyQ29uZmlnLnNpemV5ID0gdGhpcy5fc2l6ZS55O1xyXG5cdFx0dGhpcy5fY29uZmlnLmNvbCA9IHRoaXMuX3VzZXJDb25maWcuY29sID0gdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbDtcclxuXHRcdHRoaXMuX2NvbmZpZy5yb3cgPSB0aGlzLl91c2VyQ29uZmlnLnJvdyA9IHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3c7XHJcblx0XHR0aGlzLm5nR3JpZEl0ZW1DaGFuZ2UuZW1pdCh0aGlzLl91c2VyQ29uZmlnKTtcclxuXHR9XHJcbn1cclxuIl19