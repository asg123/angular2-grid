/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgGrid } from './NgGrid';
import { Directive, ElementRef, Renderer2, EventEmitter, KeyValueDiffers, ViewContainerRef, Output } from '@angular/core';
var NgGridItem = /** @class */ (function () {
    // Constructor
    function NgGridItem(_differs, _ngEl, _renderer, _ngGrid, containerRef) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._ngGrid = _ngGrid;
        this.containerRef = containerRef;
        // Event Emitters
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
        this._resizeDirections = [];
        this._zIndex = 0;
    }
    Object.defineProperty(NgGridItem.prototype, "zIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zIndex;
        },
        set: /**
         * @param {?} zIndex
         * @return {?}
         */
        function (zIndex) {
            this._renderer.setStyle(this._ngEl.nativeElement, 'z-index', zIndex.toString());
            this._zIndex = zIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgGridItem.prototype, "config", {
        // [ng-grid-item] handler
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._userConfig = v;
            var /** @type {?} */ configObject = Object.assign({}, NgGridItem.CONST_DEFAULT_CONFIG, v);
            for (var /** @type {?} */ x in NgGridItem.CONST_DEFAULT_CONFIG)
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
        var /** @type {?} */ event = this.getEventOutput();
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
        var /** @type {?} */ event = this.getEventOutput();
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
        var /** @type {?} */ event = this.getEventOutput();
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
        var /** @type {?} */ event = this.getEventOutput();
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
        var /** @type {?} */ event = this.getEventOutput();
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
        var /** @type {?} */ event = this.getEventOutput();
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
        // Force a config update in case there is no config assigned
        this.config = this._userConfig;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype.canDrag = /**
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
            var /** @type {?} */ targetElem = startElement;
            while (targetElem && targetElem != this._ngEl.nativeElement) {
                if (this.elementMatches(targetElem, handleSelector))
                    return true;
                targetElem = targetElem.parentElement;
            }
        }
        catch (/** @type {?} */ err) { }
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
            if (typeof this._resizeHandle === 'string') {
                return this.findHandle(this._resizeHandle, e.target) ? 'bottomright' : null;
            }
            if (typeof this._resizeHandle !== 'object')
                return null;
            var /** @type {?} */ resizeDirections = ['bottomright', 'bottomleft', 'topright', 'topleft', 'right', 'left', 'bottom', 'top'];
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
        var /** @type {?} */ mousePos = this._getMousePosition(e);
        try {
            for (var _b = tslib_1.__values(this._resizeDirections), _c = _b.next(); !_c.done; _c = _b.next()) {
                var direction = _c.value;
                if (this.canResizeInDirection(direction, mousePos)) {
                    return direction;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
        var e_1, _a, e_2, _d;
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
                var /** @type {?} */ resizeDirection = this.canResize(e);
                var /** @type {?} */ cursor = 'default';
                switch (resizeDirection) {
                    case 'bottomright':
                    case 'topleft':
                        cursor = 'nwse-resize';
                        break;
                    case 'topright':
                    case 'bottomleft':
                        cursor = 'nesw-resize';
                        break;
                    case 'top':
                    case 'bottom':
                        cursor = 'ns-resize';
                        break;
                    case 'left':
                    case 'right':
                        cursor = 'ew-resize';
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
    /**
     * @return {?}
     */
    NgGridItem.prototype.getElement = /**
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
    /**
     * @param {?} config
     * @return {?}
     */
    NgGridItem.prototype.setConfig = /**
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
        this._resizeDirections = config.resizeDirections || this._ngGrid.resizeDirections;
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
            var /** @type {?} */ changes = this._differ.diff(this._userConfig);
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
        return /** @type {?} */ ({
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
        });
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
        var /** @type {?} */ style = window.getComputedStyle(this._ngEl.nativeElement);
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
        var /** @type {?} */ style = window.getComputedStyle(this._ngEl.nativeElement);
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
        var /** @type {?} */ itemWidth = (newSize.x * this._ngGrid.colWidth) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (newSize.x - 1));
        if (itemWidth < this.minWidth)
            newSize.x = Math.ceil((this.minWidth + this._ngGrid.marginRight + this._ngGrid.marginLeft) / (this._ngGrid.colWidth + this._ngGrid.marginRight + this._ngGrid.marginLeft));
        var /** @type {?} */ itemHeight = (newSize.y * this._ngGrid.rowHeight) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (newSize.y - 1));
        if (itemHeight < this.minHeight)
            newSize.y = Math.ceil((this.minHeight + this._ngGrid.marginBottom + this._ngGrid.marginTop) / (this._ngGrid.rowHeight + this._ngGrid.marginBottom + this._ngGrid.marginTop));
        return newSize;
    };
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    NgGridItem.prototype.elementMatches = /**
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
        var /** @type {?} */ matches = (element.document || element.ownerDocument).querySelectorAll(selector);
        var /** @type {?} */ i = matches.length;
        while (--i >= 0 && matches.item(i) !== element) { }
        return i > -1;
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype._recalculatePosition = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ x = (this._ngGrid.colWidth + this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._currentPosition.col - 1) + this._ngGrid.marginLeft + this._ngGrid.screenMargin;
        var /** @type {?} */ y = (this._ngGrid.rowHeight + this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._currentPosition.row - 1) + this._ngGrid.marginTop;
        this.setPosition(x, y);
    };
    /**
     * @return {?}
     */
    NgGridItem.prototype._recalculateDimensions = /**
     * @return {?}
     */
    function () {
        if (this._size.x < this._ngGrid.minCols)
            this._size.x = this._ngGrid.minCols;
        if (this._size.y < this._ngGrid.minRows)
            this._size.y = this._ngGrid.minRows;
        var /** @type {?} */ newWidth = (this._ngGrid.colWidth * this._size.x) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._size.x - 1));
        var /** @type {?} */ newHeight = (this._ngGrid.rowHeight * this._size.y) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._size.y - 1));
        var /** @type {?} */ w = Math.max(this.minWidth, this._ngGrid.minWidth, newWidth);
        var /** @type {?} */ h = Math.max(this.minHeight, this._ngGrid.minHeight, newHeight);
        this.setDimensions(w, h);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgGridItem.prototype._getMousePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.originalEvent && e.originalEvent.touches) {
            var /** @type {?} */ oe = e.originalEvent;
            e = oe.touches.length ? oe.touches[0] : (oe.changedTouches.length ? oe.changedTouches[0] : e);
        }
        else if (e.touches) {
            e = e.touches.length ? e.touches[0] : (e.changedTouches.length ? e.changedTouches[0] : e);
        }
        var /** @type {?} */ refPos = this._ngEl.nativeElement.getBoundingClientRect();
        return {
            left: e.clientX - refPos.left,
            top: e.clientY - refPos.top
        };
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgGridItem.prototype._applyChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ changed = false;
        var /** @type {?} */ changeCheck = function (record) {
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
     * @return {?}
     */
    NgGridItem.prototype.onConfigChangeEvent = /**
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
    /**
     * @param {?} direction
     * @param {?} mousePos
     * @return {?}
     */
    NgGridItem.prototype.canResizeInDirection = /**
     * @param {?} direction
     * @param {?} mousePos
     * @return {?}
     */
    function (direction, mousePos) {
        switch (direction) {
            case 'bottomright':
                return mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize
                    && mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize; // tslint:disable-line:indent
            case 'bottomleft':
                return mousePos.left < this._borderSize && mousePos.top < this._elemHeight
                    && mousePos.top > this._elemHeight - this._borderSize; // tslint:disable-line:indent
            case 'topright':
                return mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize
                    && mousePos.top < this._borderSize; // tslint:disable-line:indent
            case 'topleft':
                return mousePos.left < this._borderSize && mousePos.top < this._borderSize;
            case 'right':
                return mousePos.left < this._elemWidth && mousePos.left > this._elemWidth - this._borderSize;
            case 'left':
                return mousePos.left < this._borderSize;
            case 'bottom':
                return mousePos.top < this._elemHeight && mousePos.top > this._elemHeight - this._borderSize;
            case 'top':
                return mousePos.top < this._borderSize;
            default:
                return false;
        }
    };
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
        borderSize: 25,
        resizeDirections: null,
    };
    NgGridItem.decorators = [
        { type: Directive, args: [{
                    selector: '[ngGridItem]',
                    inputs: ['config: ngGridItem']
                },] },
    ];
    /** @nocollapse */
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
function NgGridItem_tsickle_Closure_declarations() {
    /** @type {?} */
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
    /** @type {?} */
    NgGridItem.prototype._payload;
    /** @type {?} */
    NgGridItem.prototype._currentPosition;
    /** @type {?} */
    NgGridItem.prototype._size;
    /** @type {?} */
    NgGridItem.prototype._config;
    /** @type {?} */
    NgGridItem.prototype._userConfig;
    /** @type {?} */
    NgGridItem.prototype._dragHandle;
    /** @type {?} */
    NgGridItem.prototype._resizeHandle;
    /** @type {?} */
    NgGridItem.prototype._borderSize;
    /** @type {?} */
    NgGridItem.prototype._elemWidth;
    /** @type {?} */
    NgGridItem.prototype._elemHeight;
    /** @type {?} */
    NgGridItem.prototype._elemLeft;
    /** @type {?} */
    NgGridItem.prototype._elemTop;
    /** @type {?} */
    NgGridItem.prototype._added;
    /** @type {?} */
    NgGridItem.prototype._differ;
    /** @type {?} */
    NgGridItem.prototype._cascadeMode;
    /** @type {?} */
    NgGridItem.prototype._maxCols;
    /** @type {?} */
    NgGridItem.prototype._minCols;
    /** @type {?} */
    NgGridItem.prototype._maxRows;
    /** @type {?} */
    NgGridItem.prototype._minRows;
    /** @type {?} */
    NgGridItem.prototype._resizeDirections;
    /** @type {?} */
    NgGridItem.prototype._zIndex;
    /** @type {?} */
    NgGridItem.prototype._differs;
    /** @type {?} */
    NgGridItem.prototype._ngEl;
    /** @type {?} */
    NgGridItem.prototype._renderer;
    /** @type {?} */
    NgGridItem.prototype._ngGrid;
    /** @type {?} */
    NgGridItem.prototype.containerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmdHcmlkSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWdyaWQvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL05nR3JpZEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWtCLGVBQWUsRUFBcUIsZ0JBQWdCLEVBQUUsTUFBTSxFQUFXLE1BQU0sZUFBZSxDQUFDOztJQWtJbEssY0FBYztJQUNkLG9CQUNZLFVBQ0EsT0FDQSxXQUNBLFNBQ0Q7UUFKQyxhQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUssR0FBTCxLQUFLO1FBQ0wsY0FBUyxHQUFULFNBQVM7UUFDVCxZQUFPLEdBQVAsT0FBTztRQUNSLGlCQUFZLEdBQVosWUFBWTs7NEJBaEl3QyxJQUFJLFlBQVksQ0FBa0IsS0FBSyxDQUFDOzJCQUN6QyxJQUFJLFlBQVksRUFBbUI7c0JBQ3hDLElBQUksWUFBWSxFQUFtQjswQkFDL0IsSUFBSSxZQUFZLEVBQW1CO3lCQUNwQyxJQUFJLFlBQVksRUFBbUI7NkJBQy9CLElBQUksWUFBWSxFQUFtQjt3QkFDeEMsSUFBSSxZQUFZLEVBQW1COzRCQUMvQixJQUFJLFlBQVksRUFBbUI7MkJBQ3BDLElBQUksWUFBWSxFQUFtQjs2QkFDakMsSUFBSSxZQUFZLEVBQW1CO3dCQUN4QyxJQUFJLFlBQVksRUFBbUI7NEJBQy9CLElBQUksWUFBWSxFQUFtQjsyQkFDcEMsSUFBSSxZQUFZLEVBQW1CO2dDQUM3QixJQUFJLFlBQVksRUFBb0I7dUJBa0I5RSxLQUFLOzJCQUNELElBQUk7MkJBQ0osSUFBSTt3QkFDUixDQUFDO3lCQUNBLENBQUM7bUJBQ1AsSUFBSTtnQ0FJc0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7cUJBQ2pDLEVBQUUsQ0FBQyxF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QUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDL0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxD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QUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFOUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU5RSxxQkFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakksRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFMU0scUJBQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMs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QUM7UUFDUixVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtRQUNsQixLQUFLLEVBQUUsS0FBSztRQUNaLFNBQVMsRUFBRSxJQUFJO1FBQ2YsU0FBUyxFQUFFLElBQUk7UUFDZixVQUFVLEVBQUUsRUFBRTtRQUNkLGdCQUFnQixFQUFFLElBQUk7S0FDekI7O2dCQW5DSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNqQzs7OztnQkFMd0UsZUFBZTtnQkFBcEUsVUFBVTtnQkFBRSxTQUFTO2dCQUZoQyxNQUFNO2dCQUU4RixnQkFBZ0I7OzsrQkFReEgsTUFBTTs4QkFDTixNQUFNO3lCQUNOLE1BQU07NkJBQ04sTUFBTTs0QkFDTixNQUFNO2dDQUNOLE1BQU07MkJBQ04sTUFBTTsrQkFDTixNQUFNOzhCQUNOLE1BQU07Z0NBQ04sTUFBTTsyQkFDTixNQUFNOytCQUNOLE1BQU07OEJBQ04sTUFBTTttQ0FDTixNQUFNOztxQkF2Qlg7O1NBUWEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nR3JpZCB9IGZyb20gJy4vTmdHcmlkJztcclxuaW1wb3J0IHsgTmdHcmlkSXRlbUNvbmZpZywgTmdHcmlkSXRlbUV2ZW50LCBOZ0dyaWRJdGVtUG9zaXRpb24sIE5nR3JpZEl0ZW1TaXplLCBOZ0dyaWRSYXdQb3NpdGlvbiwgTmdHcmlkSXRlbURpbWVuc2lvbnMsIFJlc2l6ZUhhbmRsZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvSU5nR3JpZCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBFdmVudEVtaXR0ZXIsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbmdHcmlkSXRlbV0nLFxyXG4gICAgaW5wdXRzOiBbJ2NvbmZpZzogbmdHcmlkSXRlbSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0dyaWRJdGVtIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gICAgLy8gRXZlbnQgRW1pdHRlcnNcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PihmYWxzZSk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWc6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZ1N0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZ0FueTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemU6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplU3RvcDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemVBbnk6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlU3RhcnQ6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZVN0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlQW55OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBuZ0dyaWRJdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUNvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1Db25maWc+KCk7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBjb25maWdcclxuICAgIHByaXZhdGUgc3RhdGljIENPTlNUX0RFRkFVTFRfQ09ORklHOiBOZ0dyaWRJdGVtQ29uZmlnID0ge1xyXG4gICAgICAgIHVpZDogbnVsbCxcclxuICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgcm93OiAxLFxyXG4gICAgICAgIHNpemV4OiAxLFxyXG4gICAgICAgIHNpemV5OiAxLFxyXG4gICAgICAgIGRyYWdIYW5kbGU6IG51bGwsXHJcbiAgICAgICAgcmVzaXplSGFuZGxlOiBudWxsLFxyXG4gICAgICAgIGZpeGVkOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIGJvcmRlclNpemU6IDI1LFxyXG4gICAgICAgIHJlc2l6ZURpcmVjdGlvbnM6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBpc0ZpeGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNEcmFnZ2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGlzUmVzaXphYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgdWlkOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzXHJcbiAgICBwcml2YXRlIF9wYXlsb2FkOiBhbnk7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50UG9zaXRpb246IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IHsgY29sOiAxLCByb3c6IDEgfTtcclxuICAgIHByaXZhdGUgX3NpemU6IE5nR3JpZEl0ZW1TaXplID0geyB4OiAxLCB5OiAxIH07XHJcbiAgICBwcml2YXRlIF9jb25maWcgPSBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHO1xyXG4gICAgcHJpdmF0ZSBfdXNlckNvbmZpZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9kcmFnSGFuZGxlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9yZXNpemVIYW5kbGU6IFJlc2l6ZUhhbmRsZTtcclxuICAgIHByaXZhdGUgX2JvcmRlclNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2VsZW1XaWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZWxlbUhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZWxlbUxlZnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2VsZW1Ub3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FkZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9kaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuICAgIHByaXZhdGUgX2Nhc2NhZGVNb2RlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9tYXhDb2xzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbWluQ29sczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX21heFJvd3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9taW5Sb3dzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplRGlyZWN0aW9uczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgX3pJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzZXQgekluZGV4KHpJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsIHpJbmRleC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLl96SW5kZXggPSB6SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHpJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl96SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gW25nLWdyaWQtaXRlbV0gaGFuZGxlclxyXG4gICAgc2V0IGNvbmZpZyh2OiBOZ0dyaWRJdGVtQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckNvbmZpZyA9IHY7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZ09iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcsIHYpO1xyXG4gICAgICAgIGZvciAobGV0IHggaW4gTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRylcclxuICAgICAgICAgICAgaWYgKGNvbmZpZ09iamVjdFt4XSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY29uZmlnT2JqZWN0W3hdID0gTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJR1t4XTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb25maWcoY29uZmlnT2JqZWN0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJDb25maWcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlmZmVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RpZmZlciA9IHRoaXMuX2RpZmZlcnMuZmluZCh0aGlzLl91c2VyQ29uZmlnKS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGlmZmVyLmRpZmYodGhpcy5fdXNlckNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2FkZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fbmdHcmlkLmFkZEl0ZW0odGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpemV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemUueDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZXkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZS55O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2woKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcm93KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3c7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnRDb2woKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudFJvdygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9kaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfbmdFbDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgX25nR3JpZDogTmdHcmlkLFxyXG4gICAgICAgIHB1YmxpYyBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlc2l6ZVN0YXJ0RXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplU3RhcnQuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZUFueS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlU3RhcnQuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFueS5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZUV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFueS5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZVN0b3BFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemVTdG9wLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemVBbnkuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVN0b3AuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFueS5lbWl0KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNvbmZpZ0NoYW5nZUV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25EcmFnU3RhcnRFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdBbnkuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVN0YXJ0LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25EcmFnRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uRHJhZ0FueS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25EcmFnU3RvcEV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdTdG9wLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25EcmFnQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VTdG9wLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMub25Db25maWdDaGFuZ2VFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uQ2FzY2FkZUV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Db25maWdDaGFuZ2VFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdncmlkLWl0ZW0nKTtcclxuICAgICAgICBpZiAodGhpcy5fbmdHcmlkLmF1dG9TdHlsZSkgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIEZvcmNlIGEgY29uZmlnIHVwZGF0ZSBpbiBjYXNlIHRoZXJlIGlzIG5vIGNvbmZpZyBhc3NpZ25lZFxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fdXNlckNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcHVibGljIGNhbkRyYWcoZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dhYmxlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnSGFuZGxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRIYW5kbGUodGhpcy5fZHJhZ0hhbmRsZSwgZS50YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRIYW5kbGUoaGFuZGxlU2VsZWN0b3I6IHN0cmluZywgc3RhcnRFbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRFbGVtOiBhbnkgPSBzdGFydEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0RWxlbSAmJiB0YXJnZXRFbGVtICE9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudE1hdGNoZXModGFyZ2V0RWxlbSwgaGFuZGxlU2VsZWN0b3IpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtID0gdGFyZ2V0RWxlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblJlc2l6ZShlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Jlc2l6YWJsZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9yZXNpemVIYW5kbGUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9yZXNpemVIYW5kbGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kSGFuZGxlKHRoaXMuX3Jlc2l6ZUhhbmRsZSwgZS50YXJnZXQpID8gJ2JvdHRvbXJpZ2h0JyA6IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fcmVzaXplSGFuZGxlICE9PSAnb2JqZWN0JykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNpemVEaXJlY3Rpb25zID0gWyAnYm90dG9tcmlnaHQnLCAnYm90dG9tbGVmdCcsICd0b3ByaWdodCcsICd0b3BsZWZ0JywgJ3JpZ2h0JywgJ2xlZnQnLCAnYm90dG9tJywgJ3RvcCcgXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIHJlc2l6ZURpcmVjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gaW4gdGhpcy5fcmVzaXplSGFuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmluZEhhbmRsZSh0aGlzLl9yZXNpemVIYW5kbGVbZGlyZWN0aW9uXSwgZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9ib3JkZXJTaXplIDw9IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtb3VzZVBvczogTmdHcmlkUmF3UG9zaXRpb24gPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgdGhpcy5fcmVzaXplRGlyZWN0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5SZXNpemVJbkRpcmVjdGlvbihkaXJlY3Rpb24sIG1vdXNlUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTW91c2VNb3ZlKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZ0dyaWQucmVzaXplRW5hYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNpemVEaXJlY3Rpb24gPSB0aGlzLmNhblJlc2l6ZShlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3Vyc29yOiBzdHJpbmcgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc2l6ZURpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbXJpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3BsZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gJ253c2UtcmVzaXplJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbWxlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSAnbmVzdy1yZXNpemUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9ICducy1yZXNpemUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9ICdldy1yZXNpemUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmdHcmlkLmRyYWdFbmFibGUgJiYgdGhpcy5jYW5EcmFnKGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgY3Vyc29yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ0dyaWQuZHJhZ0VuYWJsZSAmJiB0aGlzLmNhbkRyYWcoZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICdtb3ZlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fYWRkZWQpIHRoaXMuX25nR3JpZC5yZW1vdmVJdGVtKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICAgIEdldHRlcnNcclxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IEVsZW1lbnRSZWYge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uZ0VsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREcmFnSGFuZGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYWdIYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc2l6ZUhhbmRsZSgpOiBSZXNpemVIYW5kbGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNpemVIYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERpbWVuc2lvbnMoKTogTmdHcmlkSXRlbURpbWVuc2lvbnMge1xyXG4gICAgICAgIHJldHVybiB7ICd3aWR0aCc6IHRoaXMuX2VsZW1XaWR0aCwgJ2hlaWdodCc6IHRoaXMuX2VsZW1IZWlnaHQgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IE5nR3JpZFJhd1Bvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4geyAnbGVmdCc6IHRoaXMuX2VsZW1MZWZ0LCAndG9wJzogdGhpcy5fZWxlbVRvcCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRHcmlkUG9zaXRpb24oKTogTmdHcmlkSXRlbVBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICAgIFNldHRlcnNcclxuICAgIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBOZ0dyaWRJdGVtQ29uZmlnKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLl9wYXlsb2FkID0gY29uZmlnLnBheWxvYWQ7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbCA9IGNvbmZpZy5jb2wgPyBjb25maWcuY29sIDogTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRy5jb2w7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBvc2l0aW9uLnJvdyA9IGNvbmZpZy5yb3cgPyBjb25maWcucm93IDogTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRy5yb3c7XHJcbiAgICAgICAgdGhpcy5fc2l6ZS54ID0gY29uZmlnLnNpemV4ID8gY29uZmlnLnNpemV4IDogTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRy5zaXpleDtcclxuICAgICAgICB0aGlzLl9zaXplLnkgPSBjb25maWcuc2l6ZXkgPyBjb25maWcuc2l6ZXkgOiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHLnNpemV5O1xyXG4gICAgICAgIHRoaXMuX2RyYWdIYW5kbGUgPSBjb25maWcuZHJhZ0hhbmRsZTtcclxuICAgICAgICB0aGlzLl9yZXNpemVIYW5kbGUgPSBjb25maWcucmVzaXplSGFuZGxlO1xyXG4gICAgICAgIHRoaXMuX2JvcmRlclNpemUgPSBjb25maWcuYm9yZGVyU2l6ZTtcclxuICAgICAgICB0aGlzLmlzRHJhZ2dhYmxlID0gY29uZmlnLmRyYWdnYWJsZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUmVzaXphYmxlID0gY29uZmlnLnJlc2l6YWJsZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRml4ZWQgPSBjb25maWcuZml4ZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVzaXplRGlyZWN0aW9ucyA9IGNvbmZpZy5yZXNpemVEaXJlY3Rpb25zIHx8IHRoaXMuX25nR3JpZC5yZXNpemVEaXJlY3Rpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl9tYXhDb2xzID0gIWlzTmFOKGNvbmZpZy5tYXhDb2xzKSAmJiBpc0Zpbml0ZShjb25maWcubWF4Q29scykgPyBjb25maWcubWF4Q29scyA6IDA7XHJcbiAgICAgICAgdGhpcy5fbWluQ29scyA9ICFpc05hTihjb25maWcubWluQ29scykgJiYgaXNGaW5pdGUoY29uZmlnLm1pbkNvbHMpID8gY29uZmlnLm1pbkNvbHMgOiAwO1xyXG4gICAgICAgIHRoaXMuX21heFJvd3MgPSAhaXNOYU4oY29uZmlnLm1heFJvd3MpICYmIGlzRmluaXRlKGNvbmZpZy5tYXhSb3dzKSA/IGNvbmZpZy5tYXhSb3dzIDogMDtcclxuICAgICAgICB0aGlzLl9taW5Sb3dzID0gIWlzTmFOKGNvbmZpZy5taW5Sb3dzKSAmJiBpc0Zpbml0ZShjb25maWcubWluUm93cykgPyBjb25maWcubWluUm93cyA6IDA7XHJcblxyXG4gICAgICAgIHRoaXMubWluV2lkdGggPSAhaXNOYU4oY29uZmlnLm1pbldpZHRoKSAmJiBpc0Zpbml0ZShjb25maWcubWluV2lkdGgpID8gY29uZmlnLm1pbldpZHRoIDogMDtcclxuICAgICAgICB0aGlzLm1pbkhlaWdodCA9ICFpc05hTihjb25maWcubWluSGVpZ2h0KSAmJiBpc0Zpbml0ZShjb25maWcubWluSGVpZ2h0KSA/IGNvbmZpZy5taW5IZWlnaHQgOiAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWluQ29scyA+IDAgJiYgdGhpcy5fbWF4Q29scyA+IDAgJiYgdGhpcy5fbWluQ29scyA+IHRoaXMuX21heENvbHMpIHRoaXMuX21pbkNvbHMgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLl9taW5Sb3dzID4gMCAmJiB0aGlzLl9tYXhSb3dzID4gMCAmJiB0aGlzLl9taW5Sb3dzID4gdGhpcy5fbWF4Um93cykgdGhpcy5fbWluUm93cyA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hZGRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZ0dyaWQudXBkYXRlSXRlbSh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NpemUgPSB0aGlzLmZpeFJlc2l6ZSh0aGlzLl9zaXplKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RpZmZlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXM6IGFueSA9IHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuX3VzZXJDb25maWcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTaXplKG5ld1NpemU6IE5nR3JpZEl0ZW1TaXplLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgbmV3U2l6ZSA9IHRoaXMuZml4UmVzaXplKG5ld1NpemUpO1xyXG4gICAgICAgIHRoaXMuX3NpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIGlmICh1cGRhdGUpIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLm9uSXRlbUNoYW5nZS5lbWl0KHRoaXMuZ2V0RXZlbnRPdXRwdXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEdyaWRQb3NpdGlvbihncmlkUG9zaXRpb246IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9IGdyaWRQb3NpdGlvbjtcclxuICAgICAgICBpZiAodXBkYXRlKSB0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMub25JdGVtQ2hhbmdlLmVtaXQodGhpcy5nZXRFdmVudE91dHB1dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRPdXRwdXQoKTogTmdHcmlkSXRlbUV2ZW50IHtcclxuICAgICAgICByZXR1cm4gPE5nR3JpZEl0ZW1FdmVudD57XHJcbiAgICAgICAgICAgIHVpZDogdGhpcy51aWQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHRoaXMuX3BheWxvYWQsXHJcbiAgICAgICAgICAgIGNvbDogdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbCxcclxuICAgICAgICAgICAgcm93OiB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93LFxyXG4gICAgICAgICAgICBzaXpleDogdGhpcy5fc2l6ZS54LFxyXG4gICAgICAgICAgICBzaXpleTogdGhpcy5fc2l6ZS55LFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fZWxlbVdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2VsZW1IZWlnaHQsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMuX2VsZW1MZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHRoaXMuX2VsZW1Ub3BcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fY2FzY2FkZU1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB4ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB5ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCB4ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB5ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgeCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgeSArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtTGVmdCA9IHg7XHJcbiAgICAgICAgdGhpcy5fZWxlbVRvcCA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENhc2NhZGVNb2RlKGNhc2NhZGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2Nhc2NhZGVNb2RlID0gY2FzY2FkZTtcclxuICAgICAgICBzd2l0Y2ggKGNhc2NhZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB0aGlzLl9lbGVtTGVmdCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgdGhpcy5fZWxlbVRvcCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgdGhpcy5fZWxlbUxlZnQgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHRoaXMuX2VsZW1Ub3AgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHRoaXMuX2VsZW1MZWZ0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCB0aGlzLl9lbGVtVG9wICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERpbWVuc2lvbnModzogbnVtYmVyLCBoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodyA8IHRoaXMubWluV2lkdGgpIHcgPSB0aGlzLm1pbldpZHRoO1xyXG4gICAgICAgIGlmIChoIDwgdGhpcy5taW5IZWlnaHQpIGggPSB0aGlzLm1pbkhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB3ICsgJ3B4Jyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaCArICdweCcpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtV2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuX2VsZW1IZWlnaHQgPSBoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydE1vdmluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdtb3ZpbmcnKTtcclxuICAgICAgICBjb25zdCBzdHlsZTogYW55ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBpZiAodGhpcy5fbmdHcmlkLmF1dG9TdHlsZSkgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsIChwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd6LWluZGV4JykpICsgMSkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BNb3ZpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbW92aW5nJyk7XHJcbiAgICAgICAgY29uc3Qgc3R5bGU6IGFueSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nR3JpZC5hdXRvU3R5bGUpIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3otaW5kZXgnLCAocGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnei1pbmRleCcpKSAtIDEpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWNhbGN1bGF0ZVNlbGYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaXhSZXNpemUobmV3U2l6ZTogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21heENvbHMgPiAwICYmIG5ld1NpemUueCA+IHRoaXMuX21heENvbHMpIG5ld1NpemUueCA9IHRoaXMuX21heENvbHM7XHJcbiAgICAgICAgaWYgKHRoaXMuX21heFJvd3MgPiAwICYmIG5ld1NpemUueSA+IHRoaXMuX21heFJvd3MpIG5ld1NpemUueSA9IHRoaXMuX21heFJvd3M7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9taW5Db2xzID4gMCAmJiBuZXdTaXplLnggPCB0aGlzLl9taW5Db2xzKSBuZXdTaXplLnggPSB0aGlzLl9taW5Db2xzO1xyXG4gICAgICAgIGlmICh0aGlzLl9taW5Sb3dzID4gMCAmJiBuZXdTaXplLnkgPCB0aGlzLl9taW5Sb3dzKSBuZXdTaXplLnkgPSB0aGlzLl9taW5Sb3dzO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtV2lkdGggPSAobmV3U2l6ZS54ICogdGhpcy5fbmdHcmlkLmNvbFdpZHRoKSArICgodGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQpICogKG5ld1NpemUueCAtIDEpKTtcclxuICAgICAgICBpZiAoaXRlbVdpZHRoIDwgdGhpcy5taW5XaWR0aCkgbmV3U2l6ZS54ID0gTWF0aC5jZWlsKCh0aGlzLm1pbldpZHRoICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQpIC8gKHRoaXMuX25nR3JpZC5jb2xXaWR0aCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSAobmV3U2l6ZS55ICogdGhpcy5fbmdHcmlkLnJvd0hlaWdodCkgKyAoKHRoaXMuX25nR3JpZC5tYXJnaW5Ub3AgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tKSAqIChuZXdTaXplLnkgLSAxKSk7XHJcbiAgICAgICAgaWYgKGl0ZW1IZWlnaHQgPCB0aGlzLm1pbkhlaWdodCkgbmV3U2l6ZS55ID0gTWF0aC5jZWlsKCh0aGlzLm1pbkhlaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20gKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wKSAvICh0aGlzLl9uZ0dyaWQucm93SGVpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3ApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXHJcbiAgICBwcml2YXRlIGVsZW1lbnRNYXRjaGVzKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMpIHJldHVybiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmRvY3VtZW50IHx8ICFlbGVtZW50Lm93bmVyRG9jdW1lbnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2hlczogYW55ID0gKGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudC5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICBsZXQgaTogbnVtYmVyID0gbWF0Y2hlcy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gZWxlbWVudCkgeyB9XHJcbiAgICAgICAgcmV0dXJuIGkgPiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHg6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQuY29sV2lkdGggKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCkgKiAodGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbCAtIDEpICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQuc2NyZWVuTWFyZ2luO1xyXG4gICAgICAgIGNvbnN0IHk6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQucm93SGVpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpblRvcCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20pICogKHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3cgLSAxKSArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3A7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaXplLnggPCB0aGlzLl9uZ0dyaWQubWluQ29scykgdGhpcy5fc2l6ZS54ID0gdGhpcy5fbmdHcmlkLm1pbkNvbHM7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NpemUueSA8IHRoaXMuX25nR3JpZC5taW5Sb3dzKSB0aGlzLl9zaXplLnkgPSB0aGlzLl9uZ0dyaWQubWluUm93cztcclxuXHJcbiAgICAgICAgY29uc3QgbmV3V2lkdGg6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQuY29sV2lkdGggKiB0aGlzLl9zaXplLngpICsgKCh0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCkgKiAodGhpcy5fc2l6ZS54IC0gMSkpO1xyXG4gICAgICAgIGNvbnN0IG5ld0hlaWdodDogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5yb3dIZWlnaHQgKiB0aGlzLl9zaXplLnkpICsgKCh0aGlzLl9uZ0dyaWQubWFyZ2luVG9wICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSkgKiAodGhpcy5fc2l6ZS55IC0gMSkpO1xyXG5cclxuICAgICAgICBjb25zdCB3OiBudW1iZXIgPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLl9uZ0dyaWQubWluV2lkdGgsIG5ld1dpZHRoKTtcclxuICAgICAgICBjb25zdCBoOiBudW1iZXIgPSBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgdGhpcy5fbmdHcmlkLm1pbkhlaWdodCwgbmV3SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREaW1lbnNpb25zKHcsIGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE1vdXNlUG9zaXRpb24oZTogYW55KTogTmdHcmlkUmF3UG9zaXRpb24ge1xyXG4gICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2U6IGFueSA9IGUub3JpZ2luYWxFdmVudDtcclxuICAgICAgICAgICAgZSA9IG9lLnRvdWNoZXMubGVuZ3RoID8gb2UudG91Y2hlc1swXSA6IChvZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBvZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50b3VjaGVzKSB7XHJcbiAgICAgICAgICAgIGUgPSBlLnRvdWNoZXMubGVuZ3RoID8gZS50b3VjaGVzWzBdIDogKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHJlZlBvczogTmdHcmlkUmF3UG9zaXRpb24gPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGUuY2xpZW50WCAtIHJlZlBvcy5sZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IGUuY2xpZW50WSAtIHJlZlBvcy50b3BcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FwcGx5Q2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgY2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUNoZWNrID0gKHJlY29yZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWdbcmVjb3JkLmtleV0gIT09IHJlY29yZC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XSA9IHJlY29yZC5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoQWRkZWRJdGVtKGNoYW5nZUNoZWNrKTtcclxuICAgICAgICBjaGFuZ2VzLmZvckVhY2hDaGFuZ2VkSXRlbShjaGFuZ2VDaGVjayk7XHJcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoUmVtb3ZlZEl0ZW0oKHJlY29yZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY29uZmlnW3JlY29yZC5rZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmZpZyh0aGlzLl9jb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbmZpZ0NoYW5nZUV2ZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VyQ29uZmlnID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbmZpZy5zaXpleCA9IHRoaXMuX3VzZXJDb25maWcuc2l6ZXggPSB0aGlzLl9zaXplLng7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnLnNpemV5ID0gdGhpcy5fdXNlckNvbmZpZy5zaXpleSA9IHRoaXMuX3NpemUueTtcclxuICAgICAgICB0aGlzLl9jb25maWcuY29sID0gdGhpcy5fdXNlckNvbmZpZy5jb2wgPSB0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sO1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZy5yb3cgPSB0aGlzLl91c2VyQ29uZmlnLnJvdyA9IHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3c7XHJcbiAgICAgICAgdGhpcy5uZ0dyaWRJdGVtQ2hhbmdlLmVtaXQodGhpcy5fdXNlckNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5SZXNpemVJbkRpcmVjdGlvbihkaXJlY3Rpb246IHN0cmluZywgbW91c2VQb3M6IE5nR3JpZFJhd1Bvc2l0aW9uKTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9lbGVtV2lkdGggJiYgbW91c2VQb3MubGVmdCA+IHRoaXMuX2VsZW1XaWR0aCAtIHRoaXMuX2JvcmRlclNpemVcclxuICAgICAgICAgICAgICAgICAgICAmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9lbGVtSGVpZ2h0ICYmIG1vdXNlUG9zLnRvcCA+IHRoaXMuX2VsZW1IZWlnaHQgLSB0aGlzLl9ib3JkZXJTaXplOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmluZGVudFxyXG4gICAgICAgICAgICBjYXNlICdib3R0b21sZWZ0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fYm9yZGVyU2l6ZSAmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9lbGVtSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgJiYgbW91c2VQb3MudG9wID4gdGhpcy5fZWxlbUhlaWdodCAtIHRoaXMuX2JvcmRlclNpemU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6aW5kZW50XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcHJpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fZWxlbVdpZHRoICYmIG1vdXNlUG9zLmxlZnQgPiB0aGlzLl9lbGVtV2lkdGggLSB0aGlzLl9ib3JkZXJTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgbW91c2VQb3MudG9wIDwgdGhpcy5fYm9yZGVyU2l6ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTppbmRlbnRcclxuICAgICAgICAgICAgY2FzZSAndG9wbGVmdCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MubGVmdCA8IHRoaXMuX2JvcmRlclNpemUgJiYgbW91c2VQb3MudG9wIDwgdGhpcy5fYm9yZGVyU2l6ZTtcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9lbGVtV2lkdGggJiYgbW91c2VQb3MubGVmdCA+IHRoaXMuX2VsZW1XaWR0aCAtIHRoaXMuX2JvcmRlclNpemU7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9ib3JkZXJTaXplO1xyXG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLnRvcCA8IHRoaXMuX2VsZW1IZWlnaHQgJiYgbW91c2VQb3MudG9wID4gdGhpcy5fZWxlbUhlaWdodCAtIHRoaXMuX2JvcmRlclNpemU7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MudG9wIDwgdGhpcy5fYm9yZGVyU2l6ZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19