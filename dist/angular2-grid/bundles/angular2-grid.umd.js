(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('angular2-grid', ['exports', '@angular/core', 'rxjs'], factory) :
    (factory((global['angular2-grid'] = {}),global.ng.core,global.rxjs));
}(this, (function (exports,core,rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function generateUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            /** @type {?} */
            var r = Math.random() * 16 | 0;
            /** @type {?} */
            var v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function sortItemsByPositionHorizontal(a, b) {
        if (a.col === b.col) {
            return a.row - b.row;
        }
        return a.col - b.col;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function sortItemsByPositionVertical(a, b) {
        if (a.row === b.row) {
            return a.col - b.col;
        }
        return a.row - b.row;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgGridPlaceholder = (function () {
        function NgGridPlaceholder(_ngEl, _renderer) {
            this._ngEl = _ngEl;
            this._renderer = _renderer;
        }
        /**
         * @param {?} ngGrid
         * @return {?}
         */
        NgGridPlaceholder.prototype.registerGrid = /**
         * @param {?} ngGrid
         * @return {?}
         */
            function (ngGrid) {
                this._ngGrid = ngGrid;
            };
        /**
         * @return {?}
         */
        NgGridPlaceholder.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._renderer.setElementClass(this._ngEl.nativeElement, 'grid-placeholder', true);
                if (this._ngGrid.autoStyle)
                    this._renderer.setElementStyle(this._ngEl.nativeElement, 'position', 'absolute');
            };
        /**
         * @param {?} newSize
         * @return {?}
         */
        NgGridPlaceholder.prototype.setSize = /**
         * @param {?} newSize
         * @return {?}
         */
            function (newSize) {
                this._size = newSize;
                this._recalculateDimensions();
            };
        /**
         * @param {?} newPosition
         * @return {?}
         */
        NgGridPlaceholder.prototype.setGridPosition = /**
         * @param {?} newPosition
         * @return {?}
         */
            function (newPosition) {
                this._position = newPosition;
                this._recalculatePosition();
            };
        /**
         * @param {?} cascade
         * @return {?}
         */
        NgGridPlaceholder.prototype.setCascadeMode = /**
         * @param {?} cascade
         * @return {?}
         */
            function (cascade) {
                this._cascadeMode = cascade;
                switch (cascade) {
                    case 'up':
                    case 'left':
                    default:
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'left', '0px');
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'top', '0px');
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'right', null);
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'bottom', null);
                        break;
                    case 'right':
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'right', '0px');
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'top', '0px');
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'left', null);
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'bottom', null);
                        break;
                    case 'down':
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'left', '0px');
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'bottom', '0px');
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'right', null);
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'top', null);
                        break;
                }
            };
        //	Private methods
        //	Private methods
        /**
         * @private
         * @param {?} w
         * @param {?} h
         * @return {?}
         */
        NgGridPlaceholder.prototype._setDimensions =
            //	Private methods
            /**
             * @private
             * @param {?} w
             * @param {?} h
             * @return {?}
             */
            function (w, h) {
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'width', w + 'px');
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'height', h + 'px');
            };
        /**
         * @private
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        NgGridPlaceholder.prototype._setPosition = /**
         * @private
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
            function (x, y) {
                switch (this._cascadeMode) {
                    case 'up':
                    case 'left':
                    default:
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'transform', 'translate(' + x + 'px, ' + y + 'px)');
                        break;
                    case 'right':
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'transform', 'translate(' + -x + 'px, ' + y + 'px)');
                        break;
                    case 'down':
                        this._renderer.setElementStyle(this._ngEl.nativeElement, 'transform', 'translate(' + x + 'px, ' + -y + 'px)');
                        break;
                }
            };
        /**
         * @private
         * @return {?}
         */
        NgGridPlaceholder.prototype._recalculatePosition = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = (this._ngGrid.colWidth + this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._position.col - 1) + this._ngGrid.marginLeft + this._ngGrid.screenMargin;
                /** @type {?} */
                var y = (this._ngGrid.rowHeight + this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._position.row - 1) + this._ngGrid.marginTop;
                this._setPosition(x, y);
            };
        /**
         * @private
         * @return {?}
         */
        NgGridPlaceholder.prototype._recalculateDimensions = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var w = (this._ngGrid.colWidth * this._size.x) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._size.x - 1));
                /** @type {?} */
                var h = (this._ngGrid.rowHeight * this._size.y) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._size.y - 1));
                this._setDimensions(w, h);
            };
        NgGridPlaceholder.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-grid-placeholder',
                        template: ''
                    },] },
        ];
        NgGridPlaceholder.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer }
            ];
        };
        return NgGridPlaceholder;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgGrid = (function () {
        //	Constructor
        function NgGrid(_differs, _ngEl, _renderer, componentFactoryResolver) {
            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this.componentFactoryResolver = componentFactoryResolver;
            //	Event Emitters
            this.onDragStart = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
            this.onDragStop = new core.EventEmitter();
            this.onResizeStart = new core.EventEmitter();
            this.onResize = new core.EventEmitter();
            this.onResizeStop = new core.EventEmitter();
            this.onItemChange = new core.EventEmitter();
            //	Public variables
            this.colWidth = 250;
            this.rowHeight = 250;
            this.minCols = 1;
            this.minRows = 1;
            this.marginTop = 10;
            this.marginRight = 10;
            this.marginBottom = 10;
            this.marginLeft = 10;
            this.screenMargin = 0;
            this.isDragging = false;
            this.isResizing = false;
            this.autoStyle = true;
            this.resizeEnable = true;
            this.dragEnable = true;
            this.cascade = 'up';
            this.minWidth = 100;
            this.minHeight = 100;
            //	Private variables
            this._items = new Map();
            this._draggingItem = null;
            this._resizingItem = null;
            this._resizeDirection = null;
            this._itemsInGrid = new Set();
            this._maxCols = 0;
            this._maxRows = 0;
            this._visibleCols = 0;
            this._visibleRows = 0;
            this._setWidth = 250;
            this._setHeight = 250;
            this._posOffset = null;
            this._adding = false;
            this._placeholderRef = null;
            this._fixToGrid = false;
            this._autoResize = false;
            this._destroyed = false;
            this._maintainRatio = false;
            this._preferNew = false;
            this._zoomOnDrag = false;
            this._limitToScreen = false;
            this._centerToScreen = false;
            this._curMaxRow = 0;
            this._curMaxCol = 0;
            this._dragReady = false;
            this._resizeReady = false;
            this._elementBasedDynamicRowHeight = false;
            this._itemFixDirection = "cascade";
            this._collisionFixDirection = "cascade";
            this._subscriptions = [];
            this._enabledListener = false;
            this._config = NgGrid.CONST_DEFAULT_CONFIG;
            this._defineListeners();
        }
        Object.defineProperty(NgGrid.prototype, "config", {
            //	[ng-grid] attribute handler
            set: 
            //	[ng-grid] attribute handler
            /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                if (v == null || typeof v !== "object") {
                    return;
                }
                this.setConfig(v);
                if (this._differ == null && v != null) {
                    this._differ = this._differs.find(this._config).create();
                }
                this._differ.diff(this._config);
            },
            enumerable: true,
            configurable: true
        });
        //	Public methods
        //	Public methods
        /**
         * @return {?}
         */
        NgGrid.prototype.ngOnInit =
            //	Public methods
            /**
             * @return {?}
             */
            function () {
                this._renderer.setElementClass(this._ngEl.nativeElement, 'grid', true);
                if (this.autoStyle)
                    this._renderer.setElementStyle(this._ngEl.nativeElement, 'position', 'relative');
                this.setConfig(this._config);
            };
        /**
         * @return {?}
         */
        NgGrid.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._destroyed = true;
                this._disableListeners();
            };
        /**
         * @return {?}
         */
        NgGrid.prototype.generateItemUid = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var uid = generateUuid();
                if (this._items.has(uid)) {
                    return this.generateItemUid();
                }
                return uid;
            };
        /**
         * @param {?} config
         * @return {?}
         */
        NgGrid.prototype.setConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                var _this = this;
                this._config = config;
                /** @type {?} */
                var maxColRowChanged = false;
                for (var x in config) {
                    /** @type {?} */
                    var val = config[x];
                    /** @type {?} */
                    var intVal = !val ? 0 : parseInt(val);
                    switch (x) {
                        case 'margins':
                            this.setMargins(val);
                            break;
                        case 'col_width':
                            this.colWidth = Math.max(intVal, 1);
                            break;
                        case 'row_height':
                            this.rowHeight = Math.max(intVal, 1);
                            break;
                        case 'auto_style':
                            this.autoStyle = val ? true : false;
                            break;
                        case 'auto_resize':
                            this._autoResize = val ? true : false;
                            break;
                        case 'draggable':
                            this.dragEnable = val ? true : false;
                            break;
                        case 'resizable':
                            this.resizeEnable = val ? true : false;
                            break;
                        case 'max_rows':
                            maxColRowChanged = maxColRowChanged || this._maxRows != intVal;
                            this._maxRows = intVal < 0 ? 0 : intVal;
                            break;
                        case 'max_cols':
                            maxColRowChanged = maxColRowChanged || this._maxCols != intVal;
                            this._maxCols = intVal < 0 ? 0 : intVal;
                            break;
                        case 'visible_rows':
                            this._visibleRows = Math.max(intVal, 0);
                            break;
                        case 'visible_cols':
                            this._visibleCols = Math.max(intVal, 0);
                            break;
                        case 'min_rows':
                            this.minRows = Math.max(intVal, 1);
                            break;
                        case 'min_cols':
                            this.minCols = Math.max(intVal, 1);
                            break;
                        case 'min_height':
                            this.minHeight = Math.max(intVal, 1);
                            break;
                        case 'min_width':
                            this.minWidth = Math.max(intVal, 1);
                            break;
                        case 'zoom_on_drag':
                            this._zoomOnDrag = val ? true : false;
                            break;
                        case 'cascade':
                            if (this.cascade != val) {
                                this.cascade = val;
                                this._cascadeGrid();
                            }
                            break;
                        case 'fix_to_grid':
                            this._fixToGrid = val ? true : false;
                            break;
                        case 'maintain_ratio':
                            this._maintainRatio = val ? true : false;
                            break;
                        case 'prefer_new':
                            this._preferNew = val ? true : false;
                            break;
                        case 'limit_to_screen':
                            this._limitToScreen = !this._autoResize && !!val;
                            break;
                        case 'center_to_screen':
                            this._centerToScreen = val ? true : false;
                            break;
                        case 'element_based_row_height':
                            this._elementBasedDynamicRowHeight = !!val;
                            break;
                        case 'fix_item_position_direction':
                            this._itemFixDirection = val;
                            break;
                        case 'fix_collision_position_direction':
                            this._collisionFixDirection = val;
                            break;
                    }
                }
                if (this.dragEnable || this.resizeEnable) {
                    this._enableListeners();
                }
                else {
                    this._disableListeners();
                }
                if (this._itemFixDirection === "cascade") {
                    this._itemFixDirection = this._getFixDirectionFromCascade();
                }
                if (this._collisionFixDirection === "cascade") {
                    this._collisionFixDirection = this._getFixDirectionFromCascade();
                }
                if (this._limitToScreen) {
                    /** @type {?} */
                    var newMaxCols = this._getContainerColumns();
                    if (this._maxCols != newMaxCols) {
                        this._maxCols = newMaxCols;
                        maxColRowChanged = true;
                    }
                }
                if (this._limitToScreen && this._centerToScreen) {
                    this.screenMargin = this._getScreenMargin();
                }
                else {
                    this.screenMargin = 0;
                }
                if (this._maintainRatio) {
                    if (this.colWidth && this.rowHeight) {
                        this._aspectRatio = this.colWidth / this.rowHeight;
                    }
                    else {
                        this._maintainRatio = false;
                    }
                }
                if (maxColRowChanged) {
                    if (this._maxCols > 0 && this._maxRows > 0) {
                        switch (this.cascade) {
                            case 'left':
                            case 'right':
                                this._maxCols = 0;
                                break;
                            case 'up':
                            case 'down':
                            default:
                                this._maxRows = 0;
                                break;
                        }
                    }
                    this._updatePositionsAfterMaxChange();
                }
                this._calculateColWidth();
                this._calculateRowHeight();
                /** @type {?} */
                var maxWidth = this._maxCols * this.colWidth;
                /** @type {?} */
                var maxHeight = this._maxRows * this.rowHeight;
                if (maxWidth > 0 && this.minWidth > maxWidth)
                    this.minWidth = 0.75 * this.colWidth;
                if (maxHeight > 0 && this.minHeight > maxHeight)
                    this.minHeight = 0.75 * this.rowHeight;
                if (this.minWidth > this.colWidth)
                    this.minCols = Math.max(this.minCols, Math.ceil(this.minWidth / this.colWidth));
                if (this.minHeight > this.rowHeight)
                    this.minRows = Math.max(this.minRows, Math.ceil(this.minHeight / this.rowHeight));
                if (this._maxCols > 0 && this.minCols > this._maxCols)
                    this.minCols = 1;
                if (this._maxRows > 0 && this.minRows > this._maxRows)
                    this.minRows = 1;
                this._updateRatio();
                this._items.forEach(function (item) {
                    _this._removeFromGrid(item);
                    item.setCascadeMode(_this.cascade);
                });
                this._items.forEach(function (item) {
                    item.recalculateSelf();
                    _this._addToGrid(item);
                });
                this._cascadeGrid();
                this._updateSize();
            };
        /**
         * @param {?} itemId
         * @return {?}
         */
        NgGrid.prototype.getItemPosition = /**
         * @param {?} itemId
         * @return {?}
         */
            function (itemId) {
                return this._items.has(itemId) ? this._items.get(itemId).getGridPosition() : null;
            };
        /**
         * @param {?} itemId
         * @return {?}
         */
        NgGrid.prototype.getItemSize = /**
         * @param {?} itemId
         * @return {?}
         */
            function (itemId) {
                return this._items.has(itemId) ? this._items.get(itemId).getSize() : null;
            };
        /**
         * @return {?}
         */
        NgGrid.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this._differ != null) {
                    /** @type {?} */
                    var changes = this._differ.diff(this._config);
                    if (changes != null) {
                        this._applyChanges(changes);
                        return true;
                    }
                }
                return false;
            };
        /**
         * @param {?} margins
         * @return {?}
         */
        NgGrid.prototype.setMargins = /**
         * @param {?} margins
         * @return {?}
         */
            function (margins) {
                this.marginTop = Math.max(parseInt(margins[0]), 0);
                this.marginRight = margins.length >= 2 ? Math.max(parseInt(margins[1]), 0) : this.marginTop;
                this.marginBottom = margins.length >= 3 ? Math.max(parseInt(margins[2]), 0) : this.marginTop;
                this.marginLeft = margins.length >= 4 ? Math.max(parseInt(margins[3]), 0) : this.marginRight;
            };
        /**
         * @return {?}
         */
        NgGrid.prototype.enableDrag = /**
         * @return {?}
         */
            function () {
                this.dragEnable = true;
            };
        /**
         * @return {?}
         */
        NgGrid.prototype.disableDrag = /**
         * @return {?}
         */
            function () {
                this.dragEnable = false;
            };
        /**
         * @return {?}
         */
        NgGrid.prototype.enableResize = /**
         * @return {?}
         */
            function () {
                this.resizeEnable = true;
            };
        /**
         * @return {?}
         */
        NgGrid.prototype.disableResize = /**
         * @return {?}
         */
            function () {
                this.resizeEnable = false;
            };
        /**
         * @param {?} ngItem
         * @return {?}
         */
        NgGrid.prototype.addItem = /**
         * @param {?} ngItem
         * @return {?}
         */
            function (ngItem) {
                var _this = this;
                ngItem.setCascadeMode(this.cascade);
                if (!this._preferNew) {
                    /** @type {?} */
                    var newPos = this._fixGridPosition(ngItem.getGridPosition(), ngItem.getSize());
                    ngItem.setGridPosition(newPos);
                }
                if (ngItem.uid === null || this._items.has(ngItem.uid)) {
                    ngItem.uid = this.generateItemUid();
                }
                this._items.set(ngItem.uid, ngItem);
                this._addToGrid(ngItem);
                this._updateSize();
                this.triggerCascade().then(function () {
                    ngItem.recalculateSelf();
                    ngItem.onCascadeEvent();
                    _this._emitOnItemChange();
                });
            };
        /**
         * @param {?} ngItem
         * @return {?}
         */
        NgGrid.prototype.removeItem = /**
         * @param {?} ngItem
         * @return {?}
         */
            function (ngItem) {
                var _this = this;
                this._removeFromGrid(ngItem);
                this._items.delete(ngItem.uid);
                if (this._destroyed)
                    return;
                this.triggerCascade().then(function () {
                    _this._updateSize();
                    _this._items.forEach(function (item) { return item.recalculateSelf(); });
                    _this._emitOnItemChange();
                });
            };
        /**
         * @param {?} ngItem
         * @return {?}
         */
        NgGrid.prototype.updateItem = /**
         * @param {?} ngItem
         * @return {?}
         */
            function (ngItem) {
                var _this = this;
                this._removeFromGrid(ngItem);
                this._addToGrid(ngItem);
                this.triggerCascade().then(function () {
                    _this._updateSize();
                    ngItem.onCascadeEvent();
                });
            };
        /**
         * @return {?}
         */
        NgGrid.prototype.triggerCascade = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._cascadePromise) {
                    this._cascadePromise = new Promise(function (resolve) {
                        setTimeout(function () {
                            _this._cascadePromise = null;
                            _this._cascadeGrid(null, null);
                            resolve();
                        }, 0);
                    });
                }
                return this._cascadePromise;
            };
        /**
         * @return {?}
         */
        NgGrid.prototype.triggerResize = /**
         * @return {?}
         */
            function () {
                this.resizeEventHandler(null);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype.resizeEventHandler = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this._calculateColWidth();
                this._calculateRowHeight();
                this._updateRatio();
                if (this._limitToScreen) {
                    /** @type {?} */
                    var newMaxColumns = this._getContainerColumns();
                    if (this._maxCols !== newMaxColumns) {
                        this._maxCols = newMaxColumns;
                        this._updatePositionsAfterMaxChange();
                        this._cascadeGrid();
                    }
                    if (this._centerToScreen) {
                        this.screenMargin = this._getScreenMargin();
                        this._items.forEach(function (item) {
                            item.recalculateSelf();
                        });
                    }
                }
                else if (this._autoResize) {
                    this._items.forEach(function (item) {
                        item.recalculateSelf();
                    });
                }
                this._updateSize();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype.mouseDownEventHandler = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var mousePos = this._getMousePosition(e);
                /** @type {?} */
                var item = this._getItemFromPosition(mousePos);
                if (item == null)
                    return;
                /** @type {?} */
                var resizeDirection = item.canResize(e);
                if (this.resizeEnable && resizeDirection) {
                    this._resizeReady = true;
                    this._resizingItem = item;
                    this._resizeDirection = resizeDirection;
                    e.preventDefault();
                }
                else if (this.dragEnable && item.canDrag(e)) {
                    this._dragReady = true;
                    this._draggingItem = item;
                    /** @type {?} */
                    var itemPos = item.getPosition();
                    this._posOffset = { 'left': (mousePos.left - itemPos.left), 'top': (mousePos.top - itemPos.top) };
                    e.preventDefault();
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype.mouseUpEventHandler = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (this.isDragging) {
                    this._dragStop(e);
                }
                else if (this.isResizing) {
                    this._resizeStop(e);
                }
                else if (this._dragReady || this._resizeReady) {
                    this._cleanDrag();
                    this._cleanResize();
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype.mouseMoveEventHandler = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (this._resizeReady) {
                    this._resizeStart(e);
                    e.preventDefault();
                    return;
                }
                else if (this._dragReady) {
                    this._dragStart(e);
                    e.preventDefault();
                    return;
                }
                if (this.isDragging) {
                    this._drag(e);
                }
                else if (this.isResizing) {
                    this._resize(e);
                }
                else {
                    /** @type {?} */
                    var mousePos = this._getMousePosition(e);
                    /** @type {?} */
                    var item = this._getItemFromPosition(mousePos);
                    if (item) {
                        item.onMouseMove(e);
                    }
                }
            };
        //	Private methods
        //	Private methods
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._getFixDirectionFromCascade =
            //	Private methods
            /**
             * @private
             * @return {?}
             */
            function () {
                switch (this.cascade) {
                    case "up":
                    case "down":
                        return "vertical";
                    case "left":
                    case "right":
                    default:
                        return "horizontal";
                }
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._updatePositionsAfterMaxChange = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this._items.forEach(function (item) {
                    /** @type {?} */
                    var pos = item.getGridPosition();
                    /** @type {?} */
                    var dims = item.getSize();
                    if (!_this._hasGridCollision(pos, dims) && _this._isWithinBounds(pos, dims) && dims.x <= _this._maxCols && dims.y <= _this._maxRows) {
                        return;
                    }
                    _this._removeFromGrid(item);
                    if (_this._maxCols > 0 && dims.x > _this._maxCols) {
                        dims.x = _this._maxCols;
                        item.setSize(dims);
                    }
                    else if (_this._maxRows > 0 && dims.y > _this._maxRows) {
                        dims.y = _this._maxRows;
                        item.setSize(dims);
                    }
                    if (_this._hasGridCollision(pos, dims) || !_this._isWithinBounds(pos, dims, true)) {
                        /** @type {?} */
                        var newPosition = _this._fixGridPosition(pos, dims);
                        item.setGridPosition(newPosition);
                    }
                    _this._addToGrid(item);
                });
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._calculateColWidth = /**
         * @private
         * @return {?}
         */
            function () {
                if (this._autoResize) {
                    if (this._maxCols > 0 || this._visibleCols > 0) {
                        /** @type {?} */
                        var maxCols = this._maxCols > 0 ? this._maxCols : this._visibleCols;
                        /** @type {?} */
                        var maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
                        /** @type {?} */
                        var colWidth = Math.floor(maxWidth / maxCols);
                        colWidth -= (this.marginLeft + this.marginRight);
                        if (colWidth > 0)
                            this.colWidth = colWidth;
                    }
                }
                if (this.colWidth < this.minWidth || this.minCols > this._config.min_cols) {
                    this.minCols = Math.max(this._config.min_cols, Math.ceil(this.minWidth / this.colWidth));
                }
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._calculateRowHeight = /**
         * @private
         * @return {?}
         */
            function () {
                if (this._autoResize) {
                    if (this._maxRows > 0 || this._visibleRows > 0) {
                        /** @type {?} */
                        var maxRows = this._maxRows > 0 ? this._maxRows : this._visibleRows;
                        /** @type {?} */
                        var maxHeight = void 0;
                        if (this._elementBasedDynamicRowHeight) {
                            maxHeight = this._ngEl.nativeElement.getBoundingClientRect().height;
                        }
                        else {
                            maxHeight = window.innerHeight - this.marginTop - this.marginBottom;
                        }
                        /** @type {?} */
                        var rowHeight = Math.max(Math.floor(maxHeight / maxRows), this.minHeight);
                        rowHeight -= (this.marginTop + this.marginBottom);
                        if (rowHeight > 0)
                            this.rowHeight = rowHeight;
                    }
                }
                if (this.rowHeight < this.minHeight || this.minRows > this._config.min_rows) {
                    this.minRows = Math.max(this._config.min_rows, Math.ceil(this.minHeight / this.rowHeight));
                }
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._updateRatio = /**
         * @private
         * @return {?}
         */
            function () {
                if (!this._autoResize || !this._maintainRatio)
                    return;
                if (this._maxCols > 0 && this._visibleRows <= 0) {
                    this.rowHeight = this.colWidth / this._aspectRatio;
                }
                else if (this._maxRows > 0 && this._visibleCols <= 0) {
                    this.colWidth = this._aspectRatio * this.rowHeight;
                }
                else if (this._maxCols == 0 && this._maxRows == 0) {
                    if (this._visibleCols > 0) {
                        this.rowHeight = this.colWidth / this._aspectRatio;
                    }
                    else if (this._visibleRows > 0) {
                        this.colWidth = this._aspectRatio * this.rowHeight;
                    }
                }
            };
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */
        NgGrid.prototype._applyChanges = /**
         * @private
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                changes.forEachAddedItem(function (record) { _this._config[record.key] = record.currentValue; });
                changes.forEachChangedItem(function (record) { _this._config[record.key] = record.currentValue; });
                changes.forEachRemovedItem(function (record) { delete _this._config[record.key]; });
                this.setConfig(this._config);
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._resizeStart = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.resizeEnable || !this._resizingItem)
                    return;
                //	Setup
                this._resizingItem.startMoving();
                this._removeFromGrid(this._resizingItem);
                this._createPlaceholder(this._resizingItem);
                //	Status Flags
                this.isResizing = true;
                this._resizeReady = false;
                //	Events
                this.onResizeStart.emit(this._resizingItem);
                this._resizingItem.onResizeStartEvent();
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._dragStart = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.dragEnable || !this._draggingItem)
                    return;
                //	Start dragging
                this._draggingItem.startMoving();
                this._removeFromGrid(this._draggingItem);
                this._createPlaceholder(this._draggingItem);
                //	Status Flags
                this.isDragging = true;
                this._dragReady = false;
                //	Events
                this.onDragStart.emit(this._draggingItem);
                this._draggingItem.onDragStartEvent();
                //	Zoom
                if (this._zoomOnDrag) {
                    this._zoomOut();
                }
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._zoomOut = /**
         * @private
         * @return {?}
         */
            function () {
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'transform', 'scale(0.5, 0.5)');
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._resetZoom = /**
         * @private
         * @return {?}
         */
            function () {
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'transform', '');
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._drag = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.isDragging)
                    return;
                if (window.getSelection) {
                    if (window.getSelection().empty) {
                        window.getSelection().empty();
                    }
                    else if (window.getSelection().removeAllRanges) {
                        window.getSelection().removeAllRanges();
                    }
                }
                else if ((((document))).selection) {
                    (((document))).selection.empty();
                }
                /** @type {?} */
                var mousePos = this._getMousePosition(e);
                /** @type {?} */
                var newL = (mousePos.left - this._posOffset.left);
                /** @type {?} */
                var newT = (mousePos.top - this._posOffset.top);
                /** @type {?} */
                var itemPos = this._draggingItem.getGridPosition();
                /** @type {?} */
                var gridPos = this._calculateGridPosition(newL, newT);
                /** @type {?} */
                var dims = this._draggingItem.getSize();
                gridPos = this._fixPosToBoundsX(gridPos, dims);
                if (!this._isWithinBoundsY(gridPos, dims)) {
                    gridPos = this._fixPosToBoundsY(gridPos, dims);
                }
                if (gridPos.col != itemPos.col || gridPos.row != itemPos.row) {
                    this._draggingItem.setGridPosition(gridPos, this._fixToGrid);
                    this._placeholderRef.instance.setGridPosition(gridPos);
                    if (['up', 'down', 'left', 'right'].indexOf(this.cascade) >= 0) {
                        this._fixGridCollisions(gridPos, dims);
                        this._cascadeGrid(gridPos, dims);
                    }
                }
                if (!this._fixToGrid) {
                    this._draggingItem.setPosition(newL, newT);
                }
                this.onDrag.emit(this._draggingItem);
                this._draggingItem.onDragEvent();
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._resize = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.isResizing) {
                    return;
                }
                if (window.getSelection) {
                    if (window.getSelection().empty) {
                        window.getSelection().empty();
                    }
                    else if (window.getSelection().removeAllRanges) {
                        window.getSelection().removeAllRanges();
                    }
                }
                else if ((((document))).selection) {
                    (((document))).selection.empty();
                }
                /** @type {?} */
                var mousePos = this._getMousePosition(e);
                /** @type {?} */
                var itemPos = this._resizingItem.getPosition();
                /** @type {?} */
                var itemDims = this._resizingItem.getDimensions();
                /** @type {?} */
                var endCorner = {
                    left: itemPos.left + itemDims.width,
                    top: itemPos.top + itemDims.height,
                };
                /** @type {?} */
                var resizeTop = this._resizeDirection.includes('top');
                /** @type {?} */
                var resizeBottom = this._resizeDirection.includes('bottom');
                /** @type {?} */
                var resizeLeft = this._resizeDirection.includes('left');
                /** @type {?} */
                var resizeRight = this._resizeDirection.includes('right');
                //	Calculate new width and height based upon resize direction
                /** @type {?} */
                var newW = resizeRight
                    ? (mousePos.left - itemPos.left + 1)
                    : resizeLeft
                        ? (endCorner.left - mousePos.left + 1)
                        : itemDims.width;
                /** @type {?} */
                var newH = resizeBottom
                    ? (mousePos.top - itemPos.top + 1)
                    : resizeTop
                        ? (endCorner.top - mousePos.top + 1)
                        : itemDims.height;
                if (newW < this.minWidth)
                    newW = this.minWidth;
                if (newH < this.minHeight)
                    newH = this.minHeight;
                if (newW < this._resizingItem.minWidth)
                    newW = this._resizingItem.minWidth;
                if (newH < this._resizingItem.minHeight)
                    newH = this._resizingItem.minHeight;
                /** @type {?} */
                var newX = itemPos.left;
                /** @type {?} */
                var newY = itemPos.top;
                if (resizeLeft)
                    newX = endCorner.left - newW;
                if (resizeTop)
                    newY = endCorner.top - newH;
                /** @type {?} */
                var calcSize = this._calculateGridSize(newW, newH);
                /** @type {?} */
                var itemSize = this._resizingItem.getSize();
                /** @type {?} */
                var iGridPos = this._resizingItem.getGridPosition();
                /** @type {?} */
                var bottomRightCorner = {
                    col: iGridPos.col + itemSize.x,
                    row: iGridPos.row + itemSize.y,
                };
                /** @type {?} */
                var targetPos = Object.assign({}, iGridPos);
                if (this._resizeDirection.includes("top"))
                    targetPos.row = bottomRightCorner.row - calcSize.y;
                if (this._resizeDirection.includes("left"))
                    targetPos.col = bottomRightCorner.col - calcSize.x;
                if (!this._isWithinBoundsX(targetPos, calcSize))
                    calcSize = this._fixSizeToBoundsX(targetPos, calcSize);
                if (!this._isWithinBoundsY(targetPos, calcSize))
                    calcSize = this._fixSizeToBoundsY(targetPos, calcSize);
                calcSize = this._resizingItem.fixResize(calcSize);
                if (calcSize.x != itemSize.x || calcSize.y != itemSize.y) {
                    this._resizingItem.setGridPosition(targetPos, this._fixToGrid);
                    this._placeholderRef.instance.setGridPosition(targetPos);
                    this._resizingItem.setSize(calcSize, this._fixToGrid);
                    this._placeholderRef.instance.setSize(calcSize);
                    if (['up', 'down', 'left', 'right'].indexOf(this.cascade) >= 0) {
                        this._fixGridCollisions(targetPos, calcSize);
                        this._cascadeGrid(targetPos, calcSize);
                    }
                }
                if (!this._fixToGrid) {
                    this._resizingItem.setDimensions(newW, newH);
                    this._resizingItem.setPosition(newX, newY);
                }
                this.onResize.emit(this._resizingItem);
                this._resizingItem.onResizeEvent();
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._dragStop = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.isDragging)
                    return;
                this.isDragging = false;
                /** @type {?} */
                var itemPos = this._draggingItem.getGridPosition();
                this._draggingItem.setGridPosition(itemPos);
                this._addToGrid(this._draggingItem);
                this._cascadeGrid();
                this._updateSize();
                this._draggingItem.stopMoving();
                this._draggingItem.onDragStopEvent();
                this.onDragStop.emit(this._draggingItem);
                this._cleanDrag();
                this._placeholderRef.destroy();
                this._emitOnItemChange();
                if (this._zoomOnDrag) {
                    this._resetZoom();
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._resizeStop = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.isResizing)
                    return;
                this.isResizing = false;
                /** @type {?} */
                var itemDims = this._resizingItem.getSize();
                this._resizingItem.setSize(itemDims);
                /** @type {?} */
                var itemPos = this._resizingItem.getGridPosition();
                this._resizingItem.setGridPosition(itemPos);
                this._addToGrid(this._resizingItem);
                this._cascadeGrid();
                this._updateSize();
                this._resizingItem.stopMoving();
                this._resizingItem.onResizeStopEvent();
                this.onResizeStop.emit(this._resizingItem);
                this._cleanResize();
                this._placeholderRef.destroy();
                this._emitOnItemChange();
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._cleanDrag = /**
         * @private
         * @return {?}
         */
            function () {
                this._draggingItem = null;
                this._posOffset = null;
                this.isDragging = false;
                this._dragReady = false;
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._cleanResize = /**
         * @private
         * @return {?}
         */
            function () {
                this._resizingItem = null;
                this._resizeDirection = null;
                this.isResizing = false;
                this._resizeReady = false;
            };
        /**
         * @private
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        NgGrid.prototype._calculateGridSize = /**
         * @private
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
            function (width, height) {
                width += this.marginLeft + this.marginRight;
                height += this.marginTop + this.marginBottom;
                /** @type {?} */
                var sizex = Math.max(this.minCols, Math.round(width / (this.colWidth + this.marginLeft + this.marginRight)));
                /** @type {?} */
                var sizey = Math.max(this.minRows, Math.round(height / (this.rowHeight + this.marginTop + this.marginBottom)));
                if (!this._isWithinBoundsX({ col: 1, row: 1 }, { x: sizex, y: sizey }))
                    sizex = this._maxCols;
                if (!this._isWithinBoundsY({ col: 1, row: 1 }, { x: sizex, y: sizey }))
                    sizey = this._maxRows;
                return { 'x': sizex, 'y': sizey };
            };
        /**
         * @private
         * @param {?} left
         * @param {?} top
         * @return {?}
         */
        NgGrid.prototype._calculateGridPosition = /**
         * @private
         * @param {?} left
         * @param {?} top
         * @return {?}
         */
            function (left, top) {
                /** @type {?} */
                var col = Math.max(1, Math.round(left / (this.colWidth + this.marginLeft + this.marginRight)) + 1);
                /** @type {?} */
                var row = Math.max(1, Math.round(top / (this.rowHeight + this.marginTop + this.marginBottom)) + 1);
                if (!this._isWithinBoundsX({ col: col, row: row }, { x: 1, y: 1 }))
                    col = this._maxCols;
                if (!this._isWithinBoundsY({ col: col, row: row }, { x: 1, y: 1 }))
                    row = this._maxRows;
                return { 'col': col, 'row': row };
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._hasGridCollision = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                /** @type {?} */
                var positions = this._getCollisions(pos, dims);
                if (positions == null || positions.length == 0)
                    return false;
                return positions.some(function (v) {
                    return !(v === null);
                });
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._getCollisions = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                var _this = this;
                /** @type {?} */
                var returns = [];
                if (!pos.col) {
                    pos.col = 1;
                }
                if (!pos.row) {
                    pos.row = 1;
                }
                /** @type {?} */
                var leftCol = pos.col;
                /** @type {?} */
                var rightCol = pos.col + dims.x;
                /** @type {?} */
                var topRow = pos.row;
                /** @type {?} */
                var bottomRow = pos.row + dims.y;
                this._itemsInGrid.forEach(function (itemId) {
                    /** @type {?} */
                    var item = _this._items.get(itemId);
                    if (!item) {
                        _this._itemsInGrid.delete(itemId);
                        return;
                    }
                    /** @type {?} */
                    var itemLeftCol = item.col;
                    /** @type {?} */
                    var itemRightCol = item.col + item.sizex;
                    /** @type {?} */
                    var itemTopRow = item.row;
                    /** @type {?} */
                    var itemBottomRow = item.row + item.sizey;
                    /** @type {?} */
                    var withinColumns = leftCol < itemRightCol && itemLeftCol < rightCol;
                    /** @type {?} */
                    var withinRows = topRow < itemBottomRow && itemTopRow < bottomRow;
                    if (withinColumns && withinRows) {
                        returns.push(item);
                    }
                });
                return returns;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixGridCollisions = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                /** @type {?} */
                var collisions = this._getCollisions(pos, dims);
                if (collisions.length === 0) {
                    return;
                }
                try {
                    for (var collisions_1 = __values(collisions), collisions_1_1 = collisions_1.next(); !collisions_1_1.done; collisions_1_1 = collisions_1.next()) {
                        var collision = collisions_1_1.value;
                        this._removeFromGrid(collision);
                        /** @type {?} */
                        var itemDims = collision.getSize();
                        /** @type {?} */
                        var itemPos = collision.getGridPosition();
                        /** @type {?} */
                        var newItemPos = { col: itemPos.col, row: itemPos.row };
                        if (this._collisionFixDirection === "vertical") {
                            newItemPos.row = pos.row + dims.y;
                            if (!this._isWithinBoundsY(newItemPos, itemDims)) {
                                newItemPos.col = pos.col + dims.x;
                                newItemPos.row = 1;
                            }
                        }
                        else if (this._collisionFixDirection === "horizontal") {
                            newItemPos.col = pos.col + dims.x;
                            if (!this._isWithinBoundsX(newItemPos, itemDims)) {
                                newItemPos.col = 1;
                                newItemPos.row = pos.row + dims.y;
                            }
                        }
                        collision.setGridPosition(newItemPos);
                        this._fixGridCollisions(newItemPos, itemDims);
                        this._addToGrid(collision);
                        collision.onCascadeEvent();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (collisions_1_1 && !collisions_1_1.done && (_a = collisions_1.return))
                            _a.call(collisions_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._fixGridCollisions(pos, dims);
                var e_1, _a;
            };
        /**
         * @private
         * @param {?=} pos
         * @param {?=} dims
         * @return {?}
         */
        NgGrid.prototype._cascadeGrid = /**
         * @private
         * @param {?=} pos
         * @param {?=} dims
         * @return {?}
         */
            function (pos, dims) {
                var _this = this;
                if (this._destroyed)
                    return;
                if (!pos !== !dims)
                    throw new Error('Cannot cascade with only position and not dimensions');
                if (this.isDragging && this._draggingItem && !pos && !dims) {
                    pos = this._draggingItem.getGridPosition();
                    dims = this._draggingItem.getSize();
                }
                else if (this.isResizing && this._resizingItem && !pos && !dims) {
                    pos = this._resizingItem.getGridPosition();
                    dims = this._resizingItem.getSize();
                }
                /** @type {?} */
                var itemsInGrid = Array.from(this._itemsInGrid, function (itemId) { return _this._items.get(itemId); });
                switch (this.cascade) {
                    case 'up':
                    case 'down':
                        itemsInGrid = itemsInGrid.sort(sortItemsByPositionVertical);
                        /** @type {?} */
                        var lowestRowPerColumn = new Map();
                        try {
                            for (var itemsInGrid_1 = __values(itemsInGrid), itemsInGrid_1_1 = itemsInGrid_1.next(); !itemsInGrid_1_1.done; itemsInGrid_1_1 = itemsInGrid_1.next()) {
                                var item = itemsInGrid_1_1.value;
                                if (item.isFixed)
                                    continue;
                                /** @type {?} */
                                var itemDims = item.getSize();
                                /** @type {?} */
                                var itemPos = item.getGridPosition();
                                /** @type {?} */
                                var lowestRowForItem = lowestRowPerColumn.get(itemPos.col) || 1;
                                for (var i = 1; i < itemDims.x; i++) {
                                    /** @type {?} */
                                    var lowestRowForColumn = lowestRowPerColumn.get(itemPos.col + i) || 1;
                                    lowestRowForItem = Math.max(lowestRowForColumn, lowestRowForItem);
                                }
                                /** @type {?} */
                                var leftCol = itemPos.col;
                                /** @type {?} */
                                var rightCol = itemPos.col + itemDims.x;
                                if (pos && dims) {
                                    /** @type {?} */
                                    var withinColumns = rightCol > pos.col && leftCol < (pos.col + dims.x);
                                    if (withinColumns) {
                                        //	If our element is in one of the item's columns
                                        /** @type {?} */
                                        var roomAboveItem = itemDims.y <= (pos.row - lowestRowForItem);
                                        if (!roomAboveItem) {
                                            lowestRowForItem = Math.max(lowestRowForItem, pos.row + dims.y); //	Set the lowest row to be below it
                                        }
                                    }
                                }
                                /** @type {?} */
                                var newPos = { col: itemPos.col, row: lowestRowForItem };
                                //	What if it's not within bounds Y?
                                if (lowestRowForItem != itemPos.row && this._isWithinBoundsY(newPos, itemDims)) {
                                    this._removeFromGrid(item);
                                    item.setGridPosition(newPos);
                                    item.onCascadeEvent();
                                    this._addToGrid(item);
                                }
                                for (var i = 0; i < itemDims.x; i++) {
                                    lowestRowPerColumn.set(itemPos.col + i, lowestRowForItem + itemDims.y); //	Update the lowest row to be below the item
                                }
                            }
                        }
                        catch (e_2_1) {
                            e_2 = { error: e_2_1 };
                        }
                        finally {
                            try {
                                if (itemsInGrid_1_1 && !itemsInGrid_1_1.done && (_a = itemsInGrid_1.return))
                                    _a.call(itemsInGrid_1);
                            }
                            finally {
                                if (e_2)
                                    throw e_2.error;
                            }
                        }
                        break;
                    case 'left':
                    case 'right':
                        itemsInGrid = itemsInGrid.sort(sortItemsByPositionHorizontal);
                        /** @type {?} */
                        var lowestColumnPerRow = new Map();
                        try {
                            for (var itemsInGrid_2 = __values(itemsInGrid), itemsInGrid_2_1 = itemsInGrid_2.next(); !itemsInGrid_2_1.done; itemsInGrid_2_1 = itemsInGrid_2.next()) {
                                var item = itemsInGrid_2_1.value;
                                /** @type {?} */
                                var itemDims = item.getSize();
                                /** @type {?} */
                                var itemPos = item.getGridPosition();
                                /** @type {?} */
                                var lowestColumnForItem = lowestColumnPerRow.get(itemPos.row) || 1;
                                for (var i = 1; i < itemDims.y; i++) {
                                    /** @type {?} */
                                    var lowestOffsetColumn = lowestColumnPerRow.get(itemPos.row + i) || 1;
                                    lowestColumnForItem = Math.max(lowestOffsetColumn, lowestColumnForItem);
                                }
                                /** @type {?} */
                                var topRow = itemPos.row;
                                /** @type {?} */
                                var bottomRow = itemPos.row + itemDims.y;
                                if (pos && dims) {
                                    /** @type {?} */
                                    var withinRows = bottomRow > pos.col && topRow < (pos.col + dims.x);
                                    if (withinRows) {
                                        //	If our element is in one of the item's rows
                                        /** @type {?} */
                                        var roomNextToItem = itemDims.x <= (pos.col - lowestColumnForItem);
                                        if (!roomNextToItem) {
                                            lowestColumnForItem = Math.max(lowestColumnForItem, pos.col + dims.x); //	Set the lowest col to be the other side of it
                                        }
                                    }
                                }
                                /** @type {?} */
                                var newPos = { col: lowestColumnForItem, row: itemPos.row };
                                if (lowestColumnForItem != itemPos.col && this._isWithinBoundsX(newPos, itemDims)) {
                                    this._removeFromGrid(item);
                                    item.setGridPosition(newPos);
                                    item.onCascadeEvent();
                                    this._addToGrid(item);
                                }
                                for (var i = 0; i < itemDims.y; i++) {
                                    lowestColumnPerRow.set(itemPos.row + i, lowestColumnForItem + itemDims.x); //	Update the lowest col to be below the item
                                }
                            }
                        }
                        catch (e_3_1) {
                            e_3 = { error: e_3_1 };
                        }
                        finally {
                            try {
                                if (itemsInGrid_2_1 && !itemsInGrid_2_1.done && (_b = itemsInGrid_2.return))
                                    _b.call(itemsInGrid_2);
                            }
                            finally {
                                if (e_3)
                                    throw e_3.error;
                            }
                        }
                        break;
                    default:
                        break;
                }
                var e_2, _a, e_3, _b;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixGridPosition = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                if (!this._hasGridCollision(pos, dims))
                    return pos;
                /** @type {?} */
                var maxRow = this._maxRows === 0 ? this._getMaxRow() : this._maxRows;
                /** @type {?} */
                var maxCol = this._maxCols === 0 ? this._getMaxCol() : this._maxCols;
                /** @type {?} */
                var newPos = {
                    col: pos.col,
                    row: pos.row,
                };
                if (this._itemFixDirection === "vertical") {
                    fixLoop: for (; newPos.col <= maxRow;) {
                        /** @type {?} */
                        var itemsInPath = this._getItemsInVerticalPath(newPos, dims, newPos.row);
                        /** @type {?} */
                        var nextRow = newPos.row;
                        try {
                            for (var itemsInPath_1 = __values(itemsInPath), itemsInPath_1_1 = itemsInPath_1.next(); !itemsInPath_1_1.done; itemsInPath_1_1 = itemsInPath_1.next()) {
                                var item = itemsInPath_1_1.value;
                                if (item.row - nextRow >= dims.y) {
                                    newPos.row = nextRow;
                                    break fixLoop;
                                }
                                nextRow = item.row + item.sizey;
                            }
                        }
                        catch (e_4_1) {
                            e_4 = { error: e_4_1 };
                        }
                        finally {
                            try {
                                if (itemsInPath_1_1 && !itemsInPath_1_1.done && (_a = itemsInPath_1.return))
                                    _a.call(itemsInPath_1);
                            }
                            finally {
                                if (e_4)
                                    throw e_4.error;
                            }
                        }
                        if (maxRow - nextRow >= dims.y) {
                            newPos.row = nextRow;
                            break fixLoop;
                        }
                        newPos.col = Math.max(newPos.col + 1, Math.min.apply(Math, itemsInPath.map(function (item) { return item.col + dims.x; })));
                        newPos.row = 1;
                    }
                }
                else if (this._itemFixDirection === "horizontal") {
                    fixLoop: for (; newPos.row <= maxRow;) {
                        /** @type {?} */
                        var itemsInPath = this._getItemsInHorizontalPath(newPos, dims, newPos.col);
                        /** @type {?} */
                        var nextCol = newPos.col;
                        try {
                            for (var itemsInPath_2 = __values(itemsInPath), itemsInPath_2_1 = itemsInPath_2.next(); !itemsInPath_2_1.done; itemsInPath_2_1 = itemsInPath_2.next()) {
                                var item = itemsInPath_2_1.value;
                                if (item.col - nextCol >= dims.x) {
                                    newPos.col = nextCol;
                                    break fixLoop;
                                }
                                nextCol = item.col + item.sizex;
                            }
                        }
                        catch (e_5_1) {
                            e_5 = { error: e_5_1 };
                        }
                        finally {
                            try {
                                if (itemsInPath_2_1 && !itemsInPath_2_1.done && (_b = itemsInPath_2.return))
                                    _b.call(itemsInPath_2);
                            }
                            finally {
                                if (e_5)
                                    throw e_5.error;
                            }
                        }
                        if (maxCol - nextCol >= dims.x) {
                            newPos.col = nextCol;
                            break fixLoop;
                        }
                        newPos.row = Math.max(newPos.row + 1, Math.min.apply(Math, itemsInPath.map(function (item) { return item.row + dims.y; })));
                        newPos.col = 1;
                    }
                }
                return newPos;
                var e_4, _a, e_5, _b;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} startColumn
         * @return {?}
         */
        NgGrid.prototype._getItemsInHorizontalPath = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} startColumn
         * @return {?}
         */
            function (pos, dims, startColumn) {
                var _this = this;
                if (startColumn === void 0) {
                    startColumn = 0;
                }
                /** @type {?} */
                var itemsInPath = [];
                /** @type {?} */
                var topRow = pos.row + dims.y - 1;
                this._itemsInGrid.forEach(function (itemId) {
                    /** @type {?} */
                    var item = _this._items.get(itemId);
                    if (item.col + item.sizex - 1 < startColumn) {
                        return;
                    } //	Item falls after start column
                    if (item.row > topRow) {
                        return;
                    } //	Item falls above path
                    if (item.row + item.sizey - 1 < pos.row) {
                        return;
                    } //	Item falls below path
                    itemsInPath.push(item);
                });
                return itemsInPath;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} startRow
         * @return {?}
         */
        NgGrid.prototype._getItemsInVerticalPath = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} startRow
         * @return {?}
         */
            function (pos, dims, startRow) {
                var _this = this;
                if (startRow === void 0) {
                    startRow = 0;
                }
                /** @type {?} */
                var itemsInPath = [];
                /** @type {?} */
                var rightCol = pos.col + dims.x - 1;
                this._itemsInGrid.forEach(function (itemId) {
                    /** @type {?} */
                    var item = _this._items.get(itemId);
                    if (item.row + item.sizey - 1 < startRow) {
                        return;
                    } //	Item falls above start row
                    if (item.col > rightCol) {
                        return;
                    } //	Item falls after path
                    if (item.col + item.sizex - 1 < pos.col) {
                        return;
                    } //	Item falls before path
                    itemsInPath.push(item);
                });
                return itemsInPath;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} allowExcessiveItems
         * @return {?}
         */
        NgGrid.prototype._isWithinBoundsX = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} allowExcessiveItems
         * @return {?}
         */
            function (pos, dims, allowExcessiveItems) {
                if (allowExcessiveItems === void 0) {
                    allowExcessiveItems = false;
                }
                return this._maxCols == 0 || (allowExcessiveItems && pos.col == 1) || (pos.col + dims.x - 1) <= this._maxCols;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixPosToBoundsX = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                if (!this._isWithinBoundsX(pos, dims)) {
                    pos.col = Math.max(this._maxCols - (dims.x - 1), 1);
                    pos.row++;
                }
                return pos;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixSizeToBoundsX = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                if (!this._isWithinBoundsX(pos, dims)) {
                    dims.x = Math.max(this._maxCols - (pos.col - 1), 1);
                    dims.y++;
                }
                return dims;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} allowExcessiveItems
         * @return {?}
         */
        NgGrid.prototype._isWithinBoundsY = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} allowExcessiveItems
         * @return {?}
         */
            function (pos, dims, allowExcessiveItems) {
                if (allowExcessiveItems === void 0) {
                    allowExcessiveItems = false;
                }
                return this._maxRows == 0 || (allowExcessiveItems && pos.row == 1) || (pos.row + dims.y - 1) <= this._maxRows;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixPosToBoundsY = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                if (!this._isWithinBoundsY(pos, dims)) {
                    pos.row = Math.max(this._maxRows - (dims.y - 1), 1);
                    pos.col++;
                }
                return pos;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixSizeToBoundsY = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                if (!this._isWithinBoundsY(pos, dims)) {
                    dims.y = Math.max(this._maxRows - (pos.row - 1), 1);
                    dims.x++;
                }
                return dims;
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} allowExcessiveItems
         * @return {?}
         */
        NgGrid.prototype._isWithinBounds = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @param {?=} allowExcessiveItems
         * @return {?}
         */
            function (pos, dims, allowExcessiveItems) {
                if (allowExcessiveItems === void 0) {
                    allowExcessiveItems = false;
                }
                return this._isWithinBoundsX(pos, dims, allowExcessiveItems) && this._isWithinBoundsY(pos, dims, allowExcessiveItems);
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixPosToBounds = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                return this._fixPosToBoundsX(this._fixPosToBoundsY(pos, dims), dims);
            };
        /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixSizeToBounds = /**
         * @private
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                return this._fixSizeToBoundsX(pos, this._fixSizeToBoundsY(pos, dims));
            };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        NgGrid.prototype._addToGrid = /**
         * @private
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var pos = item.getGridPosition();
                /** @type {?} */
                var dims = item.getSize();
                if (this._hasGridCollision(pos, dims)) {
                    this._fixGridCollisions(pos, dims);
                    pos = item.getGridPosition();
                }
                this._itemsInGrid.add(item.uid);
            };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        NgGrid.prototype._removeFromGrid = /**
         * @private
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._itemsInGrid.delete(item.uid);
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._updateSize = /**
         * @private
         * @return {?}
         */
            function () {
                if (this._destroyed)
                    return;
                /** @type {?} */
                var maxCol = this._getMaxCol();
                /** @type {?} */
                var maxRow = this._getMaxRow();
                if (maxCol != this._curMaxCol || maxRow != this._curMaxRow) {
                    this._curMaxCol = maxCol;
                    this._curMaxRow = maxRow;
                }
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'width', '100%'); //(maxCol * (this.colWidth + this.marginLeft + this.marginRight))+'px');
                if (!this._elementBasedDynamicRowHeight) {
                    this._renderer.setElementStyle(this._ngEl.nativeElement, 'height', (maxRow * (this.rowHeight + this.marginTop + this.marginBottom)) + 'px');
                }
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._getMaxRow = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var itemsRows = Array.from(this._itemsInGrid, function (itemId) {
                    /** @type {?} */
                    var item = _this._items.get(itemId);
                    if (!item)
                        return 0;
                    return item.row + item.sizey - 1;
                });
                return Math.max.apply(null, itemsRows);
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._getMaxCol = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var itemsCols = Array.from(this._itemsInGrid, function (itemId) {
                    /** @type {?} */
                    var item = _this._items.get(itemId);
                    if (!item)
                        return 0;
                    return item.col + item.sizex - 1;
                });
                return Math.max.apply(null, itemsCols);
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._getMousePosition = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (((((window))).TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
                    e = e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
                }
                /** @type {?} */
                var refPos = this._ngEl.nativeElement.getBoundingClientRect();
                /** @type {?} */
                var left = e.clientX - refPos.left;
                /** @type {?} */
                var top = e.clientY - refPos.top;
                if (this.cascade == 'down')
                    top = refPos.top + refPos.height - e.clientY;
                if (this.cascade == 'right')
                    left = refPos.left + refPos.width - e.clientX;
                if (this.isDragging && this._zoomOnDrag) {
                    left *= 2;
                    top *= 2;
                }
                return {
                    left: left,
                    top: top
                };
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._getAbsoluteMousePosition = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (((((window))).TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
                    e = e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
                }
                return {
                    left: e.clientX,
                    top: e.clientY
                };
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._getContainerColumns = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
                /** @type {?} */
                var itemWidth = this.colWidth + this.marginLeft + this.marginRight;
                return Math.floor(maxWidth / itemWidth);
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._getContainerRows = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var maxHeight = window.innerHeight - this.marginTop - this.marginBottom;
                return Math.floor(maxHeight / (this.rowHeight + this.marginTop + this.marginBottom));
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._getScreenMargin = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
                /** @type {?} */
                var itemWidth = this.colWidth + this.marginLeft + this.marginRight;
                return Math.floor((maxWidth - (this._maxCols * itemWidth)) / 2);
            };
        /**
         * @private
         * @param {?} position
         * @return {?}
         */
        NgGrid.prototype._getItemFromPosition = /**
         * @private
         * @param {?} position
         * @return {?}
         */
            function (position) {
                var _this = this;
                return Array.from(this._itemsInGrid, function (itemId) { return _this._items.get(itemId); }).find(function (item) {
                    if (!item)
                        return false;
                    /** @type {?} */
                    var size = item.getDimensions();
                    /** @type {?} */
                    var pos = item.getPosition();
                    return position.left >= pos.left && position.left < (pos.left + size.width) &&
                        position.top >= pos.top && position.top < (pos.top + size.height);
                });
            };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        NgGrid.prototype._createPlaceholder = /**
         * @private
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var pos = item.getGridPosition();
                /** @type {?} */
                var dims = item.getSize();
                /** @type {?} */
                var factory = this.componentFactoryResolver.resolveComponentFactory(NgGridPlaceholder);
                /** @type {?} */
                var componentRef = item.containerRef.createComponent(factory);
                this._placeholderRef = componentRef;
                /** @type {?} */
                var placeholder = componentRef.instance;
                placeholder.registerGrid(this);
                placeholder.setCascadeMode(this.cascade);
                placeholder.setGridPosition({ col: pos.col, row: pos.row });
                placeholder.setSize({ x: dims.x, y: dims.y });
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._emitOnItemChange = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var itemOutput = Array.from(this._itemsInGrid)
                    .map(function (itemId) { return _this._items.get(itemId); })
                    .filter(function (item) { return !!item; })
                    .map(function (item) { return item.getEventOutput(); });
                this.onItemChange.emit(itemOutput);
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._defineListeners = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var element = this._ngEl.nativeElement;
                this._documentMousemove$ = rxjs.fromEvent(document, 'mousemove');
                this._documentMouseup$ = rxjs.fromEvent(document, 'mouseup');
                this._mousedown$ = rxjs.fromEvent(element, 'mousedown');
                this._mousemove$ = rxjs.fromEvent(element, 'mousemove');
                this._mouseup$ = rxjs.fromEvent(element, 'mouseup');
                this._touchstart$ = rxjs.fromEvent(element, 'touchstart');
                this._touchmove$ = rxjs.fromEvent(element, 'touchmove');
                this._touchend$ = rxjs.fromEvent(element, 'touchend');
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._enableListeners = /**
         * @private
         * @return {?}
         */
            function () {
                if (this._enabledListener) {
                    return;
                }
                this._enableMouseListeners();
                if (this._isTouchDevice()) {
                    this._enableTouchListeners();
                }
                this._enabledListener = true;
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._disableListeners = /**
         * @private
         * @return {?}
         */
            function () {
                this._subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
                this._enabledListener = false;
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._isTouchDevice = /**
         * @private
         * @return {?}
         */
            function () {
                return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._enableTouchListeners = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var touchstartSubs = this._touchstart$.subscribe(function (e) { return _this.mouseDownEventHandler(e); });
                /** @type {?} */
                var touchmoveSubs = this._touchmove$.subscribe(function (e) { return _this.mouseMoveEventHandler(e); });
                /** @type {?} */
                var touchendSubs = this._touchend$.subscribe(function (e) { return _this.mouseUpEventHandler(e); });
                this._subscriptions.push(touchstartSubs, touchmoveSubs, touchendSubs);
            };
        /**
         * @private
         * @return {?}
         */
        NgGrid.prototype._enableMouseListeners = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var documentMousemoveSubs = this._documentMousemove$.subscribe(function (e) { return _this.mouseMoveEventHandler(e); });
                /** @type {?} */
                var documentMouseupSubs = this._documentMouseup$.subscribe(function (e) { return _this.mouseUpEventHandler(e); });
                /** @type {?} */
                var mousedownSubs = this._mousedown$.subscribe(function (e) { return _this.mouseDownEventHandler(e); });
                /** @type {?} */
                var mousemoveSubs = this._mousemove$.subscribe(function (e) { return _this.mouseMoveEventHandler(e); });
                /** @type {?} */
                var mouseupSubs = this._mouseup$.subscribe(function (e) { return _this.mouseUpEventHandler(e); });
                this._subscriptions.push(documentMousemoveSubs, documentMouseupSubs, mousedownSubs, mousemoveSubs, mouseupSubs);
            };
        //	Default config
        NgGrid.CONST_DEFAULT_CONFIG = {
            margins: [10],
            draggable: true,
            resizable: true,
            max_cols: 0,
            max_rows: 0,
            visible_cols: 0,
            visible_rows: 0,
            col_width: 250,
            row_height: 250,
            cascade: 'up',
            min_width: 100,
            min_height: 100,
            fix_to_grid: false,
            auto_style: true,
            auto_resize: false,
            maintain_ratio: false,
            prefer_new: false,
            zoom_on_drag: false,
            limit_to_screen: false,
            center_to_screen: false,
            element_based_row_height: false,
            fix_item_position_direction: "cascade",
            fix_collision_position_direction: "cascade",
        };
        NgGrid.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngGrid]',
                        inputs: ['config: ngGrid'],
                        host: {
                            '(window:resize)': 'resizeEventHandler($event)',
                        }
                    },] },
        ];
        NgGrid.ctorParameters = function () {
            return [
                { type: core.KeyValueDiffers },
                { type: core.ElementRef },
                { type: core.Renderer },
                { type: core.ComponentFactoryResolver }
            ];
        };
        NgGrid.propDecorators = {
            onDragStart: [{ type: core.Output }],
            onDrag: [{ type: core.Output }],
            onDragStop: [{ type: core.Output }],
            onResizeStart: [{ type: core.Output }],
            onResize: [{ type: core.Output }],
            onResizeStop: [{ type: core.Output }],
            onItemChange: [{ type: core.Output }]
        };
        return NgGrid;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgGridItem = (function () {
        //	Constructor
        function NgGridItem(_differs, _ngEl, _renderer, _ngGrid, containerRef) {
            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this._ngGrid = _ngGrid;
            this.containerRef = containerRef;
            //	Event Emitters
            this.onItemChange = new core.EventEmitter(false);
            this.onDragStart = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
            this.onDragStop = new core.EventEmitter();
            this.onDragAny = new core.EventEmitter();
            this.onResizeStart = new core.EventEmitter();
            this.onResize = new core.EventEmitter();
            this.onResizeStop = new core.EventEmitter();
            this.onResizeAny = new core.EventEmitter();
            this.onChangeStart = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onChangeStop = new core.EventEmitter();
            this.onChangeAny = new core.EventEmitter();
            this.ngGridItemChange = new core.EventEmitter();
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
             */ function () {
                return this._size.x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgGridItem.prototype, "sizey", {
            get: /**
             * @return {?}
             */ function () {
                return this._size.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgGridItem.prototype, "col", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentPosition.col;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgGridItem.prototype, "row", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentPosition.row;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgGridItem.prototype, "currentCol", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentPosition.col;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgGridItem.prototype, "currentRow", {
            get: /**
             * @return {?}
             */ function () {
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
                        for (var resizeDirections_1 = __values(resizeDirections), resizeDirections_1_1 = resizeDirections_1.next(); !resizeDirections_1_1.done; resizeDirections_1_1 = resizeDirections_1.next()) {
                            var direction = resizeDirections_1_1.value;
                            if (direction in this._resizeHandle) {
                                if (this.findHandle(this._resizeHandle[direction], e.target)) {
                                    return direction;
                                }
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (resizeDirections_1_1 && !resizeDirections_1_1.done && (_a = resizeDirections_1.return))
                                _a.call(resizeDirections_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
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
                if (update === void 0) {
                    update = true;
                }
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
                if (update === void 0) {
                    update = true;
                }
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
                return (({
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
            { type: core.Directive, args: [{
                        selector: '[ngGridItem]',
                        inputs: ['config: ngGridItem']
                    },] },
        ];
        NgGridItem.ctorParameters = function () {
            return [
                { type: core.KeyValueDiffers },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: NgGrid },
                { type: core.ViewContainerRef }
            ];
        };
        NgGridItem.propDecorators = {
            onItemChange: [{ type: core.Output }],
            onDragStart: [{ type: core.Output }],
            onDrag: [{ type: core.Output }],
            onDragStop: [{ type: core.Output }],
            onDragAny: [{ type: core.Output }],
            onResizeStart: [{ type: core.Output }],
            onResize: [{ type: core.Output }],
            onResizeStop: [{ type: core.Output }],
            onResizeAny: [{ type: core.Output }],
            onChangeStart: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onChangeStop: [{ type: core.Output }],
            onChangeAny: [{ type: core.Output }],
            ngGridItemChange: [{ type: core.Output }]
        };
        return NgGridItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgGridModule = (function () {
        function NgGridModule() {
        }
        NgGridModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgGrid, NgGridItem, NgGridPlaceholder],
                        entryComponents: [NgGridPlaceholder],
                        exports: [NgGrid, NgGridItem]
                    },] },
        ];
        return NgGridModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgGrid = NgGrid;
    exports.NgGridItem = NgGridItem;
    exports.NgGridPlaceholder = NgGridPlaceholder;
    exports.NgGridModule = NgGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vYW5ndWxhcjItZ3JpZC9oZWxwZXJzL05nR3JpZEhlbHBlcnMudHMiLCJuZzovL2FuZ3VsYXIyLWdyaWQvY29tcG9uZW50cy9OZ0dyaWRQbGFjZWhvbGRlci50cyIsIm5nOi8vYW5ndWxhcjItZ3JpZC9kaXJlY3RpdmVzL05nR3JpZC50cyIsIm5nOi8vYW5ndWxhcjItZ3JpZC9kaXJlY3RpdmVzL05nR3JpZEl0ZW0udHMiLCJuZzovL2FuZ3VsYXIyLWdyaWQvbW9kdWxlcy9OZ0dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdHcmlkSXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL05nR3JpZEl0ZW1cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVV1aWQoKTogc3RyaW5nIHtcclxuXHRyZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcblx0XHR2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcblx0XHRyZXR1cm4gdi50b1N0cmluZygxNik7XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0SXRlbXNCeVBvc2l0aW9uSG9yaXpvbnRhbChhOiBOZ0dyaWRJdGVtLCBiOiBOZ0dyaWRJdGVtKTogbnVtYmVyIHtcclxuXHRpZiAoYS5jb2wgPT09IGIuY29sKSB7IHJldHVybiBhLnJvdyAtIGIucm93OyB9XHJcblx0cmV0dXJuIGEuY29sIC0gYi5jb2w7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0SXRlbXNCeVBvc2l0aW9uVmVydGljYWwoYTogTmdHcmlkSXRlbSwgYjogTmdHcmlkSXRlbSk6IG51bWJlciB7XHJcblx0aWYgKGEucm93ID09PSBiLnJvdykgeyByZXR1cm4gYS5jb2wgLSBiLmNvbDsgfVxyXG5cdHJldHVybiBhLnJvdyAtIGIucm93O1xyXG59IiwiaW1wb3J0IHsgTmdHcmlkIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9OZ0dyaWQnO1xyXG5pbXBvcnQgeyBOZ0dyaWRJdGVtIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9OZ0dyaWRJdGVtJztcclxuaW1wb3J0IHsgTmdHcmlkSXRlbVBvc2l0aW9uLCBOZ0dyaWRJdGVtU2l6ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvSU5nR3JpZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgRXZlbnRFbWl0dGVyLCBIb3N0LCBWaWV3RW5jYXBzdWxhdGlvbiwgVHlwZSwgQ29tcG9uZW50UmVmLCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgVmlld0NvbnRhaW5lclJlZiwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ25nLWdyaWQtcGxhY2Vob2xkZXInLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdHcmlkUGxhY2Vob2xkZXIgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByaXZhdGUgX3NpemU6IE5nR3JpZEl0ZW1TaXplO1xyXG5cdHByaXZhdGUgX3Bvc2l0aW9uOiBOZ0dyaWRJdGVtUG9zaXRpb247XHJcblx0cHJpdmF0ZSBfbmdHcmlkOiBOZ0dyaWQ7XHJcblx0cHJpdmF0ZSBfY2FzY2FkZU1vZGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfbmdFbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKSB7IH1cclxuXHJcblx0cHVibGljIHJlZ2lzdGVyR3JpZChuZ0dyaWQ6IE5nR3JpZCkge1xyXG5cdFx0dGhpcy5fbmdHcmlkID0gbmdHcmlkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2dyaWQtcGxhY2Vob2xkZXInLCB0cnVlKTtcclxuXHRcdGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRTaXplKG5ld1NpemU6IE5nR3JpZEl0ZW1TaXplKTogdm9pZCB7XHJcblx0XHR0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuXHRcdHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEdyaWRQb3NpdGlvbihuZXdQb3NpdGlvbjogTmdHcmlkSXRlbVBvc2l0aW9uKTogdm9pZCB7XHJcblx0XHR0aGlzLl9wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG5cdFx0dGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldENhc2NhZGVNb2RlKGNhc2NhZGU6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0dGhpcy5fY2FzY2FkZU1vZGUgPSBjYXNjYWRlO1xyXG5cdFx0c3dpdGNoIChjYXNjYWRlKSB7XHJcblx0XHRcdGNhc2UgJ3VwJzpcclxuXHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCAnMHB4Jyk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcwcHgnKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBudWxsKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgbnVsbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCAnMHB4Jyk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcwcHgnKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIG51bGwpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCBudWxsKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZG93bic6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCAnMHB4Jyk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsICcwcHgnKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBudWxsKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgbnVsbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL1x0UHJpdmF0ZSBtZXRob2RzXHJcblx0cHJpdmF0ZSBfc2V0RGltZW5zaW9ucyh3OiBudW1iZXIsIGg6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgdyArICdweCcpO1xyXG5cdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGggKyAncHgnKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX3NldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRzd2l0Y2ggKHRoaXMuX2Nhc2NhZGVNb2RlKSB7XHJcblx0XHRcdGNhc2UgJ3VwJzpcclxuXHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4KScpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIC14ICsgJ3B4LCAnICsgeSArICdweCknKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZG93bic6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyAteSArICdweCknKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX3JlY2FsY3VsYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcblx0XHRjb25zdCB4OiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLmNvbFdpZHRoICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQpICogKHRoaXMuX3Bvc2l0aW9uLmNvbCAtIDEpICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQuc2NyZWVuTWFyZ2luO1xyXG5cdFx0Y29uc3QgeTogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5yb3dIZWlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSkgKiAodGhpcy5fcG9zaXRpb24ucm93IC0gMSkgKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wO1xyXG5cdFx0dGhpcy5fc2V0UG9zaXRpb24oeCwgeSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTogdm9pZCB7XHJcblx0XHRjb25zdCB3OiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLmNvbFdpZHRoICogdGhpcy5fc2l6ZS54KSArICgodGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQpICogKHRoaXMuX3NpemUueCAtIDEpKTtcclxuXHRcdGNvbnN0IGg6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQucm93SGVpZ2h0ICogdGhpcy5fc2l6ZS55KSArICgodGhpcy5fbmdHcmlkLm1hcmdpblRvcCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20pICogKHRoaXMuX3NpemUueSAtIDEpKTtcclxuXHRcdHRoaXMuX3NldERpbWVuc2lvbnModywgaCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgRXZlbnRFbWl0dGVyLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEhvc3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBUeXBlLCBDb21wb25lbnRSZWYsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdHcmlkQ29uZmlnLCBOZ0dyaWRJdGVtRXZlbnQsIE5nR3JpZEl0ZW1Qb3NpdGlvbiwgTmdHcmlkSXRlbVNpemUsIE5nR3JpZFJhd1Bvc2l0aW9uLCBOZ0dyaWRJdGVtRGltZW5zaW9ucywgTmdDb25maWdGaXhEaXJlY3Rpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lOZ0dyaWQnO1xyXG5pbXBvcnQgeyBOZ0dyaWRJdGVtIH0gZnJvbSAnLi9OZ0dyaWRJdGVtJztcclxuaW1wb3J0ICogYXMgTmdHcmlkSGVscGVyIGZyb20gXCIuLi9oZWxwZXJzL05nR3JpZEhlbHBlcnNcIjtcclxuaW1wb3J0IHsgTmdHcmlkUGxhY2Vob2xkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL05nR3JpZFBsYWNlaG9sZGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW25nR3JpZF0nLFxyXG5cdGlucHV0czogWydjb25maWc6IG5nR3JpZCddLFxyXG5cdGhvc3Q6IHtcclxuXHRcdCcod2luZG93OnJlc2l6ZSknOiAncmVzaXplRXZlbnRIYW5kbGVyKCRldmVudCknLFxyXG5cdH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nR3JpZCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcclxuXHQvL1x0RXZlbnQgRW1pdHRlcnNcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvbkRyYWc6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uRHJhZ1N0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZVN0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPEFycmF5PE5nR3JpZEl0ZW1FdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxOZ0dyaWRJdGVtRXZlbnQ+PigpO1xyXG5cclxuXHQvL1x0UHVibGljIHZhcmlhYmxlc1xyXG5cdHB1YmxpYyBjb2xXaWR0aDogbnVtYmVyID0gMjUwO1xyXG5cdHB1YmxpYyByb3dIZWlnaHQ6IG51bWJlciA9IDI1MDtcclxuXHRwdWJsaWMgbWluQ29sczogbnVtYmVyID0gMTtcclxuXHRwdWJsaWMgbWluUm93czogbnVtYmVyID0gMTtcclxuXHRwdWJsaWMgbWFyZ2luVG9wOiBudW1iZXIgPSAxMDtcclxuXHRwdWJsaWMgbWFyZ2luUmlnaHQ6IG51bWJlciA9IDEwO1xyXG5cdHB1YmxpYyBtYXJnaW5Cb3R0b206IG51bWJlciA9IDEwO1xyXG5cdHB1YmxpYyBtYXJnaW5MZWZ0OiBudW1iZXIgPSAxMDtcclxuXHRwdWJsaWMgc2NyZWVuTWFyZ2luOiBudW1iZXIgPSAwO1xyXG5cdHB1YmxpYyBpc0RyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIGlzUmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgYXV0b1N0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRwdWJsaWMgcmVzaXplRW5hYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRwdWJsaWMgZHJhZ0VuYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHVibGljIGNhc2NhZGU6IHN0cmluZyA9ICd1cCc7XHJcblx0cHVibGljIG1pbldpZHRoOiBudW1iZXIgPSAxMDA7XHJcblx0cHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gMTAwO1xyXG5cclxuXHQvL1x0UHJpdmF0ZSB2YXJpYWJsZXNcclxuXHRwcml2YXRlIF9pdGVtczogTWFwPHN0cmluZywgTmdHcmlkSXRlbT4gPSBuZXcgTWFwPHN0cmluZywgTmdHcmlkSXRlbT4oKTtcclxuXHRwcml2YXRlIF9kcmFnZ2luZ0l0ZW06IE5nR3JpZEl0ZW0gPSBudWxsO1xyXG5cdHByaXZhdGUgX3Jlc2l6aW5nSXRlbTogTmdHcmlkSXRlbSA9IG51bGw7XHJcblx0cHJpdmF0ZSBfcmVzaXplRGlyZWN0aW9uOiBzdHJpbmcgPSBudWxsO1xyXG5cdHByaXZhdGUgX2l0ZW1zSW5HcmlkOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cdHByaXZhdGUgX2NvbnRhaW5lcldpZHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfY29udGFpbmVySGVpZ2h0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfbWF4Q29sczogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIF9tYXhSb3dzOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgX3Zpc2libGVDb2xzOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgX3Zpc2libGVSb3dzOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgX3NldFdpZHRoOiBudW1iZXIgPSAyNTA7XHJcblx0cHJpdmF0ZSBfc2V0SGVpZ2h0OiBudW1iZXIgPSAyNTA7XHJcblx0cHJpdmF0ZSBfcG9zT2Zmc2V0OiBOZ0dyaWRSYXdQb3NpdGlvbiA9IG51bGw7XHJcblx0cHJpdmF0ZSBfYWRkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBfcGxhY2Vob2xkZXJSZWY6IENvbXBvbmVudFJlZjxOZ0dyaWRQbGFjZWhvbGRlcj4gPSBudWxsO1xyXG5cdHByaXZhdGUgX2ZpeFRvR3JpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX2F1dG9SZXNpemU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9kaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuXHRwcml2YXRlIF9kZXN0cm95ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9tYWludGFpblJhdGlvOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBfYXNwZWN0UmF0aW86IG51bWJlcjtcclxuXHRwcml2YXRlIF9wcmVmZXJOZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF96b29tT25EcmFnOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBfbGltaXRUb1NjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX2NlbnRlclRvU2NyZWVuOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBfY3VyTWF4Um93OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgX2N1ck1heENvbDogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIF9kcmFnUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9yZXNpemVSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX2VsZW1lbnRCYXNlZER5bmFtaWNSb3dIZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9pdGVtRml4RGlyZWN0aW9uOiBOZ0NvbmZpZ0ZpeERpcmVjdGlvbiA9IFwiY2FzY2FkZVwiO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvbkZpeERpcmVjdGlvbjogTmdDb25maWdGaXhEaXJlY3Rpb24gPSBcImNhc2NhZGVcIjtcclxuXHRwcml2YXRlIF9jYXNjYWRlUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcclxuXHJcblx0Ly8gRXZlbnRzXHJcblx0cHJpdmF0ZSBfZG9jdW1lbnRNb3VzZW1vdmUkOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+O1xyXG5cdHByaXZhdGUgX2RvY3VtZW50TW91c2V1cCQ6IE9ic2VydmFibGU8TW91c2VFdmVudD47XHJcblx0cHJpdmF0ZSBfbW91c2Vkb3duJDogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PjtcclxuXHRwcml2YXRlIF9tb3VzZW1vdmUkOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+O1xyXG5cdHByaXZhdGUgX21vdXNldXAkOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+O1xyXG5cdHByaXZhdGUgX3RvdWNoc3RhcnQkOiBPYnNlcnZhYmxlPFRvdWNoRXZlbnQ+O1xyXG5cdHByaXZhdGUgX3RvdWNobW92ZSQ6IE9ic2VydmFibGU8VG91Y2hFdmVudD47XHJcblx0cHJpdmF0ZSBfdG91Y2hlbmQkOiBPYnNlcnZhYmxlPFRvdWNoRXZlbnQ+O1xyXG5cdHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG5cdHByaXZhdGUgX2VuYWJsZWRMaXN0ZW5lcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvL1x0RGVmYXVsdCBjb25maWdcclxuXHRwcml2YXRlIHN0YXRpYyBDT05TVF9ERUZBVUxUX0NPTkZJRzogTmdHcmlkQ29uZmlnID0ge1xyXG5cdFx0bWFyZ2luczogWzEwXSxcclxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdHJlc2l6YWJsZTogdHJ1ZSxcclxuXHRcdG1heF9jb2xzOiAwLFxyXG5cdFx0bWF4X3Jvd3M6IDAsXHJcblx0XHR2aXNpYmxlX2NvbHM6IDAsXHJcblx0XHR2aXNpYmxlX3Jvd3M6IDAsXHJcblx0XHRjb2xfd2lkdGg6IDI1MCxcclxuXHRcdHJvd19oZWlnaHQ6IDI1MCxcclxuXHRcdGNhc2NhZGU6ICd1cCcsXHJcblx0XHRtaW5fd2lkdGg6IDEwMCxcclxuXHRcdG1pbl9oZWlnaHQ6IDEwMCxcclxuXHRcdGZpeF90b19ncmlkOiBmYWxzZSxcclxuXHRcdGF1dG9fc3R5bGU6IHRydWUsXHJcblx0XHRhdXRvX3Jlc2l6ZTogZmFsc2UsXHJcblx0XHRtYWludGFpbl9yYXRpbzogZmFsc2UsXHJcblx0XHRwcmVmZXJfbmV3OiBmYWxzZSxcclxuXHRcdHpvb21fb25fZHJhZzogZmFsc2UsXHJcblx0XHRsaW1pdF90b19zY3JlZW46IGZhbHNlLFxyXG5cdFx0Y2VudGVyX3RvX3NjcmVlbjogZmFsc2UsXHJcblx0XHRlbGVtZW50X2Jhc2VkX3Jvd19oZWlnaHQ6IGZhbHNlLFxyXG5cdFx0Zml4X2l0ZW1fcG9zaXRpb25fZGlyZWN0aW9uOiBcImNhc2NhZGVcIixcclxuXHRcdGZpeF9jb2xsaXNpb25fcG9zaXRpb25fZGlyZWN0aW9uOiBcImNhc2NhZGVcIixcclxuXHR9O1xyXG5cdHByaXZhdGUgX2NvbmZpZyA9IE5nR3JpZC5DT05TVF9ERUZBVUxUX0NPTkZJRztcclxuXHJcblx0Ly9cdFtuZy1ncmlkXSBhdHRyaWJ1dGUgaGFuZGxlclxyXG5cdHNldCBjb25maWcodjogTmdHcmlkQ29uZmlnKSB7XHJcblx0XHRpZiAodiA9PSBudWxsIHx8IHR5cGVvZiB2ICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldENvbmZpZyh2KTtcclxuXHJcblx0XHRpZiAodGhpcy5fZGlmZmVyID09IG51bGwgJiYgdiAhPSBudWxsKSB7XHJcblx0XHRcdHRoaXMuX2RpZmZlciA9IHRoaXMuX2RpZmZlcnMuZmluZCh0aGlzLl9jb25maWcpLmNyZWF0ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuX2NvbmZpZyk7XHJcblx0fVxyXG5cclxuXHQvL1x0Q29uc3RydWN0b3JcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2RpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcclxuXHRcdHByaXZhdGUgX25nRWw6IEVsZW1lbnRSZWYsXHJcblx0XHRwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXHJcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5fZGVmaW5lTGlzdGVuZXJzKCk7XHJcblx0fVxyXG5cclxuXHQvL1x0UHVibGljIG1ldGhvZHNcclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnZ3JpZCcsIHRydWUpO1xyXG5cdFx0aWYgKHRoaXMuYXV0b1N0eWxlKSB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuXHRcdHRoaXMuc2V0Q29uZmlnKHRoaXMuX2NvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblx0XHR0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5fZGlzYWJsZUxpc3RlbmVycygpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdlbmVyYXRlSXRlbVVpZCgpOiBzdHJpbmcge1xyXG5cdFx0Y29uc3QgdWlkOiBzdHJpbmcgPSBOZ0dyaWRIZWxwZXIuZ2VuZXJhdGVVdWlkKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmhhcyh1aWQpKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdlbmVyYXRlSXRlbVVpZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB1aWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogTmdHcmlkQ29uZmlnKTogdm9pZCB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG5cdFx0dmFyIG1heENvbFJvd0NoYW5nZWQgPSBmYWxzZTtcclxuXHRcdGZvciAodmFyIHggaW4gY29uZmlnKSB7XHJcblx0XHRcdHZhciB2YWwgPSBjb25maWdbeF07XHJcblx0XHRcdHZhciBpbnRWYWwgPSAhdmFsID8gMCA6IHBhcnNlSW50KHZhbCk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHgpIHtcclxuXHRcdFx0XHRjYXNlICdtYXJnaW5zJzpcclxuXHRcdFx0XHRcdHRoaXMuc2V0TWFyZ2lucyh2YWwpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnY29sX3dpZHRoJzpcclxuXHRcdFx0XHRcdHRoaXMuY29sV2lkdGggPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAncm93X2hlaWdodCc6XHJcblx0XHRcdFx0XHR0aGlzLnJvd0hlaWdodCA9IE1hdGgubWF4KGludFZhbCwgMSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdhdXRvX3N0eWxlJzpcclxuXHRcdFx0XHRcdHRoaXMuYXV0b1N0eWxlID0gdmFsID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnYXV0b19yZXNpemUnOlxyXG5cdFx0XHRcdFx0dGhpcy5fYXV0b1Jlc2l6ZSA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2RyYWdnYWJsZSc6XHJcblx0XHRcdFx0XHR0aGlzLmRyYWdFbmFibGUgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdyZXNpemFibGUnOlxyXG5cdFx0XHRcdFx0dGhpcy5yZXNpemVFbmFibGUgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdtYXhfcm93cyc6XHJcblx0XHRcdFx0XHRtYXhDb2xSb3dDaGFuZ2VkID0gbWF4Q29sUm93Q2hhbmdlZCB8fCB0aGlzLl9tYXhSb3dzICE9IGludFZhbDtcclxuXHRcdFx0XHRcdHRoaXMuX21heFJvd3MgPSBpbnRWYWwgPCAwID8gMCA6IGludFZhbDtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ21heF9jb2xzJzpcclxuXHRcdFx0XHRcdG1heENvbFJvd0NoYW5nZWQgPSBtYXhDb2xSb3dDaGFuZ2VkIHx8IHRoaXMuX21heENvbHMgIT0gaW50VmFsO1xyXG5cdFx0XHRcdFx0dGhpcy5fbWF4Q29scyA9IGludFZhbCA8IDAgPyAwIDogaW50VmFsO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAndmlzaWJsZV9yb3dzJzpcclxuXHRcdFx0XHRcdHRoaXMuX3Zpc2libGVSb3dzID0gTWF0aC5tYXgoaW50VmFsLCAwKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ3Zpc2libGVfY29scyc6XHJcblx0XHRcdFx0XHR0aGlzLl92aXNpYmxlQ29scyA9IE1hdGgubWF4KGludFZhbCwgMCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdtaW5fcm93cyc6XHJcblx0XHRcdFx0XHR0aGlzLm1pblJvd3MgPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnbWluX2NvbHMnOlxyXG5cdFx0XHRcdFx0dGhpcy5taW5Db2xzID0gTWF0aC5tYXgoaW50VmFsLCAxKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ21pbl9oZWlnaHQnOlxyXG5cdFx0XHRcdFx0dGhpcy5taW5IZWlnaHQgPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnbWluX3dpZHRoJzpcclxuXHRcdFx0XHRcdHRoaXMubWluV2lkdGggPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnem9vbV9vbl9kcmFnJzpcclxuXHRcdFx0XHRcdHRoaXMuX3pvb21PbkRyYWcgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdjYXNjYWRlJzpcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNhc2NhZGUgIT0gdmFsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FzY2FkZSA9IHZhbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5fY2FzY2FkZUdyaWQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2ZpeF90b19ncmlkJzpcclxuXHRcdFx0XHRcdHRoaXMuX2ZpeFRvR3JpZCA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ21haW50YWluX3JhdGlvJzpcclxuXHRcdFx0XHRcdHRoaXMuX21haW50YWluUmF0aW8gPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdwcmVmZXJfbmV3JzpcclxuXHRcdFx0XHRcdHRoaXMuX3ByZWZlck5ldyA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2xpbWl0X3RvX3NjcmVlbic6XHJcblx0XHRcdFx0XHR0aGlzLl9saW1pdFRvU2NyZWVuID0gIXRoaXMuX2F1dG9SZXNpemUgJiYgISF2YWw7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdjZW50ZXJfdG9fc2NyZWVuJzpcclxuXHRcdFx0XHRcdHRoaXMuX2NlbnRlclRvU2NyZWVuID0gdmFsID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnZWxlbWVudF9iYXNlZF9yb3dfaGVpZ2h0JzpcclxuXHRcdFx0XHRcdHRoaXMuX2VsZW1lbnRCYXNlZER5bmFtaWNSb3dIZWlnaHQgPSAhIXZhbDtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2ZpeF9pdGVtX3Bvc2l0aW9uX2RpcmVjdGlvbic6XHJcblx0XHRcdFx0XHR0aGlzLl9pdGVtRml4RGlyZWN0aW9uID0gdmFsO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnZml4X2NvbGxpc2lvbl9wb3NpdGlvbl9kaXJlY3Rpb24nOlxyXG5cdFx0XHRcdFx0dGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID0gdmFsO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5kcmFnRW5hYmxlIHx8IHRoaXMucmVzaXplRW5hYmxlKSB7XHJcblx0XHRcdHRoaXMuX2VuYWJsZUxpc3RlbmVycygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fZGlzYWJsZUxpc3RlbmVycygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9pdGVtRml4RGlyZWN0aW9uID09PSBcImNhc2NhZGVcIikge1xyXG5cdFx0XHR0aGlzLl9pdGVtRml4RGlyZWN0aW9uID0gdGhpcy5fZ2V0Rml4RGlyZWN0aW9uRnJvbUNhc2NhZGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID09PSBcImNhc2NhZGVcIikge1xyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25GaXhEaXJlY3Rpb24gPSB0aGlzLl9nZXRGaXhEaXJlY3Rpb25Gcm9tQ2FzY2FkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9saW1pdFRvU2NyZWVuKSB7XHJcblx0XHRcdGNvbnN0IG5ld01heENvbHMgPSB0aGlzLl9nZXRDb250YWluZXJDb2x1bW5zKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5fbWF4Q29scyAhPSBuZXdNYXhDb2xzKSB7XHJcblx0XHRcdFx0dGhpcy5fbWF4Q29scyA9IG5ld01heENvbHM7XHJcblx0XHRcdFx0bWF4Q29sUm93Q2hhbmdlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5fbGltaXRUb1NjcmVlbiAmJiB0aGlzLl9jZW50ZXJUb1NjcmVlbikge1xyXG5cdFx0XHR0aGlzLnNjcmVlbk1hcmdpbiA9IHRoaXMuX2dldFNjcmVlbk1hcmdpbigpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zY3JlZW5NYXJnaW4gPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9tYWludGFpblJhdGlvKSB7XHJcblx0XHRcdGlmICh0aGlzLmNvbFdpZHRoICYmIHRoaXMucm93SGVpZ2h0KSB7XHJcblx0XHRcdFx0dGhpcy5fYXNwZWN0UmF0aW8gPSB0aGlzLmNvbFdpZHRoIC8gdGhpcy5yb3dIZWlnaHQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fbWFpbnRhaW5SYXRpbyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG1heENvbFJvd0NoYW5nZWQpIHtcclxuXHRcdFx0aWYgKHRoaXMuX21heENvbHMgPiAwICYmIHRoaXMuX21heFJvd3MgPiAwKSB7XHQvL1x0Q2FuJ3QgaGF2ZSBib3RoLCBwcmlvcml0aXNlIG9uIGNhc2NhZGVcclxuXHRcdFx0XHRzd2l0Y2ggKHRoaXMuY2FzY2FkZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0XHRcdHRoaXMuX21heENvbHMgPSAwO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3VwJzpcclxuXHRcdFx0XHRcdGNhc2UgJ2Rvd24nOlxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0dGhpcy5fbWF4Um93cyA9IDA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fdXBkYXRlUG9zaXRpb25zQWZ0ZXJNYXhDaGFuZ2UoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9jYWxjdWxhdGVDb2xXaWR0aCgpO1xyXG5cdFx0dGhpcy5fY2FsY3VsYXRlUm93SGVpZ2h0KCk7XHJcblxyXG5cdFx0dmFyIG1heFdpZHRoID0gdGhpcy5fbWF4Q29scyAqIHRoaXMuY29sV2lkdGg7XHJcblx0XHR2YXIgbWF4SGVpZ2h0ID0gdGhpcy5fbWF4Um93cyAqIHRoaXMucm93SGVpZ2h0O1xyXG5cclxuXHRcdGlmIChtYXhXaWR0aCA+IDAgJiYgdGhpcy5taW5XaWR0aCA+IG1heFdpZHRoKSB0aGlzLm1pbldpZHRoID0gMC43NSAqIHRoaXMuY29sV2lkdGg7XHJcblx0XHRpZiAobWF4SGVpZ2h0ID4gMCAmJiB0aGlzLm1pbkhlaWdodCA+IG1heEhlaWdodCkgdGhpcy5taW5IZWlnaHQgPSAwLjc1ICogdGhpcy5yb3dIZWlnaHQ7XHJcblxyXG5cdFx0aWYgKHRoaXMubWluV2lkdGggPiB0aGlzLmNvbFdpZHRoKSB0aGlzLm1pbkNvbHMgPSBNYXRoLm1heCh0aGlzLm1pbkNvbHMsIE1hdGguY2VpbCh0aGlzLm1pbldpZHRoIC8gdGhpcy5jb2xXaWR0aCkpO1xyXG5cdFx0aWYgKHRoaXMubWluSGVpZ2h0ID4gdGhpcy5yb3dIZWlnaHQpIHRoaXMubWluUm93cyA9IE1hdGgubWF4KHRoaXMubWluUm93cywgTWF0aC5jZWlsKHRoaXMubWluSGVpZ2h0IC8gdGhpcy5yb3dIZWlnaHQpKTtcclxuXHJcblx0XHRpZiAodGhpcy5fbWF4Q29scyA+IDAgJiYgdGhpcy5taW5Db2xzID4gdGhpcy5fbWF4Q29scykgdGhpcy5taW5Db2xzID0gMTtcclxuXHRcdGlmICh0aGlzLl9tYXhSb3dzID4gMCAmJiB0aGlzLm1pblJvd3MgPiB0aGlzLl9tYXhSb3dzKSB0aGlzLm1pblJvd3MgPSAxO1xyXG5cclxuXHRcdHRoaXMuX3VwZGF0ZVJhdGlvKCk7XHJcblxyXG5cdFx0dGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZW1vdmVGcm9tR3JpZChpdGVtKTtcclxuXHRcdFx0aXRlbS5zZXRDYXNjYWRlTW9kZSh0aGlzLmNhc2NhZGUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4ge1xyXG5cdFx0XHRpdGVtLnJlY2FsY3VsYXRlU2VsZigpO1xyXG5cdFx0XHR0aGlzLl9hZGRUb0dyaWQoaXRlbSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG5cdFx0dGhpcy5fdXBkYXRlU2l6ZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEl0ZW1Qb3NpdGlvbihpdGVtSWQ6IHN0cmluZyk6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXRlbXMuaGFzKGl0ZW1JZCkgPyB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKS5nZXRHcmlkUG9zaXRpb24oKSA6IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0SXRlbVNpemUoaXRlbUlkOiBzdHJpbmcpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXRlbXMuaGFzKGl0ZW1JZCkgPyB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKS5nZXRTaXplKCkgOiBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5nRG9DaGVjaygpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLl9kaWZmZXIgIT0gbnVsbCkge1xyXG5cdFx0XHR2YXIgY2hhbmdlcyA9IHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdFx0XHRpZiAoY2hhbmdlcyAhPSBudWxsKSB7XHJcblx0XHRcdFx0dGhpcy5fYXBwbHlDaGFuZ2VzKGNoYW5nZXMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRNYXJnaW5zKG1hcmdpbnM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuXHRcdHRoaXMubWFyZ2luVG9wID0gTWF0aC5tYXgocGFyc2VJbnQobWFyZ2luc1swXSksIDApO1xyXG5cdFx0dGhpcy5tYXJnaW5SaWdodCA9IG1hcmdpbnMubGVuZ3RoID49IDIgPyBNYXRoLm1heChwYXJzZUludChtYXJnaW5zWzFdKSwgMCkgOiB0aGlzLm1hcmdpblRvcDtcclxuXHRcdHRoaXMubWFyZ2luQm90dG9tID0gbWFyZ2lucy5sZW5ndGggPj0gMyA/IE1hdGgubWF4KHBhcnNlSW50KG1hcmdpbnNbMl0pLCAwKSA6IHRoaXMubWFyZ2luVG9wO1xyXG5cdFx0dGhpcy5tYXJnaW5MZWZ0ID0gbWFyZ2lucy5sZW5ndGggPj0gNCA/IE1hdGgubWF4KHBhcnNlSW50KG1hcmdpbnNbM10pLCAwKSA6IHRoaXMubWFyZ2luUmlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZW5hYmxlRHJhZygpOiB2b2lkIHtcclxuXHRcdHRoaXMuZHJhZ0VuYWJsZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGlzYWJsZURyYWcoKTogdm9pZCB7XHJcblx0XHR0aGlzLmRyYWdFbmFibGUgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBlbmFibGVSZXNpemUoKTogdm9pZCB7XHJcblx0XHR0aGlzLnJlc2l6ZUVuYWJsZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGlzYWJsZVJlc2l6ZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMucmVzaXplRW5hYmxlID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkSXRlbShuZ0l0ZW06IE5nR3JpZEl0ZW0pOiB2b2lkIHtcclxuXHRcdG5nSXRlbS5zZXRDYXNjYWRlTW9kZSh0aGlzLmNhc2NhZGUpO1xyXG5cclxuXHRcdGlmICghdGhpcy5fcHJlZmVyTmV3KSB7XHJcblx0XHRcdHZhciBuZXdQb3MgPSB0aGlzLl9maXhHcmlkUG9zaXRpb24obmdJdGVtLmdldEdyaWRQb3NpdGlvbigpLCBuZ0l0ZW0uZ2V0U2l6ZSgpKTtcclxuXHRcdFx0bmdJdGVtLnNldEdyaWRQb3NpdGlvbihuZXdQb3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChuZ0l0ZW0udWlkID09PSBudWxsIHx8IHRoaXMuX2l0ZW1zLmhhcyhuZ0l0ZW0udWlkKSkge1xyXG5cdFx0XHRuZ0l0ZW0udWlkID0gdGhpcy5nZW5lcmF0ZUl0ZW1VaWQoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9pdGVtcy5zZXQobmdJdGVtLnVpZCwgbmdJdGVtKTtcclxuXHRcdHRoaXMuX2FkZFRvR3JpZChuZ0l0ZW0pO1xyXG5cclxuXHRcdHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuXHJcblx0XHR0aGlzLnRyaWdnZXJDYXNjYWRlKCkudGhlbigoKSA9PiB7XHJcblx0XHRcdG5nSXRlbS5yZWNhbGN1bGF0ZVNlbGYoKTtcclxuXHRcdFx0bmdJdGVtLm9uQ2FzY2FkZUV2ZW50KCk7XHJcblxyXG5cdFx0XHR0aGlzLl9lbWl0T25JdGVtQ2hhbmdlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlSXRlbShuZ0l0ZW06IE5nR3JpZEl0ZW0pOiB2b2lkIHtcclxuXHRcdHRoaXMuX3JlbW92ZUZyb21HcmlkKG5nSXRlbSk7XHJcblxyXG5cdFx0dGhpcy5faXRlbXMuZGVsZXRlKG5nSXRlbS51aWQpO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVybjtcclxuXHJcblx0XHR0aGlzLnRyaWdnZXJDYXNjYWRlKCkudGhlbigoKSA9PiB7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuXHRcdFx0dGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4gaXRlbS5yZWNhbGN1bGF0ZVNlbGYoKSk7XHJcblx0XHRcdHRoaXMuX2VtaXRPbkl0ZW1DaGFuZ2UoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZUl0ZW0obmdJdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcblx0XHR0aGlzLl9yZW1vdmVGcm9tR3JpZChuZ0l0ZW0pO1xyXG5cdFx0dGhpcy5fYWRkVG9HcmlkKG5nSXRlbSk7XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VyQ2FzY2FkZSgpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHR0aGlzLl91cGRhdGVTaXplKCk7XHJcblx0XHRcdG5nSXRlbS5vbkNhc2NhZGVFdmVudCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdHJpZ2dlckNhc2NhZGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRpZiAoIXRoaXMuX2Nhc2NhZGVQcm9taXNlKSB7XHJcblx0XHRcdHRoaXMuX2Nhc2NhZGVQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQpID0+IHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX2Nhc2NhZGVQcm9taXNlID0gbnVsbDtcclxuXHRcdFx0XHRcdHRoaXMuX2Nhc2NhZGVHcmlkKG51bGwsIG51bGwpO1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdH0sIDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5fY2FzY2FkZVByb21pc2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdHJpZ2dlclJlc2l6ZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMucmVzaXplRXZlbnRIYW5kbGVyKG51bGwpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2l6ZUV2ZW50SGFuZGxlcihlOiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMuX2NhbGN1bGF0ZUNvbFdpZHRoKCk7XHJcblx0XHR0aGlzLl9jYWxjdWxhdGVSb3dIZWlnaHQoKTtcclxuXHJcblx0XHR0aGlzLl91cGRhdGVSYXRpbygpO1xyXG5cclxuXHRcdGlmICh0aGlzLl9saW1pdFRvU2NyZWVuKSB7XHJcblx0XHRcdGNvbnN0IG5ld01heENvbHVtbnMgPSB0aGlzLl9nZXRDb250YWluZXJDb2x1bW5zKCk7XHJcblx0XHRcdGlmICh0aGlzLl9tYXhDb2xzICE9PSBuZXdNYXhDb2x1bW5zKSB7XHJcblx0XHRcdFx0dGhpcy5fbWF4Q29scyA9IG5ld01heENvbHVtbnM7XHJcblx0XHRcdFx0dGhpcy5fdXBkYXRlUG9zaXRpb25zQWZ0ZXJNYXhDaGFuZ2UoKTtcclxuXHRcdFx0XHR0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5fY2VudGVyVG9TY3JlZW4pIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbk1hcmdpbiA9IHRoaXMuX2dldFNjcmVlbk1hcmdpbigpO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRpdGVtLnJlY2FsY3VsYXRlU2VsZigpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuX2F1dG9SZXNpemUpIHtcclxuXHRcdFx0dGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4ge1xyXG5cdFx0XHRcdGl0ZW0ucmVjYWxjdWxhdGVTZWxmKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3VzZURvd25FdmVudEhhbmRsZXIoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuXHRcdHZhciBtb3VzZVBvcyA9IHRoaXMuX2dldE1vdXNlUG9zaXRpb24oZSk7XHJcblx0XHR2YXIgaXRlbSA9IHRoaXMuX2dldEl0ZW1Gcm9tUG9zaXRpb24obW91c2VQb3MpO1xyXG5cclxuXHRcdGlmIChpdGVtID09IG51bGwpIHJldHVybjtcclxuXHJcblx0XHRjb25zdCByZXNpemVEaXJlY3Rpb246IHN0cmluZyA9IGl0ZW0uY2FuUmVzaXplKGUpO1xyXG5cclxuXHRcdGlmICh0aGlzLnJlc2l6ZUVuYWJsZSAmJiByZXNpemVEaXJlY3Rpb24pIHtcclxuXHRcdFx0dGhpcy5fcmVzaXplUmVhZHkgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLl9yZXNpemluZ0l0ZW0gPSBpdGVtO1xyXG5cdFx0XHR0aGlzLl9yZXNpemVEaXJlY3Rpb24gPSByZXNpemVEaXJlY3Rpb247XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuZHJhZ0VuYWJsZSAmJiBpdGVtLmNhbkRyYWcoZSkpIHtcclxuXHRcdFx0dGhpcy5fZHJhZ1JlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5fZHJhZ2dpbmdJdGVtID0gaXRlbTtcclxuXHJcblx0XHRcdGNvbnN0IGl0ZW1Qb3MgPSBpdGVtLmdldFBvc2l0aW9uKCk7XHJcblx0XHRcdHRoaXMuX3Bvc09mZnNldCA9IHsgJ2xlZnQnOiAobW91c2VQb3MubGVmdCAtIGl0ZW1Qb3MubGVmdCksICd0b3AnOiAobW91c2VQb3MudG9wIC0gaXRlbVBvcy50b3ApIH1cclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3VzZVVwRXZlbnRIYW5kbGVyKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5pc0RyYWdnaW5nKSB7XHJcblx0XHRcdHRoaXMuX2RyYWdTdG9wKGUpO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzUmVzaXppbmcpIHtcclxuXHRcdFx0dGhpcy5fcmVzaXplU3RvcChlKTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5fZHJhZ1JlYWR5IHx8IHRoaXMuX3Jlc2l6ZVJlYWR5KSB7XHJcblx0XHRcdHRoaXMuX2NsZWFuRHJhZygpO1xyXG5cdFx0XHR0aGlzLl9jbGVhblJlc2l6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3Jlc2l6ZVJlYWR5KSB7XHJcblx0XHRcdHRoaXMuX3Jlc2l6ZVN0YXJ0KGUpO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5fZHJhZ1JlYWR5KSB7XHJcblx0XHRcdHRoaXMuX2RyYWdTdGFydChlKTtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG5cdFx0XHR0aGlzLl9kcmFnKGUpO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzUmVzaXppbmcpIHtcclxuXHRcdFx0dGhpcy5fcmVzaXplKGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIG1vdXNlUG9zID0gdGhpcy5fZ2V0TW91c2VQb3NpdGlvbihlKTtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLl9nZXRJdGVtRnJvbVBvc2l0aW9uKG1vdXNlUG9zKTtcclxuXHJcblx0XHRcdGlmIChpdGVtKSB7XHJcblx0XHRcdFx0aXRlbS5vbk1vdXNlTW92ZShlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9cdFByaXZhdGUgbWV0aG9kc1xyXG5cdHByaXZhdGUgX2dldEZpeERpcmVjdGlvbkZyb21DYXNjYWRlKCk6IE5nQ29uZmlnRml4RGlyZWN0aW9uIHtcclxuXHRcdHN3aXRjaCAodGhpcy5jYXNjYWRlKSB7XHJcblx0XHRcdGNhc2UgXCJ1cFwiOlxyXG5cdFx0XHRjYXNlIFwiZG93blwiOlxyXG5cdFx0XHRcdHJldHVybiBcInZlcnRpY2FsXCI7XHJcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XHJcblx0XHRcdGNhc2UgXCJyaWdodFwiOlxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBcImhvcml6b250YWxcIjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHJpdmF0ZSBfdXBkYXRlUG9zaXRpb25zQWZ0ZXJNYXhDaGFuZ2UoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcblx0XHRcdHZhciBwb3MgPSBpdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG5cdFx0XHR2YXIgZGltcyA9IGl0ZW0uZ2V0U2l6ZSgpO1xyXG5cclxuXHRcdFx0aWYgKCF0aGlzLl9oYXNHcmlkQ29sbGlzaW9uKHBvcywgZGltcykgJiYgdGhpcy5faXNXaXRoaW5Cb3VuZHMocG9zLCBkaW1zKSAmJiBkaW1zLnggPD0gdGhpcy5fbWF4Q29scyAmJiBkaW1zLnkgPD0gdGhpcy5fbWF4Um93cykge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fcmVtb3ZlRnJvbUdyaWQoaXRlbSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5fbWF4Q29scyA+IDAgJiYgZGltcy54ID4gdGhpcy5fbWF4Q29scykge1xyXG5cdFx0XHRcdGRpbXMueCA9IHRoaXMuX21heENvbHM7XHJcblx0XHRcdFx0aXRlbS5zZXRTaXplKGRpbXMpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuX21heFJvd3MgPiAwICYmIGRpbXMueSA+IHRoaXMuX21heFJvd3MpIHtcclxuXHRcdFx0XHRkaW1zLnkgPSB0aGlzLl9tYXhSb3dzO1xyXG5cdFx0XHRcdGl0ZW0uc2V0U2l6ZShkaW1zKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuX2hhc0dyaWRDb2xsaXNpb24ocG9zLCBkaW1zKSB8fCAhdGhpcy5faXNXaXRoaW5Cb3VuZHMocG9zLCBkaW1zLCB0cnVlKSkge1xyXG5cdFx0XHRcdHZhciBuZXdQb3NpdGlvbiA9IHRoaXMuX2ZpeEdyaWRQb3NpdGlvbihwb3MsIGRpbXMpO1xyXG5cdFx0XHRcdGl0ZW0uc2V0R3JpZFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fYWRkVG9HcmlkKGl0ZW0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9jYWxjdWxhdGVDb2xXaWR0aCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9hdXRvUmVzaXplKSB7XHJcblx0XHRcdGlmICh0aGlzLl9tYXhDb2xzID4gMCB8fCB0aGlzLl92aXNpYmxlQ29scyA+IDApIHtcclxuXHRcdFx0XHR2YXIgbWF4Q29scyA9IHRoaXMuX21heENvbHMgPiAwID8gdGhpcy5fbWF4Q29scyA6IHRoaXMuX3Zpc2libGVDb2xzO1xyXG5cdFx0XHRcdHZhciBtYXhXaWR0aDogbnVtYmVyID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5cclxuXHRcdFx0XHR2YXIgY29sV2lkdGg6IG51bWJlciA9IE1hdGguZmxvb3IobWF4V2lkdGggLyBtYXhDb2xzKTtcclxuXHRcdFx0XHRjb2xXaWR0aCAtPSAodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCk7XHJcblx0XHRcdFx0aWYgKGNvbFdpZHRoID4gMCkgdGhpcy5jb2xXaWR0aCA9IGNvbFdpZHRoO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmNvbFdpZHRoIDwgdGhpcy5taW5XaWR0aCB8fCB0aGlzLm1pbkNvbHMgPiB0aGlzLl9jb25maWcubWluX2NvbHMpIHtcclxuXHRcdFx0dGhpcy5taW5Db2xzID0gTWF0aC5tYXgodGhpcy5fY29uZmlnLm1pbl9jb2xzLCBNYXRoLmNlaWwodGhpcy5taW5XaWR0aCAvIHRoaXMuY29sV2lkdGgpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2NhbGN1bGF0ZVJvd0hlaWdodCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9hdXRvUmVzaXplKSB7XHJcblx0XHRcdGlmICh0aGlzLl9tYXhSb3dzID4gMCB8fCB0aGlzLl92aXNpYmxlUm93cyA+IDApIHtcclxuXHRcdFx0XHR2YXIgbWF4Um93cyA9IHRoaXMuX21heFJvd3MgPiAwID8gdGhpcy5fbWF4Um93cyA6IHRoaXMuX3Zpc2libGVSb3dzO1xyXG5cdFx0XHRcdGxldCBtYXhIZWlnaHQ6IG51bWJlcjtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuX2VsZW1lbnRCYXNlZER5bmFtaWNSb3dIZWlnaHQpIHtcclxuXHRcdFx0XHRcdG1heEhlaWdodCA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMubWFyZ2luVG9wIC0gdGhpcy5tYXJnaW5Cb3R0b207XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgcm93SGVpZ2h0OiBudW1iZXIgPSBNYXRoLm1heChNYXRoLmZsb29yKG1heEhlaWdodCAvIG1heFJvd3MpLCB0aGlzLm1pbkhlaWdodCk7XHJcblx0XHRcdFx0cm93SGVpZ2h0IC09ICh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKTtcclxuXHRcdFx0XHRpZiAocm93SGVpZ2h0ID4gMCkgdGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMucm93SGVpZ2h0IDwgdGhpcy5taW5IZWlnaHQgfHwgdGhpcy5taW5Sb3dzID4gdGhpcy5fY29uZmlnLm1pbl9yb3dzKSB7XHJcblx0XHRcdHRoaXMubWluUm93cyA9IE1hdGgubWF4KHRoaXMuX2NvbmZpZy5taW5fcm93cywgTWF0aC5jZWlsKHRoaXMubWluSGVpZ2h0IC8gdGhpcy5yb3dIZWlnaHQpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX3VwZGF0ZVJhdGlvKCk6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLl9hdXRvUmVzaXplIHx8ICF0aGlzLl9tYWludGFpblJhdGlvKSByZXR1cm47XHJcblxyXG5cdFx0aWYgKHRoaXMuX21heENvbHMgPiAwICYmIHRoaXMuX3Zpc2libGVSb3dzIDw9IDApIHtcclxuXHRcdFx0dGhpcy5yb3dIZWlnaHQgPSB0aGlzLmNvbFdpZHRoIC8gdGhpcy5fYXNwZWN0UmF0aW87XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuX21heFJvd3MgPiAwICYmIHRoaXMuX3Zpc2libGVDb2xzIDw9IDApIHtcclxuXHRcdFx0dGhpcy5jb2xXaWR0aCA9IHRoaXMuX2FzcGVjdFJhdGlvICogdGhpcy5yb3dIZWlnaHQ7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuX21heENvbHMgPT0gMCAmJiB0aGlzLl9tYXhSb3dzID09IDApIHtcclxuXHRcdFx0aWYgKHRoaXMuX3Zpc2libGVDb2xzID4gMCkge1xyXG5cdFx0XHRcdHRoaXMucm93SGVpZ2h0ID0gdGhpcy5jb2xXaWR0aCAvIHRoaXMuX2FzcGVjdFJhdGlvO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3Zpc2libGVSb3dzID4gMCkge1xyXG5cdFx0XHRcdHRoaXMuY29sV2lkdGggPSB0aGlzLl9hc3BlY3RSYXRpbyAqIHRoaXMucm93SGVpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9hcHBseUNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XHJcblx0XHRjaGFuZ2VzLmZvckVhY2hBZGRlZEl0ZW0oKHJlY29yZDogYW55KSA9PiB7IHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XSA9IHJlY29yZC5jdXJyZW50VmFsdWU7IH0pO1xyXG5cdFx0Y2hhbmdlcy5mb3JFYWNoQ2hhbmdlZEl0ZW0oKHJlY29yZDogYW55KSA9PiB7IHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XSA9IHJlY29yZC5jdXJyZW50VmFsdWU7IH0pO1xyXG5cdFx0Y2hhbmdlcy5mb3JFYWNoUmVtb3ZlZEl0ZW0oKHJlY29yZDogYW55KSA9PiB7IGRlbGV0ZSB0aGlzLl9jb25maWdbcmVjb3JkLmtleV07IH0pO1xyXG5cclxuXHRcdHRoaXMuc2V0Q29uZmlnKHRoaXMuX2NvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9yZXNpemVTdGFydChlOiBhbnkpOiB2b2lkIHtcclxuXHRcdGlmICghdGhpcy5yZXNpemVFbmFibGUgfHwgIXRoaXMuX3Jlc2l6aW5nSXRlbSkgcmV0dXJuO1xyXG5cclxuXHRcdC8vXHRTZXR1cFxyXG5cdFx0dGhpcy5fcmVzaXppbmdJdGVtLnN0YXJ0TW92aW5nKCk7XHJcblx0XHR0aGlzLl9yZW1vdmVGcm9tR3JpZCh0aGlzLl9yZXNpemluZ0l0ZW0pO1xyXG5cdFx0dGhpcy5fY3JlYXRlUGxhY2Vob2xkZXIodGhpcy5fcmVzaXppbmdJdGVtKTtcclxuXHJcblx0XHQvL1x0U3RhdHVzIEZsYWdzXHJcblx0XHR0aGlzLmlzUmVzaXppbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5fcmVzaXplUmVhZHkgPSBmYWxzZTtcclxuXHJcblx0XHQvL1x0RXZlbnRzXHJcblx0XHR0aGlzLm9uUmVzaXplU3RhcnQuZW1pdCh0aGlzLl9yZXNpemluZ0l0ZW0pO1xyXG5cdFx0dGhpcy5fcmVzaXppbmdJdGVtLm9uUmVzaXplU3RhcnRFdmVudCgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZHJhZ1N0YXJ0KGU6IGFueSk6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLmRyYWdFbmFibGUgfHwgIXRoaXMuX2RyYWdnaW5nSXRlbSkgcmV0dXJuO1xyXG5cclxuXHRcdC8vXHRTdGFydCBkcmFnZ2luZ1xyXG5cdFx0dGhpcy5fZHJhZ2dpbmdJdGVtLnN0YXJ0TW92aW5nKCk7XHJcblx0XHR0aGlzLl9yZW1vdmVGcm9tR3JpZCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG5cdFx0dGhpcy5fY3JlYXRlUGxhY2Vob2xkZXIodGhpcy5fZHJhZ2dpbmdJdGVtKTtcclxuXHJcblx0XHQvL1x0U3RhdHVzIEZsYWdzXHJcblx0XHR0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5fZHJhZ1JlYWR5ID0gZmFsc2U7XHJcblxyXG5cdFx0Ly9cdEV2ZW50c1xyXG5cdFx0dGhpcy5vbkRyYWdTdGFydC5lbWl0KHRoaXMuX2RyYWdnaW5nSXRlbSk7XHJcblx0XHR0aGlzLl9kcmFnZ2luZ0l0ZW0ub25EcmFnU3RhcnRFdmVudCgpO1xyXG5cclxuXHRcdC8vXHRab29tXHJcblx0XHRpZiAodGhpcy5fem9vbU9uRHJhZykge1xyXG5cdFx0XHR0aGlzLl96b29tT3V0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF96b29tT3V0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICdzY2FsZSgwLjUsIDAuNSknKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX3Jlc2V0Wm9vbSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9kcmFnKGU6IGFueSk6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLmlzRHJhZ2dpbmcpIHJldHVybjtcclxuXHJcblx0XHRpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG5cdFx0XHRpZiAod2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KSB7XHJcblx0XHRcdFx0d2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KCk7XHJcblx0XHRcdH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcykge1xyXG5cdFx0XHRcdHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICgoPGFueT5kb2N1bWVudCkuc2VsZWN0aW9uKSB7XHJcblx0XHRcdCg8YW55PmRvY3VtZW50KS5zZWxlY3Rpb24uZW1wdHkoKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbW91c2VQb3MgPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG5cdFx0dmFyIG5ld0wgPSAobW91c2VQb3MubGVmdCAtIHRoaXMuX3Bvc09mZnNldC5sZWZ0KTtcclxuXHRcdHZhciBuZXdUID0gKG1vdXNlUG9zLnRvcCAtIHRoaXMuX3Bvc09mZnNldC50b3ApO1xyXG5cclxuXHRcdHZhciBpdGVtUG9zID0gdGhpcy5fZHJhZ2dpbmdJdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG5cdFx0dmFyIGdyaWRQb3MgPSB0aGlzLl9jYWxjdWxhdGVHcmlkUG9zaXRpb24obmV3TCwgbmV3VCk7XHJcblx0XHR2YXIgZGltcyA9IHRoaXMuX2RyYWdnaW5nSXRlbS5nZXRTaXplKCk7XHJcblxyXG5cdFx0Z3JpZFBvcyA9IHRoaXMuX2ZpeFBvc1RvQm91bmRzWChncmlkUG9zLCBkaW1zKTtcclxuXHJcblx0XHRpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWShncmlkUG9zLCBkaW1zKSkge1xyXG5cdFx0XHRncmlkUG9zID0gdGhpcy5fZml4UG9zVG9Cb3VuZHNZKGdyaWRQb3MsIGRpbXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChncmlkUG9zLmNvbCAhPSBpdGVtUG9zLmNvbCB8fCBncmlkUG9zLnJvdyAhPSBpdGVtUG9zLnJvdykge1xyXG5cdFx0XHR0aGlzLl9kcmFnZ2luZ0l0ZW0uc2V0R3JpZFBvc2l0aW9uKGdyaWRQb3MsIHRoaXMuX2ZpeFRvR3JpZCk7XHJcblx0XHRcdHRoaXMuX3BsYWNlaG9sZGVyUmVmLmluc3RhbmNlLnNldEdyaWRQb3NpdGlvbihncmlkUG9zKTtcclxuXHJcblx0XHRcdGlmIChbJ3VwJywgJ2Rvd24nLCAnbGVmdCcsICdyaWdodCddLmluZGV4T2YodGhpcy5jYXNjYWRlKSA+PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5fZml4R3JpZENvbGxpc2lvbnMoZ3JpZFBvcywgZGltcyk7XHJcblx0XHRcdFx0dGhpcy5fY2FzY2FkZUdyaWQoZ3JpZFBvcywgZGltcyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuX2ZpeFRvR3JpZCkge1xyXG5cdFx0XHR0aGlzLl9kcmFnZ2luZ0l0ZW0uc2V0UG9zaXRpb24obmV3TCwgbmV3VCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5vbkRyYWcuZW1pdCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG5cdFx0dGhpcy5fZHJhZ2dpbmdJdGVtLm9uRHJhZ0V2ZW50KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9yZXNpemUoZTogYW55KTogdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuaXNSZXNpemluZykgeyByZXR1cm47IH1cclxuXHJcblx0XHRpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG5cdFx0XHRpZiAod2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KSB7XHJcblx0XHRcdFx0d2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KCk7XHJcblx0XHRcdH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcykge1xyXG5cdFx0XHRcdHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICgoPGFueT5kb2N1bWVudCkuc2VsZWN0aW9uKSB7XHJcblx0XHRcdCg8YW55PmRvY3VtZW50KS5zZWxlY3Rpb24uZW1wdHkoKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBtb3VzZVBvcyA9IHRoaXMuX2dldE1vdXNlUG9zaXRpb24oZSk7XHJcblx0XHRjb25zdCBpdGVtUG9zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldFBvc2l0aW9uKCk7XHJcblx0XHRjb25zdCBpdGVtRGltcyA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5nZXREaW1lbnNpb25zKCk7XHJcblx0XHRjb25zdCBlbmRDb3JuZXIgPSB7XHJcblx0XHRcdGxlZnQ6IGl0ZW1Qb3MubGVmdCArIGl0ZW1EaW1zLndpZHRoLFxyXG5cdFx0XHR0b3A6IGl0ZW1Qb3MudG9wICsgaXRlbURpbXMuaGVpZ2h0LFxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHJlc2l6ZVRvcCA9IHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygndG9wJyk7XHJcblx0XHRjb25zdCByZXNpemVCb3R0b20gPSB0aGlzLl9yZXNpemVEaXJlY3Rpb24uaW5jbHVkZXMoJ2JvdHRvbScpO1xyXG5cdFx0Y29uc3QgcmVzaXplTGVmdCA9IHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygnbGVmdCcpXHJcblx0XHRjb25zdCByZXNpemVSaWdodCA9IHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygncmlnaHQnKTtcclxuXHJcblx0XHQvL1x0Q2FsY3VsYXRlIG5ldyB3aWR0aCBhbmQgaGVpZ2h0IGJhc2VkIHVwb24gcmVzaXplIGRpcmVjdGlvblxyXG5cdFx0bGV0IG5ld1cgPSByZXNpemVSaWdodFxyXG5cdFx0XHQ/IChtb3VzZVBvcy5sZWZ0IC0gaXRlbVBvcy5sZWZ0ICsgMSlcclxuXHRcdFx0OiByZXNpemVMZWZ0XHJcblx0XHRcdFx0PyAoZW5kQ29ybmVyLmxlZnQgLSBtb3VzZVBvcy5sZWZ0ICsgMSlcclxuXHRcdFx0XHQ6IGl0ZW1EaW1zLndpZHRoO1xyXG5cdFx0bGV0IG5ld0ggPSByZXNpemVCb3R0b21cclxuXHRcdFx0PyAobW91c2VQb3MudG9wIC0gaXRlbVBvcy50b3AgKyAxKVxyXG5cdFx0XHQ6IHJlc2l6ZVRvcFxyXG5cdFx0XHRcdD8gKGVuZENvcm5lci50b3AgLSBtb3VzZVBvcy50b3AgKyAxKVxyXG5cdFx0XHRcdDogaXRlbURpbXMuaGVpZ2h0O1xyXG5cclxuXHRcdGlmIChuZXdXIDwgdGhpcy5taW5XaWR0aClcclxuXHRcdFx0bmV3VyA9IHRoaXMubWluV2lkdGg7XHJcblx0XHRpZiAobmV3SCA8IHRoaXMubWluSGVpZ2h0KVxyXG5cdFx0XHRuZXdIID0gdGhpcy5taW5IZWlnaHQ7XHJcblx0XHRpZiAobmV3VyA8IHRoaXMuX3Jlc2l6aW5nSXRlbS5taW5XaWR0aClcclxuXHRcdFx0bmV3VyA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5taW5XaWR0aDtcclxuXHRcdGlmIChuZXdIIDwgdGhpcy5fcmVzaXppbmdJdGVtLm1pbkhlaWdodClcclxuXHRcdFx0bmV3SCA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5taW5IZWlnaHQ7XHJcblxyXG5cdFx0bGV0IG5ld1ggPSBpdGVtUG9zLmxlZnQ7XHJcblx0XHRsZXQgbmV3WSA9IGl0ZW1Qb3MudG9wO1xyXG5cclxuXHRcdGlmIChyZXNpemVMZWZ0KVxyXG5cdFx0XHRuZXdYID0gZW5kQ29ybmVyLmxlZnQgLSBuZXdXO1xyXG5cdFx0aWYgKHJlc2l6ZVRvcClcclxuXHRcdFx0bmV3WSA9IGVuZENvcm5lci50b3AgLSBuZXdIO1xyXG5cclxuXHRcdGxldCBjYWxjU2l6ZSA9IHRoaXMuX2NhbGN1bGF0ZUdyaWRTaXplKG5ld1csIG5ld0gpO1xyXG5cdFx0Y29uc3QgaXRlbVNpemUgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0U2l6ZSgpO1xyXG5cdFx0Y29uc3QgaUdyaWRQb3MgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblx0XHRjb25zdCBib3R0b21SaWdodENvcm5lciA9IHtcclxuXHRcdFx0Y29sOiBpR3JpZFBvcy5jb2wgKyBpdGVtU2l6ZS54LFxyXG5cdFx0XHRyb3c6IGlHcmlkUG9zLnJvdyArIGl0ZW1TaXplLnksXHJcblx0XHR9O1xyXG5cdFx0Y29uc3QgdGFyZ2V0UG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBpR3JpZFBvcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcyhcInRvcFwiKSlcclxuXHRcdFx0dGFyZ2V0UG9zLnJvdyA9IGJvdHRvbVJpZ2h0Q29ybmVyLnJvdyAtIGNhbGNTaXplLnk7XHJcblx0XHRpZiAodGhpcy5fcmVzaXplRGlyZWN0aW9uLmluY2x1ZGVzKFwibGVmdFwiKSlcclxuXHRcdFx0dGFyZ2V0UG9zLmNvbCA9IGJvdHRvbVJpZ2h0Q29ybmVyLmNvbCAtIGNhbGNTaXplLng7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1godGFyZ2V0UG9zLCBjYWxjU2l6ZSkpXHJcblx0XHRcdGNhbGNTaXplID0gdGhpcy5fZml4U2l6ZVRvQm91bmRzWCh0YXJnZXRQb3MsIGNhbGNTaXplKTtcclxuXHJcblx0XHRpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWSh0YXJnZXRQb3MsIGNhbGNTaXplKSlcclxuXHRcdFx0Y2FsY1NpemUgPSB0aGlzLl9maXhTaXplVG9Cb3VuZHNZKHRhcmdldFBvcywgY2FsY1NpemUpO1xyXG5cclxuXHRcdGNhbGNTaXplID0gdGhpcy5fcmVzaXppbmdJdGVtLmZpeFJlc2l6ZShjYWxjU2l6ZSk7XHJcblxyXG5cdFx0aWYgKGNhbGNTaXplLnggIT0gaXRlbVNpemUueCB8fCBjYWxjU2l6ZS55ICE9IGl0ZW1TaXplLnkpIHtcclxuXHRcdFx0dGhpcy5fcmVzaXppbmdJdGVtLnNldEdyaWRQb3NpdGlvbih0YXJnZXRQb3MsIHRoaXMuX2ZpeFRvR3JpZCk7XHJcblx0XHRcdHRoaXMuX3BsYWNlaG9sZGVyUmVmLmluc3RhbmNlLnNldEdyaWRQb3NpdGlvbih0YXJnZXRQb3MpO1xyXG5cdFx0XHR0aGlzLl9yZXNpemluZ0l0ZW0uc2V0U2l6ZShjYWxjU2l6ZSwgdGhpcy5fZml4VG9HcmlkKTtcclxuXHRcdFx0dGhpcy5fcGxhY2Vob2xkZXJSZWYuaW5zdGFuY2Uuc2V0U2l6ZShjYWxjU2l6ZSk7XHJcblxyXG5cdFx0XHRpZiAoWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHRoaXMuY2FzY2FkZSkgPj0gMCkge1xyXG5cdFx0XHRcdHRoaXMuX2ZpeEdyaWRDb2xsaXNpb25zKHRhcmdldFBvcywgY2FsY1NpemUpO1xyXG5cdFx0XHRcdHRoaXMuX2Nhc2NhZGVHcmlkKHRhcmdldFBvcywgY2FsY1NpemUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9maXhUb0dyaWQpIHtcclxuXHRcdFx0dGhpcy5fcmVzaXppbmdJdGVtLnNldERpbWVuc2lvbnMobmV3VywgbmV3SCk7XHJcblx0XHRcdHRoaXMuX3Jlc2l6aW5nSXRlbS5zZXRQb3NpdGlvbihuZXdYLCBuZXdZKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm9uUmVzaXplLmVtaXQodGhpcy5fcmVzaXppbmdJdGVtKTtcclxuXHRcdHRoaXMuX3Jlc2l6aW5nSXRlbS5vblJlc2l6ZUV2ZW50KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9kcmFnU3RvcChlOiBhbnkpOiB2b2lkIHtcclxuXHRcdGlmICghdGhpcy5pc0RyYWdnaW5nKSByZXR1cm47XHJcblxyXG5cdFx0dGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0dmFyIGl0ZW1Qb3MgPSB0aGlzLl9kcmFnZ2luZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy5fZHJhZ2dpbmdJdGVtLnNldEdyaWRQb3NpdGlvbihpdGVtUG9zKTtcclxuXHRcdHRoaXMuX2FkZFRvR3JpZCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG5cclxuXHRcdHRoaXMuX2Nhc2NhZGVHcmlkKCk7XHJcblx0XHR0aGlzLl91cGRhdGVTaXplKCk7XHJcblxyXG5cdFx0dGhpcy5fZHJhZ2dpbmdJdGVtLnN0b3BNb3ZpbmcoKTtcclxuXHRcdHRoaXMuX2RyYWdnaW5nSXRlbS5vbkRyYWdTdG9wRXZlbnQoKTtcclxuXHRcdHRoaXMub25EcmFnU3RvcC5lbWl0KHRoaXMuX2RyYWdnaW5nSXRlbSk7XHJcblxyXG5cdFx0dGhpcy5fY2xlYW5EcmFnKCk7XHJcblx0XHR0aGlzLl9wbGFjZWhvbGRlclJlZi5kZXN0cm95KCk7XHJcblxyXG5cdFx0dGhpcy5fZW1pdE9uSXRlbUNoYW5nZSgpO1xyXG5cclxuXHRcdGlmICh0aGlzLl96b29tT25EcmFnKSB7XHJcblx0XHRcdHRoaXMuX3Jlc2V0Wm9vbSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfcmVzaXplU3RvcChlOiBhbnkpOiB2b2lkIHtcclxuXHRcdGlmICghdGhpcy5pc1Jlc2l6aW5nKSByZXR1cm47XHJcblxyXG5cdFx0dGhpcy5pc1Jlc2l6aW5nID0gZmFsc2U7XHJcblxyXG5cdFx0Y29uc3QgaXRlbURpbXMgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0U2l6ZSgpO1xyXG5cdFx0dGhpcy5fcmVzaXppbmdJdGVtLnNldFNpemUoaXRlbURpbXMpO1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1Qb3MgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblx0XHR0aGlzLl9yZXNpemluZ0l0ZW0uc2V0R3JpZFBvc2l0aW9uKGl0ZW1Qb3MpO1xyXG5cclxuXHRcdHRoaXMuX2FkZFRvR3JpZCh0aGlzLl9yZXNpemluZ0l0ZW0pO1xyXG5cclxuXHRcdHRoaXMuX2Nhc2NhZGVHcmlkKCk7XHJcblx0XHR0aGlzLl91cGRhdGVTaXplKCk7XHJcblxyXG5cdFx0dGhpcy5fcmVzaXppbmdJdGVtLnN0b3BNb3ZpbmcoKTtcclxuXHRcdHRoaXMuX3Jlc2l6aW5nSXRlbS5vblJlc2l6ZVN0b3BFdmVudCgpO1xyXG5cdFx0dGhpcy5vblJlc2l6ZVN0b3AuZW1pdCh0aGlzLl9yZXNpemluZ0l0ZW0pO1xyXG5cclxuXHRcdHRoaXMuX2NsZWFuUmVzaXplKCk7XHJcblx0XHR0aGlzLl9wbGFjZWhvbGRlclJlZi5kZXN0cm95KCk7XHJcblxyXG5cdFx0dGhpcy5fZW1pdE9uSXRlbUNoYW5nZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfY2xlYW5EcmFnKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fZHJhZ2dpbmdJdGVtID0gbnVsbDtcclxuXHRcdHRoaXMuX3Bvc09mZnNldCA9IG51bGw7XHJcblx0XHR0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuX2RyYWdSZWFkeSA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfY2xlYW5SZXNpemUoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9yZXNpemluZ0l0ZW0gPSBudWxsO1xyXG5cdFx0dGhpcy5fcmVzaXplRGlyZWN0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuaXNSZXNpemluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fcmVzaXplUmVhZHkgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2NhbGN1bGF0ZUdyaWRTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogTmdHcmlkSXRlbVNpemUge1xyXG5cdFx0d2lkdGggKz0gdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodDtcclxuXHRcdGhlaWdodCArPSB0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tO1xyXG5cclxuXHRcdHZhciBzaXpleCA9IE1hdGgubWF4KHRoaXMubWluQ29scywgTWF0aC5yb3VuZCh3aWR0aCAvICh0aGlzLmNvbFdpZHRoICsgdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkpKTtcclxuXHRcdHZhciBzaXpleSA9IE1hdGgubWF4KHRoaXMubWluUm93cywgTWF0aC5yb3VuZChoZWlnaHQgLyAodGhpcy5yb3dIZWlnaHQgKyB0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSkpO1xyXG5cclxuXHRcdGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNYKHsgY29sOiAxLCByb3c6IDEgfSwgeyB4OiBzaXpleCwgeTogc2l6ZXkgfSkpIHNpemV4ID0gdGhpcy5fbWF4Q29scztcclxuXHRcdGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHsgY29sOiAxLCByb3c6IDEgfSwgeyB4OiBzaXpleCwgeTogc2l6ZXkgfSkpIHNpemV5ID0gdGhpcy5fbWF4Um93cztcclxuXHJcblx0XHRyZXR1cm4geyAneCc6IHNpemV4LCAneSc6IHNpemV5IH07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9jYWxjdWxhdGVHcmlkUG9zaXRpb24obGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcblx0XHR2YXIgY29sID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChsZWZ0IC8gKHRoaXMuY29sV2lkdGggKyB0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSkgKyAxKTtcclxuXHRcdHZhciByb3cgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHRvcCAvICh0aGlzLnJvd0hlaWdodCArIHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b20pKSArIDEpO1xyXG5cclxuXHRcdGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNYKHsgY29sOiBjb2wsIHJvdzogcm93IH0sIHsgeDogMSwgeTogMSB9KSkgY29sID0gdGhpcy5fbWF4Q29scztcclxuXHRcdGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHsgY29sOiBjb2wsIHJvdzogcm93IH0sIHsgeDogMSwgeTogMSB9KSkgcm93ID0gdGhpcy5fbWF4Um93cztcclxuXHJcblx0XHRyZXR1cm4geyAnY29sJzogY29sLCAncm93Jzogcm93IH07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9oYXNHcmlkQ29sbGlzaW9uKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IGJvb2xlYW4ge1xyXG5cdFx0dmFyIHBvc2l0aW9ucyA9IHRoaXMuX2dldENvbGxpc2lvbnMocG9zLCBkaW1zKTtcclxuXHJcblx0XHRpZiAocG9zaXRpb25zID09IG51bGwgfHwgcG9zaXRpb25zLmxlbmd0aCA9PSAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuIHBvc2l0aW9ucy5zb21lKCh2OiBOZ0dyaWRJdGVtKSA9PiB7XHJcblx0XHRcdHJldHVybiAhKHYgPT09IG51bGwpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9nZXRDb2xsaXNpb25zKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IEFycmF5PE5nR3JpZEl0ZW0+IHtcclxuXHRcdGNvbnN0IHJldHVybnM6IEFycmF5PE5nR3JpZEl0ZW0+ID0gW107XHJcblxyXG5cdFx0aWYgKCFwb3MuY29sKSB7IHBvcy5jb2wgPSAxOyB9XHJcblx0XHRpZiAoIXBvcy5yb3cpIHsgcG9zLnJvdyA9IDE7IH1cclxuXHJcblx0XHRjb25zdCBsZWZ0Q29sID0gcG9zLmNvbDtcclxuXHRcdGNvbnN0IHJpZ2h0Q29sID0gcG9zLmNvbCArIGRpbXMueDtcclxuXHRcdGNvbnN0IHRvcFJvdyA9IHBvcy5yb3c7XHJcblx0XHRjb25zdCBib3R0b21Sb3cgPSBwb3Mucm93ICsgZGltcy55O1xyXG5cclxuXHRcdHRoaXMuX2l0ZW1zSW5HcmlkLmZvckVhY2goKGl0ZW1JZDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGNvbnN0IGl0ZW06IE5nR3JpZEl0ZW0gPSB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKTtcclxuXHJcblx0XHRcdGlmICghaXRlbSkge1xyXG5cdFx0XHRcdHRoaXMuX2l0ZW1zSW5HcmlkLmRlbGV0ZShpdGVtSWQpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgaXRlbUxlZnRDb2wgPSBpdGVtLmNvbDtcclxuXHRcdFx0Y29uc3QgaXRlbVJpZ2h0Q29sID0gaXRlbS5jb2wgKyBpdGVtLnNpemV4O1xyXG5cdFx0XHRjb25zdCBpdGVtVG9wUm93ID0gaXRlbS5yb3c7XHJcblx0XHRcdGNvbnN0IGl0ZW1Cb3R0b21Sb3cgPSBpdGVtLnJvdyArIGl0ZW0uc2l6ZXk7XHJcblxyXG5cdFx0XHRjb25zdCB3aXRoaW5Db2x1bW5zID0gbGVmdENvbCA8IGl0ZW1SaWdodENvbCAmJiBpdGVtTGVmdENvbCA8IHJpZ2h0Q29sO1xyXG5cdFx0XHRjb25zdCB3aXRoaW5Sb3dzID0gdG9wUm93IDwgaXRlbUJvdHRvbVJvdyAmJiBpdGVtVG9wUm93IDwgYm90dG9tUm93O1xyXG5cclxuXHRcdFx0aWYgKHdpdGhpbkNvbHVtbnMgJiYgd2l0aGluUm93cykge1xyXG5cdFx0XHRcdHJldHVybnMucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJldHVybnM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9maXhHcmlkQ29sbGlzaW9ucyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGNvbGxpc2lvbnM6IEFycmF5PE5nR3JpZEl0ZW0+ID0gdGhpcy5fZ2V0Q29sbGlzaW9ucyhwb3MsIGRpbXMpO1xyXG5cdFx0aWYgKGNvbGxpc2lvbnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdGZvciAobGV0IGNvbGxpc2lvbiBvZiBjb2xsaXNpb25zKSB7XHJcblx0XHRcdHRoaXMuX3JlbW92ZUZyb21HcmlkKGNvbGxpc2lvbik7XHJcblxyXG5cdFx0XHRjb25zdCBpdGVtRGltczogTmdHcmlkSXRlbVNpemUgPSBjb2xsaXNpb24uZ2V0U2l6ZSgpO1xyXG5cdFx0XHRjb25zdCBpdGVtUG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSBjb2xsaXNpb24uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblx0XHRcdGxldCBuZXdJdGVtUG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSB7IGNvbDogaXRlbVBvcy5jb2wsIHJvdzogaXRlbVBvcy5yb3cgfTtcclxuXHJcblx0XHRcdGlmICh0aGlzLl9jb2xsaXNpb25GaXhEaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG5cdFx0XHRcdG5ld0l0ZW1Qb3Mucm93ID0gcG9zLnJvdyArIGRpbXMueTtcclxuXHJcblx0XHRcdFx0aWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1kobmV3SXRlbVBvcywgaXRlbURpbXMpKSB7XHJcblx0XHRcdFx0XHRuZXdJdGVtUG9zLmNvbCA9IHBvcy5jb2wgKyBkaW1zLng7XHJcblx0XHRcdFx0XHRuZXdJdGVtUG9zLnJvdyA9IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuX2NvbGxpc2lvbkZpeERpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRuZXdJdGVtUG9zLmNvbCA9IHBvcy5jb2wgKyBkaW1zLng7XHJcblxyXG5cdFx0XHRcdGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNYKG5ld0l0ZW1Qb3MsIGl0ZW1EaW1zKSkge1xyXG5cdFx0XHRcdFx0bmV3SXRlbVBvcy5jb2wgPSAxO1xyXG5cdFx0XHRcdFx0bmV3SXRlbVBvcy5yb3cgPSBwb3Mucm93ICsgZGltcy55O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29sbGlzaW9uLnNldEdyaWRQb3NpdGlvbihuZXdJdGVtUG9zKTtcclxuXHJcblx0XHRcdHRoaXMuX2ZpeEdyaWRDb2xsaXNpb25zKG5ld0l0ZW1Qb3MsIGl0ZW1EaW1zKTtcclxuXHRcdFx0dGhpcy5fYWRkVG9HcmlkKGNvbGxpc2lvbik7XHJcblx0XHRcdGNvbGxpc2lvbi5vbkNhc2NhZGVFdmVudCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2ZpeEdyaWRDb2xsaXNpb25zKHBvcywgZGltcyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9jYXNjYWRlR3JpZChwb3M/OiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM/OiBOZ0dyaWRJdGVtU2l6ZSk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuO1xyXG5cdFx0aWYgKCFwb3MgIT09ICFkaW1zKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjYXNjYWRlIHdpdGggb25seSBwb3NpdGlvbiBhbmQgbm90IGRpbWVuc2lvbnMnKTtcclxuXHJcblx0XHRpZiAodGhpcy5pc0RyYWdnaW5nICYmIHRoaXMuX2RyYWdnaW5nSXRlbSAmJiAhcG9zICYmICFkaW1zKSB7XHJcblx0XHRcdHBvcyA9IHRoaXMuX2RyYWdnaW5nSXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuXHRcdFx0ZGltcyA9IHRoaXMuX2RyYWdnaW5nSXRlbS5nZXRTaXplKCk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNSZXNpemluZyAmJiB0aGlzLl9yZXNpemluZ0l0ZW0gJiYgIXBvcyAmJiAhZGltcykge1xyXG5cdFx0XHRwb3MgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblx0XHRcdGRpbXMgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0U2l6ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBpdGVtc0luR3JpZDogTmdHcmlkSXRlbVtdID0gQXJyYXkuZnJvbSh0aGlzLl9pdGVtc0luR3JpZCwgKGl0ZW1JZDogc3RyaW5nKSA9PiB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKSk7XHJcblxyXG5cdFx0c3dpdGNoICh0aGlzLmNhc2NhZGUpIHtcclxuXHRcdFx0Y2FzZSAndXAnOlxyXG5cdFx0XHRjYXNlICdkb3duJzpcclxuXHRcdFx0XHRpdGVtc0luR3JpZCA9IGl0ZW1zSW5HcmlkLnNvcnQoTmdHcmlkSGVscGVyLnNvcnRJdGVtc0J5UG9zaXRpb25WZXJ0aWNhbCk7XHJcblx0XHRcdFx0Y29uc3QgbG93ZXN0Um93UGVyQ29sdW1uOiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiBpdGVtc0luR3JpZCkge1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW0uaXNGaXhlZCkgY29udGludWU7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbURpbXM6IE5nR3JpZEl0ZW1TaXplID0gaXRlbS5nZXRTaXplKCk7XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSBpdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBsb3dlc3RSb3dGb3JJdGVtOiBudW1iZXIgPSBsb3dlc3RSb3dQZXJDb2x1bW4uZ2V0KGl0ZW1Qb3MuY29sKSB8fCAxO1xyXG5cclxuXHRcdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBpdGVtRGltcy54OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbG93ZXN0Um93Rm9yQ29sdW1uID0gbG93ZXN0Um93UGVyQ29sdW1uLmdldChpdGVtUG9zLmNvbCArIGkpIHx8IDE7XHJcblx0XHRcdFx0XHRcdGxvd2VzdFJvd0Zvckl0ZW0gPSBNYXRoLm1heChsb3dlc3RSb3dGb3JDb2x1bW4sIGxvd2VzdFJvd0Zvckl0ZW0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGxlZnRDb2wgPSBpdGVtUG9zLmNvbDtcclxuXHRcdFx0XHRcdGNvbnN0IHJpZ2h0Q29sID0gaXRlbVBvcy5jb2wgKyBpdGVtRGltcy54O1xyXG5cclxuXHRcdFx0XHRcdGlmIChwb3MgJiYgZGltcykge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB3aXRoaW5Db2x1bW5zID0gcmlnaHRDb2wgPiBwb3MuY29sICYmIGxlZnRDb2wgPCAocG9zLmNvbCArIGRpbXMueCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAod2l0aGluQ29sdW1ucykgeyAgICAgICAgICAvL1x0SWYgb3VyIGVsZW1lbnQgaXMgaW4gb25lIG9mIHRoZSBpdGVtJ3MgY29sdW1uc1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJvb21BYm92ZUl0ZW0gPSBpdGVtRGltcy55IDw9IChwb3Mucm93IC0gbG93ZXN0Um93Rm9ySXRlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICghcm9vbUFib3ZlSXRlbSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdEl0ZW0gY2FuJ3QgZml0IGFib3ZlIG91ciBlbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0XHRsb3dlc3RSb3dGb3JJdGVtID0gTWF0aC5tYXgobG93ZXN0Um93Rm9ySXRlbSwgcG9zLnJvdyArIGRpbXMueSk7ICAgLy9cdFNldCB0aGUgbG93ZXN0IHJvdyB0byBiZSBiZWxvdyBpdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNvbnN0IG5ld1BvczogTmdHcmlkSXRlbVBvc2l0aW9uID0geyBjb2w6IGl0ZW1Qb3MuY29sLCByb3c6IGxvd2VzdFJvd0Zvckl0ZW0gfTtcclxuXHJcblx0XHRcdFx0XHQvL1x0V2hhdCBpZiBpdCdzIG5vdCB3aXRoaW4gYm91bmRzIFk/XHJcblx0XHRcdFx0XHRpZiAobG93ZXN0Um93Rm9ySXRlbSAhPSBpdGVtUG9zLnJvdyAmJiB0aGlzLl9pc1dpdGhpbkJvdW5kc1kobmV3UG9zLCBpdGVtRGltcykpIHtcdC8vXHRJZiB0aGUgaXRlbSBpcyBub3QgYWxyZWFkeSBvbiB0aGlzIHJvdyBtb3ZlIGl0IHVwXHJcblx0XHRcdFx0XHRcdHRoaXMuX3JlbW92ZUZyb21HcmlkKGl0ZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbS5zZXRHcmlkUG9zaXRpb24obmV3UG9zKTtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW0ub25DYXNjYWRlRXZlbnQoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fYWRkVG9HcmlkKGl0ZW0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtRGltcy54OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bG93ZXN0Um93UGVyQ29sdW1uLnNldChpdGVtUG9zLmNvbCArIGksIGxvd2VzdFJvd0Zvckl0ZW0gKyBpdGVtRGltcy55KTtcdC8vXHRVcGRhdGUgdGhlIGxvd2VzdCByb3cgdG8gYmUgYmVsb3cgdGhlIGl0ZW1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0aXRlbXNJbkdyaWQgPSBpdGVtc0luR3JpZC5zb3J0KE5nR3JpZEhlbHBlci5zb3J0SXRlbXNCeVBvc2l0aW9uSG9yaXpvbnRhbCk7XHJcblx0XHRcdFx0Y29uc3QgbG93ZXN0Q29sdW1uUGVyUm93OiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiBpdGVtc0luR3JpZCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbURpbXM6IE5nR3JpZEl0ZW1TaXplID0gaXRlbS5nZXRTaXplKCk7XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSBpdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBsb3dlc3RDb2x1bW5Gb3JJdGVtOiBudW1iZXIgPSBsb3dlc3RDb2x1bW5QZXJSb3cuZ2V0KGl0ZW1Qb3Mucm93KSB8fCAxO1xyXG5cclxuXHRcdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBpdGVtRGltcy55OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IGxvd2VzdE9mZnNldENvbHVtbjogbnVtYmVyID0gbG93ZXN0Q29sdW1uUGVyUm93LmdldChpdGVtUG9zLnJvdyArIGkpIHx8IDE7XHJcblx0XHRcdFx0XHRcdGxvd2VzdENvbHVtbkZvckl0ZW0gPSBNYXRoLm1heChsb3dlc3RPZmZzZXRDb2x1bW4sIGxvd2VzdENvbHVtbkZvckl0ZW0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHRvcFJvdyA9IGl0ZW1Qb3Mucm93O1xyXG5cdFx0XHRcdFx0Y29uc3QgYm90dG9tUm93ID0gaXRlbVBvcy5yb3cgKyBpdGVtRGltcy55O1xyXG5cclxuXHRcdFx0XHRcdGlmIChwb3MgJiYgZGltcykge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB3aXRoaW5Sb3dzID0gYm90dG9tUm93ID4gcG9zLmNvbCAmJiB0b3BSb3cgPCAocG9zLmNvbCArIGRpbXMueCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAod2l0aGluUm93cykgeyAgICAgICAgICAvL1x0SWYgb3VyIGVsZW1lbnQgaXMgaW4gb25lIG9mIHRoZSBpdGVtJ3Mgcm93c1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJvb21OZXh0VG9JdGVtID0gaXRlbURpbXMueCA8PSAocG9zLmNvbCAtIGxvd2VzdENvbHVtbkZvckl0ZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIXJvb21OZXh0VG9JdGVtKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdEl0ZW0gY2FuJ3QgZml0IG5leHQgdG8gb3VyIGVsZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdGxvd2VzdENvbHVtbkZvckl0ZW0gPSBNYXRoLm1heChsb3dlc3RDb2x1bW5Gb3JJdGVtLCBwb3MuY29sICsgZGltcy54KTsgIC8vXHRTZXQgdGhlIGxvd2VzdCBjb2wgdG8gYmUgdGhlIG90aGVyIHNpZGUgb2YgaXRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjb25zdCBuZXdQb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IHsgY29sOiBsb3dlc3RDb2x1bW5Gb3JJdGVtLCByb3c6IGl0ZW1Qb3Mucm93IH07XHJcblxyXG5cdFx0XHRcdFx0aWYgKGxvd2VzdENvbHVtbkZvckl0ZW0gIT0gaXRlbVBvcy5jb2wgJiYgdGhpcy5faXNXaXRoaW5Cb3VuZHNYKG5ld1BvcywgaXRlbURpbXMpKSB7XHQvL1x0SWYgdGhlIGl0ZW0gaXMgbm90IGFscmVhZHkgb24gdGhpcyBjb2wgbW92ZSBpdCB1cFxyXG5cdFx0XHRcdFx0XHR0aGlzLl9yZW1vdmVGcm9tR3JpZChpdGVtKTtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW0uc2V0R3JpZFBvc2l0aW9uKG5ld1Bvcyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpdGVtLm9uQ2FzY2FkZUV2ZW50KCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2FkZFRvR3JpZChpdGVtKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaXRlbURpbXMueTsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGxvd2VzdENvbHVtblBlclJvdy5zZXQoaXRlbVBvcy5yb3cgKyBpLCBsb3dlc3RDb2x1bW5Gb3JJdGVtICsgaXRlbURpbXMueCk7XHQvL1x0VXBkYXRlIHRoZSBsb3dlc3QgY29sIHRvIGJlIGJlbG93IHRoZSBpdGVtXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZml4R3JpZFBvc2l0aW9uKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcblx0XHRpZiAoIXRoaXMuX2hhc0dyaWRDb2xsaXNpb24ocG9zLCBkaW1zKSkgcmV0dXJuIHBvcztcclxuXHJcblx0XHRjb25zdCBtYXhSb3cgPSB0aGlzLl9tYXhSb3dzID09PSAwID8gdGhpcy5fZ2V0TWF4Um93KCkgOiB0aGlzLl9tYXhSb3dzO1xyXG5cdFx0Y29uc3QgbWF4Q29sID0gdGhpcy5fbWF4Q29scyA9PT0gMCA/IHRoaXMuX2dldE1heENvbCgpIDogdGhpcy5fbWF4Q29scztcclxuXHRcdGNvbnN0IG5ld1BvcyA9IHtcclxuXHRcdFx0Y29sOiBwb3MuY29sLFxyXG5cdFx0XHRyb3c6IHBvcy5yb3csXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICh0aGlzLl9pdGVtRml4RGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuXHRcdFx0Zml4TG9vcDpcclxuXHRcdFx0Zm9yICg7IG5ld1Bvcy5jb2wgPD0gbWF4Um93Oykge1xyXG5cdFx0XHRcdGNvbnN0IGl0ZW1zSW5QYXRoID0gdGhpcy5fZ2V0SXRlbXNJblZlcnRpY2FsUGF0aChuZXdQb3MsIGRpbXMsIG5ld1Bvcy5yb3cpO1xyXG5cdFx0XHRcdGxldCBuZXh0Um93ID0gbmV3UG9zLnJvdztcclxuXHJcblx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiBpdGVtc0luUGF0aCkge1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW0ucm93IC0gbmV4dFJvdyA+PSBkaW1zLnkpIHtcclxuXHRcdFx0XHRcdFx0bmV3UG9zLnJvdyA9IG5leHRSb3c7XHJcblx0XHRcdFx0XHRcdGJyZWFrIGZpeExvb3A7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bmV4dFJvdyA9IGl0ZW0ucm93ICsgaXRlbS5zaXpleTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChtYXhSb3cgLSBuZXh0Um93ID49IGRpbXMueSkge1xyXG5cdFx0XHRcdFx0bmV3UG9zLnJvdyA9IG5leHRSb3c7XHJcblx0XHRcdFx0XHRicmVhayBmaXhMb29wO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bmV3UG9zLmNvbCA9IE1hdGgubWF4KG5ld1Bvcy5jb2wgKyAxLCBNYXRoLm1pbi5hcHBseShNYXRoLCBpdGVtc0luUGF0aC5tYXAoKGl0ZW0pID0+IGl0ZW0uY29sICsgZGltcy54KSkpO1xyXG5cdFx0XHRcdG5ld1Bvcy5yb3cgPSAxO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuX2l0ZW1GaXhEaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcblx0XHRcdGZpeExvb3A6XHJcblx0XHRcdGZvciAoOyBuZXdQb3Mucm93IDw9IG1heFJvdzspIHtcclxuXHRcdFx0XHRjb25zdCBpdGVtc0luUGF0aCA9IHRoaXMuX2dldEl0ZW1zSW5Ib3Jpem9udGFsUGF0aChuZXdQb3MsIGRpbXMsIG5ld1Bvcy5jb2wpO1xyXG5cdFx0XHRcdGxldCBuZXh0Q29sID0gbmV3UG9zLmNvbDtcclxuXHJcblx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiBpdGVtc0luUGF0aCkge1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW0uY29sIC0gbmV4dENvbCA+PSBkaW1zLngpIHtcclxuXHRcdFx0XHRcdFx0bmV3UG9zLmNvbCA9IG5leHRDb2w7XHJcblx0XHRcdFx0XHRcdGJyZWFrIGZpeExvb3A7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bmV4dENvbCA9IGl0ZW0uY29sICsgaXRlbS5zaXpleDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChtYXhDb2wgLSBuZXh0Q29sID49IGRpbXMueCkge1xyXG5cdFx0XHRcdFx0bmV3UG9zLmNvbCA9IG5leHRDb2w7XHJcblx0XHRcdFx0XHRicmVhayBmaXhMb29wO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bmV3UG9zLnJvdyA9IE1hdGgubWF4KG5ld1Bvcy5yb3cgKyAxLCBNYXRoLm1pbi5hcHBseShNYXRoLCBpdGVtc0luUGF0aC5tYXAoKGl0ZW0pID0+IGl0ZW0ucm93ICsgZGltcy55KSkpO1xyXG5cdFx0XHRcdG5ld1Bvcy5jb2wgPSAxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5ld1BvcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2dldEl0ZW1zSW5Ib3Jpem9udGFsUGF0aChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIHN0YXJ0Q29sdW1uOiBudW1iZXIgPSAwKTogTmdHcmlkSXRlbVtdIHtcclxuXHRcdGNvbnN0IGl0ZW1zSW5QYXRoOiBOZ0dyaWRJdGVtW10gPSBbXTtcclxuXHRcdGNvbnN0IHRvcFJvdzogbnVtYmVyID0gcG9zLnJvdyArIGRpbXMueSAtIDE7XHJcblxyXG5cdFx0dGhpcy5faXRlbXNJbkdyaWQuZm9yRWFjaCgoaXRlbUlkOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0Y29uc3QgaXRlbSA9IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpO1xyXG5cdFx0XHRpZiAoaXRlbS5jb2wgKyBpdGVtLnNpemV4IC0gMSA8IHN0YXJ0Q29sdW1uKSB7IHJldHVybjsgfSAgICAvL1x0SXRlbSBmYWxscyBhZnRlciBzdGFydCBjb2x1bW5cclxuXHRcdFx0aWYgKGl0ZW0ucm93ID4gdG9wUm93KSB7IHJldHVybjsgfSAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdEl0ZW0gZmFsbHMgYWJvdmUgcGF0aFxyXG5cdFx0XHRpZiAoaXRlbS5yb3cgKyBpdGVtLnNpemV5IC0gMSA8IHBvcy5yb3cpIHsgcmV0dXJuOyB9ICAgICAgICAvL1x0SXRlbSBmYWxscyBiZWxvdyBwYXRoXHJcblx0XHRcdGl0ZW1zSW5QYXRoLnB1c2goaXRlbSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gaXRlbXNJblBhdGg7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9nZXRJdGVtc0luVmVydGljYWxQYXRoKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSwgc3RhcnRSb3c6IG51bWJlciA9IDApOiBOZ0dyaWRJdGVtW10ge1xyXG5cdFx0Y29uc3QgaXRlbXNJblBhdGg6IE5nR3JpZEl0ZW1bXSA9IFtdO1xyXG5cdFx0Y29uc3QgcmlnaHRDb2w6IG51bWJlciA9IHBvcy5jb2wgKyBkaW1zLnggLSAxO1xyXG5cclxuXHRcdHRoaXMuX2l0ZW1zSW5HcmlkLmZvckVhY2goKGl0ZW1JZDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGNvbnN0IGl0ZW0gPSB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKTtcclxuXHRcdFx0aWYgKGl0ZW0ucm93ICsgaXRlbS5zaXpleSAtIDEgPCBzdGFydFJvdykgeyByZXR1cm47IH0gICAvL1x0SXRlbSBmYWxscyBhYm92ZSBzdGFydCByb3dcclxuXHRcdFx0aWYgKGl0ZW0uY29sID4gcmlnaHRDb2wpIHsgcmV0dXJuOyB9ICAgICAgICAgICAgICAgICAgICAvL1x0SXRlbSBmYWxscyBhZnRlciBwYXRoXHJcblx0XHRcdGlmIChpdGVtLmNvbCArIGl0ZW0uc2l6ZXggLSAxIDwgcG9zLmNvbCkgeyByZXR1cm47IH0gICAgLy9cdEl0ZW0gZmFsbHMgYmVmb3JlIHBhdGhcclxuXHRcdFx0aXRlbXNJblBhdGgucHVzaChpdGVtKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBpdGVtc0luUGF0aDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2lzV2l0aGluQm91bmRzWChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIGFsbG93RXhjZXNzaXZlSXRlbXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21heENvbHMgPT0gMCB8fCAoYWxsb3dFeGNlc3NpdmVJdGVtcyAmJiBwb3MuY29sID09IDEpIHx8IChwb3MuY29sICsgZGltcy54IC0gMSkgPD0gdGhpcy5fbWF4Q29scztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2ZpeFBvc1RvQm91bmRzWChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG5cdFx0aWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1gocG9zLCBkaW1zKSkge1xyXG5cdFx0XHRwb3MuY29sID0gTWF0aC5tYXgodGhpcy5fbWF4Q29scyAtIChkaW1zLnggLSAxKSwgMSk7XHJcblx0XHRcdHBvcy5yb3cgKys7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcG9zO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZml4U2l6ZVRvQm91bmRzWChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcblx0XHRpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWChwb3MsIGRpbXMpKSB7XHJcblx0XHRcdGRpbXMueCA9IE1hdGgubWF4KHRoaXMuX21heENvbHMgLSAocG9zLmNvbCAtIDEpLCAxKTtcclxuXHRcdFx0ZGltcy55Kys7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGltcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2lzV2l0aGluQm91bmRzWShwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIGFsbG93RXhjZXNzaXZlSXRlbXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21heFJvd3MgPT0gMCB8fCAoYWxsb3dFeGNlc3NpdmVJdGVtcyAmJiBwb3Mucm93ID09IDEpIHx8IChwb3Mucm93ICsgZGltcy55IC0gMSkgPD0gdGhpcy5fbWF4Um93cztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2ZpeFBvc1RvQm91bmRzWShwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG5cdFx0aWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1kocG9zLCBkaW1zKSkge1xyXG5cdFx0XHRwb3Mucm93ID0gTWF0aC5tYXgodGhpcy5fbWF4Um93cyAtIChkaW1zLnkgLSAxKSwgMSk7XHJcblx0XHRcdHBvcy5jb2wrKztcclxuXHRcdH1cclxuXHRcdHJldHVybiBwb3M7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9maXhTaXplVG9Cb3VuZHNZKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IE5nR3JpZEl0ZW1TaXplIHtcclxuXHRcdGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHBvcywgZGltcykpIHtcclxuXHRcdFx0ZGltcy55ID0gTWF0aC5tYXgodGhpcy5fbWF4Um93cyAtIChwb3Mucm93IC0gMSksIDEpO1xyXG5cdFx0XHRkaW1zLngrKztcclxuXHRcdH1cclxuXHRcdHJldHVybiBkaW1zO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfaXNXaXRoaW5Cb3VuZHMocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHRcdHJldHVybiB0aGlzLl9pc1dpdGhpbkJvdW5kc1gocG9zLCBkaW1zLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zKSAmJiB0aGlzLl9pc1dpdGhpbkJvdW5kc1kocG9zLCBkaW1zLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2ZpeFBvc1RvQm91bmRzKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZml4UG9zVG9Cb3VuZHNYKHRoaXMuX2ZpeFBvc1RvQm91bmRzWShwb3MsIGRpbXMpLCBkaW1zKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2ZpeFNpemVUb0JvdW5kcyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZml4U2l6ZVRvQm91bmRzWChwb3MsIHRoaXMuX2ZpeFNpemVUb0JvdW5kc1kocG9zLCBkaW1zKSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9hZGRUb0dyaWQoaXRlbTogTmdHcmlkSXRlbSk6IHZvaWQge1xyXG5cdFx0bGV0IHBvczogTmdHcmlkSXRlbVBvc2l0aW9uID0gaXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuXHRcdGNvbnN0IGRpbXM6IE5nR3JpZEl0ZW1TaXplID0gaXRlbS5nZXRTaXplKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2hhc0dyaWRDb2xsaXNpb24ocG9zLCBkaW1zKSkge1xyXG5cdFx0XHR0aGlzLl9maXhHcmlkQ29sbGlzaW9ucyhwb3MsIGRpbXMpO1xyXG5cdFx0XHRwb3MgPSBpdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2l0ZW1zSW5HcmlkLmFkZChpdGVtLnVpZCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9yZW1vdmVGcm9tR3JpZChpdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcblx0XHR0aGlzLl9pdGVtc0luR3JpZC5kZWxldGUoaXRlbS51aWQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfdXBkYXRlU2l6ZSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVybjtcclxuXHRcdGxldCBtYXhDb2w6IG51bWJlciA9IHRoaXMuX2dldE1heENvbCgpO1xyXG5cdFx0bGV0IG1heFJvdzogbnVtYmVyID0gdGhpcy5fZ2V0TWF4Um93KCk7XHJcblxyXG5cdFx0aWYgKG1heENvbCAhPSB0aGlzLl9jdXJNYXhDb2wgfHwgbWF4Um93ICE9IHRoaXMuX2N1ck1heFJvdykge1xyXG5cdFx0XHR0aGlzLl9jdXJNYXhDb2wgPSBtYXhDb2w7XHJcblx0XHRcdHRoaXMuX2N1ck1heFJvdyA9IG1heFJvdztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnMTAwJScpOy8vKG1heENvbCAqICh0aGlzLmNvbFdpZHRoICsgdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkpKydweCcpO1xyXG5cdFx0aWYgKCF0aGlzLl9lbGVtZW50QmFzZWREeW5hbWljUm93SGVpZ2h0KSB7XHJcblx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAobWF4Um93ICogKHRoaXMucm93SGVpZ2h0ICsgdGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkpICsgJ3B4Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9nZXRNYXhSb3coKTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IGl0ZW1zUm93czogbnVtYmVyW10gPSBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zSW5HcmlkLCAoaXRlbUlkOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0Y29uc3QgaXRlbSA9IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpO1xyXG5cdFx0XHRpZiAoIWl0ZW0pIHJldHVybiAwO1xyXG5cdFx0XHRyZXR1cm4gaXRlbS5yb3cgKyBpdGVtLnNpemV5IC0gMTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBpdGVtc1Jvd3MpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZ2V0TWF4Q29sKCk6IG51bWJlciB7XHJcblx0XHRjb25zdCBpdGVtc0NvbHM6IG51bWJlcltdID0gQXJyYXkuZnJvbSh0aGlzLl9pdGVtc0luR3JpZCwgKGl0ZW1JZDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGNvbnN0IGl0ZW0gPSB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKTtcclxuXHRcdFx0aWYgKCFpdGVtKSByZXR1cm4gMDtcclxuXHRcdFx0cmV0dXJuIGl0ZW0uY29sICsgaXRlbS5zaXpleCAtIDE7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgaXRlbXNDb2xzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2dldE1vdXNlUG9zaXRpb24oZTogYW55KTogTmdHcmlkUmF3UG9zaXRpb24ge1xyXG5cdFx0aWYgKCgoPGFueT53aW5kb3cpLlRvdWNoRXZlbnQgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHx8IChlLnRvdWNoZXMgfHwgZS5jaGFuZ2VkVG91Y2hlcykpIHtcclxuXHRcdFx0ZSA9IGUudG91Y2hlcy5sZW5ndGggPiAwID8gZS50b3VjaGVzWzBdIDogZS5jaGFuZ2VkVG91Y2hlc1swXTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCByZWZQb3M6IGFueSA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRsZXQgbGVmdDogbnVtYmVyID0gZS5jbGllbnRYIC0gcmVmUG9zLmxlZnQ7XHJcblx0XHRsZXQgdG9wOiBudW1iZXIgPSBlLmNsaWVudFkgLSByZWZQb3MudG9wO1xyXG5cclxuXHRcdGlmICh0aGlzLmNhc2NhZGUgPT0gJ2Rvd24nKSB0b3AgPSByZWZQb3MudG9wICsgcmVmUG9zLmhlaWdodCAtIGUuY2xpZW50WTtcclxuXHRcdGlmICh0aGlzLmNhc2NhZGUgPT0gJ3JpZ2h0JykgbGVmdCA9IHJlZlBvcy5sZWZ0ICsgcmVmUG9zLndpZHRoIC0gZS5jbGllbnRYO1xyXG5cclxuXHRcdGlmICh0aGlzLmlzRHJhZ2dpbmcgJiYgdGhpcy5fem9vbU9uRHJhZykge1xyXG5cdFx0XHRsZWZ0ICo9IDI7XHJcblx0XHRcdHRvcCAqPSAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxlZnQ6IGxlZnQsXHJcblx0XHRcdHRvcDogdG9wXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZ2V0QWJzb2x1dGVNb3VzZVBvc2l0aW9uKGU6IGFueSk6IE5nR3JpZFJhd1Bvc2l0aW9uIHtcclxuXHRcdGlmICgoKDxhbnk+d2luZG93KS5Ub3VjaEV2ZW50ICYmIGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB8fCAoZS50b3VjaGVzIHx8IGUuY2hhbmdlZFRvdWNoZXMpKSB7XHJcblx0XHRcdGUgPSBlLnRvdWNoZXMubGVuZ3RoID4gMCA/IGUudG91Y2hlc1swXSA6IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGVmdDogZS5jbGllbnRYLFxyXG5cdFx0XHR0b3A6IGUuY2xpZW50WVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2dldENvbnRhaW5lckNvbHVtbnMoKTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IG1heFdpZHRoOiBudW1iZXIgPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcblx0XHRjb25zdCBpdGVtV2lkdGg6IG51bWJlciA9IHRoaXMuY29sV2lkdGggKyB0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0O1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IobWF4V2lkdGggLyBpdGVtV2lkdGgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZ2V0Q29udGFpbmVyUm93cygpOiBudW1iZXIge1xyXG5cdFx0Y29uc3QgbWF4SGVpZ2h0OiBudW1iZXIgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLm1hcmdpblRvcCAtIHRoaXMubWFyZ2luQm90dG9tO1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IobWF4SGVpZ2h0IC8gKHRoaXMucm93SGVpZ2h0ICsgdGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZ2V0U2NyZWVuTWFyZ2luKCk6IG51bWJlciB7XHJcblx0XHRjb25zdCBtYXhXaWR0aDogbnVtYmVyID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5cdFx0Y29uc3QgaXRlbVdpZHRoOiBudW1iZXIgPSB0aGlzLmNvbFdpZHRoICsgdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodDtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKChtYXhXaWR0aCAtICh0aGlzLl9tYXhDb2xzICogaXRlbVdpZHRoKSkgLyAyKTs7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9nZXRJdGVtRnJvbVBvc2l0aW9uKHBvc2l0aW9uOiBOZ0dyaWRSYXdQb3NpdGlvbik6IE5nR3JpZEl0ZW0ge1xyXG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5faXRlbXNJbkdyaWQsIChpdGVtSWQ6IHN0cmluZykgPT4gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCkpLmZpbmQoKGl0ZW06IE5nR3JpZEl0ZW0pID0+IHtcclxuXHRcdFx0aWYgKCFpdGVtKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0XHRjb25zdCBzaXplOiBOZ0dyaWRJdGVtRGltZW5zaW9ucyA9IGl0ZW0uZ2V0RGltZW5zaW9ucygpO1xyXG5cdFx0XHRjb25zdCBwb3M6IE5nR3JpZFJhd1Bvc2l0aW9uID0gaXRlbS5nZXRQb3NpdGlvbigpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHBvc2l0aW9uLmxlZnQgPj0gcG9zLmxlZnQgJiYgcG9zaXRpb24ubGVmdCA8IChwb3MubGVmdCArIHNpemUud2lkdGgpICYmXHJcblx0XHRcdHBvc2l0aW9uLnRvcCA+PSBwb3MudG9wICYmIHBvc2l0aW9uLnRvcCA8IChwb3MudG9wICsgc2l6ZS5oZWlnaHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9jcmVhdGVQbGFjZWhvbGRlcihpdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcblx0XHRjb25zdCBwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IGl0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblx0XHRjb25zdCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSA9IGl0ZW0uZ2V0U2l6ZSgpO1xyXG5cclxuXHRcdGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ0dyaWRQbGFjZWhvbGRlcik7XHJcblx0XHR2YXIgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TmdHcmlkUGxhY2Vob2xkZXI+ID0gaXRlbS5jb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG5cdFx0dGhpcy5fcGxhY2Vob2xkZXJSZWYgPSBjb21wb25lbnRSZWY7XHJcblx0XHRjb25zdCBwbGFjZWhvbGRlcjogTmdHcmlkUGxhY2Vob2xkZXIgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcblx0XHRwbGFjZWhvbGRlci5yZWdpc3RlckdyaWQodGhpcyk7XHJcblx0XHRwbGFjZWhvbGRlci5zZXRDYXNjYWRlTW9kZSh0aGlzLmNhc2NhZGUpO1xyXG5cdFx0cGxhY2Vob2xkZXIuc2V0R3JpZFBvc2l0aW9uKHsgY29sOiBwb3MuY29sLCByb3c6IHBvcy5yb3cgfSk7XHJcblx0XHRwbGFjZWhvbGRlci5zZXRTaXplKHsgeDogZGltcy54LCB5OiBkaW1zLnkgfSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9lbWl0T25JdGVtQ2hhbmdlKCkge1xyXG5cdFx0Y29uc3QgaXRlbU91dHB1dDogYW55W10gPSBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zSW5HcmlkKVxyXG5cdFx0XHQubWFwKChpdGVtSWQ6IHN0cmluZykgPT4gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCkpXHJcblx0XHRcdC5maWx0ZXIoKGl0ZW06IE5nR3JpZEl0ZW0pID0+ICEhaXRlbSlcclxuXHRcdFx0Lm1hcCgoaXRlbTogTmdHcmlkSXRlbSkgPT4gaXRlbS5nZXRFdmVudE91dHB1dCgpKTtcclxuXHJcblx0XHR0aGlzLm9uSXRlbUNoYW5nZS5lbWl0KGl0ZW1PdXRwdXQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZGVmaW5lTGlzdGVuZXJzKCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudDtcclxuXHJcblx0XHR0aGlzLl9kb2N1bWVudE1vdXNlbW92ZSQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdtb3VzZW1vdmUnKTtcclxuXHRcdHRoaXMuX2RvY3VtZW50TW91c2V1cCQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdtb3VzZXVwJyk7XHJcblx0XHR0aGlzLl9tb3VzZWRvd24kID0gZnJvbUV2ZW50KGVsZW1lbnQsICdtb3VzZWRvd24nKTtcclxuXHRcdHRoaXMuX21vdXNlbW92ZSQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ21vdXNlbW92ZScpO1xyXG5cdFx0dGhpcy5fbW91c2V1cCQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ21vdXNldXAnKTtcclxuXHRcdHRoaXMuX3RvdWNoc3RhcnQkID0gZnJvbUV2ZW50KGVsZW1lbnQsICd0b3VjaHN0YXJ0Jyk7XHJcblx0XHR0aGlzLl90b3VjaG1vdmUkID0gZnJvbUV2ZW50KGVsZW1lbnQsICd0b3VjaG1vdmUnKTtcclxuXHRcdHRoaXMuX3RvdWNoZW5kJCA9IGZyb21FdmVudChlbGVtZW50LCAndG91Y2hlbmQnKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2VuYWJsZUxpc3RlbmVycygpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9lbmFibGVkTGlzdGVuZXIpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2VuYWJsZU1vdXNlTGlzdGVuZXJzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2lzVG91Y2hEZXZpY2UoKSkge1xyXG5cdFx0XHR0aGlzLl9lbmFibGVUb3VjaExpc3RlbmVycygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2VuYWJsZWRMaXN0ZW5lciA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9kaXNhYmxlTGlzdGVuZXJzKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWJzOiBTdWJzY3JpcHRpb24pID0+IHN1YnMudW5zdWJzY3JpYmUoKSk7XHJcblx0XHR0aGlzLl9lbmFibGVkTGlzdGVuZXIgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2lzVG91Y2hEZXZpY2UoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDA7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfZW5hYmxlVG91Y2hMaXN0ZW5lcnMoKTogdm9pZCB7XHJcblx0XHRjb25zdCB0b3VjaHN0YXJ0U3VicyA9IHRoaXMuX3RvdWNoc3RhcnQkLnN1YnNjcmliZSgoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5tb3VzZURvd25FdmVudEhhbmRsZXIoZSkpO1xyXG5cdFx0Y29uc3QgdG91Y2htb3ZlU3VicyA9IHRoaXMuX3RvdWNobW92ZSQuc3Vic2NyaWJlKChlOiBUb3VjaEV2ZW50KSA9PiB0aGlzLm1vdXNlTW92ZUV2ZW50SGFuZGxlcihlKSk7XHJcblx0XHRjb25zdCB0b3VjaGVuZFN1YnMgPSB0aGlzLl90b3VjaGVuZCQuc3Vic2NyaWJlKChlOiBUb3VjaEV2ZW50KSA9PiB0aGlzLm1vdXNlVXBFdmVudEhhbmRsZXIoZSkpO1xyXG5cclxuXHRcdHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuXHRcdFx0dG91Y2hzdGFydFN1YnMsXHJcblx0XHRcdHRvdWNobW92ZVN1YnMsXHJcblx0XHRcdHRvdWNoZW5kU3Vic1xyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2VuYWJsZU1vdXNlTGlzdGVuZXJzKCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZG9jdW1lbnRNb3VzZW1vdmVTdWJzID0gdGhpcy5fZG9jdW1lbnRNb3VzZW1vdmUkLnN1YnNjcmliZSgoZTogTW91c2VFdmVudCkgPT4gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIoZSkpO1xyXG5cdFx0Y29uc3QgZG9jdW1lbnRNb3VzZXVwU3VicyA9IHRoaXMuX2RvY3VtZW50TW91c2V1cCQuc3Vic2NyaWJlKChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLm1vdXNlVXBFdmVudEhhbmRsZXIoZSkpO1xyXG5cdFx0Y29uc3QgbW91c2Vkb3duU3VicyA9IHRoaXMuX21vdXNlZG93biQuc3Vic2NyaWJlKChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLm1vdXNlRG93bkV2ZW50SGFuZGxlcihlKSk7XHJcblx0XHRjb25zdCBtb3VzZW1vdmVTdWJzID0gdGhpcy5fbW91c2Vtb3ZlJC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKGUpKTtcclxuXHRcdGNvbnN0IG1vdXNldXBTdWJzID0gdGhpcy5fbW91c2V1cCQuc3Vic2NyaWJlKChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLm1vdXNlVXBFdmVudEhhbmRsZXIoZSkpO1xyXG5cclxuXHRcdHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuXHRcdFx0ZG9jdW1lbnRNb3VzZW1vdmVTdWJzLFxyXG5cdFx0XHRkb2N1bWVudE1vdXNldXBTdWJzLFxyXG5cdFx0XHRtb3VzZWRvd25TdWJzLFxyXG5cdFx0XHRtb3VzZW1vdmVTdWJzLFxyXG5cdFx0XHRtb3VzZXVwU3Vic1xyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdHcmlkIH0gZnJvbSAnLi9OZ0dyaWQnO1xyXG5pbXBvcnQgeyBOZ0dyaWRJdGVtQ29uZmlnLCBOZ0dyaWRJdGVtRXZlbnQsIE5nR3JpZEl0ZW1Qb3NpdGlvbiwgTmdHcmlkSXRlbVNpemUsIE5nR3JpZFJhd1Bvc2l0aW9uLCBOZ0dyaWRJdGVtRGltZW5zaW9ucywgUmVzaXplSGFuZGxlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JTmdHcmlkJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEV2ZW50RW1pdHRlciwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDb250YWluZXJSZWYsIE91dHB1dCwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbbmdHcmlkSXRlbV0nLFxyXG5cdGlucHV0czogWydjb25maWc6IG5nR3JpZEl0ZW0nXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuXHQvL1x0RXZlbnQgRW1pdHRlcnNcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oZmFsc2UpO1xyXG5cdEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvbkRyYWc6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvbkRyYWdTdG9wOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG5cdEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnQW55OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG5cdEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG5cdEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemVTdG9wOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG5cdEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemVBbnk6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG5cdEBPdXRwdXQoKSBwdWJsaWMgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZVN0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcblx0QE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZUFueTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuXHRAT3V0cHV0KCkgcHVibGljIG5nR3JpZEl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtQ29uZmlnPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUNvbmZpZz4oKTtcclxuXHJcblx0Ly9cdERlZmF1bHQgY29uZmlnXHJcblx0cHJpdmF0ZSBzdGF0aWMgQ09OU1RfREVGQVVMVF9DT05GSUc6IE5nR3JpZEl0ZW1Db25maWcgPSB7XHJcblx0XHR1aWQ6IG51bGwsXHJcblx0XHRjb2w6IDEsXHJcblx0XHRyb3c6IDEsXHJcblx0XHRzaXpleDogMSxcclxuXHRcdHNpemV5OiAxLFxyXG5cdFx0ZHJhZ0hhbmRsZTogbnVsbCxcclxuXHRcdHJlc2l6ZUhhbmRsZTogbnVsbCxcclxuXHRcdGZpeGVkOiBmYWxzZSxcclxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdHJlc2l6YWJsZTogdHJ1ZSxcclxuXHRcdGJvcmRlclNpemU6IDI1XHJcblx0fTtcclxuXHJcblx0cHVibGljIGlzRml4ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgaXNEcmFnZ2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdHB1YmxpYyBpc1Jlc2l6YWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHVibGljIG1pbldpZHRoOiBudW1iZXIgPSAwO1xyXG5cdHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IDA7XHJcblx0cHVibGljIHVpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcblx0Ly9cdFByaXZhdGUgdmFyaWFibGVzXHJcblx0cHJpdmF0ZSBfcGF5bG9hZDogYW55O1xyXG5cdHByaXZhdGUgX2N1cnJlbnRQb3NpdGlvbjogTmdHcmlkSXRlbVBvc2l0aW9uID0geyBjb2w6IDEsIHJvdzogMSB9O1xyXG5cdHByaXZhdGUgX3NpemU6IE5nR3JpZEl0ZW1TaXplID0geyB4OiAxLCB5OiAxIH07XHJcblx0cHJpdmF0ZSBfY29uZmlnID0gTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRztcclxuXHRwcml2YXRlIF91c2VyQ29uZmlnID0gbnVsbDtcclxuXHRwcml2YXRlIF9kcmFnSGFuZGxlOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfcmVzaXplSGFuZGxlOiBSZXNpemVIYW5kbGU7XHJcblx0cHJpdmF0ZSBfYm9yZGVyU2l6ZTogbnVtYmVyO1xyXG5cdHByaXZhdGUgX2VsZW1XaWR0aDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX2VsZW1IZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIF9lbGVtTGVmdDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX2VsZW1Ub3A6IG51bWJlcjtcclxuXHRwcml2YXRlIF9hZGRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX2RpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG5cdHByaXZhdGUgX2Nhc2NhZGVNb2RlOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfbWF4Q29sczogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIF9taW5Db2xzOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgX21heFJvd3M6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBfbWluUm93czogbnVtYmVyID0gMDtcclxuXHJcblx0Ly9cdFtuZy1ncmlkLWl0ZW1dIGhhbmRsZXJcclxuXHRzZXQgY29uZmlnKHY6IE5nR3JpZEl0ZW1Db25maWcpIHtcclxuXHRcdHRoaXMuX3VzZXJDb25maWcgPSB2O1xyXG5cclxuXHRcdGNvbnN0IGNvbmZpZ09iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcsIHYpO1xyXG5cdFx0Zm9yIChsZXQgeCBpbiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHKVxyXG5cdFx0XHRpZiAoY29uZmlnT2JqZWN0W3hdID09IG51bGwpXHJcblx0XHRcdFx0Y29uZmlnT2JqZWN0W3hdID0gTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJR1t4XTtcclxuXHJcblx0XHR0aGlzLnNldENvbmZpZyhjb25maWdPYmplY3QpO1xyXG5cclxuXHRcdGlmICh0aGlzLl91c2VyQ29uZmlnICE9IG51bGwpIHtcclxuXHRcdFx0aWYgKHRoaXMuX2RpZmZlciA9PSBudWxsKSB7XHJcblx0XHRcdFx0dGhpcy5fZGlmZmVyID0gdGhpcy5fZGlmZmVycy5maW5kKHRoaXMuX3VzZXJDb25maWcpLmNyZWF0ZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9kaWZmZXIuZGlmZih0aGlzLl91c2VyQ29uZmlnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuX2FkZGVkKSB7XHJcblx0XHRcdHRoaXMuX2FkZGVkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5fbmdHcmlkLmFkZEl0ZW0odGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcblx0XHR0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRnZXQgc2l6ZXgoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9zaXplLng7XHJcblx0fVxyXG5cclxuXHRnZXQgc2l6ZXkoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9zaXplLnk7XHJcblx0fVxyXG5cclxuXHRnZXQgY29sKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbDtcclxuXHR9XHJcblxyXG5cdGdldCByb3coKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93O1xyXG5cdH1cclxuXHJcblx0Z2V0IGN1cnJlbnRDb2woKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sO1xyXG5cdH1cclxuXHJcblx0Z2V0IGN1cnJlbnRSb3coKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93O1xyXG5cdH1cclxuXHJcblx0Ly9cdENvbnN0cnVjdG9yXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9kaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcblx0XHRwcml2YXRlIF9uZ0VsOiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuXHRcdHByaXZhdGUgX25nR3JpZDogTmdHcmlkLFxyXG5cdFx0cHVibGljIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuXHQpIHsgfVxyXG5cclxuXHRwdWJsaWMgb25SZXNpemVTdGFydEV2ZW50KCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuXHRcdHRoaXMub25SZXNpemVTdGFydC5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25SZXNpemVBbnkuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlU3RhcnQuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG5cdH1cclxuXHRwdWJsaWMgb25SZXNpemVFdmVudCgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcblx0XHR0aGlzLm9uUmVzaXplLmVtaXQoZXZlbnQpO1xyXG5cdFx0dGhpcy5vblJlc2l6ZUFueS5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG5cdH1cclxuXHRwdWJsaWMgb25SZXNpemVTdG9wRXZlbnQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG5cdFx0dGhpcy5vblJlc2l6ZVN0b3AuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uUmVzaXplQW55LmVtaXQoZXZlbnQpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVN0b3AuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG5cclxuXHRcdHRoaXMub25Db25maWdDaGFuZ2VFdmVudCgpO1xyXG5cdH1cclxuXHRwdWJsaWMgb25EcmFnU3RhcnRFdmVudCgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcblx0XHR0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnQpO1xyXG5cdFx0dGhpcy5vbkRyYWdBbnkuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlU3RhcnQuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG5cdH1cclxuXHRwdWJsaWMgb25EcmFnRXZlbnQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG5cdFx0dGhpcy5vbkRyYWcuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uRHJhZ0FueS5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG5cdH1cclxuXHRwdWJsaWMgb25EcmFnU3RvcEV2ZW50KCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuXHRcdHRoaXMub25EcmFnU3RvcC5lbWl0KGV2ZW50KTtcclxuXHRcdHRoaXMub25EcmFnQW55LmVtaXQoZXZlbnQpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVN0b3AuZW1pdChldmVudCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG5cclxuXHRcdHRoaXMub25Db25maWdDaGFuZ2VFdmVudCgpO1xyXG5cdH1cclxuXHRwdWJsaWMgb25DYXNjYWRlRXZlbnQoKTogdm9pZCB7XHJcblx0XHR0aGlzLm9uQ29uZmlnQ2hhbmdlRXZlbnQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2dyaWQtaXRlbScpO1xyXG5cdFx0aWYgKHRoaXMuX25nR3JpZC5hdXRvU3R5bGUpIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XHJcblx0XHR0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuXHRcdHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuXHJcblx0XHQvL1x0Rm9yY2UgYSBjb25maWcgdXBkYXRlIGluIGNhc2UgdGhlcmUgaXMgbm8gY29uZmlnIGFzc2lnbmVkXHJcblx0XHR0aGlzLmNvbmZpZyA9IHRoaXMuX3VzZXJDb25maWc7XHJcblx0fVxyXG5cclxuXHQvL1x0UHVibGljIG1ldGhvZHNcclxuXHRwdWJsaWMgY2FuRHJhZyhlOiBhbnkpOiBib29sZWFuIHtcclxuXHRcdGlmICghdGhpcy5pc0RyYWdnYWJsZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kcmFnSGFuZGxlKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZpbmRIYW5kbGUodGhpcy5fZHJhZ0hhbmRsZSwgZS50YXJnZXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGZpbmRIYW5kbGUoaGFuZGxlU2VsZWN0b3I6IHN0cmluZywgc3RhcnRFbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHRhcmdldEVsZW06IGFueSA9IHN0YXJ0RWxlbWVudDtcclxuXHJcblx0XHRcdHdoaWxlICh0YXJnZXRFbGVtICYmIHRhcmdldEVsZW0gIT0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZWxlbWVudE1hdGNoZXModGFyZ2V0RWxlbSwgaGFuZGxlU2VsZWN0b3IpKSByZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHRcdFx0dGFyZ2V0RWxlbSA9IHRhcmdldEVsZW0ucGFyZW50RWxlbWVudDtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyKSB7fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjYW5SZXNpemUoZTogYW55KTogc3RyaW5nIHtcclxuXHRcdGlmICghdGhpcy5pc1Jlc2l6YWJsZSkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3Jlc2l6ZUhhbmRsZSkge1xyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuX3Jlc2l6ZUhhbmRsZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbmRIYW5kbGUodGhpcy5fcmVzaXplSGFuZGxlLCBlLnRhcmdldCkgPyAnYm90dG9tcmlnaHQnIDogbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLl9yZXNpemVIYW5kbGUgIT09IFwib2JqZWN0XCIpIHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0Y29uc3QgcmVzaXplRGlyZWN0aW9ucyA9IFsgJ2JvdHRvbXJpZ2h0JywgJ2JvdHRvbWxlZnQnLCAndG9wcmlnaHQnLCAndG9wbGVmdCcsICdyaWdodCcsICdsZWZ0JywgJ2JvdHRvbScsICd0b3AnIF07XHJcblx0XHRcdGZvciAobGV0IGRpcmVjdGlvbiBvZiByZXNpemVEaXJlY3Rpb25zKSB7XHJcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiBpbiB0aGlzLl9yZXNpemVIYW5kbGUpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmZpbmRIYW5kbGUodGhpcy5fcmVzaXplSGFuZGxlW2RpcmVjdGlvbl0sIGUudGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZGlyZWN0aW9uO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX2JvcmRlclNpemUgPD0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0Y29uc3QgbW91c2VQb3M6IE5nR3JpZFJhd1Bvc2l0aW9uID0gdGhpcy5fZ2V0TW91c2VQb3NpdGlvbihlKTtcclxuXHJcblx0XHRpZiAobW91c2VQb3MubGVmdCA8IHRoaXMuX2VsZW1XaWR0aCAmJiBtb3VzZVBvcy5sZWZ0ID4gdGhpcy5fZWxlbVdpZHRoIC0gdGhpcy5fYm9yZGVyU2l6ZVxyXG5cdFx0XHQmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9lbGVtSGVpZ2h0ICYmIG1vdXNlUG9zLnRvcCA+IHRoaXMuX2VsZW1IZWlnaHQgLSB0aGlzLl9ib3JkZXJTaXplKSB7XHJcblx0XHRcdHJldHVybiAnYm90dG9tcmlnaHQnO1xyXG5cdFx0fSBlbHNlIGlmIChtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fYm9yZGVyU2l6ZSAmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9lbGVtSGVpZ2h0XHJcblx0XHRcdCYmIG1vdXNlUG9zLnRvcCA+IHRoaXMuX2VsZW1IZWlnaHQgLSB0aGlzLl9ib3JkZXJTaXplKSB7XHJcblx0XHRcdHJldHVybiAnYm90dG9tbGVmdCc7XHJcblx0XHR9IGVsc2UgaWYgKG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9lbGVtV2lkdGggJiYgbW91c2VQb3MubGVmdCA+IHRoaXMuX2VsZW1XaWR0aCAtIHRoaXMuX2JvcmRlclNpemVcclxuXHRcdFx0JiYgbW91c2VQb3MudG9wIDwgdGhpcy5fYm9yZGVyU2l6ZSkge1xyXG5cdFx0XHRyZXR1cm4gJ3RvcHJpZ2h0JztcclxuXHRcdH0gZWxzZSBpZiAobW91c2VQb3MubGVmdCA8IHRoaXMuX2JvcmRlclNpemUgJiYgbW91c2VQb3MudG9wIDwgdGhpcy5fYm9yZGVyU2l6ZSkge1xyXG5cdFx0XHRyZXR1cm4gJ3RvcGxlZnQnO1xyXG5cdFx0fSBlbHNlIGlmIChtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fZWxlbVdpZHRoICYmIG1vdXNlUG9zLmxlZnQgPiB0aGlzLl9lbGVtV2lkdGggLSB0aGlzLl9ib3JkZXJTaXplKSB7XHJcblx0XHRcdHJldHVybiAncmlnaHQnO1xyXG5cdFx0fSBlbHNlIGlmIChtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fYm9yZGVyU2l6ZSkge1xyXG5cdFx0XHRyZXR1cm4gJ2xlZnQnO1xyXG5cdFx0fSBlbHNlIGlmIChtb3VzZVBvcy50b3AgPCB0aGlzLl9lbGVtSGVpZ2h0ICYmIG1vdXNlUG9zLnRvcCA+IHRoaXMuX2VsZW1IZWlnaHQgLSB0aGlzLl9ib3JkZXJTaXplKSB7XHJcblx0XHRcdHJldHVybiAnYm90dG9tJztcclxuXHRcdH0gZWxzZSBpZiAobW91c2VQb3MudG9wIDwgdGhpcy5fYm9yZGVyU2l6ZSkge1xyXG5cdFx0XHRyZXR1cm4gJ3RvcCc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25Nb3VzZU1vdmUoZTogYW55KTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5fbmdHcmlkLmF1dG9TdHlsZSkge1xyXG5cdFx0XHRpZiAodGhpcy5fbmdHcmlkLnJlc2l6ZUVuYWJsZSkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc2l6ZURpcmVjdGlvbiA9IHRoaXMuY2FuUmVzaXplKGUpO1xyXG5cclxuXHRcdFx0XHRsZXQgY3Vyc29yOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuXHRcdFx0XHRzd2l0Y2ggKHJlc2l6ZURpcmVjdGlvbikge1xyXG5cdFx0XHRcdFx0Y2FzZSBcImJvdHRvbXJpZ2h0XCI6XHJcblx0XHRcdFx0XHRjYXNlIFwidG9wbGVmdFwiOlxyXG5cdFx0XHRcdFx0XHRjdXJzb3IgPSBcIm53c2UtcmVzaXplXCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcInRvcHJpZ2h0XCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiYm90dG9tbGVmdFwiOlxyXG5cdFx0XHRcdFx0XHRjdXJzb3IgPSBcIm5lc3ctcmVzaXplXCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcInRvcFwiOlxyXG5cdFx0XHRcdFx0Y2FzZSBcImJvdHRvbVwiOlxyXG5cdFx0XHRcdFx0XHRjdXJzb3IgPSBcIm5zLXJlc2l6ZVwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJsZWZ0XCI6XHJcblx0XHRcdFx0XHRjYXNlIFwicmlnaHRcIjpcclxuXHRcdFx0XHRcdFx0Y3Vyc29yID0gXCJldy1yZXNpemVcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5fbmdHcmlkLmRyYWdFbmFibGUgJiYgdGhpcy5jYW5EcmFnKGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y3Vyc29yID0gJ21vdmUnO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgY3Vyc29yKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLl9uZ0dyaWQuZHJhZ0VuYWJsZSAmJiB0aGlzLmNhbkRyYWcoZSkpIHtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAnbW92ZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9hZGRlZCkgdGhpcy5fbmdHcmlkLnJlbW92ZUl0ZW0odGhpcyk7XHJcblx0fVxyXG5cclxuXHQvL1x0R2V0dGVyc1xyXG5cdHB1YmxpYyBnZXRFbGVtZW50KCk6IEVsZW1lbnRSZWYge1xyXG5cdFx0cmV0dXJuIHRoaXMuX25nRWw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0RHJhZ0hhbmRsZSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RyYWdIYW5kbGU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UmVzaXplSGFuZGxlKCk6IFJlc2l6ZUhhbmRsZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVzaXplSGFuZGxlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldERpbWVuc2lvbnMoKTogTmdHcmlkSXRlbURpbWVuc2lvbnMge1xyXG5cdFx0cmV0dXJuIHsgJ3dpZHRoJzogdGhpcy5fZWxlbVdpZHRoLCAnaGVpZ2h0JzogdGhpcy5fZWxlbUhlaWdodCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFNpemUoKTogTmdHcmlkSXRlbVNpemUge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NpemU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UG9zaXRpb24oKTogTmdHcmlkUmF3UG9zaXRpb24ge1xyXG5cdFx0cmV0dXJuIHsgJ2xlZnQnOiB0aGlzLl9lbGVtTGVmdCwgJ3RvcCc6IHRoaXMuX2VsZW1Ub3AgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRHcmlkUG9zaXRpb24oKTogTmdHcmlkSXRlbVBvc2l0aW9uIHtcclxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb247XHJcblx0fVxyXG5cclxuXHQvL1x0U2V0dGVyc1xyXG5cdHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBOZ0dyaWRJdGVtQ29uZmlnKTogdm9pZCB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG5cdFx0dGhpcy5fcGF5bG9hZCA9IGNvbmZpZy5wYXlsb2FkO1xyXG5cdFx0dGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbCA9IGNvbmZpZy5jb2wgPyBjb25maWcuY29sIDogTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRy5jb2w7XHJcblx0XHR0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93ID0gY29uZmlnLnJvdyA/IGNvbmZpZy5yb3cgOiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHLnJvdztcclxuXHRcdHRoaXMuX3NpemUueCA9IGNvbmZpZy5zaXpleCA/IGNvbmZpZy5zaXpleCA6IE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcuc2l6ZXg7XHJcblx0XHR0aGlzLl9zaXplLnkgPSBjb25maWcuc2l6ZXkgPyBjb25maWcuc2l6ZXkgOiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHLnNpemV5O1xyXG5cdFx0dGhpcy5fZHJhZ0hhbmRsZSA9IGNvbmZpZy5kcmFnSGFuZGxlO1xyXG5cdFx0dGhpcy5fcmVzaXplSGFuZGxlID0gY29uZmlnLnJlc2l6ZUhhbmRsZTtcclxuXHRcdHRoaXMuX2JvcmRlclNpemUgPSBjb25maWcuYm9yZGVyU2l6ZTtcclxuXHRcdHRoaXMuaXNEcmFnZ2FibGUgPSBjb25maWcuZHJhZ2dhYmxlID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0dGhpcy5pc1Jlc2l6YWJsZSA9IGNvbmZpZy5yZXNpemFibGUgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR0aGlzLmlzRml4ZWQgPSBjb25maWcuZml4ZWQgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5fbWF4Q29scyA9ICFpc05hTihjb25maWcubWF4Q29scykgJiYgaXNGaW5pdGUoY29uZmlnLm1heENvbHMpID8gY29uZmlnLm1heENvbHMgOiAwO1xyXG5cdFx0dGhpcy5fbWluQ29scyA9ICFpc05hTihjb25maWcubWluQ29scykgJiYgaXNGaW5pdGUoY29uZmlnLm1pbkNvbHMpID8gY29uZmlnLm1pbkNvbHMgOiAwO1xyXG5cdFx0dGhpcy5fbWF4Um93cyA9ICFpc05hTihjb25maWcubWF4Um93cykgJiYgaXNGaW5pdGUoY29uZmlnLm1heFJvd3MpID8gY29uZmlnLm1heFJvd3MgOiAwO1xyXG5cdFx0dGhpcy5fbWluUm93cyA9ICFpc05hTihjb25maWcubWluUm93cykgJiYgaXNGaW5pdGUoY29uZmlnLm1pblJvd3MpID8gY29uZmlnLm1pblJvd3MgOiAwO1xyXG5cclxuXHRcdHRoaXMubWluV2lkdGggPSAhaXNOYU4oY29uZmlnLm1pbldpZHRoKSAmJiBpc0Zpbml0ZShjb25maWcubWluV2lkdGgpID8gY29uZmlnLm1pbldpZHRoIDogMDtcclxuXHRcdHRoaXMubWluSGVpZ2h0ID0gIWlzTmFOKGNvbmZpZy5taW5IZWlnaHQpICYmIGlzRmluaXRlKGNvbmZpZy5taW5IZWlnaHQpID8gY29uZmlnLm1pbkhlaWdodCA6IDA7XHJcblxyXG5cdFx0aWYgKHRoaXMuX21pbkNvbHMgPiAwICYmIHRoaXMuX21heENvbHMgPiAwICYmIHRoaXMuX21pbkNvbHMgPiB0aGlzLl9tYXhDb2xzKSB0aGlzLl9taW5Db2xzID0gMDtcclxuXHRcdGlmICh0aGlzLl9taW5Sb3dzID4gMCAmJiB0aGlzLl9tYXhSb3dzID4gMCAmJiB0aGlzLl9taW5Sb3dzID4gdGhpcy5fbWF4Um93cykgdGhpcy5fbWluUm93cyA9IDA7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2FkZGVkKSB7XHJcblx0XHRcdHRoaXMuX25nR3JpZC51cGRhdGVJdGVtKHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3NpemUgPSB0aGlzLmZpeFJlc2l6ZSh0aGlzLl9zaXplKTtcclxuXHJcblx0XHR0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcblx0XHR0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ0RvQ2hlY2soKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5fZGlmZmVyICE9IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgY2hhbmdlczogYW55ID0gdGhpcy5fZGlmZmVyLmRpZmYodGhpcy5fdXNlckNvbmZpZyk7XHJcblxyXG5cdFx0XHRpZiAoY2hhbmdlcyAhPSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2FwcGx5Q2hhbmdlcyhjaGFuZ2VzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRTaXplKG5ld1NpemU6IE5nR3JpZEl0ZW1TaXplLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcblx0XHRuZXdTaXplID0gdGhpcy5maXhSZXNpemUobmV3U2l6ZSk7XHJcblx0XHR0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuXHRcdGlmICh1cGRhdGUpIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cclxuXHRcdHRoaXMub25JdGVtQ2hhbmdlLmVtaXQodGhpcy5nZXRFdmVudE91dHB1dCgpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRHcmlkUG9zaXRpb24oZ3JpZFBvc2l0aW9uOiBOZ0dyaWRJdGVtUG9zaXRpb24sIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuXHRcdHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9IGdyaWRQb3NpdGlvbjtcclxuXHRcdGlmICh1cGRhdGUpIHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuXHJcblx0XHR0aGlzLm9uSXRlbUNoYW5nZS5lbWl0KHRoaXMuZ2V0RXZlbnRPdXRwdXQoKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0RXZlbnRPdXRwdXQoKTogTmdHcmlkSXRlbUV2ZW50IHtcclxuXHRcdHJldHVybiA8TmdHcmlkSXRlbUV2ZW50PntcclxuXHRcdFx0dWlkOiB0aGlzLnVpZCxcclxuXHRcdFx0cGF5bG9hZDogdGhpcy5fcGF5bG9hZCxcclxuXHRcdFx0Y29sOiB0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sLFxyXG5cdFx0XHRyb3c6IHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3csXHJcblx0XHRcdHNpemV4OiB0aGlzLl9zaXplLngsXHJcblx0XHRcdHNpemV5OiB0aGlzLl9zaXplLnksXHJcblx0XHRcdHdpZHRoOiB0aGlzLl9lbGVtV2lkdGgsXHJcblx0XHRcdGhlaWdodDogdGhpcy5fZWxlbUhlaWdodCxcclxuXHRcdFx0bGVmdDogdGhpcy5fZWxlbUxlZnQsXHJcblx0XHRcdHRvcDogdGhpcy5fZWxlbVRvcFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0c3dpdGNoICh0aGlzLl9jYXNjYWRlTW9kZSkge1xyXG5cdFx0XHRjYXNlICd1cCc6XHJcblx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB4ICsgJ3B4Jyk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgeSArICdweCcpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCB4ICsgJ3B4Jyk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgeSArICdweCcpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdkb3duJzpcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgeCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIHkgKyAncHgnKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9lbGVtTGVmdCA9IHg7XHJcblx0XHR0aGlzLl9lbGVtVG9wID0geTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRDYXNjYWRlTW9kZShjYXNjYWRlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHRoaXMuX2Nhc2NhZGVNb2RlID0gY2FzY2FkZTtcclxuXHRcdHN3aXRjaCAoY2FzY2FkZSkge1xyXG5cdFx0XHRjYXNlICd1cCc6XHJcblx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB0aGlzLl9lbGVtTGVmdCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHRoaXMuX2VsZW1Ub3AgKyAncHgnKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIG51bGwpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIG51bGwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCB0aGlzLl9lbGVtTGVmdCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHRoaXMuX2VsZW1Ub3AgKyAncHgnKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgbnVsbCk7XHJcblx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgbnVsbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Rvd24nOlxyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB0aGlzLl9lbGVtTGVmdCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIHRoaXMuX2VsZW1Ub3AgKyAncHgnKTtcclxuXHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIG51bGwpO1xyXG5cdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIG51bGwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNldERpbWVuc2lvbnModzogbnVtYmVyLCBoOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh3IDwgdGhpcy5taW5XaWR0aCkgdyA9IHRoaXMubWluV2lkdGg7XHJcblx0XHRpZiAoaCA8IHRoaXMubWluSGVpZ2h0KSBoID0gdGhpcy5taW5IZWlnaHQ7XHJcblxyXG5cdFx0dGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB3ICsgJ3B4Jyk7XHJcblx0XHR0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBoICsgJ3B4Jyk7XHJcblxyXG5cdFx0dGhpcy5fZWxlbVdpZHRoID0gdztcclxuXHRcdHRoaXMuX2VsZW1IZWlnaHQgPSBoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXJ0TW92aW5nKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbW92aW5nJyk7XHJcblx0XHRjb25zdCBzdHlsZTogYW55ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50KTtcclxuXHRcdGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgKHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3otaW5kZXgnKSkgKyAxKS50b1N0cmluZygpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdG9wTW92aW5nKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbW92aW5nJyk7XHJcblx0XHRjb25zdCBzdHlsZTogYW55ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50KTtcclxuXHRcdGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgKHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3otaW5kZXgnKSkgLSAxKS50b1N0cmluZygpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZWNhbGN1bGF0ZVNlbGYoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcblx0XHR0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBmaXhSZXNpemUobmV3U2l6ZTogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcblx0XHRpZiAodGhpcy5fbWF4Q29scyA+IDAgJiYgbmV3U2l6ZS54ID4gdGhpcy5fbWF4Q29scykgbmV3U2l6ZS54ID0gdGhpcy5fbWF4Q29scztcclxuXHRcdGlmICh0aGlzLl9tYXhSb3dzID4gMCAmJiBuZXdTaXplLnkgPiB0aGlzLl9tYXhSb3dzKSBuZXdTaXplLnkgPSB0aGlzLl9tYXhSb3dzO1xyXG5cclxuXHRcdGlmICh0aGlzLl9taW5Db2xzID4gMCAmJiBuZXdTaXplLnggPCB0aGlzLl9taW5Db2xzKSBuZXdTaXplLnggPSB0aGlzLl9taW5Db2xzO1xyXG5cdFx0aWYgKHRoaXMuX21pblJvd3MgPiAwICYmIG5ld1NpemUueSA8IHRoaXMuX21pblJvd3MpIG5ld1NpemUueSA9IHRoaXMuX21pblJvd3M7XHJcblxyXG5cdFx0Y29uc3QgaXRlbVdpZHRoID0gKG5ld1NpemUueCAqIHRoaXMuX25nR3JpZC5jb2xXaWR0aCkgKyAoKHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0ICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0KSAqIChuZXdTaXplLnggLSAxKSk7XHJcblx0XHRpZiAoaXRlbVdpZHRoIDwgdGhpcy5taW5XaWR0aCkgbmV3U2l6ZS54ID0gTWF0aC5jZWlsKCh0aGlzLm1pbldpZHRoICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQpIC8gKHRoaXMuX25nR3JpZC5jb2xXaWR0aCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0KSk7XHJcblxyXG5cdFx0Y29uc3QgaXRlbUhlaWdodCA9IChuZXdTaXplLnkgKiB0aGlzLl9uZ0dyaWQucm93SGVpZ2h0KSArICgodGhpcy5fbmdHcmlkLm1hcmdpblRvcCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20pICogKG5ld1NpemUueSAtIDEpKTtcclxuXHRcdGlmIChpdGVtSGVpZ2h0IDwgdGhpcy5taW5IZWlnaHQpIG5ld1NpemUueSA9IE1hdGguY2VpbCgodGhpcy5taW5IZWlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tICsgdGhpcy5fbmdHcmlkLm1hcmdpblRvcCkgLyAodGhpcy5fbmdHcmlkLnJvd0hlaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20gKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wKSk7XHJcblxyXG5cdFx0cmV0dXJuIG5ld1NpemU7XHJcblx0fVxyXG5cclxuXHQvL1x0UHJpdmF0ZSBtZXRob2RzXHJcblx0cHJpdmF0ZSBlbGVtZW50TWF0Y2hlcyhlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0aWYgKGVsZW1lbnQubWF0Y2hlcykgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XHJcblx0XHRpZiAoZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHRcdGlmIChlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcblx0XHRpZiAoZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcblx0XHRpZiAoZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcblxyXG5cdFx0aWYgKCFlbGVtZW50LmRvY3VtZW50IHx8ICFlbGVtZW50Lm93bmVyRG9jdW1lbnQpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRjb25zdCBtYXRjaGVzOiBhbnkgPSAoZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdFx0bGV0IGk6IG51bWJlciA9IG1hdGNoZXMubGVuZ3RoO1xyXG5cdFx0d2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gZWxlbWVudCkgeyB9XHJcblx0XHRyZXR1cm4gaSA+IC0xO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfcmVjYWxjdWxhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHg6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQuY29sV2lkdGggKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCkgKiAodGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbCAtIDEpICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQuc2NyZWVuTWFyZ2luO1xyXG5cdFx0Y29uc3QgeTogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5yb3dIZWlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSkgKiAodGhpcy5fY3VycmVudFBvc2l0aW9uLnJvdyAtIDEpICsgdGhpcy5fbmdHcmlkLm1hcmdpblRvcDtcclxuXHJcblx0XHR0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3NpemUueCA8IHRoaXMuX25nR3JpZC5taW5Db2xzKSB0aGlzLl9zaXplLnggPSB0aGlzLl9uZ0dyaWQubWluQ29scztcclxuXHRcdGlmICh0aGlzLl9zaXplLnkgPCB0aGlzLl9uZ0dyaWQubWluUm93cykgdGhpcy5fc2l6ZS55ID0gdGhpcy5fbmdHcmlkLm1pblJvd3M7XHJcblxyXG5cdFx0Y29uc3QgbmV3V2lkdGg6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQuY29sV2lkdGggKiB0aGlzLl9zaXplLngpICsgKCh0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCkgKiAodGhpcy5fc2l6ZS54IC0gMSkpO1xyXG5cdFx0Y29uc3QgbmV3SGVpZ2h0OiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLnJvd0hlaWdodCAqIHRoaXMuX3NpemUueSkgKyAoKHRoaXMuX25nR3JpZC5tYXJnaW5Ub3AgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tKSAqICh0aGlzLl9zaXplLnkgLSAxKSk7XHJcblxyXG5cdFx0Y29uc3QgdzogbnVtYmVyID0gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgdGhpcy5fbmdHcmlkLm1pbldpZHRoLCBuZXdXaWR0aCk7XHJcblx0XHRjb25zdCBoOiBudW1iZXIgPSBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgdGhpcy5fbmdHcmlkLm1pbkhlaWdodCwgbmV3SGVpZ2h0KTtcclxuXHJcblx0XHR0aGlzLnNldERpbWVuc2lvbnModywgaCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9nZXRNb3VzZVBvc2l0aW9uKGU6IGFueSk6IE5nR3JpZFJhd1Bvc2l0aW9uIHtcclxuXHRcdGlmIChlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMpIHtcclxuXHRcdFx0Y29uc3Qgb2U6IGFueSA9IGUub3JpZ2luYWxFdmVudDtcclxuXHRcdFx0ZSA9IG9lLnRvdWNoZXMubGVuZ3RoID8gb2UudG91Y2hlc1swXSA6IChvZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBvZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUpO1xyXG5cdFx0fSBlbHNlIGlmIChlLnRvdWNoZXMpIHtcclxuXHRcdFx0ZSA9IGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXNbMF0gOiAoZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZSk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdGNvbnN0IHJlZlBvczogTmdHcmlkUmF3UG9zaXRpb24gPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGVmdDogZS5jbGllbnRYIC0gcmVmUG9zLmxlZnQsXHJcblx0XHRcdHRvcDogZS5jbGllbnRZIC0gcmVmUG9zLnRvcFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2FwcGx5Q2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiBib29sZWFuIHtcclxuXHRcdGxldCBjaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRjb25zdCBjaGFuZ2VDaGVjayA9IChyZWNvcmQ6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5fY29uZmlnW3JlY29yZC5rZXldICE9PSByZWNvcmQuY3VycmVudFZhbHVlKSB7XHJcblx0XHRcdFx0dGhpcy5fY29uZmlnW3JlY29yZC5rZXldID0gcmVjb3JkLmN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGNoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbShjaGFuZ2VDaGVjayk7XHJcblx0XHRjaGFuZ2VzLmZvckVhY2hDaGFuZ2VkSXRlbShjaGFuZ2VDaGVjayk7XHJcblx0XHRjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbSgocmVjb3JkOiBhbnkpID0+IHtcclxuXHRcdFx0Y2hhbmdlZCA9IHRydWU7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9jb25maWdbcmVjb3JkLmtleV07XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoY2hhbmdlZCkge1xyXG5cdFx0XHR0aGlzLnNldENvbmZpZyh0aGlzLl9jb25maWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjaGFuZ2VkO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkNvbmZpZ0NoYW5nZUV2ZW50KCkge1xyXG5cdFx0aWYgKHRoaXMuX3VzZXJDb25maWcgPT09IG51bGwpIHJldHVybjtcclxuXHJcblx0XHR0aGlzLl9jb25maWcuc2l6ZXggPSB0aGlzLl91c2VyQ29uZmlnLnNpemV4ID0gdGhpcy5fc2l6ZS54O1xyXG5cdFx0dGhpcy5fY29uZmlnLnNpemV5ID0gdGhpcy5fdXNlckNvbmZpZy5zaXpleSA9IHRoaXMuX3NpemUueTtcclxuXHRcdHRoaXMuX2NvbmZpZy5jb2wgPSB0aGlzLl91c2VyQ29uZmlnLmNvbCA9IHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5jb2w7XHJcblx0XHR0aGlzLl9jb25maWcucm93ID0gdGhpcy5fdXNlckNvbmZpZy5yb3cgPSB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93O1xyXG5cdFx0dGhpcy5uZ0dyaWRJdGVtQ2hhbmdlLmVtaXQodGhpcy5fdXNlckNvbmZpZyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nR3JpZCB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvTmdHcmlkJztcclxuaW1wb3J0IHsgTmdHcmlkSXRlbSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvTmdHcmlkSXRlbSc7XHJcbmltcG9ydCB7IE5nR3JpZFBsYWNlaG9sZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OZ0dyaWRQbGFjZWhvbGRlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogICAgIFsgTmdHcmlkLCBOZ0dyaWRJdGVtLCBOZ0dyaWRQbGFjZWhvbGRlciBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogIFsgTmdHcmlkUGxhY2Vob2xkZXIgXSxcclxuICBleHBvcnRzOiAgICAgICAgICBbIE5nR3JpZCwgTmdHcmlkSXRlbSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0dyaWRNb2R1bGUge30iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyIiwiRXZlbnRFbWl0dGVyIiwiTmdHcmlkSGVscGVyLmdlbmVyYXRlVXVpZCIsInRzbGliXzEuX192YWx1ZXMiLCJOZ0dyaWRIZWxwZXIuc29ydEl0ZW1zQnlQb3NpdGlvblZlcnRpY2FsIiwiTmdHcmlkSGVscGVyLnNvcnRJdGVtc0J5UG9zaXRpb25Ib3Jpem9udGFsIiwiZnJvbUV2ZW50IiwiRGlyZWN0aXZlIiwiS2V5VmFsdWVEaWZmZXJzIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiT3V0cHV0IiwiUmVuZGVyZXIyIiwiVmlld0NvbnRhaW5lclJlZiIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxzQkE0RnlCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTztZQUNILElBQUksRUFBRTtnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07b0JBQUUsQ0FBQyxHQUFHLEtB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Q0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVE7b0JBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOztvQkFFeEUsU0FBUyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRO29CQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztvQkFFcE0sVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTO29CQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLE9B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