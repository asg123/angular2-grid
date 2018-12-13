/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer, EventEmitter, ComponentFactoryResolver, KeyValueDiffers, Output } from '@angular/core';
import * as NgGridHelper from '../helpers/NgGridHelpers';
import { NgGridPlaceholder } from '../components/NgGridPlaceholder';
import { fromEvent } from 'rxjs';
var NgGrid = /** @class */ (function () {
    // Constructor
    function NgGrid(_differs, _ngEl, _renderer, componentFactoryResolver) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this.componentFactoryResolver = componentFactoryResolver;
        // Event Emitters
        this.onDragStart = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragStop = new EventEmitter();
        this.onResizeStart = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onResizeStop = new EventEmitter();
        this.onItemChange = new EventEmitter();
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
         */
        function (v) {
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
        var /** @type {?} */ uid = NgGridHelper.generateUuid();
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
        else if ((/** @type {?} */ (document)).selection) {
            (/** @type {?} */ (document)).selection.empty();
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
        else if ((/** @type {?} */ (document)).selection) {
            (/** @type {?} */ (document)).selection.empty();
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
            for (var collisions_1 = tslib_1.__values(collisions), collisions_1_1 = collisions_1.next(); !collisions_1_1.done; collisions_1_1 = collisions_1.next()) {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (collisions_1_1 && !collisions_1_1.done && (_a = collisions_1.return)) _a.call(collisions_1);
            }
            finally { if (e_1) throw e_1.error; }
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
                itemsInGrid = itemsInGrid.sort(NgGridHelper.sortItemsByPositionVertical);
                var /** @type {?} */ lowestRowPerColumn = new Map();
                try {
                    for (var itemsInGrid_1 = tslib_1.__values(itemsInGrid), itemsInGrid_1_1 = itemsInGrid_1.next(); !itemsInGrid_1_1.done; itemsInGrid_1_1 = itemsInGrid_1.next()) {
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
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (itemsInGrid_1_1 && !itemsInGrid_1_1.done && (_a = itemsInGrid_1.return)) _a.call(itemsInGrid_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                break;
            case 'left':
            case 'right':
                itemsInGrid = itemsInGrid.sort(NgGridHelper.sortItemsByPositionHorizontal);
                var /** @type {?} */ lowestColumnPerRow = new Map();
                try {
                    for (var itemsInGrid_2 = tslib_1.__values(itemsInGrid), itemsInGrid_2_1 = itemsInGrid_2.next(); !itemsInGrid_2_1.done; itemsInGrid_2_1 = itemsInGrid_2.next()) {
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
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (itemsInGrid_2_1 && !itemsInGrid_2_1.done && (_b = itemsInGrid_2.return)) _b.call(itemsInGrid_2);
                    }
                    finally { if (e_3) throw e_3.error; }
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
                    for (var itemsInPath_1 = tslib_1.__values(itemsInPath), itemsInPath_1_1 = itemsInPath_1.next(); !itemsInPath_1_1.done; itemsInPath_1_1 = itemsInPath_1.next()) {
                        var item = itemsInPath_1_1.value;
                        if (item.row - nextRow >= dims.y) {
                            newPos.row = nextRow;
                            break fixLoop;
                        }
                        nextRow = item.row + item.sizey;
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (itemsInPath_1_1 && !itemsInPath_1_1.done && (_a = itemsInPath_1.return)) _a.call(itemsInPath_1);
                    }
                    finally { if (e_4) throw e_4.error; }
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
                    for (var itemsInPath_2 = tslib_1.__values(itemsInPath), itemsInPath_2_1 = itemsInPath_2.next(); !itemsInPath_2_1.done; itemsInPath_2_1 = itemsInPath_2.next()) {
                        var item = itemsInPath_2_1.value;
                        if (item.col - nextCol >= dims.x) {
                            newPos.col = nextCol;
                            break fixLoop;
                        }
                        nextCol = item.col + item.sizex;
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (itemsInPath_2_1 && !itemsInPath_2_1.done && (_b = itemsInPath_2.return)) _b.call(itemsInPath_2);
                    }
                    finally { if (e_5) throw e_5.error; }
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
        if (startColumn === void 0) { startColumn = 0; }
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
        if (startRow === void 0) { startRow = 0; }
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
        if (allowExcessiveItems === void 0) { allowExcessiveItems = false; }
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
        if (allowExcessiveItems === void 0) { allowExcessiveItems = false; }
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
        if (allowExcessiveItems === void 0) { allowExcessiveItems = false; }
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
        if (((/** @type {?} */ (window)).TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
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
        if (((/** @type {?} */ (window)).TouchEvent && e instanceof TouchEvent) || (e.touches || e.changedTouches)) {
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
        ;
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
        this._documentMousemove$ = fromEvent(document, 'mousemove');
        this._documentMouseup$ = fromEvent(document, 'mouseup');
        this._mousedown$ = fromEvent(element, 'mousedown');
        this._mousemove$ = fromEvent(element, 'mousemove');
        this._mouseup$ = fromEvent(element, 'mouseup');
        this._touchstart$ = fromEvent(element, 'touchstart');
        this._touchmove$ = fromEvent(element, 'touchmove');
        this._touchend$ = fromEvent(element, 'touchend');
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
    ;
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
        { type: Directive, args: [{
                    selector: '[ngGrid]',
                    inputs: ['config: ngGrid'],
                    host: {
                        '(window:resize)': 'resizeEventHandler($event)',
                    }
                },] },
    ];
    /** @nocollapse */
    NgGrid.ctorParameters = function () { return [
        { type: KeyValueDiffers },
        { type: ElementRef },
        { type: Renderer },
        { type: ComponentFactoryResolver }
    ]; };
    NgGrid.propDecorators = {
        onDragStart: [{ type: Output }],
        onDrag: [{ type: Output }],
        onDragStop: [{ type: Output }],
        onResizeStart: [{ type: Output }],
        onResize: [{ type: Output }],
        onResizeStop: [{ type: Output }],
        onItemChange: [{ type: Output }]
    };
    return NgGrid;
}());
export { NgGrid };
function NgGrid_tsickle_Closure_declarations() {
    /** @type {?} */
    NgGrid.CONST_DEFAULT_RESIZE_DIRECTIONS;
    /** @type {?} */
    NgGrid.CONST_DEFAULT_CONFIG;
    /** @type {?} */
    NgGrid.prototype.onDragStart;
    /** @type {?} */
    NgGrid.prototype.onDrag;
    /** @type {?} */
    NgGrid.prototype.onDragStop;
    /** @type {?} */
    NgGrid.prototype.onResizeStart;
    /** @type {?} */
    NgGrid.prototype.onResize;
    /** @type {?} */
    NgGrid.prototype.onResizeStop;
    /** @type {?} */
    NgGrid.prototype.onItemChange;
    /** @type {?} */
    NgGrid.prototype.colWidth;
    /** @type {?} */
    NgGrid.prototype.rowHeight;
    /** @type {?} */
    NgGrid.prototype.minCols;
    /** @type {?} */
    NgGrid.prototype.minRows;
    /** @type {?} */
    NgGrid.prototype.marginTop;
    /** @type {?} */
    NgGrid.prototype.marginRight;
    /** @type {?} */
    NgGrid.prototype.marginBottom;
    /** @type {?} */
    NgGrid.prototype.marginLeft;
    /** @type {?} */
    NgGrid.prototype.screenMargin;
    /** @type {?} */
    NgGrid.prototype.isDragging;
    /** @type {?} */
    NgGrid.prototype.isResizing;
    /** @type {?} */
    NgGrid.prototype.autoStyle;
    /** @type {?} */
    NgGrid.prototype.resizeEnable;
    /** @type {?} */
    NgGrid.prototype.dragEnable;
    /** @type {?} */
    NgGrid.prototype.cascade;
    /** @type {?} */
    NgGrid.prototype.minWidth;
    /** @type {?} */
    NgGrid.prototype.minHeight;
    /** @type {?} */
    NgGrid.prototype.resizeDirections;
    /** @type {?} */
    NgGrid.prototype._items;
    /** @type {?} */
    NgGrid.prototype._draggingItem;
    /** @type {?} */
    NgGrid.prototype._resizingItem;
    /** @type {?} */
    NgGrid.prototype._resizeDirection;
    /** @type {?} */
    NgGrid.prototype._itemsInGrid;
    /** @type {?} */
    NgGrid.prototype._containerWidth;
    /** @type {?} */
    NgGrid.prototype._containerHeight;
    /** @type {?} */
    NgGrid.prototype._maxCols;
    /** @type {?} */
    NgGrid.prototype._maxRows;
    /** @type {?} */
    NgGrid.prototype._visibleCols;
    /** @type {?} */
    NgGrid.prototype._visibleRows;
    /** @type {?} */
    NgGrid.prototype._setWidth;
    /** @type {?} */
    NgGrid.prototype._setHeight;
    /** @type {?} */
    NgGrid.prototype._posOffset;
    /** @type {?} */
    NgGrid.prototype._adding;
    /** @type {?} */
    NgGrid.prototype._placeholderRef;
    /** @type {?} */
    NgGrid.prototype._fixToGrid;
    /** @type {?} */
    NgGrid.prototype._autoResize;
    /** @type {?} */
    NgGrid.prototype._differ;
    /** @type {?} */
    NgGrid.prototype._destroyed;
    /** @type {?} */
    NgGrid.prototype._maintainRatio;
    /** @type {?} */
    NgGrid.prototype._aspectRatio;
    /** @type {?} */
    NgGrid.prototype._preferNew;
    /** @type {?} */
    NgGrid.prototype._zoomOnDrag;
    /** @type {?} */
    NgGrid.prototype._limitToScreen;
    /** @type {?} */
    NgGrid.prototype._centerToScreen;
    /** @type {?} */
    NgGrid.prototype._curMaxRow;
    /** @type {?} */
    NgGrid.prototype._curMaxCol;
    /** @type {?} */
    NgGrid.prototype._dragReady;
    /** @type {?} */
    NgGrid.prototype._resizeReady;
    /** @type {?} */
    NgGrid.prototype._elementBasedDynamicRowHeight;
    /** @type {?} */
    NgGrid.prototype._itemFixDirection;
    /** @type {?} */
    NgGrid.prototype._collisionFixDirection;
    /** @type {?} */
    NgGrid.prototype._allowOverlap;
    /** @type {?} */
    NgGrid.prototype._cascadePromise;
    /** @type {?} */
    NgGrid.prototype._lastZValue;
    /** @type {?} */
    NgGrid.prototype._documentMousemove$;
    /** @type {?} */
    NgGrid.prototype._documentMouseup$;
    /** @type {?} */
    NgGrid.prototype._mousedown$;
    /** @type {?} */
    NgGrid.prototype._mousemove$;
    /** @type {?} */
    NgGrid.prototype._mouseup$;
    /** @type {?} */
    NgGrid.prototype._touchstart$;
    /** @type {?} */
    NgGrid.prototype._touchmove$;
    /** @type {?} */
    NgGrid.prototype._touchend$;
    /** @type {?} */
    NgGrid.prototype._subscriptions;
    /** @type {?} */
    NgGrid.prototype._enabledListener;
    /** @type {?} */
    NgGrid.prototype._config;
    /** @type {?} */
    NgGrid.prototype._differs;
    /** @type {?} */
    NgGrid.prototype._ngEl;
    /** @type {?} */
    NgGrid.prototype._renderer;
    /** @type {?} */
    NgGrid.prototype.componentFactoryResolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmdHcmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItZ3JpZC8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvTmdHcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBK0QsZUFBZSxFQUFnRCxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdlAsT0FBTyxLQUFLLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQTRCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFrSnZELGNBQWM7SUFDZCxnQkFDWSxVQUNBLE9BQ0EsV0FDQTtRQUhBLGFBQVEsR0FBUixRQUFRO1FBQ1IsVUFBSyxHQUFMLEtBQUs7UUFDTCxjQUFTLEdBQVQsU0FBUztRQUNULDZCQUF3QixHQUF4Qix3QkFBd0I7OzJCQWpJcUIsSUFBSSxZQUFZLEVBQWM7c0JBQ25DLElBQUksWUFBWSxFQUFjOzBCQUMxQixJQUFJLFlBQVksRUFBYzs2QkFDM0IsSUFBSSxZQUFZLEVBQWM7d0JBQ25DLElBQUksWUFBWSxFQUFjOzRCQUMxQixJQUFJLFlBQVksRUFBYzs0QkFDbEIsSUFBSSxZQUFZLEVBQTBCO3dCQUd0RixHQUFHO3lCQUNGLEdBQUc7dUJBQ0wsQ0FBQzt1QkFDRCxDQUFDO3lCQUNDLEVBQUU7MkJBQ0EsRUFBRTs0QkFDRCxFQUFFOzBCQUNKLEVBQUU7NEJBQ0EsQ0FBQzswQkFDRixLQUFLOzBCQUNMLEtBQUs7eUJBQ04sSUFBSTs0QkFDRCxJQUFJOzBCQUNOLElBQUk7dUJBQ1IsSUFBSTt3QkFDSCxHQUFHO3lCQUNGLEdBQUc7Z0NBQ00sTUFBTSxDQUFDLCtCQUErQjtzQkFHaEMsSUFBSSxHQUFHLEVBQXNCOzZCQUNuQyxJQUFJOzZCQUNKLElBQUk7Z0NB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b250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgRXZlbnRFbWl0dGVyLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEhvc3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBUeXBlLCBDb21wb25lbnRSZWYsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdHcmlkQ29uZmlnLCBOZ0dyaWRJdGVtRXZlbnQsIE5nR3JpZEl0ZW1Qb3NpdGlvbiwgTmdHcmlkSXRlbVNpemUsIE5nR3JpZFJhd1Bvc2l0aW9uLCBOZ0dyaWRJdGVtRGltZW5zaW9ucywgTmdDb25maWdGaXhEaXJlY3Rpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lOZ0dyaWQnO1xyXG5pbXBvcnQgeyBOZ0dyaWRJdGVtIH0gZnJvbSAnLi9OZ0dyaWRJdGVtJztcclxuaW1wb3J0ICogYXMgTmdHcmlkSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvTmdHcmlkSGVscGVycyc7XHJcbmltcG9ydCB7IE5nR3JpZFBsYWNlaG9sZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OZ0dyaWRQbGFjZWhvbGRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW25nR3JpZF0nLFxyXG4gICAgaW5wdXRzOiBbJ2NvbmZpZzogbmdHcmlkJ10sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJyh3aW5kb3c6cmVzaXplKSc6ICdyZXNpemVFdmVudEhhbmRsZXIoJGV2ZW50KScsXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0dyaWQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENPTlNUX0RFRkFVTFRfUkVTSVpFX0RJUkVDVElPTlM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICdib3R0b21yaWdodCcsXHJcbiAgICAgICAgJ2JvdHRvbWxlZnQnLFxyXG4gICAgICAgICd0b3ByaWdodCcsXHJcbiAgICAgICAgJ3RvcGxlZnQnLFxyXG4gICAgICAgICdyaWdodCcsXHJcbiAgICAgICAgJ2xlZnQnLFxyXG4gICAgICAgICdib3R0b20nLFxyXG4gICAgICAgICd0b3AnLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBFdmVudCBFbWl0dGVyc1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWc6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnU3RvcDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplU3RvcDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxOZ0dyaWRJdGVtRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8TmdHcmlkSXRlbUV2ZW50Pj4oKTtcclxuXHJcbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzXHJcbiAgICBwdWJsaWMgY29sV2lkdGg6IG51bWJlciA9IDI1MDtcclxuICAgIHB1YmxpYyByb3dIZWlnaHQ6IG51bWJlciA9IDI1MDtcclxuICAgIHB1YmxpYyBtaW5Db2xzOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIG1pblJvd3M6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgbWFyZ2luVG9wOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBtYXJnaW5SaWdodDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgbWFyZ2luQm90dG9tOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBtYXJnaW5MZWZ0OiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBzY3JlZW5NYXJnaW46IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgaXNEcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzUmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBhdXRvU3R5bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHJlc2l6ZUVuYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgZHJhZ0VuYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgY2FzY2FkZTogc3RyaW5nID0gJ3VwJztcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIHJlc2l6ZURpcmVjdGlvbnM6IHN0cmluZ1tdID0gTmdHcmlkLkNPTlNUX0RFRkFVTFRfUkVTSVpFX0RJUkVDVElPTlM7XHJcblxyXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXNcclxuICAgIHByaXZhdGUgX2l0ZW1zOiBNYXA8c3RyaW5nLCBOZ0dyaWRJdGVtPiA9IG5ldyBNYXA8c3RyaW5nLCBOZ0dyaWRJdGVtPigpO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmdJdGVtOiBOZ0dyaWRJdGVtID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3Jlc2l6aW5nSXRlbTogTmdHcmlkSXRlbSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9yZXNpemVEaXJlY3Rpb246IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pdGVtc0luR3JpZDogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcldpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jb250YWluZXJIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21heENvbHM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9tYXhSb3dzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfdmlzaWJsZUNvbHM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF92aXNpYmxlUm93czogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3NldFdpZHRoOiBudW1iZXIgPSAyNTA7XHJcbiAgICBwcml2YXRlIF9zZXRIZWlnaHQ6IG51bWJlciA9IDI1MDtcclxuICAgIHByaXZhdGUgX3Bvc09mZnNldDogTmdHcmlkUmF3UG9zaXRpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYWRkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlclJlZjogQ29tcG9uZW50UmVmPE5nR3JpZFBsYWNlaG9sZGVyPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9maXhUb0dyaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2F1dG9SZXNpemU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2RpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9tYWludGFpblJhdGlvOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9hc3BlY3RSYXRpbzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcHJlZmVyTmV3OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF96b29tT25EcmFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9saW1pdFRvU2NyZWVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9jZW50ZXJUb1NjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY3VyTWF4Um93OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY3VyTWF4Q29sOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ1JlYWR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9yZXNpemVSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfZWxlbWVudEJhc2VkRHluYW1pY1Jvd0hlaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaXRlbUZpeERpcmVjdGlvbjogTmdDb25maWdGaXhEaXJlY3Rpb24gPSAnY2FzY2FkZSc7XHJcbiAgICBwcml2YXRlIF9jb2xsaXNpb25GaXhEaXJlY3Rpb246IE5nQ29uZmlnRml4RGlyZWN0aW9uID0gJ2Nhc2NhZGUnO1xyXG4gICAgcHJpdmF0ZSBfYWxsb3dPdmVybGFwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9jYXNjYWRlUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHByaXZhdGUgX2xhc3RaVmFsdWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgLy8gRXZlbnRzXHJcbiAgICBwcml2YXRlIF9kb2N1bWVudE1vdXNlbW92ZSQ6IE9ic2VydmFibGU8TW91c2VFdmVudD47XHJcbiAgICBwcml2YXRlIF9kb2N1bWVudE1vdXNldXAkOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+O1xyXG4gICAgcHJpdmF0ZSBfbW91c2Vkb3duJDogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PjtcclxuICAgIHByaXZhdGUgX21vdXNlbW92ZSQ6IE9ic2VydmFibGU8TW91c2VFdmVudD47XHJcbiAgICBwcml2YXRlIF9tb3VzZXVwJDogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PjtcclxuICAgIHByaXZhdGUgX3RvdWNoc3RhcnQkOiBPYnNlcnZhYmxlPFRvdWNoRXZlbnQ+O1xyXG4gICAgcHJpdmF0ZSBfdG91Y2htb3ZlJDogT2JzZXJ2YWJsZTxUb3VjaEV2ZW50PjtcclxuICAgIHByaXZhdGUgX3RvdWNoZW5kJDogT2JzZXJ2YWJsZTxUb3VjaEV2ZW50PjtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5hYmxlZExpc3RlbmVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBjb25maWdcclxuICAgIHByaXZhdGUgc3RhdGljIENPTlNUX0RFRkFVTFRfQ09ORklHOiBOZ0dyaWRDb25maWcgPSB7XHJcbiAgICAgICAgbWFyZ2luczogWzEwXSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIG1heF9jb2xzOiAwLFxyXG4gICAgICAgIG1heF9yb3dzOiAwLFxyXG4gICAgICAgIHZpc2libGVfY29sczogMCxcclxuICAgICAgICB2aXNpYmxlX3Jvd3M6IDAsXHJcbiAgICAgICAgY29sX3dpZHRoOiAyNTAsXHJcbiAgICAgICAgcm93X2hlaWdodDogMjUwLFxyXG4gICAgICAgIGNhc2NhZGU6ICd1cCcsXHJcbiAgICAgICAgbWluX3dpZHRoOiAxMDAsXHJcbiAgICAgICAgbWluX2hlaWdodDogMTAwLFxyXG4gICAgICAgIGZpeF90b19ncmlkOiBmYWxzZSxcclxuICAgICAgICBhdXRvX3N0eWxlOiB0cnVlLFxyXG4gICAgICAgIGF1dG9fcmVzaXplOiBmYWxzZSxcclxuICAgICAgICBtYWludGFpbl9yYXRpbzogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyX25ldzogZmFsc2UsXHJcbiAgICAgICAgem9vbV9vbl9kcmFnOiBmYWxzZSxcclxuICAgICAgICBsaW1pdF90b19zY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlcl90b19zY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIHJlc2l6ZV9kaXJlY3Rpb25zOiBOZ0dyaWQuQ09OU1RfREVGQVVMVF9SRVNJWkVfRElSRUNUSU9OUyxcclxuICAgICAgICBlbGVtZW50X2Jhc2VkX3Jvd19oZWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgIGZpeF9pdGVtX3Bvc2l0aW9uX2RpcmVjdGlvbjogJ2Nhc2NhZGUnLFxyXG4gICAgICAgIGZpeF9jb2xsaXNpb25fcG9zaXRpb25fZGlyZWN0aW9uOiAnY2FzY2FkZScsXHJcbiAgICAgICAgYWxsb3dfb3ZlcmxhcDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnID0gTmdHcmlkLkNPTlNUX0RFRkFVTFRfQ09ORklHO1xyXG5cclxuICAgIC8vIFtuZy1ncmlkXSBhdHRyaWJ1dGUgaGFuZGxlclxyXG4gICAgc2V0IGNvbmZpZyh2OiBOZ0dyaWRDb25maWcpIHtcclxuICAgICAgICBpZiAodiA9PSBudWxsIHx8IHR5cGVvZiB2ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldENvbmZpZyh2KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RpZmZlciA9PSBudWxsICYmIHYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kaWZmZXIgPSB0aGlzLl9kaWZmZXJzLmZpbmQodGhpcy5fY29uZmlnKS5jcmVhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuX2NvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2RpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcclxuICAgICAgICBwcml2YXRlIF9uZ0VsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmaW5lTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnZ3JpZCcsIHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9TdHlsZSkgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5zZXRDb25maWcodGhpcy5fY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9kaXNhYmxlTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdlbmVyYXRlSXRlbVVpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHVpZDogc3RyaW5nID0gTmdHcmlkSGVscGVyLmdlbmVyYXRlVXVpZCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXRlbXMuaGFzKHVpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJdGVtVWlkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdWlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBOZ0dyaWRDb25maWcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgICAgIHZhciBtYXhDb2xSb3dDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgeCBpbiBjb25maWcpIHtcclxuICAgICAgICAgICAgdmFyIHZhbCA9IGNvbmZpZ1t4XTtcclxuICAgICAgICAgICAgdmFyIGludFZhbCA9ICF2YWwgPyAwIDogcGFyc2VJbnQodmFsKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoeCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWFyZ2lucyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNYXJnaW5zKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb2xfd2lkdGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sV2lkdGggPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncm93X2hlaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dIZWlnaHQgPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYXV0b19zdHlsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvU3R5bGUgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhdXRvX3Jlc2l6ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXV0b1Jlc2l6ZSA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RyYWdnYWJsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnRW5hYmxlID0gdmFsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVzaXphYmxlJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUVuYWJsZSA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21heF9yb3dzJzpcclxuICAgICAgICAgICAgICAgICAgICBtYXhDb2xSb3dDaGFuZ2VkID0gbWF4Q29sUm93Q2hhbmdlZCB8fCB0aGlzLl9tYXhSb3dzICE9IGludFZhbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXhSb3dzID0gaW50VmFsIDwgMCA/IDAgOiBpbnRWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtYXhfY29scyc6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Q29sUm93Q2hhbmdlZCA9IG1heENvbFJvd0NoYW5nZWQgfHwgdGhpcy5fbWF4Q29scyAhPSBpbnRWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF4Q29scyA9IGludFZhbCA8IDAgPyAwIDogaW50VmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndmlzaWJsZV9yb3dzJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92aXNpYmxlUm93cyA9IE1hdGgubWF4KGludFZhbCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd2aXNpYmxlX2NvbHMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Zpc2libGVDb2xzID0gTWF0aC5tYXgoaW50VmFsLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21pbl9yb3dzJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pblJvd3MgPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWluX2NvbHMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWluQ29scyA9IE1hdGgubWF4KGludFZhbCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtaW5faGVpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbkhlaWdodCA9IE1hdGgubWF4KGludFZhbCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtaW5fd2lkdGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWluV2lkdGggPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnem9vbV9vbl9kcmFnJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b29tT25EcmFnID0gdmFsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2FzY2FkZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FzY2FkZSAhPSB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNjYWRlID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpeF90b19ncmlkJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maXhUb0dyaWQgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtYWludGFpbl9yYXRpbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFpbnRhaW5SYXRpbyA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3ByZWZlcl9uZXcnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZlck5ldyA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbWl0X3RvX3NjcmVlbic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGltaXRUb1NjcmVlbiA9ICF0aGlzLl9hdXRvUmVzaXplICYmICEhdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2VudGVyX3RvX3NjcmVlbic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2VudGVyVG9TY3JlZW4gPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyZXNpemVfZGlyZWN0aW9ucyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVEaXJlY3Rpb25zID0gdmFsIHx8IFsnYm90dG9tcmlnaHQnLCAnYm90dG9tbGVmdCcsICd0b3ByaWdodCcsICd0b3BsZWZ0JywgJ3JpZ2h0JywgJ2xlZnQnLCAnYm90dG9tJywgJ3RvcCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZWxlbWVudF9iYXNlZF9yb3dfaGVpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50QmFzZWREeW5hbWljUm93SGVpZ2h0ID0gISF2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaXhfaXRlbV9wb3NpdGlvbl9kaXJlY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1GaXhEaXJlY3Rpb24gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaXhfY29sbGlzaW9uX3Bvc2l0aW9uX2RpcmVjdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWxsb3dfb3ZlcmxhcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWxsb3dPdmVybGFwID0gISF2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbGxvd092ZXJsYXAgJiYgdGhpcy5jYXNjYWRlICE9PSAnb2ZmJyAmJiB0aGlzLmNhc2NhZGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIG92ZXJsYXAgaXRlbXMgd2hlbiBhIGNhc2NhZGUgZGlyZWN0aW9uIGlzIHNldC4nKTtcclxuICAgICAgICAgICAgdGhpcy5fYWxsb3dPdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kcmFnRW5hYmxlIHx8IHRoaXMucmVzaXplRW5hYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuYWJsZUxpc3RlbmVycygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pdGVtRml4RGlyZWN0aW9uID09PSAnY2FzY2FkZScpIHtcclxuICAgICAgICAgICAgdGhpcy5faXRlbUZpeERpcmVjdGlvbiA9IHRoaXMuX2dldEZpeERpcmVjdGlvbkZyb21DYXNjYWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID09PSAnY2FzY2FkZScpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID0gdGhpcy5fZ2V0Rml4RGlyZWN0aW9uRnJvbUNhc2NhZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9saW1pdFRvU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01heENvbHMgPSB0aGlzLl9nZXRDb250YWluZXJDb2x1bW5zKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbWF4Q29scyAhPSBuZXdNYXhDb2xzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXhDb2xzID0gbmV3TWF4Q29scztcclxuICAgICAgICAgICAgICAgIG1heENvbFJvd0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbGltaXRUb1NjcmVlbiAmJiB0aGlzLl9jZW50ZXJUb1NjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbk1hcmdpbiA9IHRoaXMuX2dldFNjcmVlbk1hcmdpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuTWFyZ2luID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9tYWludGFpblJhdGlvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbFdpZHRoICYmIHRoaXMucm93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IHRoaXMuY29sV2lkdGggLyB0aGlzLnJvd0hlaWdodDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21haW50YWluUmF0aW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heENvbFJvd0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21heENvbHMgPiAwICYmIHRoaXMuX21heFJvd3MgPiAwKSB7ICAgIC8vICAgIENhbid0IGhhdmUgYm90aCwgcHJpb3JpdGlzZSBvbiBjYXNjYWRlXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY2FzY2FkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF4Q29scyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXhSb3dzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uc0FmdGVyTWF4Q2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYWxjdWxhdGVDb2xXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVJvd0hlaWdodCgpO1xyXG5cclxuICAgICAgICB2YXIgbWF4V2lkdGggPSB0aGlzLl9tYXhDb2xzICogdGhpcy5jb2xXaWR0aDtcclxuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gdGhpcy5fbWF4Um93cyAqIHRoaXMucm93SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAobWF4V2lkdGggPiAwICYmIHRoaXMubWluV2lkdGggPiBtYXhXaWR0aCkgdGhpcy5taW5XaWR0aCA9IDAuNzUgKiB0aGlzLmNvbFdpZHRoO1xyXG4gICAgICAgIGlmIChtYXhIZWlnaHQgPiAwICYmIHRoaXMubWluSGVpZ2h0ID4gbWF4SGVpZ2h0KSB0aGlzLm1pbkhlaWdodCA9IDAuNzUgKiB0aGlzLnJvd0hlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWluV2lkdGggPiB0aGlzLmNvbFdpZHRoKSB0aGlzLm1pbkNvbHMgPSBNYXRoLm1heCh0aGlzLm1pbkNvbHMsIE1hdGguY2VpbCh0aGlzLm1pbldpZHRoIC8gdGhpcy5jb2xXaWR0aCkpO1xyXG4gICAgICAgIGlmICh0aGlzLm1pbkhlaWdodCA+IHRoaXMucm93SGVpZ2h0KSB0aGlzLm1pblJvd3MgPSBNYXRoLm1heCh0aGlzLm1pblJvd3MsIE1hdGguY2VpbCh0aGlzLm1pbkhlaWdodCAvIHRoaXMucm93SGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9tYXhDb2xzID4gMCAmJiB0aGlzLm1pbkNvbHMgPiB0aGlzLl9tYXhDb2xzKSB0aGlzLm1pbkNvbHMgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXhSb3dzID4gMCAmJiB0aGlzLm1pblJvd3MgPiB0aGlzLl9tYXhSb3dzKSB0aGlzLm1pblJvd3MgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVSYXRpbygpO1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUZyb21HcmlkKGl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtLnNldENhc2NhZGVNb2RlKHRoaXMuY2FzY2FkZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW06IE5nR3JpZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5yZWNhbGN1bGF0ZVNlbGYoKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkVG9HcmlkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbVBvc2l0aW9uKGl0ZW1JZDogc3RyaW5nKTogTmdHcmlkSXRlbVBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaGFzKGl0ZW1JZCkgPyB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKS5nZXRHcmlkUG9zaXRpb24oKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW1TaXplKGl0ZW1JZDogc3RyaW5nKTogTmdHcmlkSXRlbVNpemUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5oYXMoaXRlbUlkKSA/IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpLmdldFNpemUoKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nRG9DaGVjaygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fZGlmZmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZXMgPSB0aGlzLl9kaWZmZXIuZGlmZih0aGlzLl9jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbHlDaGFuZ2VzKGNoYW5nZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1hcmdpbnMobWFyZ2luczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFyZ2luVG9wID0gTWF0aC5tYXgocGFyc2VJbnQobWFyZ2luc1swXSksIDApO1xyXG4gICAgICAgIHRoaXMubWFyZ2luUmlnaHQgPSBtYXJnaW5zLmxlbmd0aCA+PSAyID8gTWF0aC5tYXgocGFyc2VJbnQobWFyZ2luc1sxXSksIDApIDogdGhpcy5tYXJnaW5Ub3A7XHJcbiAgICAgICAgdGhpcy5tYXJnaW5Cb3R0b20gPSBtYXJnaW5zLmxlbmd0aCA+PSAzID8gTWF0aC5tYXgocGFyc2VJbnQobWFyZ2luc1syXSksIDApIDogdGhpcy5tYXJnaW5Ub3A7XHJcbiAgICAgICAgdGhpcy5tYXJnaW5MZWZ0ID0gbWFyZ2lucy5sZW5ndGggPj0gNCA/IE1hdGgubWF4KHBhcnNlSW50KG1hcmdpbnNbM10pLCAwKSA6IHRoaXMubWFyZ2luUmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZURyYWcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzYWJsZURyYWcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZVJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZUVuYWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVSZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVFbmFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSXRlbShuZ0l0ZW06IE5nR3JpZEl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBuZ0l0ZW0uc2V0Q2FzY2FkZU1vZGUodGhpcy5jYXNjYWRlKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9wcmVmZXJOZXcpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1BvcyA9IHRoaXMuX2ZpeEdyaWRQb3NpdGlvbihuZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCksIG5nSXRlbS5nZXRTaXplKCkpO1xyXG4gICAgICAgICAgICBuZ0l0ZW0uc2V0R3JpZFBvc2l0aW9uKG5ld1Bvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmdJdGVtLnVpZCA9PT0gbnVsbCB8fCB0aGlzLl9pdGVtcy5oYXMobmdJdGVtLnVpZCkpIHtcclxuICAgICAgICAgICAgbmdJdGVtLnVpZCA9IHRoaXMuZ2VuZXJhdGVJdGVtVWlkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pdGVtcy5zZXQobmdJdGVtLnVpZCwgbmdJdGVtKTtcclxuICAgICAgICB0aGlzLl9hZGRUb0dyaWQobmdJdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnRyaWdnZXJDYXNjYWRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG5nSXRlbS5yZWNhbGN1bGF0ZVNlbGYoKTtcclxuICAgICAgICAgICAgbmdJdGVtLm9uQ2FzY2FkZUV2ZW50KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lbWl0T25JdGVtQ2hhbmdlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKG5nSXRlbTogTmdHcmlkSXRlbSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlbW92ZUZyb21HcmlkKG5nSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZShuZ0l0ZW0udWlkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnRyaWdnZXJDYXNjYWRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4gaXRlbS5yZWNhbGN1bGF0ZVNlbGYoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtaXRPbkl0ZW1DaGFuZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlSXRlbShuZ0l0ZW06IE5nR3JpZEl0ZW0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZChuZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX2FkZFRvR3JpZChuZ0l0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLnRyaWdnZXJDYXNjYWRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuICAgICAgICAgICAgbmdJdGVtLm9uQ2FzY2FkZUV2ZW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyaWdnZXJDYXNjYWRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FzY2FkZVByb21pc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FzY2FkZVByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZTogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FzY2FkZVByb21pc2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXNjYWRlUHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJpZ2dlclJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZUV2ZW50SGFuZGxlcihudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzaXplRXZlbnRIYW5kbGVyKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZUNvbFdpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlUm93SGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJhdGlvKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9saW1pdFRvU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01heENvbHVtbnMgPSB0aGlzLl9nZXRDb250YWluZXJDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhDb2xzICE9PSBuZXdNYXhDb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXhDb2xzID0gbmV3TWF4Q29sdW1ucztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uc0FmdGVyTWF4Q2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2VudGVyVG9TY3JlZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuTWFyZ2luID0gdGhpcy5fZ2V0U2NyZWVuTWFyZ2luKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVjYWxjdWxhdGVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYXV0b1Jlc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlY2FsY3VsYXRlU2VsZigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW91c2VEb3duRXZlbnRIYW5kbGVyKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIG1vdXNlUG9zID0gdGhpcy5fZ2V0TW91c2VQb3NpdGlvbihlKTtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuX2dldEl0ZW1Gcm9tUG9zaXRpb24obW91c2VQb3MpO1xyXG5cclxuICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZURpcmVjdGlvbjogc3RyaW5nID0gaXRlbS5jYW5SZXNpemUoZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZUVuYWJsZSAmJiByZXNpemVEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXplUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemVEaXJlY3Rpb24gPSByZXNpemVEaXJlY3Rpb247XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRyYWdFbmFibGUgJiYgaXRlbS5jYW5EcmFnKGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbSA9IGl0ZW07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtUG9zID0gaXRlbS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NPZmZzZXQgPSB7ICdsZWZ0JzogKG1vdXNlUG9zLmxlZnQgLSBpdGVtUG9zLmxlZnQpLCAndG9wJzogKG1vdXNlUG9zLnRvcCAtIGl0ZW1Qb3MudG9wKSB9XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3VzZVVwRXZlbnRIYW5kbGVyKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnU3RvcChlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZXNpemluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemVTdG9wKGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZHJhZ1JlYWR5IHx8IHRoaXMuX3Jlc2l6ZVJlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuRHJhZygpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhblJlc2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZVJlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZVN0YXJ0KGUpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2RyYWdSZWFkeSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnQoZSk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnKGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Jlc2l6aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZShlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbW91c2VQb3MgPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuX2dldEl0ZW1Gcm9tUG9zaXRpb24obW91c2VQb3MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ub25Nb3VzZU1vdmUoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gICAgUHJpdmF0ZSBtZXRob2RzXHJcbiAgICBwcml2YXRlIF9nZXRGaXhEaXJlY3Rpb25Gcm9tQ2FzY2FkZSgpOiBOZ0NvbmZpZ0ZpeERpcmVjdGlvbiB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNhc2NhZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF91cGRhdGVQb3NpdGlvbnNBZnRlck1heENoYW5nZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBpdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB2YXIgZGltcyA9IGl0ZW0uZ2V0U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9oYXNHcmlkQ29sbGlzaW9uKHBvcywgZGltcykgJiYgdGhpcy5faXNXaXRoaW5Cb3VuZHMocG9zLCBkaW1zKSAmJiBkaW1zLnggPD0gdGhpcy5fbWF4Q29scyAmJiBkaW1zLnkgPD0gdGhpcy5fbWF4Um93cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhDb2xzID4gMCAmJiBkaW1zLnggPiB0aGlzLl9tYXhDb2xzKSB7XHJcbiAgICAgICAgICAgICAgICBkaW1zLnggPSB0aGlzLl9tYXhDb2xzO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRTaXplKGRpbXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21heFJvd3MgPiAwICYmIGRpbXMueSA+IHRoaXMuX21heFJvd3MpIHtcclxuICAgICAgICAgICAgICAgIGRpbXMueSA9IHRoaXMuX21heFJvd3M7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldFNpemUoZGltcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNHcmlkQ29sbGlzaW9uKHBvcywgZGltcykgfHwgIXRoaXMuX2lzV2l0aGluQm91bmRzKHBvcywgZGltcywgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMuX2ZpeEdyaWRQb3NpdGlvbihwb3MsIGRpbXMpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRHcmlkUG9zaXRpb24obmV3UG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9hZGRUb0dyaWQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ29sV2lkdGgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9SZXNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21heENvbHMgPiAwIHx8IHRoaXMuX3Zpc2libGVDb2xzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heENvbHMgPSB0aGlzLl9tYXhDb2xzID4gMCA/IHRoaXMuX21heENvbHMgOiB0aGlzLl92aXNpYmxlQ29scztcclxuICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aDogbnVtYmVyID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjb2xXaWR0aDogbnVtYmVyID0gTWF0aC5mbG9vcihtYXhXaWR0aCAvIG1heENvbHMpO1xyXG4gICAgICAgICAgICAgICAgY29sV2lkdGggLT0gKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbFdpZHRoID4gMCkgdGhpcy5jb2xXaWR0aCA9IGNvbFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29sV2lkdGggPCB0aGlzLm1pbldpZHRoIHx8IHRoaXMubWluQ29scyA+IHRoaXMuX2NvbmZpZy5taW5fY29scykge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkNvbHMgPSBNYXRoLm1heCh0aGlzLl9jb25maWcubWluX2NvbHMsIE1hdGguY2VpbCh0aGlzLm1pbldpZHRoIC8gdGhpcy5jb2xXaWR0aCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWxjdWxhdGVSb3dIZWlnaHQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9SZXNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21heFJvd3MgPiAwIHx8IHRoaXMuX3Zpc2libGVSb3dzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heFJvd3MgPSB0aGlzLl9tYXhSb3dzID4gMCA/IHRoaXMuX21heFJvd3MgOiB0aGlzLl92aXNpYmxlUm93cztcclxuICAgICAgICAgICAgICAgIGxldCBtYXhIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudEJhc2VkRHluYW1pY1Jvd0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMubWFyZ2luVG9wIC0gdGhpcy5tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJvd0hlaWdodDogbnVtYmVyID0gTWF0aC5tYXgoTWF0aC5mbG9vcihtYXhIZWlnaHQgLyBtYXhSb3dzKSwgdGhpcy5taW5IZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0IC09ICh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dIZWlnaHQgPiAwKSB0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvd0hlaWdodCA8IHRoaXMubWluSGVpZ2h0IHx8IHRoaXMubWluUm93cyA+IHRoaXMuX2NvbmZpZy5taW5fcm93cykge1xyXG4gICAgICAgICAgICB0aGlzLm1pblJvd3MgPSBNYXRoLm1heCh0aGlzLl9jb25maWcubWluX3Jvd3MsIE1hdGguY2VpbCh0aGlzLm1pbkhlaWdodCAvIHRoaXMucm93SGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVJhdGlvKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fYXV0b1Jlc2l6ZSB8fCAhdGhpcy5fbWFpbnRhaW5SYXRpbykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWF4Q29scyA+IDAgJiYgdGhpcy5fdmlzaWJsZVJvd3MgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvd0hlaWdodCA9IHRoaXMuY29sV2lkdGggLyB0aGlzLl9hc3BlY3RSYXRpbztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21heFJvd3MgPiAwICYmIHRoaXMuX3Zpc2libGVDb2xzIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xXaWR0aCA9IHRoaXMuX2FzcGVjdFJhdGlvICogdGhpcy5yb3dIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9tYXhDb2xzID09IDAgJiYgdGhpcy5fbWF4Um93cyA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aXNpYmxlQ29scyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93SGVpZ2h0ID0gdGhpcy5jb2xXaWR0aCAvIHRoaXMuX2FzcGVjdFJhdGlvO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3Zpc2libGVSb3dzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xXaWR0aCA9IHRoaXMuX2FzcGVjdFJhdGlvICogdGhpcy5yb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwbHlDaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbSgocmVjb3JkOiBhbnkpID0+IHsgdGhpcy5fY29uZmlnW3JlY29yZC5rZXldID0gcmVjb3JkLmN1cnJlbnRWYWx1ZTsgfSk7XHJcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoQ2hhbmdlZEl0ZW0oKHJlY29yZDogYW55KSA9PiB7IHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XSA9IHJlY29yZC5jdXJyZW50VmFsdWU7IH0pO1xyXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaFJlbW92ZWRJdGVtKChyZWNvcmQ6IGFueSkgPT4geyBkZWxldGUgdGhpcy5fY29uZmlnW3JlY29yZC5rZXldOyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb25maWcodGhpcy5fY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZXNpemVTdGFydChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVzaXplRW5hYmxlIHx8ICF0aGlzLl9yZXNpemluZ0l0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gICAgU2V0dXBcclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc3RhcnRNb3ZpbmcoKTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZCh0aGlzLl9yZXNpemluZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyKHRoaXMuX3Jlc2l6aW5nSXRlbSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbGxvd092ZXJsYXApIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnpJbmRleCA9IHRoaXMuX2xhc3RaVmFsdWUrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIFN0YXR1cyBGbGFnc1xyXG4gICAgICAgIHRoaXMuaXNSZXNpemluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmVzaXplUmVhZHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgRXZlbnRzXHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZVN0YXJ0LmVtaXQodGhpcy5fcmVzaXppbmdJdGVtKTtcclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0ub25SZXNpemVTdGFydEV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ1N0YXJ0KGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kcmFnRW5hYmxlIHx8ICF0aGlzLl9kcmFnZ2luZ0l0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gICAgU3RhcnQgZHJhZ2dpbmdcclxuICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0uc3RhcnRNb3ZpbmcoKTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyKHRoaXMuX2RyYWdnaW5nSXRlbSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbGxvd092ZXJsYXApIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtLnpJbmRleCA9IHRoaXMuX2xhc3RaVmFsdWUrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIFN0YXR1cyBGbGFnc1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1JlYWR5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vICAgIEV2ZW50c1xyXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbS5vbkRyYWdTdGFydEV2ZW50KCk7XHJcblxyXG4gICAgICAgIC8vICAgIFpvb21cclxuICAgICAgICBpZiAodGhpcy5fem9vbU9uRHJhZykge1xyXG4gICAgICAgICAgICB0aGlzLl96b29tT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3pvb21PdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICdzY2FsZSgwLjUsIDAuNSknKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZXNldFpvb20oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kcmFnKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoKDxhbnk+ZG9jdW1lbnQpLnNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAoPGFueT5kb2N1bWVudCkuc2VsZWN0aW9uLmVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbW91c2VQb3MgPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG4gICAgICAgIHZhciBuZXdMID0gKG1vdXNlUG9zLmxlZnQgLSB0aGlzLl9wb3NPZmZzZXQubGVmdCk7XHJcbiAgICAgICAgdmFyIG5ld1QgPSAobW91c2VQb3MudG9wIC0gdGhpcy5fcG9zT2Zmc2V0LnRvcCk7XHJcblxyXG4gICAgICAgIHZhciBpdGVtUG9zID0gdGhpcy5fZHJhZ2dpbmdJdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBncmlkUG9zID0gdGhpcy5fY2FsY3VsYXRlR3JpZFBvc2l0aW9uKG5ld0wsIG5ld1QpO1xyXG4gICAgICAgIHZhciBkaW1zID0gdGhpcy5fZHJhZ2dpbmdJdGVtLmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgZ3JpZFBvcyA9IHRoaXMuX2ZpeFBvc1RvQm91bmRzWChncmlkUG9zLCBkaW1zKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1koZ3JpZFBvcywgZGltcykpIHtcclxuICAgICAgICAgICAgZ3JpZFBvcyA9IHRoaXMuX2ZpeFBvc1RvQm91bmRzWShncmlkUG9zLCBkaW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChncmlkUG9zLmNvbCAhPSBpdGVtUG9zLmNvbCB8fCBncmlkUG9zLnJvdyAhPSBpdGVtUG9zLnJvdykge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0uc2V0R3JpZFBvc2l0aW9uKGdyaWRQb3MsIHRoaXMuX2ZpeFRvR3JpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyUmVmLmluc3RhbmNlLnNldEdyaWRQb3NpdGlvbihncmlkUG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChbJ3VwJywgJ2Rvd24nLCAnbGVmdCcsICdyaWdodCddLmluZGV4T2YodGhpcy5jYXNjYWRlKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maXhHcmlkQ29sbGlzaW9ucyhncmlkUG9zLCBkaW1zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKGdyaWRQb3MsIGRpbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2ZpeFRvR3JpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0uc2V0UG9zaXRpb24obmV3TCwgbmV3VCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KHRoaXMuX2RyYWdnaW5nSXRlbSk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtLm9uRHJhZ0V2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzaXplKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Jlc2l6aW5nKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKCg8YW55PmRvY3VtZW50KS5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgKDxhbnk+ZG9jdW1lbnQpLnNlbGVjdGlvbi5lbXB0eSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW91c2VQb3MgPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1Qb3MgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBpdGVtRGltcyA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5nZXREaW1lbnNpb25zKCk7XHJcbiAgICAgICAgY29uc3QgZW5kQ29ybmVyID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiBpdGVtUG9zLmxlZnQgKyBpdGVtRGltcy53aWR0aCxcclxuICAgICAgICAgICAgdG9wOiBpdGVtUG9zLnRvcCArIGl0ZW1EaW1zLmhlaWdodCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZVRvcCA9IHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygndG9wJyk7XHJcbiAgICAgICAgY29uc3QgcmVzaXplQm90dG9tID0gdGhpcy5fcmVzaXplRGlyZWN0aW9uLmluY2x1ZGVzKCdib3R0b20nKTtcclxuICAgICAgICBjb25zdCByZXNpemVMZWZ0ID0gdGhpcy5fcmVzaXplRGlyZWN0aW9uLmluY2x1ZGVzKCdsZWZ0JylcclxuICAgICAgICBjb25zdCByZXNpemVSaWdodCA9IHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygncmlnaHQnKTtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyB3aWR0aCBhbmQgaGVpZ2h0IGJhc2VkIHVwb24gcmVzaXplIGRpcmVjdGlvblxyXG4gICAgICAgIGxldCBuZXdXID0gcmVzaXplUmlnaHRcclxuICAgICAgICAgICAgPyAobW91c2VQb3MubGVmdCAtIGl0ZW1Qb3MubGVmdCArIDEpXHJcbiAgICAgICAgICAgIDogcmVzaXplTGVmdFxyXG4gICAgICAgICAgICAgICAgPyAoZW5kQ29ybmVyLmxlZnQgLSBtb3VzZVBvcy5sZWZ0ICsgMSlcclxuICAgICAgICAgICAgICAgIDogaXRlbURpbXMud2lkdGg7XHJcbiAgICAgICAgbGV0IG5ld0ggPSByZXNpemVCb3R0b21cclxuICAgICAgICAgICAgPyAobW91c2VQb3MudG9wIC0gaXRlbVBvcy50b3AgKyAxKVxyXG4gICAgICAgICAgICA6IHJlc2l6ZVRvcFxyXG4gICAgICAgICAgICAgICAgPyAoZW5kQ29ybmVyLnRvcCAtIG1vdXNlUG9zLnRvcCArIDEpXHJcbiAgICAgICAgICAgICAgICA6IGl0ZW1EaW1zLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKG5ld1cgPCB0aGlzLm1pbldpZHRoKVxyXG4gICAgICAgICAgICBuZXdXID0gdGhpcy5taW5XaWR0aDtcclxuICAgICAgICBpZiAobmV3SCA8IHRoaXMubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICBuZXdIID0gdGhpcy5taW5IZWlnaHQ7XHJcbiAgICAgICAgaWYgKG5ld1cgPCB0aGlzLl9yZXNpemluZ0l0ZW0ubWluV2lkdGgpXHJcbiAgICAgICAgICAgIG5ld1cgPSB0aGlzLl9yZXNpemluZ0l0ZW0ubWluV2lkdGg7XHJcbiAgICAgICAgaWYgKG5ld0ggPCB0aGlzLl9yZXNpemluZ0l0ZW0ubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICBuZXdIID0gdGhpcy5fcmVzaXppbmdJdGVtLm1pbkhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IG5ld1ggPSBpdGVtUG9zLmxlZnQ7XHJcbiAgICAgICAgbGV0IG5ld1kgPSBpdGVtUG9zLnRvcDtcclxuXHJcbiAgICAgICAgaWYgKHJlc2l6ZUxlZnQpXHJcbiAgICAgICAgICAgIG5ld1ggPSBlbmRDb3JuZXIubGVmdCAtIG5ld1c7XHJcbiAgICAgICAgaWYgKHJlc2l6ZVRvcClcclxuICAgICAgICAgICAgbmV3WSA9IGVuZENvcm5lci50b3AgLSBuZXdIO1xyXG5cclxuICAgICAgICBsZXQgY2FsY1NpemUgPSB0aGlzLl9jYWxjdWxhdGVHcmlkU2l6ZShuZXdXLCBuZXdIKTtcclxuICAgICAgICBjb25zdCBpdGVtU2l6ZSA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgY29uc3QgaUdyaWRQb3MgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgYm90dG9tUmlnaHRDb3JuZXIgPSB7XHJcbiAgICAgICAgICAgIGNvbDogaUdyaWRQb3MuY29sICsgaXRlbVNpemUueCxcclxuICAgICAgICAgICAgcm93OiBpR3JpZFBvcy5yb3cgKyBpdGVtU2l6ZS55LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBpR3JpZFBvcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9yZXNpemVEaXJlY3Rpb24uaW5jbHVkZXMoJ3RvcCcpKVxyXG4gICAgICAgICAgICB0YXJnZXRQb3Mucm93ID0gYm90dG9tUmlnaHRDb3JuZXIucm93IC0gY2FsY1NpemUueTtcclxuICAgICAgICBpZiAodGhpcy5fcmVzaXplRGlyZWN0aW9uLmluY2x1ZGVzKCdsZWZ0JykpXHJcbiAgICAgICAgICAgIHRhcmdldFBvcy5jb2wgPSBib3R0b21SaWdodENvcm5lci5jb2wgLSBjYWxjU2l6ZS54O1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWCh0YXJnZXRQb3MsIGNhbGNTaXplKSlcclxuICAgICAgICAgICAgY2FsY1NpemUgPSB0aGlzLl9maXhTaXplVG9Cb3VuZHNYKHRhcmdldFBvcywgY2FsY1NpemUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWSh0YXJnZXRQb3MsIGNhbGNTaXplKSlcclxuICAgICAgICAgICAgY2FsY1NpemUgPSB0aGlzLl9maXhTaXplVG9Cb3VuZHNZKHRhcmdldFBvcywgY2FsY1NpemUpO1xyXG5cclxuICAgICAgICBjYWxjU2l6ZSA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5maXhSZXNpemUoY2FsY1NpemUpO1xyXG5cclxuICAgICAgICBpZiAoY2FsY1NpemUueCAhPSBpdGVtU2l6ZS54IHx8IGNhbGNTaXplLnkgIT0gaXRlbVNpemUueSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc2V0R3JpZFBvc2l0aW9uKHRhcmdldFBvcywgdGhpcy5fZml4VG9HcmlkKTtcclxuICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXJSZWYuaW5zdGFuY2Uuc2V0R3JpZFBvc2l0aW9uKHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbS5zZXRTaXplKGNhbGNTaXplLCB0aGlzLl9maXhUb0dyaWQpO1xyXG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZi5pbnN0YW5jZS5zZXRTaXplKGNhbGNTaXplKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChbJ3VwJywgJ2Rvd24nLCAnbGVmdCcsICdyaWdodCddLmluZGV4T2YodGhpcy5jYXNjYWRlKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maXhHcmlkQ29sbGlzaW9ucyh0YXJnZXRQb3MsIGNhbGNTaXplKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKHRhcmdldFBvcywgY2FsY1NpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2ZpeFRvR3JpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc2V0RGltZW5zaW9ucyhuZXdXLCBuZXdIKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnNldFBvc2l0aW9uKG5ld1gsIG5ld1kpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZS5lbWl0KHRoaXMuX3Jlc2l6aW5nSXRlbSk7XHJcbiAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLm9uUmVzaXplRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kcmFnU3RvcChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1Qb3MgPSB0aGlzLl9kcmFnZ2luZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbS5zZXRHcmlkUG9zaXRpb24oaXRlbVBvcyk7XHJcbiAgICAgICAgdGhpcy5fYWRkVG9HcmlkKHRoaXMuX2RyYWdnaW5nSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0uc3RvcE1vdmluZygpO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbS5vbkRyYWdTdG9wRXZlbnQoKTtcclxuICAgICAgICB0aGlzLm9uRHJhZ1N0b3AuZW1pdCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLl9jbGVhbkRyYWcoKTtcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2VtaXRPbkl0ZW1DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21PbkRyYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRab29tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Jlc2l6ZVN0b3AoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVzaXppbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc1Jlc2l6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1EaW1zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldFNpemUoKTtcclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc2V0U2l6ZShpdGVtRGltcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1Qb3MgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnNldEdyaWRQb3NpdGlvbihpdGVtUG9zKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkVG9HcmlkKHRoaXMuX3Jlc2l6aW5nSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc3RvcE1vdmluZygpO1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbS5vblJlc2l6ZVN0b3BFdmVudCgpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemVTdG9wLmVtaXQodGhpcy5fcmVzaXppbmdJdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2xlYW5SZXNpemUoKTtcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2VtaXRPbkl0ZW1DaGFuZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGVhbkRyYWcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wb3NPZmZzZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdSZWFkeSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsZWFuUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcmVzaXplRGlyZWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzUmVzaXppbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9yZXNpemVSZWFkeSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUdyaWRTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogTmdHcmlkSXRlbVNpemUge1xyXG4gICAgICAgIHdpZHRoICs9IHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b207XHJcblxyXG4gICAgICAgIHZhciBzaXpleCA9IE1hdGgubWF4KHRoaXMubWluQ29scywgTWF0aC5yb3VuZCh3aWR0aCAvICh0aGlzLmNvbFdpZHRoICsgdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkpKTtcclxuICAgICAgICB2YXIgc2l6ZXkgPSBNYXRoLm1heCh0aGlzLm1pblJvd3MsIE1hdGgucm91bmQoaGVpZ2h0IC8gKHRoaXMucm93SGVpZ2h0ICsgdGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkpKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1goeyBjb2w6IDEsIHJvdzogMSB9LCB7IHg6IHNpemV4LCB5OiBzaXpleSB9KSkgc2l6ZXggPSB0aGlzLl9tYXhDb2xzO1xyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHsgY29sOiAxLCByb3c6IDEgfSwgeyB4OiBzaXpleCwgeTogc2l6ZXkgfSkpIHNpemV5ID0gdGhpcy5fbWF4Um93cztcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgJ3gnOiBzaXpleCwgJ3knOiBzaXpleSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUdyaWRQb3NpdGlvbihsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKTogTmdHcmlkSXRlbVBvc2l0aW9uIHtcclxuICAgICAgICB2YXIgY29sID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChsZWZ0IC8gKHRoaXMuY29sV2lkdGggKyB0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSkgKyAxKTtcclxuICAgICAgICB2YXIgcm93ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh0b3AgLyAodGhpcy5yb3dIZWlnaHQgKyB0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSkgKyAxKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1goeyBjb2w6IGNvbCwgcm93OiByb3cgfSwgeyB4OiAxLCB5OiAxIH0pKSBjb2wgPSB0aGlzLl9tYXhDb2xzO1xyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHsgY29sOiBjb2wsIHJvdzogcm93IH0sIHsgeDogMSwgeTogMSB9KSkgcm93ID0gdGhpcy5fbWF4Um93cztcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgJ2NvbCc6IGNvbCwgJ3Jvdyc6IHJvdyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc0dyaWRDb2xsaXNpb24ocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHRoaXMuX2dldENvbGxpc2lvbnMocG9zLCBkaW1zKTtcclxuXHJcbiAgICAgICAgaWYgKHBvc2l0aW9ucyA9PSBudWxsIHx8IHBvc2l0aW9ucy5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9zaXRpb25zLnNvbWUoKHY6IE5nR3JpZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICEodiA9PT0gbnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0Q29sbGlzaW9ucyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBBcnJheTxOZ0dyaWRJdGVtPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FsbG93T3ZlcmxhcCkgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCByZXR1cm5zOiBBcnJheTxOZ0dyaWRJdGVtPiA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIXBvcy5jb2wpIHsgcG9zLmNvbCA9IDE7IH1cclxuICAgICAgICBpZiAoIXBvcy5yb3cpIHsgcG9zLnJvdyA9IDE7IH1cclxuXHJcbiAgICAgICAgY29uc3QgbGVmdENvbCA9IHBvcy5jb2w7XHJcbiAgICAgICAgY29uc3QgcmlnaHRDb2wgPSBwb3MuY29sICsgZGltcy54O1xyXG4gICAgICAgIGNvbnN0IHRvcFJvdyA9IHBvcy5yb3c7XHJcbiAgICAgICAgY29uc3QgYm90dG9tUm93ID0gcG9zLnJvdyArIGRpbXMueTtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXNJbkdyaWQuZm9yRWFjaCgoaXRlbUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTogTmdHcmlkSXRlbSA9IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtc0luR3JpZC5kZWxldGUoaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbUxlZnRDb2wgPSBpdGVtLmNvbDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbVJpZ2h0Q29sID0gaXRlbS5jb2wgKyBpdGVtLnNpemV4O1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtVG9wUm93ID0gaXRlbS5yb3c7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Cb3R0b21Sb3cgPSBpdGVtLnJvdyArIGl0ZW0uc2l6ZXk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3aXRoaW5Db2x1bW5zID0gbGVmdENvbCA8IGl0ZW1SaWdodENvbCAmJiBpdGVtTGVmdENvbCA8IHJpZ2h0Q29sO1xyXG4gICAgICAgICAgICBjb25zdCB3aXRoaW5Sb3dzID0gdG9wUm93IDwgaXRlbUJvdHRvbVJvdyAmJiBpdGVtVG9wUm93IDwgYm90dG9tUm93O1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpdGhpbkNvbHVtbnMgJiYgd2l0aGluUm93cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJucy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXR1cm5zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeEdyaWRDb2xsaXNpb25zKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbGxpc2lvbnM6IEFycmF5PE5nR3JpZEl0ZW0+ID0gdGhpcy5fZ2V0Q29sbGlzaW9ucyhwb3MsIGRpbXMpO1xyXG4gICAgICAgIGlmIChjb2xsaXNpb25zLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29sbGlzaW9uIG9mIGNvbGxpc2lvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUdyaWQoY29sbGlzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EaW1zOiBOZ0dyaWRJdGVtU2l6ZSA9IGNvbGxpc2lvbi5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Qb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IGNvbGxpc2lvbi5nZXRHcmlkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IG5ld0l0ZW1Qb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IHsgY29sOiBpdGVtUG9zLmNvbCwgcm93OiBpdGVtUG9zLnJvdyB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbGxpc2lvbkZpeERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgbmV3SXRlbVBvcy5yb3cgPSBwb3Mucm93ICsgZGltcy55O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKG5ld0l0ZW1Qb3MsIGl0ZW1EaW1zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1Qb3MuY29sID0gcG9zLmNvbCArIGRpbXMueDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtUG9zLnJvdyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0l0ZW1Qb3MuY29sID0gcG9zLmNvbCArIGRpbXMueDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWChuZXdJdGVtUG9zLCBpdGVtRGltcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtUG9zLmNvbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SXRlbVBvcy5yb3cgPSBwb3Mucm93ICsgZGltcy55O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb2xsaXNpb24uc2V0R3JpZFBvc2l0aW9uKG5ld0l0ZW1Qb3MpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZml4R3JpZENvbGxpc2lvbnMobmV3SXRlbVBvcywgaXRlbURpbXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRUb0dyaWQoY29sbGlzaW9uKTtcclxuICAgICAgICAgICAgY29sbGlzaW9uLm9uQ2FzY2FkZUV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maXhHcmlkQ29sbGlzaW9ucyhwb3MsIGRpbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Nhc2NhZGVHcmlkKHBvcz86IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltcz86IE5nR3JpZEl0ZW1TaXplKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbGxvd092ZXJsYXApIHJldHVybjtcclxuICAgICAgICBpZiAoIXBvcyAhPT0gIWRpbXMpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNhc2NhZGUgd2l0aCBvbmx5IHBvc2l0aW9uIGFuZCBub3QgZGltZW5zaW9ucycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nICYmIHRoaXMuX2RyYWdnaW5nSXRlbSAmJiAhcG9zICYmICFkaW1zKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuX2RyYWdnaW5nSXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgZGltcyA9IHRoaXMuX2RyYWdnaW5nSXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUmVzaXppbmcgJiYgdGhpcy5fcmVzaXppbmdJdGVtICYmICFwb3MgJiYgIWRpbXMpIHtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBkaW1zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldFNpemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpdGVtc0luR3JpZDogTmdHcmlkSXRlbVtdID0gQXJyYXkuZnJvbSh0aGlzLl9pdGVtc0luR3JpZCwgKGl0ZW1JZDogc3RyaW5nKSA9PiB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jYXNjYWRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICBpdGVtc0luR3JpZCA9IGl0ZW1zSW5HcmlkLnNvcnQoTmdHcmlkSGVscGVyLnNvcnRJdGVtc0J5UG9zaXRpb25WZXJ0aWNhbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb3dlc3RSb3dQZXJDb2x1bW46IE1hcDxudW1iZXIsIG51bWJlcj4gPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXNJbkdyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0ZpeGVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbURpbXM6IE5nR3JpZEl0ZW1TaXplID0gaXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVBvczogTmdHcmlkSXRlbVBvc2l0aW9uID0gaXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VzdFJvd0Zvckl0ZW06IG51bWJlciA9IGxvd2VzdFJvd1BlckNvbHVtbi5nZXQoaXRlbVBvcy5jb2wpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBpdGVtRGltcy54OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG93ZXN0Um93Rm9yQ29sdW1uID0gbG93ZXN0Um93UGVyQ29sdW1uLmdldChpdGVtUG9zLmNvbCArIGkpIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFJvd0Zvckl0ZW0gPSBNYXRoLm1heChsb3dlc3RSb3dGb3JDb2x1bW4sIGxvd2VzdFJvd0Zvckl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVmdENvbCA9IGl0ZW1Qb3MuY29sO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q29sID0gaXRlbVBvcy5jb2wgKyBpdGVtRGltcy54O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zICYmIGRpbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2l0aGluQ29sdW1ucyA9IHJpZ2h0Q29sID4gcG9zLmNvbCAmJiBsZWZ0Q29sIDwgKHBvcy5jb2wgKyBkaW1zLngpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpdGhpbkNvbHVtbnMpIHsgICAgICAgICAgLy8gSWYgb3VyIGVsZW1lbnQgaXMgaW4gb25lIG9mIHRoZSBpdGVtJ3MgY29sdW1uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vbUFib3ZlSXRlbSA9IGl0ZW1EaW1zLnkgPD0gKHBvcy5yb3cgLSBsb3dlc3RSb3dGb3JJdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJvb21BYm92ZUl0ZW0pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gY2FuJ3QgZml0IGFib3ZlIG91ciBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0Um93Rm9ySXRlbSA9IE1hdGgubWF4KGxvd2VzdFJvd0Zvckl0ZW0sIHBvcy5yb3cgKyBkaW1zLnkpOyAgIC8vIFNldCB0aGUgbG93ZXN0IHJvdyB0byBiZSBiZWxvdyBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IHsgY29sOiBpdGVtUG9zLmNvbCwgcm93OiBsb3dlc3RSb3dGb3JJdGVtIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFdoYXQgaWYgaXQncyBub3Qgd2l0aGluIGJvdW5kcyBZP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb3dlc3RSb3dGb3JJdGVtICE9IGl0ZW1Qb3Mucm93ICYmIHRoaXMuX2lzV2l0aGluQm91bmRzWShuZXdQb3MsIGl0ZW1EaW1zKSkgeyAvLyBJZiB0aGUgaXRlbSBpcyBub3QgYWxyZWFkeSBvbiB0aGlzIHJvdyBtb3ZlIGl0IHVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUZyb21HcmlkKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRHcmlkUG9zaXRpb24obmV3UG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub25DYXNjYWRlRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkVG9HcmlkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1EaW1zLng7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RSb3dQZXJDb2x1bW4uc2V0KGl0ZW1Qb3MuY29sICsgaSwgbG93ZXN0Um93Rm9ySXRlbSArIGl0ZW1EaW1zLnkpOyAvLyBVcGRhdGUgdGhlIGxvd2VzdCByb3cgdG8gYmUgYmVsb3cgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zSW5HcmlkID0gaXRlbXNJbkdyaWQuc29ydChOZ0dyaWRIZWxwZXIuc29ydEl0ZW1zQnlQb3NpdGlvbkhvcml6b250YWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG93ZXN0Q29sdW1uUGVyUm93OiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zSW5HcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbURpbXM6IE5nR3JpZEl0ZW1TaXplID0gaXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVBvczogTmdHcmlkSXRlbVBvc2l0aW9uID0gaXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VzdENvbHVtbkZvckl0ZW06IG51bWJlciA9IGxvd2VzdENvbHVtblBlclJvdy5nZXQoaXRlbVBvcy5yb3cpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBpdGVtRGltcy55OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VzdE9mZnNldENvbHVtbjogbnVtYmVyID0gbG93ZXN0Q29sdW1uUGVyUm93LmdldChpdGVtUG9zLnJvdyArIGkpIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdENvbHVtbkZvckl0ZW0gPSBNYXRoLm1heChsb3dlc3RPZmZzZXRDb2x1bW4sIGxvd2VzdENvbHVtbkZvckl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wUm93ID0gaXRlbVBvcy5yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm90dG9tUm93ID0gaXRlbVBvcy5yb3cgKyBpdGVtRGltcy55O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zICYmIGRpbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2l0aGluUm93cyA9IGJvdHRvbVJvdyA+IHBvcy5jb2wgJiYgdG9wUm93IDwgKHBvcy5jb2wgKyBkaW1zLngpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpdGhpblJvd3MpIHsgICAgICAgICAgLy8gSWYgb3VyIGVsZW1lbnQgaXMgaW4gb25lIG9mIHRoZSBpdGVtJ3Mgcm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vbU5leHRUb0l0ZW0gPSBpdGVtRGltcy54IDw9IChwb3MuY29sIC0gbG93ZXN0Q29sdW1uRm9ySXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyb29tTmV4dFRvSXRlbSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gY2FuJ3QgZml0IG5leHQgdG8gb3VyIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RDb2x1bW5Gb3JJdGVtID0gTWF0aC5tYXgobG93ZXN0Q29sdW1uRm9ySXRlbSwgcG9zLmNvbCArIGRpbXMueCk7ICAvLyBTZXQgdGhlIGxvd2VzdCBjb2wgdG8gYmUgdGhlIG90aGVyIHNpZGUgb2YgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSB7IGNvbDogbG93ZXN0Q29sdW1uRm9ySXRlbSwgcm93OiBpdGVtUG9zLnJvdyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0Q29sdW1uRm9ySXRlbSAhPSBpdGVtUG9zLmNvbCAmJiB0aGlzLl9pc1dpdGhpbkJvdW5kc1gobmV3UG9zLCBpdGVtRGltcykpIHsgLy8gSWYgdGhlIGl0ZW0gaXMgbm90IGFscmVhZHkgb24gdGhpcyBjb2wgbW92ZSBpdCB1cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0R3JpZFBvc2l0aW9uKG5ld1Bvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9uQ2FzY2FkZUV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZFRvR3JpZChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtRGltcy55OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0Q29sdW1uUGVyUm93LnNldChpdGVtUG9zLnJvdyArIGksIGxvd2VzdENvbHVtbkZvckl0ZW0gKyBpdGVtRGltcy54KTsgLy8gVXBkYXRlIHRoZSBsb3dlc3QgY29sIHRvIGJlIGJlbG93IHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZml4R3JpZFBvc2l0aW9uKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9oYXNHcmlkQ29sbGlzaW9uKHBvcywgZGltcykpIHJldHVybiBwb3M7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFJvdyA9IHRoaXMuX21heFJvd3MgPT09IDAgPyB0aGlzLl9nZXRNYXhSb3coKSA6IHRoaXMuX21heFJvd3M7XHJcbiAgICAgICAgY29uc3QgbWF4Q29sID0gdGhpcy5fbWF4Q29scyA9PT0gMCA/IHRoaXMuX2dldE1heENvbCgpIDogdGhpcy5fbWF4Q29scztcclxuICAgICAgICBjb25zdCBuZXdQb3MgPSB7XHJcbiAgICAgICAgICAgIGNvbDogcG9zLmNvbCxcclxuICAgICAgICAgICAgcm93OiBwb3Mucm93LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pdGVtRml4RGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGZpeExvb3A6XHJcbiAgICAgICAgICAgIGZvciAoOyBuZXdQb3MuY29sIDw9IG1heFJvdzspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zSW5QYXRoID0gdGhpcy5fZ2V0SXRlbXNJblZlcnRpY2FsUGF0aChuZXdQb3MsIGRpbXMsIG5ld1Bvcy5yb3cpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRSb3cgPSBuZXdQb3Mucm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXNJblBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5yb3cgLSBuZXh0Um93ID49IGRpbXMueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3Mucm93ID0gbmV4dFJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgZml4TG9vcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRSb3cgPSBpdGVtLnJvdyArIGl0ZW0uc2l6ZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1heFJvdyAtIG5leHRSb3cgPj0gZGltcy55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zLnJvdyA9IG5leHRSb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWsgZml4TG9vcDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBuZXdQb3MuY29sID0gTWF0aC5tYXgobmV3UG9zLmNvbCArIDEsIE1hdGgubWluLmFwcGx5KE1hdGgsIGl0ZW1zSW5QYXRoLm1hcCgoaXRlbSkgPT4gaXRlbS5jb2wgKyBkaW1zLngpKSk7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3Mucm93ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXRlbUZpeERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGZpeExvb3A6XHJcbiAgICAgICAgICAgIGZvciAoOyBuZXdQb3Mucm93IDw9IG1heFJvdzspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zSW5QYXRoID0gdGhpcy5fZ2V0SXRlbXNJbkhvcml6b250YWxQYXRoKG5ld1BvcywgZGltcywgbmV3UG9zLmNvbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dENvbCA9IG5ld1Bvcy5jb2w7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0luUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvbCAtIG5leHRDb2wgPj0gZGltcy54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvcy5jb2wgPSBuZXh0Q29sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBmaXhMb29wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dENvbCA9IGl0ZW0uY29sICsgaXRlbS5zaXpleDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF4Q29sIC0gbmV4dENvbCA+PSBkaW1zLngpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdQb3MuY29sID0gbmV4dENvbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhayBmaXhMb29wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5ld1Bvcy5yb3cgPSBNYXRoLm1heChuZXdQb3Mucm93ICsgMSwgTWF0aC5taW4uYXBwbHkoTWF0aCwgaXRlbXNJblBhdGgubWFwKChpdGVtKSA9PiBpdGVtLnJvdyArIGRpbXMueSkpKTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvcy5jb2wgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3UG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEl0ZW1zSW5Ib3Jpem9udGFsUGF0aChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIHN0YXJ0Q29sdW1uOiBudW1iZXIgPSAwKTogTmdHcmlkSXRlbVtdIHtcclxuICAgICAgICBjb25zdCBpdGVtc0luUGF0aDogTmdHcmlkSXRlbVtdID0gW107XHJcbiAgICAgICAgY29uc3QgdG9wUm93OiBudW1iZXIgPSBwb3Mucm93ICsgZGltcy55IC0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXNJbkdyaWQuZm9yRWFjaCgoaXRlbUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jb2wgKyBpdGVtLnNpemV4IC0gMSA8IHN0YXJ0Q29sdW1uKSB7IHJldHVybjsgfSAgICAvLyBJdGVtIGZhbGxzIGFmdGVyIHN0YXJ0IGNvbHVtblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5yb3cgPiB0b3BSb3cpIHsgcmV0dXJuOyB9ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJdGVtIGZhbGxzIGFib3ZlIHBhdGhcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucm93ICsgaXRlbS5zaXpleSAtIDEgPCBwb3Mucm93KSB7IHJldHVybjsgfSAgICAgICAgLy8gSXRlbSBmYWxscyBiZWxvdyBwYXRoXHJcbiAgICAgICAgICAgIGl0ZW1zSW5QYXRoLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtc0luUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRJdGVtc0luVmVydGljYWxQYXRoKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSwgc3RhcnRSb3c6IG51bWJlciA9IDApOiBOZ0dyaWRJdGVtW10ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zSW5QYXRoOiBOZ0dyaWRJdGVtW10gPSBbXTtcclxuICAgICAgICBjb25zdCByaWdodENvbDogbnVtYmVyID0gcG9zLmNvbCArIGRpbXMueCAtIDE7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zSW5HcmlkLmZvckVhY2goKGl0ZW1JZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucm93ICsgaXRlbS5zaXpleSAtIDEgPCBzdGFydFJvdykgeyByZXR1cm47IH0gICAvLyBJdGVtIGZhbGxzIGFib3ZlIHN0YXJ0IHJvd1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jb2wgPiByaWdodENvbCkgeyByZXR1cm47IH0gICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gZmFsbHMgYWZ0ZXIgcGF0aFxyXG4gICAgICAgICAgICBpZiAoaXRlbS5jb2wgKyBpdGVtLnNpemV4IC0gMSA8IHBvcy5jb2wpIHsgcmV0dXJuOyB9ICAgIC8vIEl0ZW0gZmFsbHMgYmVmb3JlIHBhdGhcclxuICAgICAgICAgICAgaXRlbXNJblBhdGgucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zSW5QYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzV2l0aGluQm91bmRzWChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIGFsbG93RXhjZXNzaXZlSXRlbXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhDb2xzID09IDAgfHwgKGFsbG93RXhjZXNzaXZlSXRlbXMgJiYgcG9zLmNvbCA9PSAxKSB8fCAocG9zLmNvbCArIGRpbXMueCAtIDEpIDw9IHRoaXMuX21heENvbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZml4UG9zVG9Cb3VuZHNYKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1gocG9zLCBkaW1zKSkge1xyXG4gICAgICAgICAgICBwb3MuY29sID0gTWF0aC5tYXgodGhpcy5fbWF4Q29scyAtIChkaW1zLnggLSAxKSwgMSk7XHJcbiAgICAgICAgICAgIHBvcy5yb3cgKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZml4U2l6ZVRvQm91bmRzWChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1gocG9zLCBkaW1zKSkge1xyXG4gICAgICAgICAgICBkaW1zLnggPSBNYXRoLm1heCh0aGlzLl9tYXhDb2xzIC0gKHBvcy5jb2wgLSAxKSwgMSk7XHJcbiAgICAgICAgICAgIGRpbXMueSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGltcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc1dpdGhpbkJvdW5kc1kocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4Um93cyA9PSAwIHx8IChhbGxvd0V4Y2Vzc2l2ZUl0ZW1zICYmIHBvcy5yb3cgPT0gMSkgfHwgKHBvcy5yb3cgKyBkaW1zLnkgLSAxKSA8PSB0aGlzLl9tYXhSb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeFBvc1RvQm91bmRzWShwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHBvcywgZGltcykpIHtcclxuICAgICAgICAgICAgcG9zLnJvdyA9IE1hdGgubWF4KHRoaXMuX21heFJvd3MgLSAoZGltcy55IC0gMSksIDEpO1xyXG4gICAgICAgICAgICBwb3MuY29sKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZml4U2l6ZVRvQm91bmRzWShwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1kocG9zLCBkaW1zKSkge1xyXG4gICAgICAgICAgICBkaW1zLnkgPSBNYXRoLm1heCh0aGlzLl9tYXhSb3dzIC0gKHBvcy5yb3cgLSAxKSwgMSk7XHJcbiAgICAgICAgICAgIGRpbXMueCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGltcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc1dpdGhpbkJvdW5kcyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIGFsbG93RXhjZXNzaXZlSXRlbXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1dpdGhpbkJvdW5kc1gocG9zLCBkaW1zLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zKSAmJiB0aGlzLl9pc1dpdGhpbkJvdW5kc1kocG9zLCBkaW1zLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maXhQb3NUb0JvdW5kcyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXhQb3NUb0JvdW5kc1godGhpcy5fZml4UG9zVG9Cb3VuZHNZKHBvcywgZGltcyksIGRpbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeFNpemVUb0JvdW5kcyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpeFNpemVUb0JvdW5kc1gocG9zLCB0aGlzLl9maXhTaXplVG9Cb3VuZHNZKHBvcywgZGltcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZFRvR3JpZChpdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBvczogTmdHcmlkSXRlbVBvc2l0aW9uID0gaXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSA9IGl0ZW0uZ2V0U2l6ZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faGFzR3JpZENvbGxpc2lvbihwb3MsIGRpbXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpeEdyaWRDb2xsaXNpb25zKHBvcywgZGltcyk7XHJcbiAgICAgICAgICAgIHBvcyA9IGl0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWxsb3dPdmVybGFwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uekluZGV4ID0gdGhpcy5fbGFzdFpWYWx1ZSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXNJbkdyaWQuYWRkKGl0ZW0udWlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW1vdmVGcm9tR3JpZChpdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faXRlbXNJbkdyaWQuZGVsZXRlKGl0ZW0udWlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVTaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVybjtcclxuICAgICAgICBsZXQgbWF4Q29sOiBudW1iZXIgPSB0aGlzLl9nZXRNYXhDb2woKTtcclxuICAgICAgICBsZXQgbWF4Um93OiBudW1iZXIgPSB0aGlzLl9nZXRNYXhSb3coKTtcclxuXHJcbiAgICAgICAgaWYgKG1heENvbCAhPSB0aGlzLl9jdXJNYXhDb2wgfHwgbWF4Um93ICE9IHRoaXMuX2N1ck1heFJvdykge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJNYXhDb2wgPSBtYXhDb2w7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1ck1heFJvdyA9IG1heFJvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcxMDAlJyk7Ly8obWF4Q29sICogKHRoaXMuY29sV2lkdGggKyB0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSkrJ3B4Jyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50QmFzZWREeW5hbWljUm93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAobWF4Um93ICogKHRoaXMucm93SGVpZ2h0ICsgdGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkpICsgJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE1heFJvdygpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zUm93czogbnVtYmVyW10gPSBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zSW5HcmlkLCAoaXRlbUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiAwO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5yb3cgKyBpdGVtLnNpemV5IC0gMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGl0ZW1zUm93cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TWF4Q29sKCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgaXRlbXNDb2xzOiBudW1iZXJbXSA9IEFycmF5LmZyb20odGhpcy5faXRlbXNJbkdyaWQsIChpdGVtSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCk7XHJcbiAgICAgICAgICAgIGlmICghaXRlbSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmNvbCArIGl0ZW0uc2l6ZXggLSAxO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgaXRlbXNDb2xzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRNb3VzZVBvc2l0aW9uKGU6IGFueSk6IE5nR3JpZFJhd1Bvc2l0aW9uIHtcclxuICAgICAgICBpZiAoKCg8YW55PndpbmRvdykuVG91Y2hFdmVudCAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkgfHwgKGUudG91Y2hlcyB8fCBlLmNoYW5nZWRUb3VjaGVzKSkge1xyXG4gICAgICAgICAgICBlID0gZS50b3VjaGVzLmxlbmd0aCA+IDAgPyBlLnRvdWNoZXNbMF0gOiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVmUG9zOiBhbnkgPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0OiBudW1iZXIgPSBlLmNsaWVudFggLSByZWZQb3MubGVmdDtcclxuICAgICAgICBsZXQgdG9wOiBudW1iZXIgPSBlLmNsaWVudFkgLSByZWZQb3MudG9wO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXNjYWRlID09ICdkb3duJykgdG9wID0gcmVmUG9zLnRvcCArIHJlZlBvcy5oZWlnaHQgLSBlLmNsaWVudFk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FzY2FkZSA9PSAncmlnaHQnKSBsZWZ0ID0gcmVmUG9zLmxlZnQgKyByZWZQb3Mud2lkdGggLSBlLmNsaWVudFg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcgJiYgdGhpcy5fem9vbU9uRHJhZykge1xyXG4gICAgICAgICAgICBsZWZ0ICo9IDI7XHJcbiAgICAgICAgICAgIHRvcCAqPSAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgdG9wOiB0b3BcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEFic29sdXRlTW91c2VQb3NpdGlvbihlOiBhbnkpOiBOZ0dyaWRSYXdQb3NpdGlvbiB7XHJcbiAgICAgICAgaWYgKCgoPGFueT53aW5kb3cpLlRvdWNoRXZlbnQgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHx8IChlLnRvdWNoZXMgfHwgZS5jaGFuZ2VkVG91Y2hlcykpIHtcclxuICAgICAgICAgICAgZSA9IGUudG91Y2hlcy5sZW5ndGggPiAwID8gZS50b3VjaGVzWzBdIDogZS5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgdG9wOiBlLmNsaWVudFlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbnRhaW5lckNvbHVtbnMoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBtYXhXaWR0aDogbnVtYmVyID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1XaWR0aDogbnVtYmVyID0gdGhpcy5jb2xXaWR0aCArIHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWF4V2lkdGggLyBpdGVtV2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbnRhaW5lclJvd3MoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBtYXhIZWlnaHQ6IG51bWJlciA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMubWFyZ2luVG9wIC0gdGhpcy5tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWF4SGVpZ2h0IC8gKHRoaXMucm93SGVpZ2h0ICsgdGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFNjcmVlbk1hcmdpbigpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG1heFdpZHRoOiBudW1iZXIgPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgY29uc3QgaXRlbVdpZHRoOiBudW1iZXIgPSB0aGlzLmNvbFdpZHRoICsgdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodDtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigobWF4V2lkdGggLSAodGhpcy5fbWF4Q29scyAqIGl0ZW1XaWR0aCkpIC8gMik7O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEl0ZW1Gcm9tUG9zaXRpb24ocG9zaXRpb246IE5nR3JpZFJhd1Bvc2l0aW9uKTogTmdHcmlkSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faXRlbXNJbkdyaWQsIChpdGVtSWQ6IHN0cmluZykgPT4gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCkpLmZpbmQoKGl0ZW06IE5nR3JpZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaXplOiBOZ0dyaWRJdGVtRGltZW5zaW9ucyA9IGl0ZW0uZ2V0RGltZW5zaW9ucygpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3M6IE5nR3JpZFJhd1Bvc2l0aW9uID0gaXRlbS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uLmxlZnQgPj0gcG9zLmxlZnQgJiYgcG9zaXRpb24ubGVmdCA8IChwb3MubGVmdCArIHNpemUud2lkdGgpICYmXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA+PSBwb3MudG9wICYmIHBvc2l0aW9uLnRvcCA8IChwb3MudG9wICsgc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVBsYWNlaG9sZGVyKGl0ZW06IE5nR3JpZEl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IGl0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZGltczogTmdHcmlkSXRlbVNpemUgPSBpdGVtLmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE5nR3JpZFBsYWNlaG9sZGVyKTtcclxuICAgICAgICB2YXIgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TmdHcmlkUGxhY2Vob2xkZXI+ID0gaXRlbS5jb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyUmVmID0gY29tcG9uZW50UmVmO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyOiBOZ0dyaWRQbGFjZWhvbGRlciA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgICBwbGFjZWhvbGRlci5yZWdpc3RlckdyaWQodGhpcyk7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIuc2V0Q2FzY2FkZU1vZGUodGhpcy5jYXNjYWRlKTtcclxuICAgICAgICBwbGFjZWhvbGRlci5zZXRHcmlkUG9zaXRpb24oeyBjb2w6IHBvcy5jb2wsIHJvdzogcG9zLnJvdyB9KTtcclxuICAgICAgICBwbGFjZWhvbGRlci5zZXRTaXplKHsgeDogZGltcy54LCB5OiBkaW1zLnkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZW1pdE9uSXRlbUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBpdGVtT3V0cHV0OiBhbnlbXSA9IEFycmF5LmZyb20odGhpcy5faXRlbXNJbkdyaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKGl0ZW1JZDogc3RyaW5nKSA9PiB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKSlcclxuICAgICAgICAgICAgLmZpbHRlcigoaXRlbTogTmdHcmlkSXRlbSkgPT4gISFpdGVtKVxyXG4gICAgICAgICAgICAubWFwKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiBpdGVtLmdldEV2ZW50T3V0cHV0KCkpO1xyXG5cclxuICAgICAgICB0aGlzLm9uSXRlbUNoYW5nZS5lbWl0KGl0ZW1PdXRwdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RlZmluZUxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICB0aGlzLl9kb2N1bWVudE1vdXNlbW92ZSQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdtb3VzZW1vdmUnKTtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudE1vdXNldXAkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KGRvY3VtZW50LCAnbW91c2V1cCcpO1xyXG4gICAgICAgIHRoaXMuX21vdXNlZG93biQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ21vdXNlZG93bicpO1xyXG4gICAgICAgIHRoaXMuX21vdXNlbW92ZSQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ21vdXNlbW92ZScpO1xyXG4gICAgICAgIHRoaXMuX21vdXNldXAkID0gZnJvbUV2ZW50KGVsZW1lbnQsICdtb3VzZXVwJyk7XHJcbiAgICAgICAgdGhpcy5fdG91Y2hzdGFydCQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ3RvdWNoc3RhcnQnKTtcclxuICAgICAgICB0aGlzLl90b3VjaG1vdmUkID0gZnJvbUV2ZW50KGVsZW1lbnQsICd0b3VjaG1vdmUnKTtcclxuICAgICAgICB0aGlzLl90b3VjaGVuZCQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ3RvdWNoZW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5hYmxlTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbmFibGVkTGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZW5hYmxlTW91c2VMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hEZXZpY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmFibGVUb3VjaExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZW5hYmxlZExpc3RlbmVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kaXNhYmxlTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3ViczogU3Vic2NyaXB0aW9uKSA9PiBzdWJzLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZWRMaXN0ZW5lciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzVG91Y2hEZXZpY2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIF9lbmFibGVUb3VjaExpc3RlbmVycygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0b3VjaHN0YXJ0U3VicyA9IHRoaXMuX3RvdWNoc3RhcnQkLnN1YnNjcmliZSgoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5tb3VzZURvd25FdmVudEhhbmRsZXIoZSkpO1xyXG4gICAgICAgIGNvbnN0IHRvdWNobW92ZVN1YnMgPSB0aGlzLl90b3VjaG1vdmUkLnN1YnNjcmliZSgoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIoZSkpO1xyXG4gICAgICAgIGNvbnN0IHRvdWNoZW5kU3VicyA9IHRoaXMuX3RvdWNoZW5kJC5zdWJzY3JpYmUoKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMubW91c2VVcEV2ZW50SGFuZGxlcihlKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgICAgICAgdG91Y2hzdGFydFN1YnMsXHJcbiAgICAgICAgICAgIHRvdWNobW92ZVN1YnMsXHJcbiAgICAgICAgICAgIHRvdWNoZW5kU3Vic1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5hYmxlTW91c2VMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnRNb3VzZW1vdmVTdWJzID0gdGhpcy5fZG9jdW1lbnRNb3VzZW1vdmUkLnN1YnNjcmliZSgoZTogTW91c2VFdmVudCkgPT4gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIoZSkpO1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50TW91c2V1cFN1YnMgPSB0aGlzLl9kb2N1bWVudE1vdXNldXAkLnN1YnNjcmliZSgoZTogTW91c2VFdmVudCkgPT4gdGhpcy5tb3VzZVVwRXZlbnRIYW5kbGVyKGUpKTtcclxuICAgICAgICBjb25zdCBtb3VzZWRvd25TdWJzID0gdGhpcy5fbW91c2Vkb3duJC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMubW91c2VEb3duRXZlbnRIYW5kbGVyKGUpKTtcclxuICAgICAgICBjb25zdCBtb3VzZW1vdmVTdWJzID0gdGhpcy5fbW91c2Vtb3ZlJC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKGUpKTtcclxuICAgICAgICBjb25zdCBtb3VzZXVwU3VicyA9IHRoaXMuX21vdXNldXAkLnN1YnNjcmliZSgoZTogTW91c2VFdmVudCkgPT4gdGhpcy5tb3VzZVVwRXZlbnRIYW5kbGVyKGUpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICBkb2N1bWVudE1vdXNlbW92ZVN1YnMsXHJcbiAgICAgICAgICAgIGRvY3VtZW50TW91c2V1cFN1YnMsXHJcbiAgICAgICAgICAgIG1vdXNlZG93blN1YnMsXHJcbiAgICAgICAgICAgIG1vdXNlbW92ZVN1YnMsXHJcbiAgICAgICAgICAgIG1vdXNldXBTdWJzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=