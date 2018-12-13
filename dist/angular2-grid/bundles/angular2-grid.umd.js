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
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function generateUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var /** @type {?} */ r = Math.random() * 16 | 0, /** @type {?} */ v = c == 'x' ? r : (r & 0x3 | 0x8);
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
     * @suppress {checkTypes} checked by tsc
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
        /**
         * @param {?} w
         * @param {?} h
         * @return {?}
         */
        NgGridPlaceholder.prototype._setDimensions = /**
         * @param {?} w
         * @param {?} h
         * @return {?}
         */
            function (w, h) {
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'width', w + 'px');
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'height', h + 'px');
            };
        /**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        NgGridPlaceholder.prototype._setPosition = /**
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
         * @return {?}
         */
        NgGridPlaceholder.prototype._recalculatePosition = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ x = (this._ngGrid.colWidth + this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._position.col - 1) + this._ngGrid.marginLeft + this._ngGrid.screenMargin;
                var /** @type {?} */ y = (this._ngGrid.rowHeight + this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._position.row - 1) + this._ngGrid.marginTop;
                this._setPosition(x, y);
            };
        /**
         * @return {?}
         */
        NgGridPlaceholder.prototype._recalculateDimensions = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ w = (this._ngGrid.colWidth * this._size.x) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._size.x - 1));
                var /** @type {?} */ h = (this._ngGrid.rowHeight * this._size.y) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._size.y - 1));
                this._setDimensions(w, h);
            };
        NgGridPlaceholder.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-grid-placeholder',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
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
     * @suppress {checkTypes} checked by tsc
     */
    var NgGrid = (function () {
        // Constructor
        function NgGrid(_differs, _ngEl, _renderer, componentFactoryResolver) {
            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this.componentFactoryResolver = componentFactoryResolver;
            // Event Emitters
            this.onDragStart = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
            this.onDragStop = new core.EventEmitter();
            this.onResizeStart = new core.EventEmitter();
            this.onResize = new core.EventEmitter();
            this.onResizeStop = new core.EventEmitter();
            this.onItemChange = new core.EventEmitter();
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
            this.resizeDirections = NgGrid.CONST_DEFAULT_RESIZE_DIRECTIONS;
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
            this._itemFixDirection = 'cascade';
            this._collisionFixDirection = 'cascade';
            this._allowOverlap = false;
            this._lastZValue = 1;
            this._subscriptions = [];
            this._enabledListener = false;
            this._config = NgGrid.CONST_DEFAULT_CONFIG;
            this._defineListeners();
        }
        Object.defineProperty(NgGrid.prototype, "config", {
            // [ng-grid] attribute handler
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                if (v == null || typeof v !== 'object') {
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
        /**
         * @return {?}
         */
        NgGrid.prototype.ngOnInit = /**
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
                var /** @type {?} */ uid = generateUuid();
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
                var /** @type {?} */ maxColRowChanged = false;
                for (var /** @type {?} */ x in config) {
                    var /** @type {?} */ val = config[x];
                    var /** @type {?} */ intVal = !val ? 0 : parseInt(val);
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
                        case 'resize_directions':
                            this.resizeDirections = val || ['bottomright', 'bottomleft', 'topright', 'topleft', 'right', 'left', 'bottom', 'top'];
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
                        case 'allow_overlap':
                            this._allowOverlap = !!val;
                            break;
                    }
                }
                if (this._allowOverlap && this.cascade !== 'off' && this.cascade !== '') {
                    console.warn('Unable to overlap items when a cascade direction is set.');
                    this._allowOverlap = false;
                }
                if (this.dragEnable || this.resizeEnable) {
                    this._enableListeners();
                }
                else {
                    this._disableListeners();
                }
                if (this._itemFixDirection === 'cascade') {
                    this._itemFixDirection = this._getFixDirectionFromCascade();
                }
                if (this._collisionFixDirection === 'cascade') {
                    this._collisionFixDirection = this._getFixDirectionFromCascade();
                }
                if (this._limitToScreen) {
                    var /** @type {?} */ newMaxCols = this._getContainerColumns();
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
                        //    Can't have both, prioritise on cascade
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
                var /** @type {?} */ maxWidth = this._maxCols * this.colWidth;
                var /** @type {?} */ maxHeight = this._maxRows * this.rowHeight;
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
                    var /** @type {?} */ changes = this._differ.diff(this._config);
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
                    var /** @type {?} */ newPos = this._fixGridPosition(ngItem.getGridPosition(), ngItem.getSize());
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
                    var /** @type {?} */ newMaxColumns = this._getContainerColumns();
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
                var /** @type {?} */ mousePos = this._getMousePosition(e);
                var /** @type {?} */ item = this._getItemFromPosition(mousePos);
                if (item == null)
                    return;
                var /** @type {?} */ resizeDirection = item.canResize(e);
                if (this.resizeEnable && resizeDirection) {
                    this._resizeReady = true;
                    this._resizingItem = item;
                    this._resizeDirection = resizeDirection;
                    e.preventDefault();
                }
                else if (this.dragEnable && item.canDrag(e)) {
                    this._dragReady = true;
                    this._draggingItem = item;
                    var /** @type {?} */ itemPos = item.getPosition();
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
                    var /** @type {?} */ mousePos = this._getMousePosition(e);
                    var /** @type {?} */ item = this._getItemFromPosition(mousePos);
                    if (item) {
                        item.onMouseMove(e);
                    }
                }
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._getFixDirectionFromCascade = /**
         * @return {?}
         */
            function () {
                switch (this.cascade) {
                    case 'up':
                    case 'down':
                        return 'vertical';
                    case 'left':
                    case 'right':
                    default:
                        return 'horizontal';
                }
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._updatePositionsAfterMaxChange = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._items.forEach(function (item) {
                    var /** @type {?} */ pos = item.getGridPosition();
                    var /** @type {?} */ dims = item.getSize();
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
                        var /** @type {?} */ newPosition = _this._fixGridPosition(pos, dims);
                        item.setGridPosition(newPosition);
                    }
                    _this._addToGrid(item);
                });
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._calculateColWidth = /**
         * @return {?}
         */
            function () {
                if (this._autoResize) {
                    if (this._maxCols > 0 || this._visibleCols > 0) {
                        var /** @type {?} */ maxCols = this._maxCols > 0 ? this._maxCols : this._visibleCols;
                        var /** @type {?} */ maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
                        var /** @type {?} */ colWidth = Math.floor(maxWidth / maxCols);
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
         * @return {?}
         */
        NgGrid.prototype._calculateRowHeight = /**
         * @return {?}
         */
            function () {
                if (this._autoResize) {
                    if (this._maxRows > 0 || this._visibleRows > 0) {
                        var /** @type {?} */ maxRows = this._maxRows > 0 ? this._maxRows : this._visibleRows;
                        var /** @type {?} */ maxHeight = void 0;
                        if (this._elementBasedDynamicRowHeight) {
                            maxHeight = this._ngEl.nativeElement.getBoundingClientRect().height;
                        }
                        else {
                            maxHeight = window.innerHeight - this.marginTop - this.marginBottom;
                        }
                        var /** @type {?} */ rowHeight = Math.max(Math.floor(maxHeight / maxRows), this.minHeight);
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
         * @return {?}
         */
        NgGrid.prototype._updateRatio = /**
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
         * @param {?} changes
         * @return {?}
         */
        NgGrid.prototype._applyChanges = /**
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
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._resizeStart = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.resizeEnable || !this._resizingItem)
                    return;
                //    Setup
                this._resizingItem.startMoving();
                this._removeFromGrid(this._resizingItem);
                this._createPlaceholder(this._resizingItem);
                if (this._allowOverlap) {
                    this._resizingItem.zIndex = this._lastZValue++;
                }
                //    Status Flags
                this.isResizing = true;
                this._resizeReady = false;
                //    Events
                this.onResizeStart.emit(this._resizingItem);
                this._resizingItem.onResizeStartEvent();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._dragStart = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.dragEnable || !this._draggingItem)
                    return;
                //    Start dragging
                this._draggingItem.startMoving();
                this._removeFromGrid(this._draggingItem);
                this._createPlaceholder(this._draggingItem);
                if (this._allowOverlap) {
                    this._draggingItem.zIndex = this._lastZValue++;
                }
                //    Status Flags
                this.isDragging = true;
                this._dragReady = false;
                //    Events
                this.onDragStart.emit(this._draggingItem);
                this._draggingItem.onDragStartEvent();
                //    Zoom
                if (this._zoomOnDrag) {
                    this._zoomOut();
                }
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._zoomOut = /**
         * @return {?}
         */
            function () {
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'transform', 'scale(0.5, 0.5)');
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._resetZoom = /**
         * @return {?}
         */
            function () {
                this._renderer.setElementStyle(this._ngEl.nativeElement, 'transform', '');
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._drag = /**
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
                else if (((document)).selection) {
                    ((document)).selection.empty();
                }
                var /** @type {?} */ mousePos = this._getMousePosition(e);
                var /** @type {?} */ newL = (mousePos.left - this._posOffset.left);
                var /** @type {?} */ newT = (mousePos.top - this._posOffset.top);
                var /** @type {?} */ itemPos = this._draggingItem.getGridPosition();
                var /** @type {?} */ gridPos = this._calculateGridPosition(newL, newT);
                var /** @type {?} */ dims = this._draggingItem.getSize();
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
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._resize = /**
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
                else if (((document)).selection) {
                    ((document)).selection.empty();
                }
                var /** @type {?} */ mousePos = this._getMousePosition(e);
                var /** @type {?} */ itemPos = this._resizingItem.getPosition();
                var /** @type {?} */ itemDims = this._resizingItem.getDimensions();
                var /** @type {?} */ endCorner = {
                    left: itemPos.left + itemDims.width,
                    top: itemPos.top + itemDims.height,
                };
                var /** @type {?} */ resizeTop = this._resizeDirection.includes('top');
                var /** @type {?} */ resizeBottom = this._resizeDirection.includes('bottom');
                var /** @type {?} */ resizeLeft = this._resizeDirection.includes('left');
                var /** @type {?} */ resizeRight = this._resizeDirection.includes('right');
                // Calculate new width and height based upon resize direction
                var /** @type {?} */ newW = resizeRight
                    ? (mousePos.left - itemPos.left + 1)
                    : resizeLeft
                        ? (endCorner.left - mousePos.left + 1)
                        : itemDims.width;
                var /** @type {?} */ newH = resizeBottom
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
                var /** @type {?} */ newX = itemPos.left;
                var /** @type {?} */ newY = itemPos.top;
                if (resizeLeft)
                    newX = endCorner.left - newW;
                if (resizeTop)
                    newY = endCorner.top - newH;
                var /** @type {?} */ calcSize = this._calculateGridSize(newW, newH);
                var /** @type {?} */ itemSize = this._resizingItem.getSize();
                var /** @type {?} */ iGridPos = this._resizingItem.getGridPosition();
                var /** @type {?} */ bottomRightCorner = {
                    col: iGridPos.col + itemSize.x,
                    row: iGridPos.row + itemSize.y,
                };
                var /** @type {?} */ targetPos = Object.assign({}, iGridPos);
                if (this._resizeDirection.includes('top'))
                    targetPos.row = bottomRightCorner.row - calcSize.y;
                if (this._resizeDirection.includes('left'))
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
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._dragStop = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.isDragging)
                    return;
                this.isDragging = false;
                var /** @type {?} */ itemPos = this._draggingItem.getGridPosition();
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
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._resizeStop = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!this.isResizing)
                    return;
                this.isResizing = false;
                var /** @type {?} */ itemDims = this._resizingItem.getSize();
                this._resizingItem.setSize(itemDims);
                var /** @type {?} */ itemPos = this._resizingItem.getGridPosition();
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
         * @return {?}
         */
        NgGrid.prototype._cleanDrag = /**
         * @return {?}
         */
            function () {
                this._draggingItem = null;
                this._posOffset = null;
                this.isDragging = false;
                this._dragReady = false;
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._cleanResize = /**
         * @return {?}
         */
            function () {
                this._resizingItem = null;
                this._resizeDirection = null;
                this.isResizing = false;
                this._resizeReady = false;
            };
        /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        NgGrid.prototype._calculateGridSize = /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
            function (width, height) {
                width += this.marginLeft + this.marginRight;
                height += this.marginTop + this.marginBottom;
                var /** @type {?} */ sizex = Math.max(this.minCols, Math.round(width / (this.colWidth + this.marginLeft + this.marginRight)));
                var /** @type {?} */ sizey = Math.max(this.minRows, Math.round(height / (this.rowHeight + this.marginTop + this.marginBottom)));
                if (!this._isWithinBoundsX({ col: 1, row: 1 }, { x: sizex, y: sizey }))
                    sizex = this._maxCols;
                if (!this._isWithinBoundsY({ col: 1, row: 1 }, { x: sizex, y: sizey }))
                    sizey = this._maxRows;
                return { 'x': sizex, 'y': sizey };
            };
        /**
         * @param {?} left
         * @param {?} top
         * @return {?}
         */
        NgGrid.prototype._calculateGridPosition = /**
         * @param {?} left
         * @param {?} top
         * @return {?}
         */
            function (left, top) {
                var /** @type {?} */ col = Math.max(1, Math.round(left / (this.colWidth + this.marginLeft + this.marginRight)) + 1);
                var /** @type {?} */ row = Math.max(1, Math.round(top / (this.rowHeight + this.marginTop + this.marginBottom)) + 1);
                if (!this._isWithinBoundsX({ col: col, row: row }, { x: 1, y: 1 }))
                    col = this._maxCols;
                if (!this._isWithinBoundsY({ col: col, row: row }, { x: 1, y: 1 }))
                    row = this._maxRows;
                return { 'col': col, 'row': row };
            };
        /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._hasGridCollision = /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                var /** @type {?} */ positions = this._getCollisions(pos, dims);
                if (positions == null || positions.length == 0)
                    return false;
                return positions.some(function (v) {
                    return !(v === null);
                });
            };
        /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._getCollisions = /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                var _this = this;
                if (this._allowOverlap)
                    return [];
                var /** @type {?} */ returns = [];
                if (!pos.col) {
                    pos.col = 1;
                }
                if (!pos.row) {
                    pos.row = 1;
                }
                var /** @type {?} */ leftCol = pos.col;
                var /** @type {?} */ rightCol = pos.col + dims.x;
                var /** @type {?} */ topRow = pos.row;
                var /** @type {?} */ bottomRow = pos.row + dims.y;
                this._itemsInGrid.forEach(function (itemId) {
                    var /** @type {?} */ item = _this._items.get(itemId);
                    if (!item) {
                        _this._itemsInGrid.delete(itemId);
                        return;
                    }
                    var /** @type {?} */ itemLeftCol = item.col;
                    var /** @type {?} */ itemRightCol = item.col + item.sizex;
                    var /** @type {?} */ itemTopRow = item.row;
                    var /** @type {?} */ itemBottomRow = item.row + item.sizey;
                    var /** @type {?} */ withinColumns = leftCol < itemRightCol && itemLeftCol < rightCol;
                    var /** @type {?} */ withinRows = topRow < itemBottomRow && itemTopRow < bottomRow;
                    if (withinColumns && withinRows) {
                        returns.push(item);
                    }
                });
                return returns;
            };
        /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixGridCollisions = /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                var /** @type {?} */ collisions = this._getCollisions(pos, dims);
                if (collisions.length === 0) {
                    return;
                }
                try {
                    for (var collisions_1 = __values(collisions), collisions_1_1 = collisions_1.next(); !collisions_1_1.done; collisions_1_1 = collisions_1.next()) {
                        var collision = collisions_1_1.value;
                        this._removeFromGrid(collision);
                        var /** @type {?} */ itemDims = collision.getSize();
                        var /** @type {?} */ itemPos = collision.getGridPosition();
                        var /** @type {?} */ newItemPos = { col: itemPos.col, row: itemPos.row };
                        if (this._collisionFixDirection === 'vertical') {
                            newItemPos.row = pos.row + dims.y;
                            if (!this._isWithinBoundsY(newItemPos, itemDims)) {
                                newItemPos.col = pos.col + dims.x;
                                newItemPos.row = 1;
                            }
                        }
                        else if (this._collisionFixDirection === 'horizontal') {
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
         * @param {?=} pos
         * @param {?=} dims
         * @return {?}
         */
        NgGrid.prototype._cascadeGrid = /**
         * @param {?=} pos
         * @param {?=} dims
         * @return {?}
         */
            function (pos, dims) {
                var _this = this;
                if (this._destroyed)
                    return;
                if (this._allowOverlap)
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
                var /** @type {?} */ itemsInGrid = Array.from(this._itemsInGrid, function (itemId) { return _this._items.get(itemId); });
                switch (this.cascade) {
                    case 'up':
                    case 'down':
                        itemsInGrid = itemsInGrid.sort(sortItemsByPositionVertical);
                        var /** @type {?} */ lowestRowPerColumn = new Map();
                        try {
                            for (var itemsInGrid_1 = __values(itemsInGrid), itemsInGrid_1_1 = itemsInGrid_1.next(); !itemsInGrid_1_1.done; itemsInGrid_1_1 = itemsInGrid_1.next()) {
                                var item = itemsInGrid_1_1.value;
                                if (item.isFixed)
                                    continue;
                                var /** @type {?} */ itemDims = item.getSize();
                                var /** @type {?} */ itemPos = item.getGridPosition();
                                var /** @type {?} */ lowestRowForItem = lowestRowPerColumn.get(itemPos.col) || 1;
                                for (var /** @type {?} */ i = 1; i < itemDims.x; i++) {
                                    var /** @type {?} */ lowestRowForColumn = lowestRowPerColumn.get(itemPos.col + i) || 1;
                                    lowestRowForItem = Math.max(lowestRowForColumn, lowestRowForItem);
                                }
                                var /** @type {?} */ leftCol = itemPos.col;
                                var /** @type {?} */ rightCol = itemPos.col + itemDims.x;
                                if (pos && dims) {
                                    var /** @type {?} */ withinColumns = rightCol > pos.col && leftCol < (pos.col + dims.x);
                                    if (withinColumns) {
                                        // If our element is in one of the item's columns
                                        var /** @type {?} */ roomAboveItem = itemDims.y <= (pos.row - lowestRowForItem);
                                        if (!roomAboveItem) {
                                            // Item can't fit above our element
                                            lowestRowForItem = Math.max(lowestRowForItem, pos.row + dims.y); // Set the lowest row to be below it
                                        }
                                    }
                                }
                                var /** @type {?} */ newPos = { col: itemPos.col, row: lowestRowForItem };
                                //    What if it's not within bounds Y?
                                if (lowestRowForItem != itemPos.row && this._isWithinBoundsY(newPos, itemDims)) {
                                    // If the item is not already on this row move it up
                                    this._removeFromGrid(item);
                                    item.setGridPosition(newPos);
                                    item.onCascadeEvent();
                                    this._addToGrid(item);
                                }
                                for (var /** @type {?} */ i = 0; i < itemDims.x; i++) {
                                    lowestRowPerColumn.set(itemPos.col + i, lowestRowForItem + itemDims.y); // Update the lowest row to be below the item
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
                        var /** @type {?} */ lowestColumnPerRow = new Map();
                        try {
                            for (var itemsInGrid_2 = __values(itemsInGrid), itemsInGrid_2_1 = itemsInGrid_2.next(); !itemsInGrid_2_1.done; itemsInGrid_2_1 = itemsInGrid_2.next()) {
                                var item = itemsInGrid_2_1.value;
                                var /** @type {?} */ itemDims = item.getSize();
                                var /** @type {?} */ itemPos = item.getGridPosition();
                                var /** @type {?} */ lowestColumnForItem = lowestColumnPerRow.get(itemPos.row) || 1;
                                for (var /** @type {?} */ i = 1; i < itemDims.y; i++) {
                                    var /** @type {?} */ lowestOffsetColumn = lowestColumnPerRow.get(itemPos.row + i) || 1;
                                    lowestColumnForItem = Math.max(lowestOffsetColumn, lowestColumnForItem);
                                }
                                var /** @type {?} */ topRow = itemPos.row;
                                var /** @type {?} */ bottomRow = itemPos.row + itemDims.y;
                                if (pos && dims) {
                                    var /** @type {?} */ withinRows = bottomRow > pos.col && topRow < (pos.col + dims.x);
                                    if (withinRows) {
                                        // If our element is in one of the item's rows
                                        var /** @type {?} */ roomNextToItem = itemDims.x <= (pos.col - lowestColumnForItem);
                                        if (!roomNextToItem) {
                                            // Item can't fit next to our element
                                            lowestColumnForItem = Math.max(lowestColumnForItem, pos.col + dims.x); // Set the lowest col to be the other side of it
                                        }
                                    }
                                }
                                var /** @type {?} */ newPos = { col: lowestColumnForItem, row: itemPos.row };
                                if (lowestColumnForItem != itemPos.col && this._isWithinBoundsX(newPos, itemDims)) {
                                    // If the item is not already on this col move it up
                                    this._removeFromGrid(item);
                                    item.setGridPosition(newPos);
                                    item.onCascadeEvent();
                                    this._addToGrid(item);
                                }
                                for (var /** @type {?} */ i = 0; i < itemDims.y; i++) {
                                    lowestColumnPerRow.set(itemPos.row + i, lowestColumnForItem + itemDims.x); // Update the lowest col to be below the item
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
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixGridPosition = /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                if (!this._hasGridCollision(pos, dims))
                    return pos;
                var /** @type {?} */ maxRow = this._maxRows === 0 ? this._getMaxRow() : this._maxRows;
                var /** @type {?} */ maxCol = this._maxCols === 0 ? this._getMaxCol() : this._maxCols;
                var /** @type {?} */ newPos = {
                    col: pos.col,
                    row: pos.row,
                };
                if (this._itemFixDirection === 'vertical') {
                    fixLoop: for (; newPos.col <= maxRow;) {
                        var /** @type {?} */ itemsInPath = this._getItemsInVerticalPath(newPos, dims, newPos.row);
                        var /** @type {?} */ nextRow = newPos.row;
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
                else if (this._itemFixDirection === 'horizontal') {
                    fixLoop: for (; newPos.row <= maxRow;) {
                        var /** @type {?} */ itemsInPath = this._getItemsInHorizontalPath(newPos, dims, newPos.col);
                        var /** @type {?} */ nextCol = newPos.col;
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
         * @param {?} pos
         * @param {?} dims
         * @param {?=} startColumn
         * @return {?}
         */
        NgGrid.prototype._getItemsInHorizontalPath = /**
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
                var /** @type {?} */ itemsInPath = [];
                var /** @type {?} */ topRow = pos.row + dims.y - 1;
                this._itemsInGrid.forEach(function (itemId) {
                    var /** @type {?} */ item = _this._items.get(itemId);
                    if (item.col + item.sizex - 1 < startColumn) {
                        return;
                    } // Item falls after start column
                    if (item.row > topRow) {
                        return;
                    } // Item falls above path
                    if (item.row + item.sizey - 1 < pos.row) {
                        return;
                    } // Item falls below path
                    itemsInPath.push(item);
                });
                return itemsInPath;
            };
        /**
         * @param {?} pos
         * @param {?} dims
         * @param {?=} startRow
         * @return {?}
         */
        NgGrid.prototype._getItemsInVerticalPath = /**
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
                var /** @type {?} */ itemsInPath = [];
                var /** @type {?} */ rightCol = pos.col + dims.x - 1;
                this._itemsInGrid.forEach(function (itemId) {
                    var /** @type {?} */ item = _this._items.get(itemId);
                    if (item.row + item.sizey - 1 < startRow) {
                        return;
                    } // Item falls above start row
                    if (item.col > rightCol) {
                        return;
                    } // Item falls after path
                    if (item.col + item.sizex - 1 < pos.col) {
                        return;
                    } // Item falls before path
                    itemsInPath.push(item);
                });
                return itemsInPath;
            };
        /**
         * @param {?} pos
         * @param {?} dims
         * @param {?=} allowExcessiveItems
         * @return {?}
         */
        NgGrid.prototype._isWithinBoundsX = /**
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
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixPosToBoundsX = /**
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
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixSizeToBoundsX = /**
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
         * @param {?} pos
         * @param {?} dims
         * @param {?=} allowExcessiveItems
         * @return {?}
         */
        NgGrid.prototype._isWithinBoundsY = /**
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
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixPosToBoundsY = /**
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
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixSizeToBoundsY = /**
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
         * @param {?} pos
         * @param {?} dims
         * @param {?=} allowExcessiveItems
         * @return {?}
         */
        NgGrid.prototype._isWithinBounds = /**
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
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixPosToBounds = /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                return this._fixPosToBoundsX(this._fixPosToBoundsY(pos, dims), dims);
            };
        /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
        NgGrid.prototype._fixSizeToBounds = /**
         * @param {?} pos
         * @param {?} dims
         * @return {?}
         */
            function (pos, dims) {
                return this._fixSizeToBoundsX(pos, this._fixSizeToBoundsY(pos, dims));
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgGrid.prototype._addToGrid = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var /** @type {?} */ pos = item.getGridPosition();
                var /** @type {?} */ dims = item.getSize();
                if (this._hasGridCollision(pos, dims)) {
                    this._fixGridCollisions(pos, dims);
                    pos = item.getGridPosition();
                }
                if (this._allowOverlap) {
                    item.zIndex = this._lastZValue++;
                }
                this._itemsInGrid.add(item.uid);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgGrid.prototype._removeFromGrid = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._itemsInGrid.delete(item.uid);
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._updateSize = /**
         * @return {?}
         */
            function () {
                if (this._destroyed)
                    return;
                var /** @type {?} */ maxCol = this._getMaxCol();
                var /** @type {?} */ maxRow = this._getMaxRow();
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
         * @return {?}
         */
        NgGrid.prototype._getMaxRow = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ itemsRows = Array.from(this._itemsInGrid, function (itemId) {
                    var /** @type {?} */ item = _this._items.get(itemId);
                    if (!item)
                        return 0;
                    return item.row + item.sizey - 1;
                });
                return Math.max.apply(null, itemsRows);
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._getMaxCol = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ itemsCols = Array.from(this._itemsInGrid, function (itemId) {
                    var /** @type {?} */ item = _this._items.get(itemId);
                    if (!item)
                        return 0;
                    return item.col + item.sizex - 1;
                });
                return Math.max.apply(null, itemsCols);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._getMousePosition = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if ((((window)).TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
                    e = e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
                }
                var /** @type {?} */ refPos = this._ngEl.nativeElement.getBoundingClientRect();
                var /** @type {?} */ left = e.clientX - refPos.left;
                var /** @type {?} */ top = e.clientY - refPos.top;
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
         * @param {?} e
         * @return {?}
         */
        NgGrid.prototype._getAbsoluteMousePosition = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if ((((window)).TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
                    e = e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
                }
                return {
                    left: e.clientX,
                    top: e.clientY
                };
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._getContainerColumns = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
                var /** @type {?} */ itemWidth = this.colWidth + this.marginLeft + this.marginRight;
                return Math.floor(maxWidth / itemWidth);
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._getContainerRows = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ maxHeight = window.innerHeight - this.marginTop - this.marginBottom;
                return Math.floor(maxHeight / (this.rowHeight + this.marginTop + this.marginBottom));
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._getScreenMargin = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ maxWidth = this._ngEl.nativeElement.getBoundingClientRect().width;
                var /** @type {?} */ itemWidth = this.colWidth + this.marginLeft + this.marginRight;
                return Math.floor((maxWidth - (this._maxCols * itemWidth)) / 2);
            };
        /**
         * @param {?} position
         * @return {?}
         */
        NgGrid.prototype._getItemFromPosition = /**
         * @param {?} position
         * @return {?}
         */
            function (position) {
                var _this = this;
                return Array.from(this._itemsInGrid, function (itemId) { return _this._items.get(itemId); }).find(function (item) {
                    if (!item)
                        return false;
                    var /** @type {?} */ size = item.getDimensions();
                    var /** @type {?} */ pos = item.getPosition();
                    return position.left >= pos.left && position.left < (pos.left + size.width) &&
                        position.top >= pos.top && position.top < (pos.top + size.height);
                });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgGrid.prototype._createPlaceholder = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var /** @type {?} */ pos = item.getGridPosition();
                var /** @type {?} */ dims = item.getSize();
                var /** @type {?} */ factory = this.componentFactoryResolver.resolveComponentFactory(NgGridPlaceholder);
                var /** @type {?} */ componentRef = item.containerRef.createComponent(factory);
                this._placeholderRef = componentRef;
                var /** @type {?} */ placeholder = componentRef.instance;
                placeholder.registerGrid(this);
                placeholder.setCascadeMode(this.cascade);
                placeholder.setGridPosition({ col: pos.col, row: pos.row });
                placeholder.setSize({ x: dims.x, y: dims.y });
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._emitOnItemChange = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ itemOutput = Array.from(this._itemsInGrid)
                    .map(function (itemId) { return _this._items.get(itemId); })
                    .filter(function (item) { return !!item; })
                    .map(function (item) { return item.getEventOutput(); });
                this.onItemChange.emit(itemOutput);
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._defineListeners = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ element = this._ngEl.nativeElement;
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
         * @return {?}
         */
        NgGrid.prototype._enableListeners = /**
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
         * @return {?}
         */
        NgGrid.prototype._disableListeners = /**
         * @return {?}
         */
            function () {
                this._subscriptions.forEach(function (subs) { return subs.unsubscribe(); });
                this._enabledListener = false;
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._isTouchDevice = /**
         * @return {?}
         */
            function () {
                return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._enableTouchListeners = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ touchstartSubs = this._touchstart$.subscribe(function (e) { return _this.mouseDownEventHandler(e); });
                var /** @type {?} */ touchmoveSubs = this._touchmove$.subscribe(function (e) { return _this.mouseMoveEventHandler(e); });
                var /** @type {?} */ touchendSubs = this._touchend$.subscribe(function (e) { return _this.mouseUpEventHandler(e); });
                this._subscriptions.push(touchstartSubs, touchmoveSubs, touchendSubs);
            };
        /**
         * @return {?}
         */
        NgGrid.prototype._enableMouseListeners = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ documentMousemoveSubs = this._documentMousemove$.subscribe(function (e) { return _this.mouseMoveEventHandler(e); });
                var /** @type {?} */ documentMouseupSubs = this._documentMouseup$.subscribe(function (e) { return _this.mouseUpEventHandler(e); });
                var /** @type {?} */ mousedownSubs = this._mousedown$.subscribe(function (e) { return _this.mouseDownEventHandler(e); });
                var /** @type {?} */ mousemoveSubs = this._mousemove$.subscribe(function (e) { return _this.mouseMoveEventHandler(e); });
                var /** @type {?} */ mouseupSubs = this._mouseup$.subscribe(function (e) { return _this.mouseUpEventHandler(e); });
                this._subscriptions.push(documentMousemoveSubs, documentMouseupSubs, mousedownSubs, mousemoveSubs, mouseupSubs);
            };
        NgGrid.CONST_DEFAULT_RESIZE_DIRECTIONS = [
            'bottomright',
            'bottomleft',
            'topright',
            'topleft',
            'right',
            'left',
            'bottom',
            'top',
        ];
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
            resize_directions: NgGrid.CONST_DEFAULT_RESIZE_DIRECTIONS,
            element_based_row_height: false,
            fix_item_position_direction: 'cascade',
            fix_collision_position_direction: 'cascade',
            allow_overlap: false,
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
        /** @nocollapse */
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
     * @suppress {checkTypes} checked by tsc
     */
    var NgGridItem = (function () {
        // Constructor
        function NgGridItem(_differs, _ngEl, _renderer, _ngGrid, containerRef) {
            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this._ngGrid = _ngGrid;
            this.containerRef = containerRef;
            // Event Emitters
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
            this._resizeDirections = [];
            this._zIndex = 0;
        }
        Object.defineProperty(NgGridItem.prototype, "zIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this._zIndex;
            },
            set: /**
             * @param {?} zIndex
             * @return {?}
             */ function (zIndex) {
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
             */ function (v) {
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
                    if (typeof this._resizeHandle === 'string') {
                        return this.findHandle(this._resizeHandle, e.target) ? 'bottomright' : null;
                    }
                    if (typeof this._resizeHandle !== 'object')
                        return null;
                    var /** @type {?} */ resizeDirections = ['bottomright', 'bottomleft', 'topright', 'topleft', 'right', 'left', 'bottom', 'top'];
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
                var /** @type {?} */ mousePos = this._getMousePosition(e);
                try {
                    for (var _b = __values(this._resizeDirections), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var direction = _c.value;
                        if (this.canResizeInDirection(direction, mousePos)) {
                            return direction;
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_d = _b.return))
                            _d.call(_b);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
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
            { type: core.Directive, args: [{
                        selector: '[ngGridItem]',
                        inputs: ['config: ngGridItem']
                    },] },
        ];
        /** @nocollapse */
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
     * @suppress {checkTypes} checked by tsc
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.NgGrid = NgGrid;
    exports.NgGridItem = NgGridItem;
    exports.NgGridPlaceholder = NgGridPlaceholder;
    exports.NgGridModule = NgGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vYW5ndWxhcjItZ3JpZC9oZWxwZXJzL05nR3JpZEhlbHBlcnMudHMiLCJuZzovL2FuZ3VsYXIyLWdyaWQvY29tcG9uZW50cy9OZ0dyaWRQbGFjZWhvbGRlci50cyIsIm5nOi8vYW5ndWxhcjItZ3JpZC9kaXJlY3RpdmVzL05nR3JpZC50cyIsIm5nOi8vYW5ndWxhcjItZ3JpZC9kaXJlY3RpdmVzL05nR3JpZEl0ZW0udHMiLCJuZzovL2FuZ3VsYXIyLWdyaWQvbW9kdWxlcy9OZ0dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ0dyaWRJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvTmdHcmlkSXRlbVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVXVpZCgpOiBzdHJpbmcge1xyXG5cdHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuXHRcdGxldCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuXHRcdHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRJdGVtc0J5UG9zaXRpb25Ib3Jpem9udGFsKGE6IE5nR3JpZEl0ZW0sIGI6IE5nR3JpZEl0ZW0pOiBudW1iZXIge1xyXG5cdGlmIChhLmNvbCA9PT0gYi5jb2wpIHsgcmV0dXJuIGEucm93IC0gYi5yb3c7IH1cclxuXHRyZXR1cm4gYS5jb2wgLSBiLmNvbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRJdGVtc0J5UG9zaXRpb25WZXJ0aWNhbChhOiBOZ0dyaWRJdGVtLCBiOiBOZ0dyaWRJdGVtKTogbnVtYmVyIHtcclxuXHRpZiAoYS5yb3cgPT09IGIucm93KSB7IHJldHVybiBhLmNvbCAtIGIuY29sOyB9XHJcblx0cmV0dXJuIGEucm93IC0gYi5yb3c7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdHcmlkIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9OZ0dyaWQnO1xyXG5pbXBvcnQgeyBOZ0dyaWRJdGVtUG9zaXRpb24sIE5nR3JpZEl0ZW1TaXplIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JTmdHcmlkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBFdmVudEVtaXR0ZXIsIEhvc3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBUeXBlLCBDb21wb25lbnRSZWYsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZy1ncmlkLXBsYWNlaG9sZGVyJyxcclxuICAgIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdHcmlkUGxhY2Vob2xkZXIgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfc2l6ZTogTmdHcmlkSXRlbVNpemU7XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvbjogTmdHcmlkSXRlbVBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSBfbmdHcmlkOiBOZ0dyaWQ7XHJcbiAgICBwcml2YXRlIF9jYXNjYWRlTW9kZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nRWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcikgeyB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyR3JpZChuZ0dyaWQ6IE5nR3JpZCkge1xyXG4gICAgICAgIHRoaXMuX25nR3JpZCA9IG5nR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2dyaWQtcGxhY2Vob2xkZXInLCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5fbmdHcmlkLmF1dG9TdHlsZSkgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNpemUobmV3U2l6ZTogTmdHcmlkSXRlbVNpemUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0R3JpZFBvc2l0aW9uKG5ld1Bvc2l0aW9uOiBOZ0dyaWRJdGVtUG9zaXRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2FzY2FkZU1vZGUoY2FzY2FkZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FzY2FkZU1vZGUgPSBjYXNjYWRlO1xyXG4gICAgICAgIHN3aXRjaCAoY2FzY2FkZSkge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCAnMHB4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgJzBweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgJzBweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcwcHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsICcwcHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCAnMHB4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcclxuICAgIHByaXZhdGUgX3NldERpbWVuc2lvbnModzogbnVtYmVyLCBoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB3ICsgJ3B4Jyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGggKyAncHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fY2FzY2FkZU1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCknKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgLXggKyAncHgsICcgKyB5ICsgJ3B4KScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyAteSArICdweCknKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHg6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQuY29sV2lkdGggKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCkgKiAodGhpcy5fcG9zaXRpb24uY29sIC0gMSkgKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5zY3JlZW5NYXJnaW47XHJcbiAgICAgICAgY29uc3QgeTogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5yb3dIZWlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSkgKiAodGhpcy5fcG9zaXRpb24ucm93IC0gMSkgKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wO1xyXG4gICAgICAgIHRoaXMuX3NldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB3OiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLmNvbFdpZHRoICogdGhpcy5fc2l6ZS54KSArICgodGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQpICogKHRoaXMuX3NpemUueCAtIDEpKTtcclxuICAgICAgICBjb25zdCBoOiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLnJvd0hlaWdodCAqIHRoaXMuX3NpemUueSkgKyAoKHRoaXMuX25nR3JpZC5tYXJnaW5Ub3AgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tKSAqICh0aGlzLl9zaXplLnkgLSAxKSk7XHJcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyh3LCBoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIEV2ZW50RW1pdHRlciwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBIb3N0LCBWaWV3RW5jYXBzdWxhdGlvbiwgVHlwZSwgQ29tcG9uZW50UmVmLCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgVmlld0NvbnRhaW5lclJlZiwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nR3JpZENvbmZpZywgTmdHcmlkSXRlbUV2ZW50LCBOZ0dyaWRJdGVtUG9zaXRpb24sIE5nR3JpZEl0ZW1TaXplLCBOZ0dyaWRSYXdQb3NpdGlvbiwgTmdHcmlkSXRlbURpbWVuc2lvbnMsIE5nQ29uZmlnRml4RGlyZWN0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JTmdHcmlkJztcclxuaW1wb3J0IHsgTmdHcmlkSXRlbSB9IGZyb20gJy4vTmdHcmlkSXRlbSc7XHJcbmltcG9ydCAqIGFzIE5nR3JpZEhlbHBlciBmcm9tICcuLi9oZWxwZXJzL05nR3JpZEhlbHBlcnMnO1xyXG5pbXBvcnQgeyBOZ0dyaWRQbGFjZWhvbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvTmdHcmlkUGxhY2Vob2xkZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tuZ0dyaWRdJyxcclxuICAgIGlucHV0czogWydjb25maWc6IG5nR3JpZCddLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICcod2luZG93OnJlc2l6ZSknOiAncmVzaXplRXZlbnRIYW5kbGVyKCRldmVudCknLFxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdHcmlkIGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xyXG4gICAgcHVibGljIHN0YXRpYyBDT05TVF9ERUZBVUxUX1JFU0laRV9ESVJFQ1RJT05TOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnYm90dG9tcmlnaHQnLFxyXG4gICAgICAgICdib3R0b21sZWZ0JyxcclxuICAgICAgICAndG9wcmlnaHQnLFxyXG4gICAgICAgICd0b3BsZWZ0JyxcclxuICAgICAgICAncmlnaHQnLFxyXG4gICAgICAgICdsZWZ0JyxcclxuICAgICAgICAnYm90dG9tJyxcclxuICAgICAgICAndG9wJyxcclxuICAgIF07XHJcblxyXG4gICAgLy8gRXZlbnQgRW1pdHRlcnNcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZ1N0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZVN0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8TmdHcmlkSXRlbUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PE5nR3JpZEl0ZW1FdmVudD4+KCk7XHJcblxyXG4gICAgLy8gUHVibGljIHZhcmlhYmxlc1xyXG4gICAgcHVibGljIGNvbFdpZHRoOiBudW1iZXIgPSAyNTA7XHJcbiAgICBwdWJsaWMgcm93SGVpZ2h0OiBudW1iZXIgPSAyNTA7XHJcbiAgICBwdWJsaWMgbWluQ29sczogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBtaW5Sb3dzOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIG1hcmdpblRvcDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgbWFyZ2luUmlnaHQ6IG51bWJlciA9IDEwO1xyXG4gICAgcHVibGljIG1hcmdpbkJvdHRvbTogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgbWFyZ2luTGVmdDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgc2NyZWVuTWFyZ2luOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGlzRHJhZ2dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc1Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgYXV0b1N0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyByZXNpemVFbmFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGRyYWdFbmFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGNhc2NhZGU6IHN0cmluZyA9ICd1cCc7XHJcbiAgICBwdWJsaWMgbWluV2lkdGg6IG51bWJlciA9IDEwMDtcclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IDEwMDtcclxuICAgIHB1YmxpYyByZXNpemVEaXJlY3Rpb25zOiBzdHJpbmdbXSA9IE5nR3JpZC5DT05TVF9ERUZBVUxUX1JFU0laRV9ESVJFQ1RJT05TO1xyXG5cclxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzXHJcbiAgICBwcml2YXRlIF9pdGVtczogTWFwPHN0cmluZywgTmdHcmlkSXRlbT4gPSBuZXcgTWFwPHN0cmluZywgTmdHcmlkSXRlbT4oKTtcclxuICAgIHByaXZhdGUgX2RyYWdnaW5nSXRlbTogTmdHcmlkSXRlbSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9yZXNpemluZ0l0ZW06IE5nR3JpZEl0ZW0gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplRGlyZWN0aW9uOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfaXRlbXNJbkdyaWQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBwcml2YXRlIF9jb250YWluZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVySGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYXhDb2xzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbWF4Um93czogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3Zpc2libGVDb2xzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfdmlzaWJsZVJvd3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9zZXRXaWR0aDogbnVtYmVyID0gMjUwO1xyXG4gICAgcHJpdmF0ZSBfc2V0SGVpZ2h0OiBudW1iZXIgPSAyNTA7XHJcbiAgICBwcml2YXRlIF9wb3NPZmZzZXQ6IE5nR3JpZFJhd1Bvc2l0aW9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2FkZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJSZWY6IENvbXBvbmVudFJlZjxOZ0dyaWRQbGFjZWhvbGRlcj4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZml4VG9HcmlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9hdXRvUmVzaXplOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9kaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuICAgIHByaXZhdGUgX2Rlc3Ryb3llZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfbWFpbnRhaW5SYXRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYXNwZWN0UmF0aW86IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3ByZWZlck5ldzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfem9vbU9uRHJhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfbGltaXRUb1NjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY2VudGVyVG9TY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2N1ck1heFJvdzogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2N1ck1heENvbDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2RyYWdSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2VsZW1lbnRCYXNlZER5bmFtaWNSb3dIZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2l0ZW1GaXhEaXJlY3Rpb246IE5nQ29uZmlnRml4RGlyZWN0aW9uID0gJ2Nhc2NhZGUnO1xyXG4gICAgcHJpdmF0ZSBfY29sbGlzaW9uRml4RGlyZWN0aW9uOiBOZ0NvbmZpZ0ZpeERpcmVjdGlvbiA9ICdjYXNjYWRlJztcclxuICAgIHByaXZhdGUgX2FsbG93T3ZlcmxhcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY2FzY2FkZVByb21pc2U6IFByb21pc2U8dm9pZD47XHJcbiAgICBwcml2YXRlIF9sYXN0WlZhbHVlOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIEV2ZW50c1xyXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRNb3VzZW1vdmUkOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+O1xyXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRNb3VzZXVwJDogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PjtcclxuICAgIHByaXZhdGUgX21vdXNlZG93biQ6IE9ic2VydmFibGU8TW91c2VFdmVudD47XHJcbiAgICBwcml2YXRlIF9tb3VzZW1vdmUkOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+O1xyXG4gICAgcHJpdmF0ZSBfbW91c2V1cCQ6IE9ic2VydmFibGU8TW91c2VFdmVudD47XHJcbiAgICBwcml2YXRlIF90b3VjaHN0YXJ0JDogT2JzZXJ2YWJsZTxUb3VjaEV2ZW50PjtcclxuICAgIHByaXZhdGUgX3RvdWNobW92ZSQ6IE9ic2VydmFibGU8VG91Y2hFdmVudD47XHJcbiAgICBwcml2YXRlIF90b3VjaGVuZCQ6IE9ic2VydmFibGU8VG91Y2hFdmVudD47XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2VuYWJsZWRMaXN0ZW5lcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIERlZmF1bHQgY29uZmlnXHJcbiAgICBwcml2YXRlIHN0YXRpYyBDT05TVF9ERUZBVUxUX0NPTkZJRzogTmdHcmlkQ29uZmlnID0ge1xyXG4gICAgICAgIG1hcmdpbnM6IFsxMF0sXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgICAgICBtYXhfY29sczogMCxcclxuICAgICAgICBtYXhfcm93czogMCxcclxuICAgICAgICB2aXNpYmxlX2NvbHM6IDAsXHJcbiAgICAgICAgdmlzaWJsZV9yb3dzOiAwLFxyXG4gICAgICAgIGNvbF93aWR0aDogMjUwLFxyXG4gICAgICAgIHJvd19oZWlnaHQ6IDI1MCxcclxuICAgICAgICBjYXNjYWRlOiAndXAnLFxyXG4gICAgICAgIG1pbl93aWR0aDogMTAwLFxyXG4gICAgICAgIG1pbl9oZWlnaHQ6IDEwMCxcclxuICAgICAgICBmaXhfdG9fZ3JpZDogZmFsc2UsXHJcbiAgICAgICAgYXV0b19zdHlsZTogdHJ1ZSxcclxuICAgICAgICBhdXRvX3Jlc2l6ZTogZmFsc2UsXHJcbiAgICAgICAgbWFpbnRhaW5fcmF0aW86IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcl9uZXc6IGZhbHNlLFxyXG4gICAgICAgIHpvb21fb25fZHJhZzogZmFsc2UsXHJcbiAgICAgICAgbGltaXRfdG9fc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJfdG9fc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICByZXNpemVfZGlyZWN0aW9uczogTmdHcmlkLkNPTlNUX0RFRkFVTFRfUkVTSVpFX0RJUkVDVElPTlMsXHJcbiAgICAgICAgZWxlbWVudF9iYXNlZF9yb3dfaGVpZ2h0OiBmYWxzZSxcclxuICAgICAgICBmaXhfaXRlbV9wb3NpdGlvbl9kaXJlY3Rpb246ICdjYXNjYWRlJyxcclxuICAgICAgICBmaXhfY29sbGlzaW9uX3Bvc2l0aW9uX2RpcmVjdGlvbjogJ2Nhc2NhZGUnLFxyXG4gICAgICAgIGFsbG93X292ZXJsYXA6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgX2NvbmZpZyA9IE5nR3JpZC5DT05TVF9ERUZBVUxUX0NPTkZJRztcclxuXHJcbiAgICAvLyBbbmctZ3JpZF0gYXR0cmlidXRlIGhhbmRsZXJcclxuICAgIHNldCBjb25maWcodjogTmdHcmlkQ29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB0eXBlb2YgdiAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb25maWcodik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kaWZmZXIgPT0gbnVsbCAmJiB2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlmZmVyID0gdGhpcy5fZGlmZmVycy5maW5kKHRoaXMuX2NvbmZpZykuY3JlYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9kaWZmZXIuZGlmZih0aGlzLl9jb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9kaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfbmdFbDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2RlZmluZUxpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2dyaWQnLCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5hdXRvU3R5bGUpIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29uZmlnKHRoaXMuX2NvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZGlzYWJsZUxpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZW5lcmF0ZUl0ZW1VaWQoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB1aWQ6IHN0cmluZyA9IE5nR3JpZEhlbHBlci5nZW5lcmF0ZVV1aWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2l0ZW1zLmhhcyh1aWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlSXRlbVVpZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVpZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogTmdHcmlkQ29uZmlnKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgICAgICB2YXIgbWF4Q29sUm93Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIHggaW4gY29uZmlnKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBjb25maWdbeF07XHJcbiAgICAgICAgICAgIHZhciBpbnRWYWwgPSAhdmFsID8gMCA6IHBhcnNlSW50KHZhbCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21hcmdpbnMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFyZ2lucyh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29sX3dpZHRoJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbFdpZHRoID0gTWF0aC5tYXgoaW50VmFsLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Jvd19oZWlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93SGVpZ2h0ID0gTWF0aC5tYXgoaW50VmFsLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2F1dG9fc3R5bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b1N0eWxlID0gdmFsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYXV0b19yZXNpemUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2F1dG9SZXNpemUgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkcmFnZ2FibGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0VuYWJsZSA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Jlc2l6YWJsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVFbmFibGUgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtYXhfcm93cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Q29sUm93Q2hhbmdlZCA9IG1heENvbFJvd0NoYW5nZWQgfHwgdGhpcy5fbWF4Um93cyAhPSBpbnRWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF4Um93cyA9IGludFZhbCA8IDAgPyAwIDogaW50VmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWF4X2NvbHMnOlxyXG4gICAgICAgICAgICAgICAgICAgIG1heENvbFJvd0NoYW5nZWQgPSBtYXhDb2xSb3dDaGFuZ2VkIHx8IHRoaXMuX21heENvbHMgIT0gaW50VmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21heENvbHMgPSBpbnRWYWwgPCAwID8gMCA6IGludFZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Zpc2libGVfcm93cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmlzaWJsZVJvd3MgPSBNYXRoLm1heChpbnRWYWwsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndmlzaWJsZV9jb2xzJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92aXNpYmxlQ29scyA9IE1hdGgubWF4KGludFZhbCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtaW5fcm93cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taW5Sb3dzID0gTWF0aC5tYXgoaW50VmFsLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21pbl9jb2xzJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbkNvbHMgPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWluX2hlaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taW5IZWlnaHQgPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWluX3dpZHRoJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbldpZHRoID0gTWF0aC5tYXgoaW50VmFsLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3pvb21fb25fZHJhZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fem9vbU9uRHJhZyA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Nhc2NhZGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhc2NhZGUgIT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzY2FkZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FzY2FkZUdyaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaXhfdG9fZ3JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZml4VG9HcmlkID0gdmFsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWFpbnRhaW5fcmF0aW8nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21haW50YWluUmF0aW8gPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwcmVmZXJfbmV3JzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmVmZXJOZXcgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsaW1pdF90b19zY3JlZW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbWl0VG9TY3JlZW4gPSAhdGhpcy5fYXV0b1Jlc2l6ZSAmJiAhIXZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NlbnRlcl90b19zY3JlZW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NlbnRlclRvU2NyZWVuID0gdmFsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVzaXplX2RpcmVjdGlvbnMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzaXplRGlyZWN0aW9ucyA9IHZhbCB8fCBbJ2JvdHRvbXJpZ2h0JywgJ2JvdHRvbWxlZnQnLCAndG9wcmlnaHQnLCAndG9wbGVmdCcsICdyaWdodCcsICdsZWZ0JywgJ2JvdHRvbScsICd0b3AnXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VsZW1lbnRfYmFzZWRfcm93X2hlaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudEJhc2VkRHluYW1pY1Jvd0hlaWdodCA9ICEhdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZml4X2l0ZW1fcG9zaXRpb25fZGlyZWN0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtRml4RGlyZWN0aW9uID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZml4X2NvbGxpc2lvbl9wb3NpdGlvbl9kaXJlY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpc2lvbkZpeERpcmVjdGlvbiA9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2FsbG93X292ZXJsYXAnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FsbG93T3ZlcmxhcCA9ICEhdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWxsb3dPdmVybGFwICYmIHRoaXMuY2FzY2FkZSAhPT0gJ29mZicgJiYgdGhpcy5jYXNjYWRlICE9PSAnJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBvdmVybGFwIGl0ZW1zIHdoZW4gYSBjYXNjYWRlIGRpcmVjdGlvbiBpcyBzZXQuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsbG93T3ZlcmxhcCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZSB8fCB0aGlzLnJlc2l6ZUVuYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmFibGVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5faXRlbUZpeERpcmVjdGlvbiA9PT0gJ2Nhc2NhZGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1GaXhEaXJlY3Rpb24gPSB0aGlzLl9nZXRGaXhEaXJlY3Rpb25Gcm9tQ2FzY2FkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbGxpc2lvbkZpeERpcmVjdGlvbiA9PT0gJ2Nhc2NhZGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpc2lvbkZpeERpcmVjdGlvbiA9IHRoaXMuX2dldEZpeERpcmVjdGlvbkZyb21DYXNjYWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbGltaXRUb1NjcmVlbikge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNYXhDb2xzID0gdGhpcy5fZ2V0Q29udGFpbmVyQ29sdW1ucygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX21heENvbHMgIT0gbmV3TWF4Q29scykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF4Q29scyA9IG5ld01heENvbHM7XHJcbiAgICAgICAgICAgICAgICBtYXhDb2xSb3dDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2xpbWl0VG9TY3JlZW4gJiYgdGhpcy5fY2VudGVyVG9TY3JlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5NYXJnaW4gPSB0aGlzLl9nZXRTY3JlZW5NYXJnaW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbk1hcmdpbiA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWFpbnRhaW5SYXRpbykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xXaWR0aCAmJiB0aGlzLnJvd0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXNwZWN0UmF0aW8gPSB0aGlzLmNvbFdpZHRoIC8gdGhpcy5yb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWludGFpblJhdGlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXhDb2xSb3dDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhDb2xzID4gMCAmJiB0aGlzLl9tYXhSb3dzID4gMCkgeyAgICAvLyAgICBDYW4ndCBoYXZlIGJvdGgsIHByaW9yaXRpc2Ugb24gY2FzY2FkZVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNhc2NhZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21heENvbHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF4Um93cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbnNBZnRlck1heENoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlQ29sV2lkdGgoKTtcclxuICAgICAgICB0aGlzLl9jYWxjdWxhdGVSb3dIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgdmFyIG1heFdpZHRoID0gdGhpcy5fbWF4Q29scyAqIHRoaXMuY29sV2lkdGg7XHJcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IHRoaXMuX21heFJvd3MgKiB0aGlzLnJvd0hlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKG1heFdpZHRoID4gMCAmJiB0aGlzLm1pbldpZHRoID4gbWF4V2lkdGgpIHRoaXMubWluV2lkdGggPSAwLjc1ICogdGhpcy5jb2xXaWR0aDtcclxuICAgICAgICBpZiAobWF4SGVpZ2h0ID4gMCAmJiB0aGlzLm1pbkhlaWdodCA+IG1heEhlaWdodCkgdGhpcy5taW5IZWlnaHQgPSAwLjc1ICogdGhpcy5yb3dIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1pbldpZHRoID4gdGhpcy5jb2xXaWR0aCkgdGhpcy5taW5Db2xzID0gTWF0aC5tYXgodGhpcy5taW5Db2xzLCBNYXRoLmNlaWwodGhpcy5taW5XaWR0aCAvIHRoaXMuY29sV2lkdGgpKTtcclxuICAgICAgICBpZiAodGhpcy5taW5IZWlnaHQgPiB0aGlzLnJvd0hlaWdodCkgdGhpcy5taW5Sb3dzID0gTWF0aC5tYXgodGhpcy5taW5Sb3dzLCBNYXRoLmNlaWwodGhpcy5taW5IZWlnaHQgLyB0aGlzLnJvd0hlaWdodCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWF4Q29scyA+IDAgJiYgdGhpcy5taW5Db2xzID4gdGhpcy5fbWF4Q29scykgdGhpcy5taW5Db2xzID0gMTtcclxuICAgICAgICBpZiAodGhpcy5fbWF4Um93cyA+IDAgJiYgdGhpcy5taW5Sb3dzID4gdGhpcy5fbWF4Um93cykgdGhpcy5taW5Sb3dzID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlUmF0aW8oKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZChpdGVtKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRDYXNjYWRlTW9kZSh0aGlzLmNhc2NhZGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVjYWxjdWxhdGVTZWxmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZFRvR3JpZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FzY2FkZUdyaWQoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW1Qb3NpdGlvbihpdGVtSWQ6IHN0cmluZyk6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmhhcyhpdGVtSWQpID8gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCkuZ2V0R3JpZFBvc2l0aW9uKCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtU2l6ZShpdGVtSWQ6IHN0cmluZyk6IE5nR3JpZEl0ZW1TaXplIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaGFzKGl0ZW1JZCkgPyB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKS5nZXRTaXplKCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RpZmZlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2VzID0gdGhpcy5fZGlmZmVyLmRpZmYodGhpcy5fY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGx5Q2hhbmdlcyhjaGFuZ2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNYXJnaW5zKG1hcmdpbnM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hcmdpblRvcCA9IE1hdGgubWF4KHBhcnNlSW50KG1hcmdpbnNbMF0pLCAwKTtcclxuICAgICAgICB0aGlzLm1hcmdpblJpZ2h0ID0gbWFyZ2lucy5sZW5ndGggPj0gMiA/IE1hdGgubWF4KHBhcnNlSW50KG1hcmdpbnNbMV0pLCAwKSA6IHRoaXMubWFyZ2luVG9wO1xyXG4gICAgICAgIHRoaXMubWFyZ2luQm90dG9tID0gbWFyZ2lucy5sZW5ndGggPj0gMyA/IE1hdGgubWF4KHBhcnNlSW50KG1hcmdpbnNbMl0pLCAwKSA6IHRoaXMubWFyZ2luVG9wO1xyXG4gICAgICAgIHRoaXMubWFyZ2luTGVmdCA9IG1hcmdpbnMubGVuZ3RoID49IDQgPyBNYXRoLm1heChwYXJzZUludChtYXJnaW5zWzNdKSwgMCkgOiB0aGlzLm1hcmdpblJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmFibGVEcmFnKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVEcmFnKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmFibGVSZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVFbmFibGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVzaXplRW5hYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEl0ZW0obmdJdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgbmdJdGVtLnNldENhc2NhZGVNb2RlKHRoaXMuY2FzY2FkZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fcHJlZmVyTmV3KSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdQb3MgPSB0aGlzLl9maXhHcmlkUG9zaXRpb24obmdJdGVtLmdldEdyaWRQb3NpdGlvbigpLCBuZ0l0ZW0uZ2V0U2l6ZSgpKTtcclxuICAgICAgICAgICAgbmdJdGVtLnNldEdyaWRQb3NpdGlvbihuZXdQb3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5nSXRlbS51aWQgPT09IG51bGwgfHwgdGhpcy5faXRlbXMuaGFzKG5nSXRlbS51aWQpKSB7XHJcbiAgICAgICAgICAgIG5nSXRlbS51aWQgPSB0aGlzLmdlbmVyYXRlSXRlbVVpZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXMuc2V0KG5nSXRlbS51aWQsIG5nSXRlbSk7XHJcbiAgICAgICAgdGhpcy5fYWRkVG9HcmlkKG5nSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2FzY2FkZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBuZ0l0ZW0ucmVjYWxjdWxhdGVTZWxmKCk7XHJcbiAgICAgICAgICAgIG5nSXRlbS5vbkNhc2NhZGVFdmVudCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZW1pdE9uSXRlbUNoYW5nZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShuZ0l0ZW06IE5nR3JpZEl0ZW0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZChuZ0l0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtcy5kZWxldGUobmdJdGVtLnVpZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2FzY2FkZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW06IE5nR3JpZEl0ZW0pID0+IGl0ZW0ucmVjYWxjdWxhdGVTZWxmKCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbWl0T25JdGVtQ2hhbmdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUl0ZW0obmdJdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUdyaWQobmdJdGVtKTtcclxuICAgICAgICB0aGlzLl9hZGRUb0dyaWQobmdJdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2FzY2FkZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTaXplKCk7XHJcbiAgICAgICAgICAgIG5nSXRlbS5vbkNhc2NhZGVFdmVudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmlnZ2VyQ2FzY2FkZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX2Nhc2NhZGVQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nhc2NhZGVQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2NhZGVQcm9taXNlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZChudWxsLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FzY2FkZVByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyaWdnZXJSZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVFdmVudEhhbmRsZXIobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZUV2ZW50SGFuZGxlcihlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxjdWxhdGVDb2xXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVJvd0hlaWdodCgpO1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVSYXRpbygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbGltaXRUb1NjcmVlbikge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNYXhDb2x1bW5zID0gdGhpcy5fZ2V0Q29udGFpbmVyQ29sdW1ucygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbWF4Q29scyAhPT0gbmV3TWF4Q29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF4Q29scyA9IG5ld01heENvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbnNBZnRlck1heENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FzY2FkZUdyaWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NlbnRlclRvU2NyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbk1hcmdpbiA9IHRoaXMuX2dldFNjcmVlbk1hcmdpbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW06IE5nR3JpZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlY2FsY3VsYXRlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2F1dG9SZXNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5yZWNhbGN1bGF0ZVNlbGYoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdXNlRG93bkV2ZW50SGFuZGxlcihlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBtb3VzZVBvcyA9IHRoaXMuX2dldE1vdXNlUG9zaXRpb24oZSk7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLl9nZXRJdGVtRnJvbVBvc2l0aW9uKG1vdXNlUG9zKTtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZXNpemVEaXJlY3Rpb246IHN0cmluZyA9IGl0ZW0uY2FuUmVzaXplKGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXNpemVFbmFibGUgJiYgcmVzaXplRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZVJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXplRGlyZWN0aW9uID0gcmVzaXplRGlyZWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmFnRW5hYmxlICYmIGl0ZW0uY2FuRHJhZyhlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0gPSBpdGVtO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbVBvcyA9IGl0ZW0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9zT2Zmc2V0ID0geyAnbGVmdCc6IChtb3VzZVBvcy5sZWZ0IC0gaXRlbVBvcy5sZWZ0KSwgJ3RvcCc6IChtb3VzZVBvcy50b3AgLSBpdGVtUG9zLnRvcCkgfVxyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW91c2VVcEV2ZW50SGFuZGxlcihlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ1N0b3AoZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUmVzaXppbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXplU3RvcChlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2RyYWdSZWFkeSB8fCB0aGlzLl9yZXNpemVSZWFkeSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhbkRyYWcoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYW5SZXNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZXNpemVSZWFkeSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemVTdGFydChlKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9kcmFnUmVhZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0KGUpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZyhlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZXNpemluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemUoZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gdGhpcy5fZ2V0TW91c2VQb3NpdGlvbihlKTtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLl9nZXRJdGVtRnJvbVBvc2l0aW9uKG1vdXNlUG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm9uTW91c2VNb3ZlKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICAgIFByaXZhdGUgbWV0aG9kc1xyXG4gICAgcHJpdmF0ZSBfZ2V0Rml4RGlyZWN0aW9uRnJvbUNhc2NhZGUoKTogTmdDb25maWdGaXhEaXJlY3Rpb24ge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jYXNjYWRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlUG9zaXRpb25zQWZ0ZXJNYXhDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gaXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmFyIGRpbXMgPSBpdGVtLmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faGFzR3JpZENvbGxpc2lvbihwb3MsIGRpbXMpICYmIHRoaXMuX2lzV2l0aGluQm91bmRzKHBvcywgZGltcykgJiYgZGltcy54IDw9IHRoaXMuX21heENvbHMgJiYgZGltcy55IDw9IHRoaXMuX21heFJvd3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUdyaWQoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbWF4Q29scyA+IDAgJiYgZGltcy54ID4gdGhpcy5fbWF4Q29scykge1xyXG4gICAgICAgICAgICAgICAgZGltcy54ID0gdGhpcy5fbWF4Q29scztcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0U2l6ZShkaW1zKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9tYXhSb3dzID4gMCAmJiBkaW1zLnkgPiB0aGlzLl9tYXhSb3dzKSB7XHJcbiAgICAgICAgICAgICAgICBkaW1zLnkgPSB0aGlzLl9tYXhSb3dzO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRTaXplKGRpbXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5faGFzR3JpZENvbGxpc2lvbihwb3MsIGRpbXMpIHx8ICF0aGlzLl9pc1dpdGhpbkJvdW5kcyhwb3MsIGRpbXMsIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSB0aGlzLl9maXhHcmlkUG9zaXRpb24ocG9zLCBkaW1zKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0R3JpZFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fYWRkVG9HcmlkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUNvbFdpZHRoKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9hdXRvUmVzaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhDb2xzID4gMCB8fCB0aGlzLl92aXNpYmxlQ29scyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXhDb2xzID0gdGhpcy5fbWF4Q29scyA+IDAgPyB0aGlzLl9tYXhDb2xzIDogdGhpcy5fdmlzaWJsZUNvbHM7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4V2lkdGg6IG51bWJlciA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29sV2lkdGg6IG51bWJlciA9IE1hdGguZmxvb3IobWF4V2lkdGggLyBtYXhDb2xzKTtcclxuICAgICAgICAgICAgICAgIGNvbFdpZHRoIC09ICh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xXaWR0aCA+IDApIHRoaXMuY29sV2lkdGggPSBjb2xXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbFdpZHRoIDwgdGhpcy5taW5XaWR0aCB8fCB0aGlzLm1pbkNvbHMgPiB0aGlzLl9jb25maWcubWluX2NvbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5taW5Db2xzID0gTWF0aC5tYXgodGhpcy5fY29uZmlnLm1pbl9jb2xzLCBNYXRoLmNlaWwodGhpcy5taW5XaWR0aCAvIHRoaXMuY29sV2lkdGgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlUm93SGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9hdXRvUmVzaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhSb3dzID4gMCB8fCB0aGlzLl92aXNpYmxlUm93cyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXhSb3dzID0gdGhpcy5fbWF4Um93cyA+IDAgPyB0aGlzLl9tYXhSb3dzIDogdGhpcy5fdmlzaWJsZVJvd3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF4SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnRCYXNlZER5bmFtaWNSb3dIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLm1hcmdpblRvcCAtIHRoaXMubWFyZ2luQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByb3dIZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KE1hdGguZmxvb3IobWF4SGVpZ2h0IC8gbWF4Um93cyksIHRoaXMubWluSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHJvd0hlaWdodCAtPSAodGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93SGVpZ2h0ID4gMCkgdGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yb3dIZWlnaHQgPCB0aGlzLm1pbkhlaWdodCB8fCB0aGlzLm1pblJvd3MgPiB0aGlzLl9jb25maWcubWluX3Jvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5taW5Sb3dzID0gTWF0aC5tYXgodGhpcy5fY29uZmlnLm1pbl9yb3dzLCBNYXRoLmNlaWwodGhpcy5taW5IZWlnaHQgLyB0aGlzLnJvd0hlaWdodCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVSYXRpbygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2F1dG9SZXNpemUgfHwgIXRoaXMuX21haW50YWluUmF0aW8pIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX21heENvbHMgPiAwICYmIHRoaXMuX3Zpc2libGVSb3dzIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yb3dIZWlnaHQgPSB0aGlzLmNvbFdpZHRoIC8gdGhpcy5fYXNwZWN0UmF0aW87XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9tYXhSb3dzID4gMCAmJiB0aGlzLl92aXNpYmxlQ29scyA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sV2lkdGggPSB0aGlzLl9hc3BlY3RSYXRpbyAqIHRoaXMucm93SGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbWF4Q29scyA9PSAwICYmIHRoaXMuX21heFJvd3MgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlzaWJsZUNvbHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd0hlaWdodCA9IHRoaXMuY29sV2lkdGggLyB0aGlzLl9hc3BlY3RSYXRpbztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl92aXNpYmxlUm93cyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sV2lkdGggPSB0aGlzLl9hc3BlY3RSYXRpbyAqIHRoaXMucm93SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FwcGx5Q2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjaGFuZ2VzLmZvckVhY2hBZGRlZEl0ZW0oKHJlY29yZDogYW55KSA9PiB7IHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XSA9IHJlY29yZC5jdXJyZW50VmFsdWU7IH0pO1xyXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaENoYW5nZWRJdGVtKChyZWNvcmQ6IGFueSkgPT4geyB0aGlzLl9jb25maWdbcmVjb3JkLmtleV0gPSByZWNvcmQuY3VycmVudFZhbHVlOyB9KTtcclxuICAgICAgICBjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbSgocmVjb3JkOiBhbnkpID0+IHsgZGVsZXRlIHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XTsgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q29uZmlnKHRoaXMuX2NvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzaXplU3RhcnQoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc2l6ZUVuYWJsZSB8fCAhdGhpcy5fcmVzaXppbmdJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vICAgIFNldHVwXHJcbiAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnN0YXJ0TW92aW5nKCk7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUdyaWQodGhpcy5fcmVzaXppbmdJdGVtKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVQbGFjZWhvbGRlcih0aGlzLl9yZXNpemluZ0l0ZW0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWxsb3dPdmVybGFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbS56SW5kZXggPSB0aGlzLl9sYXN0WlZhbHVlKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICBTdGF0dXMgRmxhZ3NcclxuICAgICAgICB0aGlzLmlzUmVzaXppbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6ZVJlYWR5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vICAgIEV2ZW50c1xyXG4gICAgICAgIHRoaXMub25SZXNpemVTdGFydC5lbWl0KHRoaXMuX3Jlc2l6aW5nSXRlbSk7XHJcbiAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLm9uUmVzaXplU3RhcnRFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RyYWdTdGFydChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZHJhZ0VuYWJsZSB8fCAhdGhpcy5fZHJhZ2dpbmdJdGVtKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vICAgIFN0YXJ0IGRyYWdnaW5nXHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtLnN0YXJ0TW92aW5nKCk7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUdyaWQodGhpcy5fZHJhZ2dpbmdJdGVtKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVQbGFjZWhvbGRlcih0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWxsb3dPdmVybGFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbS56SW5kZXggPSB0aGlzLl9sYXN0WlZhbHVlKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICBTdGF0dXMgRmxhZ3NcclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdSZWFkeSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyAgICBFdmVudHNcclxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQodGhpcy5fZHJhZ2dpbmdJdGVtKTtcclxuICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0ub25EcmFnU3RhcnRFdmVudCgpO1xyXG5cclxuICAgICAgICAvLyAgICBab29tXHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21PbkRyYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5fem9vbU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF96b29tT3V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnc2NhbGUoMC41LCAwLjUpJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzZXRab29tKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZyhlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKCg8YW55PmRvY3VtZW50KS5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgKDxhbnk+ZG9jdW1lbnQpLnNlbGVjdGlvbi5lbXB0eSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1vdXNlUG9zID0gdGhpcy5fZ2V0TW91c2VQb3NpdGlvbihlKTtcclxuICAgICAgICB2YXIgbmV3TCA9IChtb3VzZVBvcy5sZWZ0IC0gdGhpcy5fcG9zT2Zmc2V0LmxlZnQpO1xyXG4gICAgICAgIHZhciBuZXdUID0gKG1vdXNlUG9zLnRvcCAtIHRoaXMuX3Bvc09mZnNldC50b3ApO1xyXG5cclxuICAgICAgICB2YXIgaXRlbVBvcyA9IHRoaXMuX2RyYWdnaW5nSXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgZ3JpZFBvcyA9IHRoaXMuX2NhbGN1bGF0ZUdyaWRQb3NpdGlvbihuZXdMLCBuZXdUKTtcclxuICAgICAgICB2YXIgZGltcyA9IHRoaXMuX2RyYWdnaW5nSXRlbS5nZXRTaXplKCk7XHJcblxyXG4gICAgICAgIGdyaWRQb3MgPSB0aGlzLl9maXhQb3NUb0JvdW5kc1goZ3JpZFBvcywgZGltcyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKGdyaWRQb3MsIGRpbXMpKSB7XHJcbiAgICAgICAgICAgIGdyaWRQb3MgPSB0aGlzLl9maXhQb3NUb0JvdW5kc1koZ3JpZFBvcywgZGltcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ3JpZFBvcy5jb2wgIT0gaXRlbVBvcy5jb2wgfHwgZ3JpZFBvcy5yb3cgIT0gaXRlbVBvcy5yb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtLnNldEdyaWRQb3NpdGlvbihncmlkUG9zLCB0aGlzLl9maXhUb0dyaWQpO1xyXG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZi5pbnN0YW5jZS5zZXRHcmlkUG9zaXRpb24oZ3JpZFBvcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHRoaXMuY2FzY2FkZSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZml4R3JpZENvbGxpc2lvbnMoZ3JpZFBvcywgZGltcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZChncmlkUG9zLCBkaW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9maXhUb0dyaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtLnNldFBvc2l0aW9uKG5ld0wsIG5ld1QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbkRyYWcuZW1pdCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbS5vbkRyYWdFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Jlc2l6ZShlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZXNpemluZykgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgoPGFueT5kb2N1bWVudCkuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICg8YW55PmRvY3VtZW50KS5zZWxlY3Rpb24uZW1wdHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdXNlUG9zID0gdGhpcy5fZ2V0TW91c2VQb3NpdGlvbihlKTtcclxuICAgICAgICBjb25zdCBpdGVtUG9zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbURpbXMgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0RGltZW5zaW9ucygpO1xyXG4gICAgICAgIGNvbnN0IGVuZENvcm5lciA9IHtcclxuICAgICAgICAgICAgbGVmdDogaXRlbVBvcy5sZWZ0ICsgaXRlbURpbXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRvcDogaXRlbVBvcy50b3AgKyBpdGVtRGltcy5oZWlnaHQsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXNpemVUb3AgPSB0aGlzLl9yZXNpemVEaXJlY3Rpb24uaW5jbHVkZXMoJ3RvcCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc2l6ZUJvdHRvbSA9IHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygnYm90dG9tJyk7XHJcbiAgICAgICAgY29uc3QgcmVzaXplTGVmdCA9IHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygnbGVmdCcpXHJcbiAgICAgICAgY29uc3QgcmVzaXplUmlnaHQgPSB0aGlzLl9yZXNpemVEaXJlY3Rpb24uaW5jbHVkZXMoJ3JpZ2h0Jyk7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgd2lkdGggYW5kIGhlaWdodCBiYXNlZCB1cG9uIHJlc2l6ZSBkaXJlY3Rpb25cclxuICAgICAgICBsZXQgbmV3VyA9IHJlc2l6ZVJpZ2h0XHJcbiAgICAgICAgICAgID8gKG1vdXNlUG9zLmxlZnQgLSBpdGVtUG9zLmxlZnQgKyAxKVxyXG4gICAgICAgICAgICA6IHJlc2l6ZUxlZnRcclxuICAgICAgICAgICAgICAgID8gKGVuZENvcm5lci5sZWZ0IC0gbW91c2VQb3MubGVmdCArIDEpXHJcbiAgICAgICAgICAgICAgICA6IGl0ZW1EaW1zLndpZHRoO1xyXG4gICAgICAgIGxldCBuZXdIID0gcmVzaXplQm90dG9tXHJcbiAgICAgICAgICAgID8gKG1vdXNlUG9zLnRvcCAtIGl0ZW1Qb3MudG9wICsgMSlcclxuICAgICAgICAgICAgOiByZXNpemVUb3BcclxuICAgICAgICAgICAgICAgID8gKGVuZENvcm5lci50b3AgLSBtb3VzZVBvcy50b3AgKyAxKVxyXG4gICAgICAgICAgICAgICAgOiBpdGVtRGltcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChuZXdXIDwgdGhpcy5taW5XaWR0aClcclxuICAgICAgICAgICAgbmV3VyA9IHRoaXMubWluV2lkdGg7XHJcbiAgICAgICAgaWYgKG5ld0ggPCB0aGlzLm1pbkhlaWdodClcclxuICAgICAgICAgICAgbmV3SCA9IHRoaXMubWluSGVpZ2h0O1xyXG4gICAgICAgIGlmIChuZXdXIDwgdGhpcy5fcmVzaXppbmdJdGVtLm1pbldpZHRoKVxyXG4gICAgICAgICAgICBuZXdXID0gdGhpcy5fcmVzaXppbmdJdGVtLm1pbldpZHRoO1xyXG4gICAgICAgIGlmIChuZXdIIDwgdGhpcy5fcmVzaXppbmdJdGVtLm1pbkhlaWdodClcclxuICAgICAgICAgICAgbmV3SCA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5taW5IZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCBuZXdYID0gaXRlbVBvcy5sZWZ0O1xyXG4gICAgICAgIGxldCBuZXdZID0gaXRlbVBvcy50b3A7XHJcblxyXG4gICAgICAgIGlmIChyZXNpemVMZWZ0KVxyXG4gICAgICAgICAgICBuZXdYID0gZW5kQ29ybmVyLmxlZnQgLSBuZXdXO1xyXG4gICAgICAgIGlmIChyZXNpemVUb3ApXHJcbiAgICAgICAgICAgIG5ld1kgPSBlbmRDb3JuZXIudG9wIC0gbmV3SDtcclxuXHJcbiAgICAgICAgbGV0IGNhbGNTaXplID0gdGhpcy5fY2FsY3VsYXRlR3JpZFNpemUobmV3VywgbmV3SCk7XHJcbiAgICAgICAgY29uc3QgaXRlbVNpemUgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0U2l6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGlHcmlkUG9zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0Q29ybmVyID0ge1xyXG4gICAgICAgICAgICBjb2w6IGlHcmlkUG9zLmNvbCArIGl0ZW1TaXplLngsXHJcbiAgICAgICAgICAgIHJvdzogaUdyaWRQb3Mucm93ICsgaXRlbVNpemUueSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvczogTmdHcmlkSXRlbVBvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgaUdyaWRQb3MpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcmVzaXplRGlyZWN0aW9uLmluY2x1ZGVzKCd0b3AnKSlcclxuICAgICAgICAgICAgdGFyZ2V0UG9zLnJvdyA9IGJvdHRvbVJpZ2h0Q29ybmVyLnJvdyAtIGNhbGNTaXplLnk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygnbGVmdCcpKVxyXG4gICAgICAgICAgICB0YXJnZXRQb3MuY29sID0gYm90dG9tUmlnaHRDb3JuZXIuY29sIC0gY2FsY1NpemUueDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1godGFyZ2V0UG9zLCBjYWxjU2l6ZSkpXHJcbiAgICAgICAgICAgIGNhbGNTaXplID0gdGhpcy5fZml4U2l6ZVRvQm91bmRzWCh0YXJnZXRQb3MsIGNhbGNTaXplKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1kodGFyZ2V0UG9zLCBjYWxjU2l6ZSkpXHJcbiAgICAgICAgICAgIGNhbGNTaXplID0gdGhpcy5fZml4U2l6ZVRvQm91bmRzWSh0YXJnZXRQb3MsIGNhbGNTaXplKTtcclxuXHJcbiAgICAgICAgY2FsY1NpemUgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZml4UmVzaXplKGNhbGNTaXplKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGNTaXplLnggIT0gaXRlbVNpemUueCB8fCBjYWxjU2l6ZS55ICE9IGl0ZW1TaXplLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnNldEdyaWRQb3NpdGlvbih0YXJnZXRQb3MsIHRoaXMuX2ZpeFRvR3JpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyUmVmLmluc3RhbmNlLnNldEdyaWRQb3NpdGlvbih0YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc2V0U2l6ZShjYWxjU2l6ZSwgdGhpcy5fZml4VG9HcmlkKTtcclxuICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXJSZWYuaW5zdGFuY2Uuc2V0U2l6ZShjYWxjU2l6ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHRoaXMuY2FzY2FkZSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZml4R3JpZENvbGxpc2lvbnModGFyZ2V0UG9zLCBjYWxjU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZCh0YXJnZXRQb3MsIGNhbGNTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9maXhUb0dyaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnNldERpbWVuc2lvbnMobmV3VywgbmV3SCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbS5zZXRQb3NpdGlvbihuZXdYLCBuZXdZKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25SZXNpemUuZW1pdCh0aGlzLl9yZXNpemluZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbS5vblJlc2l6ZUV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ1N0b3AoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBpdGVtUG9zID0gdGhpcy5fZHJhZ2dpbmdJdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0uc2V0R3JpZFBvc2l0aW9uKGl0ZW1Qb3MpO1xyXG4gICAgICAgIHRoaXMuX2FkZFRvR3JpZCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtLnN0b3BNb3ZpbmcoKTtcclxuICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0ub25EcmFnU3RvcEV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdTdG9wLmVtaXQodGhpcy5fZHJhZ2dpbmdJdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2xlYW5EcmFnKCk7XHJcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXJSZWYuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbWl0T25JdGVtQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl96b29tT25EcmFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0Wm9vbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZXNpemVTdG9wKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Jlc2l6aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNSZXNpemluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtRGltcyA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnNldFNpemUoaXRlbURpbXMpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtUG9zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbS5zZXRHcmlkUG9zaXRpb24oaXRlbVBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZFRvR3JpZCh0aGlzLl9yZXNpemluZ0l0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnN0b3BNb3ZpbmcoKTtcclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0ub25SZXNpemVTdG9wRXZlbnQoKTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplU3RvcC5lbWl0KHRoaXMuX3Jlc2l6aW5nSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NsZWFuUmVzaXplKCk7XHJcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXJSZWYuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbWl0T25JdGVtQ2hhbmdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xlYW5EcmFnKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcG9zT2Zmc2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kcmFnUmVhZHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGVhblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6ZURpcmVjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVzaXplUmVhZHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWxjdWxhdGVHcmlkU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IE5nR3JpZEl0ZW1TaXplIHtcclxuICAgICAgICB3aWR0aCArPSB0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0O1xyXG4gICAgICAgIGhlaWdodCArPSB0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tO1xyXG5cclxuICAgICAgICB2YXIgc2l6ZXggPSBNYXRoLm1heCh0aGlzLm1pbkNvbHMsIE1hdGgucm91bmQod2lkdGggLyAodGhpcy5jb2xXaWR0aCArIHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpKSk7XHJcbiAgICAgICAgdmFyIHNpemV5ID0gTWF0aC5tYXgodGhpcy5taW5Sb3dzLCBNYXRoLnJvdW5kKGhlaWdodCAvICh0aGlzLnJvd0hlaWdodCArIHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b20pKSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNYKHsgY29sOiAxLCByb3c6IDEgfSwgeyB4OiBzaXpleCwgeTogc2l6ZXkgfSkpIHNpemV4ID0gdGhpcy5fbWF4Q29scztcclxuICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWSh7IGNvbDogMSwgcm93OiAxIH0sIHsgeDogc2l6ZXgsIHk6IHNpemV5IH0pKSBzaXpleSA9IHRoaXMuX21heFJvd3M7XHJcblxyXG4gICAgICAgIHJldHVybiB7ICd4Jzogc2l6ZXgsICd5Jzogc2l6ZXkgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWxjdWxhdGVHcmlkUG9zaXRpb24obGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcbiAgICAgICAgdmFyIGNvbCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQobGVmdCAvICh0aGlzLmNvbFdpZHRoICsgdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkpICsgMSk7XHJcbiAgICAgICAgdmFyIHJvdyA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQodG9wIC8gKHRoaXMucm93SGVpZ2h0ICsgdGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkpICsgMSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNYKHsgY29sOiBjb2wsIHJvdzogcm93IH0sIHsgeDogMSwgeTogMSB9KSkgY29sID0gdGhpcy5fbWF4Q29scztcclxuICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWSh7IGNvbDogY29sLCByb3c6IHJvdyB9LCB7IHg6IDEsIHk6IDEgfSkpIHJvdyA9IHRoaXMuX21heFJvd3M7XHJcblxyXG4gICAgICAgIHJldHVybiB7ICdjb2wnOiBjb2wsICdyb3cnOiByb3cgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNHcmlkQ29sbGlzaW9uKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSB0aGlzLl9nZXRDb2xsaXNpb25zKHBvcywgZGltcyk7XHJcblxyXG4gICAgICAgIGlmIChwb3NpdGlvbnMgPT0gbnVsbCB8fCBwb3NpdGlvbnMubGVuZ3RoID09IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucy5zb21lKCh2OiBOZ0dyaWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhKHYgPT09IG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbGxpc2lvbnMocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplKTogQXJyYXk8TmdHcmlkSXRlbT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9hbGxvd092ZXJsYXApIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgcmV0dXJuczogQXJyYXk8TmdHcmlkSXRlbT4gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKCFwb3MuY29sKSB7IHBvcy5jb2wgPSAxOyB9XHJcbiAgICAgICAgaWYgKCFwb3Mucm93KSB7IHBvcy5yb3cgPSAxOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnRDb2wgPSBwb3MuY29sO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0Q29sID0gcG9zLmNvbCArIGRpbXMueDtcclxuICAgICAgICBjb25zdCB0b3BSb3cgPSBwb3Mucm93O1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbVJvdyA9IHBvcy5yb3cgKyBkaW1zLnk7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zSW5HcmlkLmZvckVhY2goKGl0ZW1JZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW06IE5nR3JpZEl0ZW0gPSB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXNJbkdyaWQuZGVsZXRlKGl0ZW1JZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1MZWZ0Q29sID0gaXRlbS5jb2w7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1SaWdodENvbCA9IGl0ZW0uY29sICsgaXRlbS5zaXpleDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbVRvcFJvdyA9IGl0ZW0ucm93O1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtQm90dG9tUm93ID0gaXRlbS5yb3cgKyBpdGVtLnNpemV5O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2l0aGluQ29sdW1ucyA9IGxlZnRDb2wgPCBpdGVtUmlnaHRDb2wgJiYgaXRlbUxlZnRDb2wgPCByaWdodENvbDtcclxuICAgICAgICAgICAgY29uc3Qgd2l0aGluUm93cyA9IHRvcFJvdyA8IGl0ZW1Cb3R0b21Sb3cgJiYgaXRlbVRvcFJvdyA8IGJvdHRvbVJvdztcclxuXHJcbiAgICAgICAgICAgIGlmICh3aXRoaW5Db2x1bW5zICYmIHdpdGhpblJvd3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0dXJucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maXhHcmlkQ29sbGlzaW9ucyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb2xsaXNpb25zOiBBcnJheTxOZ0dyaWRJdGVtPiA9IHRoaXMuX2dldENvbGxpc2lvbnMocG9zLCBkaW1zKTtcclxuICAgICAgICBpZiAoY29sbGlzaW9ucy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbGxpc2lvbiBvZiBjb2xsaXNpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUZyb21HcmlkKGNvbGxpc2lvbik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtRGltczogTmdHcmlkSXRlbVNpemUgPSBjb2xsaXNpb24uZ2V0U2l6ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtUG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSBjb2xsaXNpb24uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdJdGVtUG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSB7IGNvbDogaXRlbVBvcy5jb2wsIHJvdzogaXRlbVBvcy5yb3cgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb2xsaXNpb25GaXhEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0l0ZW1Qb3Mucm93ID0gcG9zLnJvdyArIGRpbXMueTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWShuZXdJdGVtUG9zLCBpdGVtRGltcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtUG9zLmNvbCA9IHBvcy5jb2wgKyBkaW1zLng7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SXRlbVBvcy5yb3cgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbGxpc2lvbkZpeERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdJdGVtUG9zLmNvbCA9IHBvcy5jb2wgKyBkaW1zLng7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1gobmV3SXRlbVBvcywgaXRlbURpbXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SXRlbVBvcy5jb2wgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1Qb3Mucm93ID0gcG9zLnJvdyArIGRpbXMueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29sbGlzaW9uLnNldEdyaWRQb3NpdGlvbihuZXdJdGVtUG9zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2ZpeEdyaWRDb2xsaXNpb25zKG5ld0l0ZW1Qb3MsIGl0ZW1EaW1zKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkVG9HcmlkKGNvbGxpc2lvbik7XHJcbiAgICAgICAgICAgIGNvbGxpc2lvbi5vbkNhc2NhZGVFdmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZml4R3JpZENvbGxpc2lvbnMocG9zLCBkaW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYXNjYWRlR3JpZChwb3M/OiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM/OiBOZ0dyaWRJdGVtU2l6ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5fYWxsb3dPdmVybGFwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFwb3MgIT09ICFkaW1zKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjYXNjYWRlIHdpdGggb25seSBwb3NpdGlvbiBhbmQgbm90IGRpbWVuc2lvbnMnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZyAmJiB0aGlzLl9kcmFnZ2luZ0l0ZW0gJiYgIXBvcyAmJiAhZGltcykge1xyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLl9kcmFnZ2luZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGRpbXMgPSB0aGlzLl9kcmFnZ2luZ0l0ZW0uZ2V0U2l6ZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Jlc2l6aW5nICYmIHRoaXMuX3Jlc2l6aW5nSXRlbSAmJiAhcG9zICYmICFkaW1zKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgZGltcyA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaXRlbXNJbkdyaWQ6IE5nR3JpZEl0ZW1bXSA9IEFycmF5LmZyb20odGhpcy5faXRlbXNJbkdyaWQsIChpdGVtSWQ6IHN0cmluZykgPT4gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCkpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuY2FzY2FkZSkge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgaXRlbXNJbkdyaWQgPSBpdGVtc0luR3JpZC5zb3J0KE5nR3JpZEhlbHBlci5zb3J0SXRlbXNCeVBvc2l0aW9uVmVydGljYWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG93ZXN0Um93UGVyQ29sdW1uOiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zSW5HcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNGaXhlZCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EaW1zOiBOZ0dyaWRJdGVtU2l6ZSA9IGl0ZW0uZ2V0U2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Qb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IGl0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsb3dlc3RSb3dGb3JJdGVtOiBudW1iZXIgPSBsb3dlc3RSb3dQZXJDb2x1bW4uZ2V0KGl0ZW1Qb3MuY29sKSB8fCAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDwgaXRlbURpbXMueDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvd2VzdFJvd0ZvckNvbHVtbiA9IGxvd2VzdFJvd1BlckNvbHVtbi5nZXQoaXRlbVBvcy5jb2wgKyBpKSB8fCAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RSb3dGb3JJdGVtID0gTWF0aC5tYXgobG93ZXN0Um93Rm9yQ29sdW1uLCBsb3dlc3RSb3dGb3JJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRDb2wgPSBpdGVtUG9zLmNvbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodENvbCA9IGl0ZW1Qb3MuY29sICsgaXRlbURpbXMueDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyAmJiBkaW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhpbkNvbHVtbnMgPSByaWdodENvbCA+IHBvcy5jb2wgJiYgbGVmdENvbCA8IChwb3MuY29sICsgZGltcy54KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXRoaW5Db2x1bW5zKSB7ICAgICAgICAgIC8vIElmIG91ciBlbGVtZW50IGlzIGluIG9uZSBvZiB0aGUgaXRlbSdzIGNvbHVtbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvb21BYm92ZUl0ZW0gPSBpdGVtRGltcy55IDw9IChwb3Mucm93IC0gbG93ZXN0Um93Rm9ySXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyb29tQWJvdmVJdGVtKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJdGVtIGNhbid0IGZpdCBhYm92ZSBvdXIgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFJvd0Zvckl0ZW0gPSBNYXRoLm1heChsb3dlc3RSb3dGb3JJdGVtLCBwb3Mucm93ICsgZGltcy55KTsgICAvLyBTZXQgdGhlIGxvd2VzdCByb3cgdG8gYmUgYmVsb3cgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSB7IGNvbDogaXRlbVBvcy5jb2wsIHJvdzogbG93ZXN0Um93Rm9ySXRlbSB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBXaGF0IGlmIGl0J3Mgbm90IHdpdGhpbiBib3VuZHMgWT9cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0Um93Rm9ySXRlbSAhPSBpdGVtUG9zLnJvdyAmJiB0aGlzLl9pc1dpdGhpbkJvdW5kc1kobmV3UG9zLCBpdGVtRGltcykpIHsgLy8gSWYgdGhlIGl0ZW0gaXMgbm90IGFscmVhZHkgb24gdGhpcyByb3cgbW92ZSBpdCB1cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0R3JpZFBvc2l0aW9uKG5ld1Bvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9uQ2FzY2FkZUV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZFRvR3JpZChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtRGltcy54OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0Um93UGVyQ29sdW1uLnNldChpdGVtUG9zLmNvbCArIGksIGxvd2VzdFJvd0Zvckl0ZW0gKyBpdGVtRGltcy55KTsgLy8gVXBkYXRlIHRoZSBsb3dlc3Qgcm93IHRvIGJlIGJlbG93IHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICBpdGVtc0luR3JpZCA9IGl0ZW1zSW5HcmlkLnNvcnQoTmdHcmlkSGVscGVyLnNvcnRJdGVtc0J5UG9zaXRpb25Ib3Jpem9udGFsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvd2VzdENvbHVtblBlclJvdzogTWFwPG51bWJlciwgbnVtYmVyPiA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0luR3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EaW1zOiBOZ0dyaWRJdGVtU2l6ZSA9IGl0ZW0uZ2V0U2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Qb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IGl0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsb3dlc3RDb2x1bW5Gb3JJdGVtOiBudW1iZXIgPSBsb3dlc3RDb2x1bW5QZXJSb3cuZ2V0KGl0ZW1Qb3Mucm93KSB8fCAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDwgaXRlbURpbXMueTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb3dlc3RPZmZzZXRDb2x1bW46IG51bWJlciA9IGxvd2VzdENvbHVtblBlclJvdy5nZXQoaXRlbVBvcy5yb3cgKyBpKSB8fCAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RDb2x1bW5Gb3JJdGVtID0gTWF0aC5tYXgobG93ZXN0T2Zmc2V0Q29sdW1uLCBsb3dlc3RDb2x1bW5Gb3JJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcFJvdyA9IGl0ZW1Qb3Mucm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbVJvdyA9IGl0ZW1Qb3Mucm93ICsgaXRlbURpbXMueTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyAmJiBkaW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhpblJvd3MgPSBib3R0b21Sb3cgPiBwb3MuY29sICYmIHRvcFJvdyA8IChwb3MuY29sICsgZGltcy54KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXRoaW5Sb3dzKSB7ICAgICAgICAgIC8vIElmIG91ciBlbGVtZW50IGlzIGluIG9uZSBvZiB0aGUgaXRlbSdzIHJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvb21OZXh0VG9JdGVtID0gaXRlbURpbXMueCA8PSAocG9zLmNvbCAtIGxvd2VzdENvbHVtbkZvckl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcm9vbU5leHRUb0l0ZW0pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJdGVtIGNhbid0IGZpdCBuZXh0IHRvIG91ciBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0Q29sdW1uRm9ySXRlbSA9IE1hdGgubWF4KGxvd2VzdENvbHVtbkZvckl0ZW0sIHBvcy5jb2wgKyBkaW1zLngpOyAgLy8gU2V0IHRoZSBsb3dlc3QgY29sIHRvIGJlIHRoZSBvdGhlciBzaWRlIG9mIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvczogTmdHcmlkSXRlbVBvc2l0aW9uID0geyBjb2w6IGxvd2VzdENvbHVtbkZvckl0ZW0sIHJvdzogaXRlbVBvcy5yb3cgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvd2VzdENvbHVtbkZvckl0ZW0gIT0gaXRlbVBvcy5jb2wgJiYgdGhpcy5faXNXaXRoaW5Cb3VuZHNYKG5ld1BvcywgaXRlbURpbXMpKSB7IC8vIElmIHRoZSBpdGVtIGlzIG5vdCBhbHJlYWR5IG9uIHRoaXMgY29sIG1vdmUgaXQgdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUdyaWQoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNldEdyaWRQb3NpdGlvbihuZXdQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vbkNhc2NhZGVFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRUb0dyaWQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaXRlbURpbXMueTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdENvbHVtblBlclJvdy5zZXQoaXRlbVBvcy5yb3cgKyBpLCBsb3dlc3RDb2x1bW5Gb3JJdGVtICsgaXRlbURpbXMueCk7IC8vIFVwZGF0ZSB0aGUgbG93ZXN0IGNvbCB0byBiZSBiZWxvdyB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeEdyaWRQb3NpdGlvbihwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG4gICAgICAgIGlmICghdGhpcy5faGFzR3JpZENvbGxpc2lvbihwb3MsIGRpbXMpKSByZXR1cm4gcG9zO1xyXG5cclxuICAgICAgICBjb25zdCBtYXhSb3cgPSB0aGlzLl9tYXhSb3dzID09PSAwID8gdGhpcy5fZ2V0TWF4Um93KCkgOiB0aGlzLl9tYXhSb3dzO1xyXG4gICAgICAgIGNvbnN0IG1heENvbCA9IHRoaXMuX21heENvbHMgPT09IDAgPyB0aGlzLl9nZXRNYXhDb2woKSA6IHRoaXMuX21heENvbHM7XHJcbiAgICAgICAgY29uc3QgbmV3UG9zID0ge1xyXG4gICAgICAgICAgICBjb2w6IHBvcy5jb2wsXHJcbiAgICAgICAgICAgIHJvdzogcG9zLnJvdyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXRlbUZpeERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICBmaXhMb29wOlxyXG4gICAgICAgICAgICBmb3IgKDsgbmV3UG9zLmNvbCA8PSBtYXhSb3c7KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtc0luUGF0aCA9IHRoaXMuX2dldEl0ZW1zSW5WZXJ0aWNhbFBhdGgobmV3UG9zLCBkaW1zLCBuZXdQb3Mucm93KTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0Um93ID0gbmV3UG9zLnJvdztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zSW5QYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucm93IC0gbmV4dFJvdyA+PSBkaW1zLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zLnJvdyA9IG5leHRSb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGZpeExvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXh0Um93ID0gaXRlbS5yb3cgKyBpdGVtLnNpemV5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtYXhSb3cgLSBuZXh0Um93ID49IGRpbXMueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvcy5yb3cgPSBuZXh0Um93O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrIGZpeExvb3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3UG9zLmNvbCA9IE1hdGgubWF4KG5ld1Bvcy5jb2wgKyAxLCBNYXRoLm1pbi5hcHBseShNYXRoLCBpdGVtc0luUGF0aC5tYXAoKGl0ZW0pID0+IGl0ZW0uY29sICsgZGltcy54KSkpO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zLnJvdyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2l0ZW1GaXhEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBmaXhMb29wOlxyXG4gICAgICAgICAgICBmb3IgKDsgbmV3UG9zLnJvdyA8PSBtYXhSb3c7KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtc0luUGF0aCA9IHRoaXMuX2dldEl0ZW1zSW5Ib3Jpem9udGFsUGF0aChuZXdQb3MsIGRpbXMsIG5ld1Bvcy5jb2wpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRDb2wgPSBuZXdQb3MuY29sO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXNJblBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb2wgLSBuZXh0Q29sID49IGRpbXMueCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3MuY29sID0gbmV4dENvbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgZml4TG9vcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRDb2wgPSBpdGVtLmNvbCArIGl0ZW0uc2l6ZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1heENvbCAtIG5leHRDb2wgPj0gZGltcy54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zLmNvbCA9IG5leHRDb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWsgZml4TG9vcDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBuZXdQb3Mucm93ID0gTWF0aC5tYXgobmV3UG9zLnJvdyArIDEsIE1hdGgubWluLmFwcGx5KE1hdGgsIGl0ZW1zSW5QYXRoLm1hcCgoaXRlbSkgPT4gaXRlbS5yb3cgKyBkaW1zLnkpKSk7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3MuY29sID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1BvcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRJdGVtc0luSG9yaXpvbnRhbFBhdGgocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplLCBzdGFydENvbHVtbjogbnVtYmVyID0gMCk6IE5nR3JpZEl0ZW1bXSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXNJblBhdGg6IE5nR3JpZEl0ZW1bXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHRvcFJvdzogbnVtYmVyID0gcG9zLnJvdyArIGRpbXMueSAtIDE7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zSW5HcmlkLmZvckVhY2goKGl0ZW1JZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY29sICsgaXRlbS5zaXpleCAtIDEgPCBzdGFydENvbHVtbikgeyByZXR1cm47IH0gICAgLy8gSXRlbSBmYWxscyBhZnRlciBzdGFydCBjb2x1bW5cclxuICAgICAgICAgICAgaWYgKGl0ZW0ucm93ID4gdG9wUm93KSB7IHJldHVybjsgfSAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXRlbSBmYWxscyBhYm92ZSBwYXRoXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnJvdyArIGl0ZW0uc2l6ZXkgLSAxIDwgcG9zLnJvdykgeyByZXR1cm47IH0gICAgICAgIC8vIEl0ZW0gZmFsbHMgYmVsb3cgcGF0aFxyXG4gICAgICAgICAgICBpdGVtc0luUGF0aC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXNJblBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0SXRlbXNJblZlcnRpY2FsUGF0aChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIHN0YXJ0Um93OiBudW1iZXIgPSAwKTogTmdHcmlkSXRlbVtdIHtcclxuICAgICAgICBjb25zdCBpdGVtc0luUGF0aDogTmdHcmlkSXRlbVtdID0gW107XHJcbiAgICAgICAgY29uc3QgcmlnaHRDb2w6IG51bWJlciA9IHBvcy5jb2wgKyBkaW1zLnggLSAxO1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtc0luR3JpZC5mb3JFYWNoKChpdGVtSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnJvdyArIGl0ZW0uc2l6ZXkgLSAxIDwgc3RhcnRSb3cpIHsgcmV0dXJuOyB9ICAgLy8gSXRlbSBmYWxscyBhYm92ZSBzdGFydCByb3dcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY29sID4gcmlnaHRDb2wpIHsgcmV0dXJuOyB9ICAgICAgICAgICAgICAgICAgICAvLyBJdGVtIGZhbGxzIGFmdGVyIHBhdGhcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY29sICsgaXRlbS5zaXpleCAtIDEgPCBwb3MuY29sKSB7IHJldHVybjsgfSAgICAvLyBJdGVtIGZhbGxzIGJlZm9yZSBwYXRoXHJcbiAgICAgICAgICAgIGl0ZW1zSW5QYXRoLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtc0luUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc1dpdGhpbkJvdW5kc1gocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4Q29scyA9PSAwIHx8IChhbGxvd0V4Y2Vzc2l2ZUl0ZW1zICYmIHBvcy5jb2wgPT0gMSkgfHwgKHBvcy5jb2wgKyBkaW1zLnggLSAxKSA8PSB0aGlzLl9tYXhDb2xzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeFBvc1RvQm91bmRzWChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNYKHBvcywgZGltcykpIHtcclxuICAgICAgICAgICAgcG9zLmNvbCA9IE1hdGgubWF4KHRoaXMuX21heENvbHMgLSAoZGltcy54IC0gMSksIDEpO1xyXG4gICAgICAgICAgICBwb3Mucm93ICsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeFNpemVUb0JvdW5kc1gocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplKTogTmdHcmlkSXRlbVNpemUge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNYKHBvcywgZGltcykpIHtcclxuICAgICAgICAgICAgZGltcy54ID0gTWF0aC5tYXgodGhpcy5fbWF4Q29scyAtIChwb3MuY29sIC0gMSksIDEpO1xyXG4gICAgICAgICAgICBkaW1zLnkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNXaXRoaW5Cb3VuZHNZKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSwgYWxsb3dFeGNlc3NpdmVJdGVtczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heFJvd3MgPT0gMCB8fCAoYWxsb3dFeGNlc3NpdmVJdGVtcyAmJiBwb3Mucm93ID09IDEpIHx8IChwb3Mucm93ICsgZGltcy55IC0gMSkgPD0gdGhpcy5fbWF4Um93cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maXhQb3NUb0JvdW5kc1kocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplKTogTmdHcmlkSXRlbVBvc2l0aW9uIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWShwb3MsIGRpbXMpKSB7XHJcbiAgICAgICAgICAgIHBvcy5yb3cgPSBNYXRoLm1heCh0aGlzLl9tYXhSb3dzIC0gKGRpbXMueSAtIDEpLCAxKTtcclxuICAgICAgICAgICAgcG9zLmNvbCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeFNpemVUb0JvdW5kc1kocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplKTogTmdHcmlkSXRlbVNpemUge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHBvcywgZGltcykpIHtcclxuICAgICAgICAgICAgZGltcy55ID0gTWF0aC5tYXgodGhpcy5fbWF4Um93cyAtIChwb3Mucm93IC0gMSksIDEpO1xyXG4gICAgICAgICAgICBkaW1zLngrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNXaXRoaW5Cb3VuZHMocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNXaXRoaW5Cb3VuZHNYKHBvcywgZGltcywgYWxsb3dFeGNlc3NpdmVJdGVtcykgJiYgdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHBvcywgZGltcywgYWxsb3dFeGNlc3NpdmVJdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZml4UG9zVG9Cb3VuZHMocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplKTogTmdHcmlkSXRlbVBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZml4UG9zVG9Cb3VuZHNYKHRoaXMuX2ZpeFBvc1RvQm91bmRzWShwb3MsIGRpbXMpLCBkaW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maXhTaXplVG9Cb3VuZHMocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplKTogTmdHcmlkSXRlbVNpemUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXhTaXplVG9Cb3VuZHNYKHBvcywgdGhpcy5fZml4U2l6ZVRvQm91bmRzWShwb3MsIGRpbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hZGRUb0dyaWQoaXRlbTogTmdHcmlkSXRlbSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IGl0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZGltczogTmdHcmlkSXRlbVNpemUgPSBpdGVtLmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0dyaWRDb2xsaXNpb24ocG9zLCBkaW1zKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9maXhHcmlkQ29sbGlzaW9ucyhwb3MsIGRpbXMpO1xyXG4gICAgICAgICAgICBwb3MgPSBpdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FsbG93T3ZlcmxhcCkge1xyXG4gICAgICAgICAgICBpdGVtLnpJbmRleCA9IHRoaXMuX2xhc3RaVmFsdWUrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zSW5HcmlkLmFkZChpdGVtLnVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVtb3ZlRnJvbUdyaWQoaXRlbTogTmdHcmlkSXRlbSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zSW5HcmlkLmRlbGV0ZShpdGVtLnVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlU2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG1heENvbDogbnVtYmVyID0gdGhpcy5fZ2V0TWF4Q29sKCk7XHJcbiAgICAgICAgbGV0IG1heFJvdzogbnVtYmVyID0gdGhpcy5fZ2V0TWF4Um93KCk7XHJcblxyXG4gICAgICAgIGlmIChtYXhDb2wgIT0gdGhpcy5fY3VyTWF4Q29sIHx8IG1heFJvdyAhPSB0aGlzLl9jdXJNYXhSb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyTWF4Q29sID0gbWF4Q29sO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJNYXhSb3cgPSBtYXhSb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnMTAwJScpOy8vKG1heENvbCAqICh0aGlzLmNvbFdpZHRoICsgdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkpKydweCcpO1xyXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudEJhc2VkRHluYW1pY1Jvd0hlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgKG1heFJvdyAqICh0aGlzLnJvd0hlaWdodCArIHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b20pKSArICdweCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRNYXhSb3coKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBpdGVtc1Jvd3M6IG51bWJlcltdID0gQXJyYXkuZnJvbSh0aGlzLl9pdGVtc0luR3JpZCwgKGl0ZW1JZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucm93ICsgaXRlbS5zaXpleSAtIDE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBpdGVtc1Jvd3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE1heENvbCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zQ29sczogbnVtYmVyW10gPSBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zSW5HcmlkLCAoaXRlbUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiAwO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jb2wgKyBpdGVtLnNpemV4IC0gMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGl0ZW1zQ29scyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TW91c2VQb3NpdGlvbihlOiBhbnkpOiBOZ0dyaWRSYXdQb3NpdGlvbiB7XHJcbiAgICAgICAgaWYgKCgoPGFueT53aW5kb3cpLlRvdWNoRXZlbnQgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHx8IChlLnRvdWNoZXMgfHwgZS5jaGFuZ2VkVG91Y2hlcykpIHtcclxuICAgICAgICAgICAgZSA9IGUudG91Y2hlcy5sZW5ndGggPiAwID8gZS50b3VjaGVzWzBdIDogZS5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZlBvczogYW55ID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBsZXQgbGVmdDogbnVtYmVyID0gZS5jbGllbnRYIC0gcmVmUG9zLmxlZnQ7XHJcbiAgICAgICAgbGV0IHRvcDogbnVtYmVyID0gZS5jbGllbnRZIC0gcmVmUG9zLnRvcDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FzY2FkZSA9PSAnZG93bicpIHRvcCA9IHJlZlBvcy50b3AgKyByZWZQb3MuaGVpZ2h0IC0gZS5jbGllbnRZO1xyXG4gICAgICAgIGlmICh0aGlzLmNhc2NhZGUgPT0gJ3JpZ2h0JykgbGVmdCA9IHJlZlBvcy5sZWZ0ICsgcmVmUG9zLndpZHRoIC0gZS5jbGllbnRYO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nICYmIHRoaXMuX3pvb21PbkRyYWcpIHtcclxuICAgICAgICAgICAgbGVmdCAqPSAyO1xyXG4gICAgICAgICAgICB0b3AgKj0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdG9wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRBYnNvbHV0ZU1vdXNlUG9zaXRpb24oZTogYW55KTogTmdHcmlkUmF3UG9zaXRpb24ge1xyXG4gICAgICAgIGlmICgoKDxhbnk+d2luZG93KS5Ub3VjaEV2ZW50ICYmIGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB8fCAoZS50b3VjaGVzIHx8IGUuY2hhbmdlZFRvdWNoZXMpKSB7XHJcbiAgICAgICAgICAgIGUgPSBlLnRvdWNoZXMubGVuZ3RoID4gMCA/IGUudG91Y2hlc1swXSA6IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgIHRvcDogZS5jbGllbnRZXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb250YWluZXJDb2x1bW5zKCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgbWF4V2lkdGg6IG51bWJlciA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgICBjb25zdCBpdGVtV2lkdGg6IG51bWJlciA9IHRoaXMuY29sV2lkdGggKyB0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0O1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1heFdpZHRoIC8gaXRlbVdpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb250YWluZXJSb3dzKCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgbWF4SGVpZ2h0OiBudW1iZXIgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLm1hcmdpblRvcCAtIHRoaXMubWFyZ2luQm90dG9tO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1heEhlaWdodCAvICh0aGlzLnJvd0hlaWdodCArIHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b20pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRTY3JlZW5NYXJnaW4oKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBtYXhXaWR0aDogbnVtYmVyID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1XaWR0aDogbnVtYmVyID0gdGhpcy5jb2xXaWR0aCArIHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKG1heFdpZHRoIC0gKHRoaXMuX21heENvbHMgKiBpdGVtV2lkdGgpKSAvIDIpOztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRJdGVtRnJvbVBvc2l0aW9uKHBvc2l0aW9uOiBOZ0dyaWRSYXdQb3NpdGlvbik6IE5nR3JpZEl0ZW0ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zSW5HcmlkLCAoaXRlbUlkOiBzdHJpbmcpID0+IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpKS5maW5kKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2l6ZTogTmdHcmlkSXRlbURpbWVuc2lvbnMgPSBpdGVtLmdldERpbWVuc2lvbnMoKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zOiBOZ0dyaWRSYXdQb3NpdGlvbiA9IGl0ZW0uZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbi5sZWZ0ID49IHBvcy5sZWZ0ICYmIHBvc2l0aW9uLmxlZnQgPCAocG9zLmxlZnQgKyBzaXplLndpZHRoKSAmJlxyXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgPj0gcG9zLnRvcCAmJiBwb3NpdGlvbi50b3AgPCAocG9zLnRvcCArIHNpemUuaGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVQbGFjZWhvbGRlcihpdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSBpdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRpbXM6IE5nR3JpZEl0ZW1TaXplID0gaXRlbS5nZXRTaXplKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ0dyaWRQbGFjZWhvbGRlcik7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPE5nR3JpZFBsYWNlaG9sZGVyPiA9IGl0ZW0uY29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZiA9IGNvbXBvbmVudFJlZjtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlcjogTmdHcmlkUGxhY2Vob2xkZXIgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIucmVnaXN0ZXJHcmlkKHRoaXMpO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyLnNldENhc2NhZGVNb2RlKHRoaXMuY2FzY2FkZSk7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIuc2V0R3JpZFBvc2l0aW9uKHsgY29sOiBwb3MuY29sLCByb3c6IHBvcy5yb3cgfSk7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIuc2V0U2l6ZSh7IHg6IGRpbXMueCwgeTogZGltcy55IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VtaXRPbkl0ZW1DaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbU91dHB1dDogYW55W10gPSBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zSW5HcmlkKVxyXG4gICAgICAgICAgICAubWFwKChpdGVtSWQ6IHN0cmluZykgPT4gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IE5nR3JpZEl0ZW0pID0+ICEhaXRlbSlcclxuICAgICAgICAgICAgLm1hcCgoaXRlbTogTmdHcmlkSXRlbSkgPT4gaXRlbS5nZXRFdmVudE91dHB1dCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkl0ZW1DaGFuZ2UuZW1pdChpdGVtT3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kZWZpbmVMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRNb3VzZW1vdmUkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KGRvY3VtZW50LCAnbW91c2Vtb3ZlJyk7XHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRNb3VzZXVwJCA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ21vdXNldXAnKTtcclxuICAgICAgICB0aGlzLl9tb3VzZWRvd24kID0gZnJvbUV2ZW50KGVsZW1lbnQsICdtb3VzZWRvd24nKTtcclxuICAgICAgICB0aGlzLl9tb3VzZW1vdmUkID0gZnJvbUV2ZW50KGVsZW1lbnQsICdtb3VzZW1vdmUnKTtcclxuICAgICAgICB0aGlzLl9tb3VzZXVwJCA9IGZyb21FdmVudChlbGVtZW50LCAnbW91c2V1cCcpO1xyXG4gICAgICAgIHRoaXMuX3RvdWNoc3RhcnQkID0gZnJvbUV2ZW50KGVsZW1lbnQsICd0b3VjaHN0YXJ0Jyk7XHJcbiAgICAgICAgdGhpcy5fdG91Y2htb3ZlJCA9IGZyb21FdmVudChlbGVtZW50LCAndG91Y2htb3ZlJyk7XHJcbiAgICAgICAgdGhpcy5fdG91Y2hlbmQkID0gZnJvbUV2ZW50KGVsZW1lbnQsICd0b3VjaGVuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VuYWJsZUxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fZW5hYmxlZExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VuYWJsZU1vdXNlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc1RvdWNoRGV2aWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZW5hYmxlVG91Y2hMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VuYWJsZWRMaXN0ZW5lciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZUxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YnM6IFN1YnNjcmlwdGlvbikgPT4gc3Vicy51bnN1YnNjcmliZSgpKTtcclxuICAgICAgICB0aGlzLl9lbmFibGVkTGlzdGVuZXIgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc1RvdWNoRGV2aWNlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMDtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5hYmxlVG91Y2hMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hzdGFydFN1YnMgPSB0aGlzLl90b3VjaHN0YXJ0JC5zdWJzY3JpYmUoKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMubW91c2VEb3duRXZlbnRIYW5kbGVyKGUpKTtcclxuICAgICAgICBjb25zdCB0b3VjaG1vdmVTdWJzID0gdGhpcy5fdG91Y2htb3ZlJC5zdWJzY3JpYmUoKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKGUpKTtcclxuICAgICAgICBjb25zdCB0b3VjaGVuZFN1YnMgPSB0aGlzLl90b3VjaGVuZCQuc3Vic2NyaWJlKChlOiBUb3VjaEV2ZW50KSA9PiB0aGlzLm1vdXNlVXBFdmVudEhhbmRsZXIoZSkpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgICAgICAgIHRvdWNoc3RhcnRTdWJzLFxyXG4gICAgICAgICAgICB0b3VjaG1vdmVTdWJzLFxyXG4gICAgICAgICAgICB0b3VjaGVuZFN1YnNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VuYWJsZU1vdXNlTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50TW91c2Vtb3ZlU3VicyA9IHRoaXMuX2RvY3VtZW50TW91c2Vtb3ZlJC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKGUpKTtcclxuICAgICAgICBjb25zdCBkb2N1bWVudE1vdXNldXBTdWJzID0gdGhpcy5fZG9jdW1lbnRNb3VzZXVwJC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMubW91c2VVcEV2ZW50SGFuZGxlcihlKSk7XHJcbiAgICAgICAgY29uc3QgbW91c2Vkb3duU3VicyA9IHRoaXMuX21vdXNlZG93biQuc3Vic2NyaWJlKChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLm1vdXNlRG93bkV2ZW50SGFuZGxlcihlKSk7XHJcbiAgICAgICAgY29uc3QgbW91c2Vtb3ZlU3VicyA9IHRoaXMuX21vdXNlbW92ZSQuc3Vic2NyaWJlKChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLm1vdXNlTW92ZUV2ZW50SGFuZGxlcihlKSk7XHJcbiAgICAgICAgY29uc3QgbW91c2V1cFN1YnMgPSB0aGlzLl9tb3VzZXVwJC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMubW91c2VVcEV2ZW50SGFuZGxlcihlKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgICAgICAgZG9jdW1lbnRNb3VzZW1vdmVTdWJzLFxyXG4gICAgICAgICAgICBkb2N1bWVudE1vdXNldXBTdWJzLFxyXG4gICAgICAgICAgICBtb3VzZWRvd25TdWJzLFxyXG4gICAgICAgICAgICBtb3VzZW1vdmVTdWJzLFxyXG4gICAgICAgICAgICBtb3VzZXVwU3Vic1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdHcmlkIH0gZnJvbSAnLi9OZ0dyaWQnO1xyXG5pbXBvcnQgeyBOZ0dyaWRJdGVtQ29uZmlnLCBOZ0dyaWRJdGVtRXZlbnQsIE5nR3JpZEl0ZW1Qb3NpdGlvbiwgTmdHcmlkSXRlbVNpemUsIE5nR3JpZFJhd1Bvc2l0aW9uLCBOZ0dyaWRJdGVtRGltZW5zaW9ucywgUmVzaXplSGFuZGxlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JTmdHcmlkJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEV2ZW50RW1pdHRlciwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDb250YWluZXJSZWYsIE91dHB1dCwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tuZ0dyaWRJdGVtXScsXHJcbiAgICBpbnB1dHM6IFsnY29uZmlnOiBuZ0dyaWRJdGVtJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nR3JpZEl0ZW0gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcbiAgICAvLyBFdmVudCBFbWl0dGVyc1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KGZhbHNlKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZzogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnU3RvcDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnQW55OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemVTdG9wOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZUFueTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25DaGFuZ2VTdGFydDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlU3RvcDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25DaGFuZ2VBbnk6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG5nR3JpZEl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtQ29uZmlnPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUNvbmZpZz4oKTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IGNvbmZpZ1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgQ09OU1RfREVGQVVMVF9DT05GSUc6IE5nR3JpZEl0ZW1Db25maWcgPSB7XHJcbiAgICAgICAgdWlkOiBudWxsLFxyXG4gICAgICAgIGNvbDogMSxcclxuICAgICAgICByb3c6IDEsXHJcbiAgICAgICAgc2l6ZXg6IDEsXHJcbiAgICAgICAgc2l6ZXk6IDEsXHJcbiAgICAgICAgZHJhZ0hhbmRsZTogbnVsbCxcclxuICAgICAgICByZXNpemVIYW5kbGU6IG51bGwsXHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICByZXNpemFibGU6IHRydWUsXHJcbiAgICAgICAgYm9yZGVyU2l6ZTogMjUsXHJcbiAgICAgICAgcmVzaXplRGlyZWN0aW9uczogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGlzRml4ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0RyYWdnYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgaXNSZXNpemFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIG1pbldpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB1aWQ6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXNcclxuICAgIHByaXZhdGUgX3BheWxvYWQ6IGFueTtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRQb3NpdGlvbjogTmdHcmlkSXRlbVBvc2l0aW9uID0geyBjb2w6IDEsIHJvdzogMSB9O1xyXG4gICAgcHJpdmF0ZSBfc2l6ZTogTmdHcmlkSXRlbVNpemUgPSB7IHg6IDEsIHk6IDEgfTtcclxuICAgIHByaXZhdGUgX2NvbmZpZyA9IE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUc7XHJcbiAgICBwcml2YXRlIF91c2VyQ29uZmlnID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2RyYWdIYW5kbGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3Jlc2l6ZUhhbmRsZTogUmVzaXplSGFuZGxlO1xyXG4gICAgcHJpdmF0ZSBfYm9yZGVyU2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZWxlbVdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9lbGVtSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9lbGVtTGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZWxlbVRvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYWRkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2RpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG4gICAgcHJpdmF0ZSBfY2FzY2FkZU1vZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX21heENvbHM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9taW5Db2xzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbWF4Um93czogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX21pblJvd3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9yZXNpemVEaXJlY3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfekluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHNldCB6SW5kZXgoekluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgekluZGV4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMuX3pJbmRleCA9IHpJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgekluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3pJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBbbmctZ3JpZC1pdGVtXSBoYW5kbGVyXHJcbiAgICBzZXQgY29uZmlnKHY6IE5nR3JpZEl0ZW1Db25maWcpIHtcclxuICAgICAgICB0aGlzLl91c2VyQ29uZmlnID0gdjtcclxuXHJcbiAgICAgICAgY29uc3QgY29uZmlnT2JqZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRywgdik7XHJcbiAgICAgICAgZm9yIChsZXQgeCBpbiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHKVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnT2JqZWN0W3hdID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBjb25maWdPYmplY3RbeF0gPSBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHW3hdO1xyXG5cclxuICAgICAgICB0aGlzLnNldENvbmZpZyhjb25maWdPYmplY3QpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdXNlckNvbmZpZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaWZmZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlmZmVyID0gdGhpcy5fZGlmZmVycy5maW5kKHRoaXMuX3VzZXJDb25maWcpLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9kaWZmZXIuZGlmZih0aGlzLl91c2VyQ29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fYWRkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9uZ0dyaWQuYWRkSXRlbSh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZS54O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaXpleSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplLnk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByb3coKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uLnJvdztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudENvbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50Um93KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2RpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcclxuICAgICAgICBwcml2YXRlIF9uZ0VsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBfbmdHcmlkOiBOZ0dyaWQsXHJcbiAgICAgICAgcHVibGljIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIG9uUmVzaXplU3RhcnRFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemVTdGFydC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VTdGFydC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemVBbnkuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplU3RvcEV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZVN0b3AuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZUFueS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlU3RvcC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlRXZlbnQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydEV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uRHJhZ0FueS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlU3RhcnQuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFueS5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRyYWdFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG4gICAgICAgIHRoaXMub25EcmFnLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25EcmFnQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFueS5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRyYWdTdG9wRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuICAgICAgICB0aGlzLm9uRHJhZ1N0b3AuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdBbnkuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVN0b3AuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFueS5lbWl0KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNvbmZpZ0NoYW5nZUV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25DYXNjYWRlRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNvbmZpZ0NoYW5nZUV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2dyaWQtaXRlbScpO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gRm9yY2UgYSBjb25maWcgdXBkYXRlIGluIGNhc2UgdGhlcmUgaXMgbm8gY29uZmlnIGFzc2lnbmVkXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLl91c2VyQ29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICBwdWJsaWMgY2FuRHJhZyhlOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2FibGUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdIYW5kbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZEhhbmRsZSh0aGlzLl9kcmFnSGFuZGxlLCBlLnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZEhhbmRsZShoYW5kbGVTZWxlY3Rvcjogc3RyaW5nLCBzdGFydEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldEVsZW06IGFueSA9IHN0YXJ0RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXRFbGVtICYmIHRhcmdldEVsZW0gIT0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50TWF0Y2hlcyh0YXJnZXRFbGVtLCBoYW5kbGVTZWxlY3RvcikpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldEVsZW0gPSB0YXJnZXRFbGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuUmVzaXplKGU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVzaXphYmxlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZUhhbmRsZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Jlc2l6ZUhhbmRsZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRIYW5kbGUodGhpcy5fcmVzaXplSGFuZGxlLCBlLnRhcmdldCkgPyAnYm90dG9tcmlnaHQnIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9yZXNpemVIYW5kbGUgIT09ICdvYmplY3QnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZURpcmVjdGlvbnMgPSBbICdib3R0b21yaWdodCcsICdib3R0b21sZWZ0JywgJ3RvcHJpZ2h0JywgJ3RvcGxlZnQnLCAncmlnaHQnLCAnbGVmdCcsICdib3R0b20nLCAndG9wJyBdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgcmVzaXplRGlyZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiBpbiB0aGlzLl9yZXNpemVIYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maW5kSGFuZGxlKHRoaXMuX3Jlc2l6ZUhhbmRsZVtkaXJlY3Rpb25dLCBlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JvcmRlclNpemUgPD0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdXNlUG9zOiBOZ0dyaWRSYXdQb3NpdGlvbiA9IHRoaXMuX2dldE1vdXNlUG9zaXRpb24oZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGRpcmVjdGlvbiBvZiB0aGlzLl9yZXNpemVEaXJlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblJlc2l6ZUluRGlyZWN0aW9uKGRpcmVjdGlvbiwgbW91c2VQb3MpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Nb3VzZU1vdmUoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nR3JpZC5hdXRvU3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX25nR3JpZC5yZXNpemVFbmFibGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZURpcmVjdGlvbiA9IHRoaXMuY2FuUmVzaXplKGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJzb3I6IHN0cmluZyA9ICdkZWZhdWx0JztcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzaXplRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcGxlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSAnbndzZS1yZXNpemUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3ByaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tbGVmdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9ICduZXN3LXJlc2l6ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gJ25zLXJlc2l6ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gJ2V3LXJlc2l6ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uZ0dyaWQuZHJhZ0VuYWJsZSAmJiB0aGlzLmNhbkRyYWcoZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9ICdtb3ZlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCBjdXJzb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX25nR3JpZC5kcmFnRW5hYmxlICYmIHRoaXMuY2FuRHJhZyhlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgJ21vdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9hZGRlZCkgdGhpcy5fbmdHcmlkLnJlbW92ZUl0ZW0odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gICAgR2V0dGVyc1xyXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogRWxlbWVudFJlZiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nRWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERyYWdIYW5kbGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZHJhZ0hhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVzaXplSGFuZGxlKCk6IFJlc2l6ZUhhbmRsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc2l6ZUhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGltZW5zaW9ucygpOiBOZ0dyaWRJdGVtRGltZW5zaW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHsgJ3dpZHRoJzogdGhpcy5fZWxlbVdpZHRoLCAnaGVpZ2h0JzogdGhpcy5fZWxlbUhlaWdodCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTaXplKCk6IE5nR3JpZEl0ZW1TaXplIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogTmdHcmlkUmF3UG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB7ICdsZWZ0JzogdGhpcy5fZWxlbUxlZnQsICd0b3AnOiB0aGlzLl9lbGVtVG9wIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEdyaWRQb3NpdGlvbigpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gICAgU2V0dGVyc1xyXG4gICAgcHVibGljIHNldENvbmZpZyhjb25maWc6IE5nR3JpZEl0ZW1Db25maWcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMuX3BheWxvYWQgPSBjb25maWcucGF5bG9hZDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sID0gY29uZmlnLmNvbCA/IGNvbmZpZy5jb2wgOiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHLmNvbDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93ID0gY29uZmlnLnJvdyA/IGNvbmZpZy5yb3cgOiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHLnJvdztcclxuICAgICAgICB0aGlzLl9zaXplLnggPSBjb25maWcuc2l6ZXggPyBjb25maWcuc2l6ZXggOiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHLnNpemV4O1xyXG4gICAgICAgIHRoaXMuX3NpemUueSA9IGNvbmZpZy5zaXpleSA/IGNvbmZpZy5zaXpleSA6IE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcuc2l6ZXk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0hhbmRsZSA9IGNvbmZpZy5kcmFnSGFuZGxlO1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6ZUhhbmRsZSA9IGNvbmZpZy5yZXNpemVIYW5kbGU7XHJcbiAgICAgICAgdGhpcy5fYm9yZGVyU2l6ZSA9IGNvbmZpZy5ib3JkZXJTaXplO1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2FibGUgPSBjb25maWcuZHJhZ2dhYmxlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSZXNpemFibGUgPSBjb25maWcucmVzaXphYmxlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNGaXhlZCA9IGNvbmZpZy5maXhlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLl9yZXNpemVEaXJlY3Rpb25zID0gY29uZmlnLnJlc2l6ZURpcmVjdGlvbnMgfHwgdGhpcy5fbmdHcmlkLnJlc2l6ZURpcmVjdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuX21heENvbHMgPSAhaXNOYU4oY29uZmlnLm1heENvbHMpICYmIGlzRmluaXRlKGNvbmZpZy5tYXhDb2xzKSA/IGNvbmZpZy5tYXhDb2xzIDogMDtcclxuICAgICAgICB0aGlzLl9taW5Db2xzID0gIWlzTmFOKGNvbmZpZy5taW5Db2xzKSAmJiBpc0Zpbml0ZShjb25maWcubWluQ29scykgPyBjb25maWcubWluQ29scyA6IDA7XHJcbiAgICAgICAgdGhpcy5fbWF4Um93cyA9ICFpc05hTihjb25maWcubWF4Um93cykgJiYgaXNGaW5pdGUoY29uZmlnLm1heFJvd3MpID8gY29uZmlnLm1heFJvd3MgOiAwO1xyXG4gICAgICAgIHRoaXMuX21pblJvd3MgPSAhaXNOYU4oY29uZmlnLm1pblJvd3MpICYmIGlzRmluaXRlKGNvbmZpZy5taW5Sb3dzKSA/IGNvbmZpZy5taW5Sb3dzIDogMDtcclxuXHJcbiAgICAgICAgdGhpcy5taW5XaWR0aCA9ICFpc05hTihjb25maWcubWluV2lkdGgpICYmIGlzRmluaXRlKGNvbmZpZy5taW5XaWR0aCkgPyBjb25maWcubWluV2lkdGggOiAwO1xyXG4gICAgICAgIHRoaXMubWluSGVpZ2h0ID0gIWlzTmFOKGNvbmZpZy5taW5IZWlnaHQpICYmIGlzRmluaXRlKGNvbmZpZy5taW5IZWlnaHQpID8gY29uZmlnLm1pbkhlaWdodCA6IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9taW5Db2xzID4gMCAmJiB0aGlzLl9tYXhDb2xzID4gMCAmJiB0aGlzLl9taW5Db2xzID4gdGhpcy5fbWF4Q29scykgdGhpcy5fbWluQ29scyA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuX21pblJvd3MgPiAwICYmIHRoaXMuX21heFJvd3MgPiAwICYmIHRoaXMuX21pblJvd3MgPiB0aGlzLl9tYXhSb3dzKSB0aGlzLl9taW5Sb3dzID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FkZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25nR3JpZC51cGRhdGVJdGVtKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuZml4UmVzaXplKHRoaXMuX3NpemUpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nRG9DaGVjaygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fZGlmZmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hhbmdlczogYW55ID0gdGhpcy5fZGlmZmVyLmRpZmYodGhpcy5fdXNlckNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hhbmdlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNpemUobmV3U2l6ZTogTmdHcmlkSXRlbVNpemUsIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBuZXdTaXplID0gdGhpcy5maXhSZXNpemUobmV3U2l6ZSk7XHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1NpemU7XHJcbiAgICAgICAgaWYgKHVwZGF0ZSkgdGhpcy5fcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgICAgIHRoaXMub25JdGVtQ2hhbmdlLmVtaXQodGhpcy5nZXRFdmVudE91dHB1dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0R3JpZFBvc2l0aW9uKGdyaWRQb3NpdGlvbjogTmdHcmlkSXRlbVBvc2l0aW9uLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBvc2l0aW9uID0gZ3JpZFBvc2l0aW9uO1xyXG4gICAgICAgIGlmICh1cGRhdGUpIHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkl0ZW1DaGFuZ2UuZW1pdCh0aGlzLmdldEV2ZW50T3V0cHV0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFdmVudE91dHB1dCgpOiBOZ0dyaWRJdGVtRXZlbnQge1xyXG4gICAgICAgIHJldHVybiA8TmdHcmlkSXRlbUV2ZW50PntcclxuICAgICAgICAgICAgdWlkOiB0aGlzLnVpZCxcclxuICAgICAgICAgICAgcGF5bG9hZDogdGhpcy5fcGF5bG9hZCxcclxuICAgICAgICAgICAgY29sOiB0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sLFxyXG4gICAgICAgICAgICByb3c6IHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3csXHJcbiAgICAgICAgICAgIHNpemV4OiB0aGlzLl9zaXplLngsXHJcbiAgICAgICAgICAgIHNpemV5OiB0aGlzLl9zaXplLnksXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9lbGVtV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5fZWxlbUhlaWdodCxcclxuICAgICAgICAgICAgbGVmdDogdGhpcy5fZWxlbUxlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5fZWxlbVRvcFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9jYXNjYWRlTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHggKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHkgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIHggKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHkgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB4ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCB5ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1MZWZ0ID0geDtcclxuICAgICAgICB0aGlzLl9lbGVtVG9wID0geTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2FzY2FkZU1vZGUoY2FzY2FkZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FzY2FkZU1vZGUgPSBjYXNjYWRlO1xyXG4gICAgICAgIHN3aXRjaCAoY2FzY2FkZSkge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHRoaXMuX2VsZW1MZWZ0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB0aGlzLl9lbGVtVG9wICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCB0aGlzLl9lbGVtTGVmdCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgdGhpcy5fZWxlbVRvcCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgdGhpcy5fZWxlbUxlZnQgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIHRoaXMuX2VsZW1Ub3AgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGltZW5zaW9ucyh3OiBudW1iZXIsIGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh3IDwgdGhpcy5taW5XaWR0aCkgdyA9IHRoaXMubWluV2lkdGg7XHJcbiAgICAgICAgaWYgKGggPCB0aGlzLm1pbkhlaWdodCkgaCA9IHRoaXMubWluSGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHcgKyAncHgnKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBoICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1XaWR0aCA9IHc7XHJcbiAgICAgICAgdGhpcy5fZWxlbUhlaWdodCA9IGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TW92aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ21vdmluZycpO1xyXG4gICAgICAgIGNvbnN0IHN0eWxlOiBhbnkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgKHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3otaW5kZXgnKSkgKyAxKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcE1vdmluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdtb3ZpbmcnKTtcclxuICAgICAgICBjb25zdCBzdHlsZTogYW55ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBpZiAodGhpcy5fbmdHcmlkLmF1dG9TdHlsZSkgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsIChwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd6LWluZGV4JykpIC0gMSkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlY2FsY3VsYXRlU2VsZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpeFJlc2l6ZShuZXdTaXplOiBOZ0dyaWRJdGVtU2l6ZSk6IE5nR3JpZEl0ZW1TaXplIHtcclxuICAgICAgICBpZiAodGhpcy5fbWF4Q29scyA+IDAgJiYgbmV3U2l6ZS54ID4gdGhpcy5fbWF4Q29scykgbmV3U2l6ZS54ID0gdGhpcy5fbWF4Q29scztcclxuICAgICAgICBpZiAodGhpcy5fbWF4Um93cyA+IDAgJiYgbmV3U2l6ZS55ID4gdGhpcy5fbWF4Um93cykgbmV3U2l6ZS55ID0gdGhpcy5fbWF4Um93cztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX21pbkNvbHMgPiAwICYmIG5ld1NpemUueCA8IHRoaXMuX21pbkNvbHMpIG5ld1NpemUueCA9IHRoaXMuX21pbkNvbHM7XHJcbiAgICAgICAgaWYgKHRoaXMuX21pblJvd3MgPiAwICYmIG5ld1NpemUueSA8IHRoaXMuX21pblJvd3MpIG5ld1NpemUueSA9IHRoaXMuX21pblJvd3M7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1XaWR0aCA9IChuZXdTaXplLnggKiB0aGlzLl9uZ0dyaWQuY29sV2lkdGgpICsgKCh0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCkgKiAobmV3U2l6ZS54IC0gMSkpO1xyXG4gICAgICAgIGlmIChpdGVtV2lkdGggPCB0aGlzLm1pbldpZHRoKSBuZXdTaXplLnggPSBNYXRoLmNlaWwoKHRoaXMubWluV2lkdGggKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCkgLyAodGhpcy5fbmdHcmlkLmNvbFdpZHRoICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IChuZXdTaXplLnkgKiB0aGlzLl9uZ0dyaWQucm93SGVpZ2h0KSArICgodGhpcy5fbmdHcmlkLm1hcmdpblRvcCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20pICogKG5ld1NpemUueSAtIDEpKTtcclxuICAgICAgICBpZiAoaXRlbUhlaWdodCA8IHRoaXMubWluSGVpZ2h0KSBuZXdTaXplLnkgPSBNYXRoLmNlaWwoKHRoaXMubWluSGVpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3ApIC8gKHRoaXMuX25nR3JpZC5yb3dIZWlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tICsgdGhpcy5fbmdHcmlkLm1hcmdpblRvcCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3U2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcclxuICAgIHByaXZhdGUgZWxlbWVudE1hdGNoZXMoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcykgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsZW1lbnQub01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQuZG9jdW1lbnQgfHwgIWVsZW1lbnQub3duZXJEb2N1bWVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzOiBhbnkgPSAoZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgIGxldCBpOiBudW1iZXIgPSBtYXRjaGVzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSBlbGVtZW50KSB7IH1cclxuICAgICAgICByZXR1cm4gaSA+IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlY2FsY3VsYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgeDogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5jb2xXaWR0aCArIHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0ICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0KSAqICh0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sIC0gMSkgKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5zY3JlZW5NYXJnaW47XHJcbiAgICAgICAgY29uc3QgeTogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5yb3dIZWlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSkgKiAodGhpcy5fY3VycmVudFBvc2l0aW9uLnJvdyAtIDEpICsgdGhpcy5fbmdHcmlkLm1hcmdpblRvcDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NpemUueCA8IHRoaXMuX25nR3JpZC5taW5Db2xzKSB0aGlzLl9zaXplLnggPSB0aGlzLl9uZ0dyaWQubWluQ29scztcclxuICAgICAgICBpZiAodGhpcy5fc2l6ZS55IDwgdGhpcy5fbmdHcmlkLm1pblJvd3MpIHRoaXMuX3NpemUueSA9IHRoaXMuX25nR3JpZC5taW5Sb3dzO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdXaWR0aDogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5jb2xXaWR0aCAqIHRoaXMuX3NpemUueCkgKyAoKHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0ICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0KSAqICh0aGlzLl9zaXplLnggLSAxKSk7XHJcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0OiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLnJvd0hlaWdodCAqIHRoaXMuX3NpemUueSkgKyAoKHRoaXMuX25nR3JpZC5tYXJnaW5Ub3AgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tKSAqICh0aGlzLl9zaXplLnkgLSAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHc6IG51bWJlciA9IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIHRoaXMuX25nR3JpZC5taW5XaWR0aCwgbmV3V2lkdGgpO1xyXG4gICAgICAgIGNvbnN0IGg6IG51bWJlciA9IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCB0aGlzLl9uZ0dyaWQubWluSGVpZ2h0LCBuZXdIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERpbWVuc2lvbnModywgaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TW91c2VQb3NpdGlvbihlOiBhbnkpOiBOZ0dyaWRSYXdQb3NpdGlvbiB7XHJcbiAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcykge1xyXG4gICAgICAgICAgICBjb25zdCBvZTogYW55ID0gZS5vcmlnaW5hbEV2ZW50O1xyXG4gICAgICAgICAgICBlID0gb2UudG91Y2hlcy5sZW5ndGggPyBvZS50b3VjaGVzWzBdIDogKG9lLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/IG9lLmNoYW5nZWRUb3VjaGVzWzBdIDogZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRvdWNoZXMpIHtcclxuICAgICAgICAgICAgZSA9IGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXNbMF0gOiAoZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVmUG9zOiBOZ0dyaWRSYXdQb3NpdGlvbiA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogZS5jbGllbnRYIC0gcmVmUG9zLmxlZnQsXHJcbiAgICAgICAgICAgIHRvcDogZS5jbGllbnRZIC0gcmVmUG9zLnRvcFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwbHlDaGFuZ2VzKGNoYW5nZXM6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlQ2hlY2sgPSAocmVjb3JkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XSAhPT0gcmVjb3JkLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnW3JlY29yZC5rZXldID0gcmVjb3JkLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGFuZ2VzLmZvckVhY2hBZGRlZEl0ZW0oY2hhbmdlQ2hlY2spO1xyXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaENoYW5nZWRJdGVtKGNoYW5nZUNoZWNrKTtcclxuICAgICAgICBjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbSgocmVjb3JkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWdbcmVjb3JkLmtleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZmlnKHRoaXMuX2NvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29uZmlnQ2hhbmdlRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJDb25maWcgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5fY29uZmlnLnNpemV4ID0gdGhpcy5fdXNlckNvbmZpZy5zaXpleCA9IHRoaXMuX3NpemUueDtcclxuICAgICAgICB0aGlzLl9jb25maWcuc2l6ZXkgPSB0aGlzLl91c2VyQ29uZmlnLnNpemV5ID0gdGhpcy5fc2l6ZS55O1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZy5jb2wgPSB0aGlzLl91c2VyQ29uZmlnLmNvbCA9IHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5jb2w7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnLnJvdyA9IHRoaXMuX3VzZXJDb25maWcucm93ID0gdGhpcy5fY3VycmVudFBvc2l0aW9uLnJvdztcclxuICAgICAgICB0aGlzLm5nR3JpZEl0ZW1DaGFuZ2UuZW1pdCh0aGlzLl91c2VyQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhblJlc2l6ZUluRGlyZWN0aW9uKGRpcmVjdGlvbjogc3RyaW5nLCBtb3VzZVBvczogTmdHcmlkUmF3UG9zaXRpb24pOiBib29sZWFuIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdib3R0b21yaWdodCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MubGVmdCA8IHRoaXMuX2VsZW1XaWR0aCAmJiBtb3VzZVBvcy5sZWZ0ID4gdGhpcy5fZWxlbVdpZHRoIC0gdGhpcy5fYm9yZGVyU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICYmIG1vdXNlUG9zLnRvcCA8IHRoaXMuX2VsZW1IZWlnaHQgJiYgbW91c2VQb3MudG9wID4gdGhpcy5fZWxlbUhlaWdodCAtIHRoaXMuX2JvcmRlclNpemU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6aW5kZW50XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbWxlZnQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9ib3JkZXJTaXplICYmIG1vdXNlUG9zLnRvcCA8IHRoaXMuX2VsZW1IZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAmJiBtb3VzZVBvcy50b3AgPiB0aGlzLl9lbGVtSGVpZ2h0IC0gdGhpcy5fYm9yZGVyU2l6ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTppbmRlbnRcclxuICAgICAgICAgICAgY2FzZSAndG9wcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9lbGVtV2lkdGggJiYgbW91c2VQb3MubGVmdCA+IHRoaXMuX2VsZW1XaWR0aCAtIHRoaXMuX2JvcmRlclNpemVcclxuICAgICAgICAgICAgICAgICAgICAmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9ib3JkZXJTaXplOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmluZGVudFxyXG4gICAgICAgICAgICBjYXNlICd0b3BsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fYm9yZGVyU2l6ZSAmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9ib3JkZXJTaXplO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MubGVmdCA8IHRoaXMuX2VsZW1XaWR0aCAmJiBtb3VzZVBvcy5sZWZ0ID4gdGhpcy5fZWxlbVdpZHRoIC0gdGhpcy5fYm9yZGVyU2l6ZTtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MubGVmdCA8IHRoaXMuX2JvcmRlclNpemU7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MudG9wIDwgdGhpcy5fZWxlbUhlaWdodCAmJiBtb3VzZVBvcy50b3AgPiB0aGlzLl9lbGVtSGVpZ2h0IC0gdGhpcy5fYm9yZGVyU2l6ZTtcclxuICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy50b3AgPCB0aGlzLl9ib3JkZXJTaXplO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0dyaWQgfSBmcm9tICcuLi9kaXJlY3RpdmVzL05nR3JpZCc7XHJcbmltcG9ydCB7IE5nR3JpZEl0ZW0gfSBmcm9tICcuLi9kaXJlY3RpdmVzL05nR3JpZEl0ZW0nO1xyXG5pbXBvcnQgeyBOZ0dyaWRQbGFjZWhvbGRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvTmdHcmlkUGxhY2Vob2xkZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6ICAgICBbIE5nR3JpZCwgTmdHcmlkSXRlbSwgTmdHcmlkUGxhY2Vob2xkZXIgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6ICBbIE5nR3JpZFBsYWNlaG9sZGVyIF0sXHJcbiAgZXhwb3J0czogICAgICAgICAgWyBOZ0dyaWQsIE5nR3JpZEl0ZW0gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdHcmlkTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIiLCJFdmVudEVtaXR0ZXIiLCJOZ0dyaWRIZWxwZXIuZ2VuZXJhdGVVdWlkIiwidHNsaWJfMS5fX3ZhbHVlcyIsIk5nR3JpZEhlbHBlci5zb3J0SXRlbXNCeVBvc2l0aW9uVmVydGljYWwiLCJOZ0dyaWRIZWxwZXIuc29ydEl0ZW1zQnlQb3NpdGlvbkhvcml6b250YWwiLCJmcm9tRXZlbnQiLCJEaXJlY3RpdmUiLCJLZXlWYWx1ZURpZmZlcnMiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJPdXRwdXQiLCJSZW5kZXJlcjIiLCJWaWV3Q29udGFpbmVyUmVmIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLHNCQXNGeUIsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixPQUFPO1lBQ0gsSUFBSSxFQUFFO2dCQUNGLElBQUks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TSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ3hGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ3hGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBRXhGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQzNGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBRS9GLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtvQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDL0YsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO29CQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFD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USxDQUFDO2dCQUM5RSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVE7b0JBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUU5RSxxQkFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUTtvQkFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFFMU0scUJBQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVM7b0JBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FB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