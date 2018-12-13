import { Component, ElementRef, Renderer, Directive, EventEmitter, ComponentFactoryResolver, KeyValueDiffers, Output, Renderer2, ViewContainerRef, NgModule } from '@angular/core';
import { __values } from 'tslib';
import { fromEvent } from 'rxjs';

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
var NgGridPlaceholder = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'ng-grid-placeholder',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NgGridPlaceholder.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer }
    ]; };
    return NgGridPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
                    for (var itemsInPath_1 = __values(itemsInPath), itemsInPath_1_1 = itemsInPath_1.next(); !itemsInPath_1_1.done; itemsInPath_1_1 = itemsInPath_1.next()) {
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
                    for (var itemsInPath_2 = __values(itemsInPath), itemsInPath_2_1 = itemsInPath_2.next(); !itemsInPath_2_1.done; itemsInPath_2_1 = itemsInPath_2.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
                for (var resizeDirections_1 = __values(resizeDirections), resizeDirections_1_1 = resizeDirections_1.next(); !resizeDirections_1_1.done; resizeDirections_1_1 = resizeDirections_1.next()) {
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
            for (var _b = __values(this._resizeDirections), _c = _b.next(); !_c.done; _c = _b.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgGridModule = /** @class */ (function () {
    function NgGridModule() {
    }
    NgGridModule.decorators = [
        { type: NgModule, args: [{
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

export { NgGrid, NgGridItem, NgGridPlaceholder, NgGridModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItZ3JpZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhcjItZ3JpZC9oZWxwZXJzL05nR3JpZEhlbHBlcnMudHMiLCJuZzovL2FuZ3VsYXIyLWdyaWQvY29tcG9uZW50cy9OZ0dyaWRQbGFjZWhvbGRlci50cyIsIm5nOi8vYW5ndWxhcjItZ3JpZC9kaXJlY3RpdmVzL05nR3JpZC50cyIsIm5nOi8vYW5ndWxhcjItZ3JpZC9kaXJlY3RpdmVzL05nR3JpZEl0ZW0udHMiLCJuZzovL2FuZ3VsYXIyLWdyaWQvbW9kdWxlcy9OZ0dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nR3JpZEl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9OZ0dyaWRJdGVtXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVVdWlkKCk6IHN0cmluZyB7XHJcblx0cmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG5cdFx0bGV0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG5cdFx0cmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEl0ZW1zQnlQb3NpdGlvbkhvcml6b250YWwoYTogTmdHcmlkSXRlbSwgYjogTmdHcmlkSXRlbSk6IG51bWJlciB7XHJcblx0aWYgKGEuY29sID09PSBiLmNvbCkgeyByZXR1cm4gYS5yb3cgLSBiLnJvdzsgfVxyXG5cdHJldHVybiBhLmNvbCAtIGIuY29sO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEl0ZW1zQnlQb3NpdGlvblZlcnRpY2FsKGE6IE5nR3JpZEl0ZW0sIGI6IE5nR3JpZEl0ZW0pOiBudW1iZXIge1xyXG5cdGlmIChhLnJvdyA9PT0gYi5yb3cpIHsgcmV0dXJuIGEuY29sIC0gYi5jb2w7IH1cclxuXHRyZXR1cm4gYS5yb3cgLSBiLnJvdztcclxufVxyXG4iLCJpbXBvcnQgeyBOZ0dyaWQgfSBmcm9tICcuLi9kaXJlY3RpdmVzL05nR3JpZCc7XHJcbmltcG9ydCB7IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgTmdHcmlkSXRlbVNpemUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lOZ0dyaWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIEV2ZW50RW1pdHRlciwgSG9zdCwgVmlld0VuY2Fwc3VsYXRpb24sIFR5cGUsIENvbXBvbmVudFJlZiwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIFZpZXdDb250YWluZXJSZWYsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLWdyaWQtcGxhY2Vob2xkZXInLFxyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0dyaWRQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9zaXplOiBOZ0dyaWRJdGVtU2l6ZTtcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uOiBOZ0dyaWRJdGVtUG9zaXRpb247XHJcbiAgICBwcml2YXRlIF9uZ0dyaWQ6IE5nR3JpZDtcclxuICAgIHByaXZhdGUgX2Nhc2NhZGVNb2RlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdFbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJHcmlkKG5nR3JpZDogTmdHcmlkKSB7XHJcbiAgICAgICAgdGhpcy5fbmdHcmlkID0gbmdHcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnZ3JpZC1wbGFjZWhvbGRlcicsIHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2l6ZShuZXdTaXplOiBOZ0dyaWRJdGVtU2l6ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRHcmlkUG9zaXRpb24obmV3UG9zaXRpb246IE5nR3JpZEl0ZW1Qb3NpdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDYXNjYWRlTW9kZShjYXNjYWRlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYXNjYWRlTW9kZSA9IGNhc2NhZGU7XHJcbiAgICAgICAgc3dpdGNoIChjYXNjYWRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsICcwcHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAnMHB4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCAnMHB4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgJzBweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgJzBweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsICcwcHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xyXG4gICAgcHJpdmF0ZSBfc2V0RGltZW5zaW9ucyh3OiBudW1iZXIsIGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHcgKyAncHgnKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaCArICdweCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9jYXNjYWRlTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4KScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAteCArICdweCwgJyArIHkgKyAncHgpJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgeCArICdweCwgJyArIC15ICsgJ3B4KScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlY2FsY3VsYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgeDogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5jb2xXaWR0aCArIHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0ICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0KSAqICh0aGlzLl9wb3NpdGlvbi5jb2wgLSAxKSArIHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0ICsgdGhpcy5fbmdHcmlkLnNjcmVlbk1hcmdpbjtcclxuICAgICAgICBjb25zdCB5OiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLnJvd0hlaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3AgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tKSAqICh0aGlzLl9wb3NpdGlvbi5yb3cgLSAxKSArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3A7XHJcbiAgICAgICAgdGhpcy5fc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHc6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQuY29sV2lkdGggKiB0aGlzLl9zaXplLngpICsgKCh0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCkgKiAodGhpcy5fc2l6ZS54IC0gMSkpO1xyXG4gICAgICAgIGNvbnN0IGg6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQucm93SGVpZ2h0ICogdGhpcy5fc2l6ZS55KSArICgodGhpcy5fbmdHcmlkLm1hcmdpblRvcCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20pICogKHRoaXMuX3NpemUueSAtIDEpKTtcclxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKHcsIGgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgRXZlbnRFbWl0dGVyLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEhvc3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBUeXBlLCBDb21wb25lbnRSZWYsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdHcmlkQ29uZmlnLCBOZ0dyaWRJdGVtRXZlbnQsIE5nR3JpZEl0ZW1Qb3NpdGlvbiwgTmdHcmlkSXRlbVNpemUsIE5nR3JpZFJhd1Bvc2l0aW9uLCBOZ0dyaWRJdGVtRGltZW5zaW9ucywgTmdDb25maWdGaXhEaXJlY3Rpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lOZ0dyaWQnO1xyXG5pbXBvcnQgeyBOZ0dyaWRJdGVtIH0gZnJvbSAnLi9OZ0dyaWRJdGVtJztcclxuaW1wb3J0ICogYXMgTmdHcmlkSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvTmdHcmlkSGVscGVycyc7XHJcbmltcG9ydCB7IE5nR3JpZFBsYWNlaG9sZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OZ0dyaWRQbGFjZWhvbGRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW25nR3JpZF0nLFxyXG4gICAgaW5wdXRzOiBbJ2NvbmZpZzogbmdHcmlkJ10sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJyh3aW5kb3c6cmVzaXplKSc6ICdyZXNpemVFdmVudEhhbmRsZXIoJGV2ZW50KScsXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0dyaWQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENPTlNUX0RFRkFVTFRfUkVTSVpFX0RJUkVDVElPTlM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICdib3R0b21yaWdodCcsXHJcbiAgICAgICAgJ2JvdHRvbWxlZnQnLFxyXG4gICAgICAgICd0b3ByaWdodCcsXHJcbiAgICAgICAgJ3RvcGxlZnQnLFxyXG4gICAgICAgICdyaWdodCcsXHJcbiAgICAgICAgJ2xlZnQnLFxyXG4gICAgICAgICdib3R0b20nLFxyXG4gICAgICAgICd0b3AnLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBFdmVudCBFbWl0dGVyc1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWc6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnU3RvcDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplU3RvcDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxBcnJheTxOZ0dyaWRJdGVtRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8TmdHcmlkSXRlbUV2ZW50Pj4oKTtcclxuXHJcbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzXHJcbiAgICBwdWJsaWMgY29sV2lkdGg6IG51bWJlciA9IDI1MDtcclxuICAgIHB1YmxpYyByb3dIZWlnaHQ6IG51bWJlciA9IDI1MDtcclxuICAgIHB1YmxpYyBtaW5Db2xzOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIG1pblJvd3M6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgbWFyZ2luVG9wOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBtYXJnaW5SaWdodDogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgbWFyZ2luQm90dG9tOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBtYXJnaW5MZWZ0OiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBzY3JlZW5NYXJnaW46IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgaXNEcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzUmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBhdXRvU3R5bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHJlc2l6ZUVuYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgZHJhZ0VuYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgY2FzY2FkZTogc3RyaW5nID0gJ3VwJztcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIHJlc2l6ZURpcmVjdGlvbnM6IHN0cmluZ1tdID0gTmdHcmlkLkNPTlNUX0RFRkFVTFRfUkVTSVpFX0RJUkVDVElPTlM7XHJcblxyXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXNcclxuICAgIHByaXZhdGUgX2l0ZW1zOiBNYXA8c3RyaW5nLCBOZ0dyaWRJdGVtPiA9IG5ldyBNYXA8c3RyaW5nLCBOZ0dyaWRJdGVtPigpO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmdJdGVtOiBOZ0dyaWRJdGVtID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3Jlc2l6aW5nSXRlbTogTmdHcmlkSXRlbSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9yZXNpemVEaXJlY3Rpb246IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pdGVtc0luR3JpZDogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcldpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jb250YWluZXJIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21heENvbHM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9tYXhSb3dzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfdmlzaWJsZUNvbHM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF92aXNpYmxlUm93czogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3NldFdpZHRoOiBudW1iZXIgPSAyNTA7XHJcbiAgICBwcml2YXRlIF9zZXRIZWlnaHQ6IG51bWJlciA9IDI1MDtcclxuICAgIHByaXZhdGUgX3Bvc09mZnNldDogTmdHcmlkUmF3UG9zaXRpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYWRkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlclJlZjogQ29tcG9uZW50UmVmPE5nR3JpZFBsYWNlaG9sZGVyPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9maXhUb0dyaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2F1dG9SZXNpemU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2RpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9tYWludGFpblJhdGlvOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9hc3BlY3RSYXRpbzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcHJlZmVyTmV3OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF96b29tT25EcmFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9saW1pdFRvU2NyZWVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9jZW50ZXJUb1NjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY3VyTWF4Um93OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY3VyTWF4Q29sOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ1JlYWR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9yZXNpemVSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfZWxlbWVudEJhc2VkRHluYW1pY1Jvd0hlaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaXRlbUZpeERpcmVjdGlvbjogTmdDb25maWdGaXhEaXJlY3Rpb24gPSAnY2FzY2FkZSc7XHJcbiAgICBwcml2YXRlIF9jb2xsaXNpb25GaXhEaXJlY3Rpb246IE5nQ29uZmlnRml4RGlyZWN0aW9uID0gJ2Nhc2NhZGUnO1xyXG4gICAgcHJpdmF0ZSBfYWxsb3dPdmVybGFwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9jYXNjYWRlUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHByaXZhdGUgX2xhc3RaVmFsdWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgLy8gRXZlbnRzXHJcbiAgICBwcml2YXRlIF9kb2N1bWVudE1vdXNlbW92ZSQ6IE9ic2VydmFibGU8TW91c2VFdmVudD47XHJcbiAgICBwcml2YXRlIF9kb2N1bWVudE1vdXNldXAkOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+O1xyXG4gICAgcHJpdmF0ZSBfbW91c2Vkb3duJDogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PjtcclxuICAgIHByaXZhdGUgX21vdXNlbW92ZSQ6IE9ic2VydmFibGU8TW91c2VFdmVudD47XHJcbiAgICBwcml2YXRlIF9tb3VzZXVwJDogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PjtcclxuICAgIHByaXZhdGUgX3RvdWNoc3RhcnQkOiBPYnNlcnZhYmxlPFRvdWNoRXZlbnQ+O1xyXG4gICAgcHJpdmF0ZSBfdG91Y2htb3ZlJDogT2JzZXJ2YWJsZTxUb3VjaEV2ZW50PjtcclxuICAgIHByaXZhdGUgX3RvdWNoZW5kJDogT2JzZXJ2YWJsZTxUb3VjaEV2ZW50PjtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5hYmxlZExpc3RlbmVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBjb25maWdcclxuICAgIHByaXZhdGUgc3RhdGljIENPTlNUX0RFRkFVTFRfQ09ORklHOiBOZ0dyaWRDb25maWcgPSB7XHJcbiAgICAgICAgbWFyZ2luczogWzEwXSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIG1heF9jb2xzOiAwLFxyXG4gICAgICAgIG1heF9yb3dzOiAwLFxyXG4gICAgICAgIHZpc2libGVfY29sczogMCxcclxuICAgICAgICB2aXNpYmxlX3Jvd3M6IDAsXHJcbiAgICAgICAgY29sX3dpZHRoOiAyNTAsXHJcbiAgICAgICAgcm93X2hlaWdodDogMjUwLFxyXG4gICAgICAgIGNhc2NhZGU6ICd1cCcsXHJcbiAgICAgICAgbWluX3dpZHRoOiAxMDAsXHJcbiAgICAgICAgbWluX2hlaWdodDogMTAwLFxyXG4gICAgICAgIGZpeF90b19ncmlkOiBmYWxzZSxcclxuICAgICAgICBhdXRvX3N0eWxlOiB0cnVlLFxyXG4gICAgICAgIGF1dG9fcmVzaXplOiBmYWxzZSxcclxuICAgICAgICBtYWludGFpbl9yYXRpbzogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyX25ldzogZmFsc2UsXHJcbiAgICAgICAgem9vbV9vbl9kcmFnOiBmYWxzZSxcclxuICAgICAgICBsaW1pdF90b19zY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlcl90b19zY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIHJlc2l6ZV9kaXJlY3Rpb25zOiBOZ0dyaWQuQ09OU1RfREVGQVVMVF9SRVNJWkVfRElSRUNUSU9OUyxcclxuICAgICAgICBlbGVtZW50X2Jhc2VkX3Jvd19oZWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgIGZpeF9pdGVtX3Bvc2l0aW9uX2RpcmVjdGlvbjogJ2Nhc2NhZGUnLFxyXG4gICAgICAgIGZpeF9jb2xsaXNpb25fcG9zaXRpb25fZGlyZWN0aW9uOiAnY2FzY2FkZScsXHJcbiAgICAgICAgYWxsb3dfb3ZlcmxhcDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnID0gTmdHcmlkLkNPTlNUX0RFRkFVTFRfQ09ORklHO1xyXG5cclxuICAgIC8vIFtuZy1ncmlkXSBhdHRyaWJ1dGUgaGFuZGxlclxyXG4gICAgc2V0IGNvbmZpZyh2OiBOZ0dyaWRDb25maWcpIHtcclxuICAgICAgICBpZiAodiA9PSBudWxsIHx8IHR5cGVvZiB2ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldENvbmZpZyh2KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RpZmZlciA9PSBudWxsICYmIHYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kaWZmZXIgPSB0aGlzLl9kaWZmZXJzLmZpbmQodGhpcy5fY29uZmlnKS5jcmVhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuX2NvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2RpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcclxuICAgICAgICBwcml2YXRlIF9uZ0VsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmaW5lTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnZ3JpZCcsIHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9TdHlsZSkgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5zZXRDb25maWcodGhpcy5fY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9kaXNhYmxlTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdlbmVyYXRlSXRlbVVpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHVpZDogc3RyaW5nID0gTmdHcmlkSGVscGVyLmdlbmVyYXRlVXVpZCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXRlbXMuaGFzKHVpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJdGVtVWlkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdWlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBOZ0dyaWRDb25maWcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgICAgIHZhciBtYXhDb2xSb3dDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgeCBpbiBjb25maWcpIHtcclxuICAgICAgICAgICAgdmFyIHZhbCA9IGNvbmZpZ1t4XTtcclxuICAgICAgICAgICAgdmFyIGludFZhbCA9ICF2YWwgPyAwIDogcGFyc2VJbnQodmFsKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoeCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWFyZ2lucyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNYXJnaW5zKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjb2xfd2lkdGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sV2lkdGggPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncm93X2hlaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dIZWlnaHQgPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYXV0b19zdHlsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvU3R5bGUgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhdXRvX3Jlc2l6ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXV0b1Jlc2l6ZSA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RyYWdnYWJsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnRW5hYmxlID0gdmFsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVzaXphYmxlJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUVuYWJsZSA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21heF9yb3dzJzpcclxuICAgICAgICAgICAgICAgICAgICBtYXhDb2xSb3dDaGFuZ2VkID0gbWF4Q29sUm93Q2hhbmdlZCB8fCB0aGlzLl9tYXhSb3dzICE9IGludFZhbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXhSb3dzID0gaW50VmFsIDwgMCA/IDAgOiBpbnRWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtYXhfY29scyc6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Q29sUm93Q2hhbmdlZCA9IG1heENvbFJvd0NoYW5nZWQgfHwgdGhpcy5fbWF4Q29scyAhPSBpbnRWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF4Q29scyA9IGludFZhbCA8IDAgPyAwIDogaW50VmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndmlzaWJsZV9yb3dzJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92aXNpYmxlUm93cyA9IE1hdGgubWF4KGludFZhbCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd2aXNpYmxlX2NvbHMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Zpc2libGVDb2xzID0gTWF0aC5tYXgoaW50VmFsLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21pbl9yb3dzJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pblJvd3MgPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWluX2NvbHMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWluQ29scyA9IE1hdGgubWF4KGludFZhbCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtaW5faGVpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbkhlaWdodCA9IE1hdGgubWF4KGludFZhbCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtaW5fd2lkdGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWluV2lkdGggPSBNYXRoLm1heChpbnRWYWwsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnem9vbV9vbl9kcmFnJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b29tT25EcmFnID0gdmFsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2FzY2FkZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FzY2FkZSAhPSB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNjYWRlID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpeF90b19ncmlkJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maXhUb0dyaWQgPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtYWludGFpbl9yYXRpbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFpbnRhaW5SYXRpbyA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3ByZWZlcl9uZXcnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZlck5ldyA9IHZhbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbWl0X3RvX3NjcmVlbic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGltaXRUb1NjcmVlbiA9ICF0aGlzLl9hdXRvUmVzaXplICYmICEhdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2VudGVyX3RvX3NjcmVlbic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2VudGVyVG9TY3JlZW4gPSB2YWwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyZXNpemVfZGlyZWN0aW9ucyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVEaXJlY3Rpb25zID0gdmFsIHx8IFsnYm90dG9tcmlnaHQnLCAnYm90dG9tbGVmdCcsICd0b3ByaWdodCcsICd0b3BsZWZ0JywgJ3JpZ2h0JywgJ2xlZnQnLCAnYm90dG9tJywgJ3RvcCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZWxlbWVudF9iYXNlZF9yb3dfaGVpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50QmFzZWREeW5hbWljUm93SGVpZ2h0ID0gISF2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaXhfaXRlbV9wb3NpdGlvbl9kaXJlY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1GaXhEaXJlY3Rpb24gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaXhfY29sbGlzaW9uX3Bvc2l0aW9uX2RpcmVjdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWxsb3dfb3ZlcmxhcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWxsb3dPdmVybGFwID0gISF2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbGxvd092ZXJsYXAgJiYgdGhpcy5jYXNjYWRlICE9PSAnb2ZmJyAmJiB0aGlzLmNhc2NhZGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIG92ZXJsYXAgaXRlbXMgd2hlbiBhIGNhc2NhZGUgZGlyZWN0aW9uIGlzIHNldC4nKTtcclxuICAgICAgICAgICAgdGhpcy5fYWxsb3dPdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kcmFnRW5hYmxlIHx8IHRoaXMucmVzaXplRW5hYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuYWJsZUxpc3RlbmVycygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pdGVtRml4RGlyZWN0aW9uID09PSAnY2FzY2FkZScpIHtcclxuICAgICAgICAgICAgdGhpcy5faXRlbUZpeERpcmVjdGlvbiA9IHRoaXMuX2dldEZpeERpcmVjdGlvbkZyb21DYXNjYWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID09PSAnY2FzY2FkZScpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID0gdGhpcy5fZ2V0Rml4RGlyZWN0aW9uRnJvbUNhc2NhZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9saW1pdFRvU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01heENvbHMgPSB0aGlzLl9nZXRDb250YWluZXJDb2x1bW5zKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbWF4Q29scyAhPSBuZXdNYXhDb2xzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXhDb2xzID0gbmV3TWF4Q29scztcclxuICAgICAgICAgICAgICAgIG1heENvbFJvd0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbGltaXRUb1NjcmVlbiAmJiB0aGlzLl9jZW50ZXJUb1NjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbk1hcmdpbiA9IHRoaXMuX2dldFNjcmVlbk1hcmdpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuTWFyZ2luID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9tYWludGFpblJhdGlvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbFdpZHRoICYmIHRoaXMucm93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IHRoaXMuY29sV2lkdGggLyB0aGlzLnJvd0hlaWdodDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21haW50YWluUmF0aW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heENvbFJvd0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21heENvbHMgPiAwICYmIHRoaXMuX21heFJvd3MgPiAwKSB7ICAgIC8vICAgIENhbid0IGhhdmUgYm90aCwgcHJpb3JpdGlzZSBvbiBjYXNjYWRlXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY2FzY2FkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF4Q29scyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXhSb3dzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uc0FmdGVyTWF4Q2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYWxjdWxhdGVDb2xXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVJvd0hlaWdodCgpO1xyXG5cclxuICAgICAgICB2YXIgbWF4V2lkdGggPSB0aGlzLl9tYXhDb2xzICogdGhpcy5jb2xXaWR0aDtcclxuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gdGhpcy5fbWF4Um93cyAqIHRoaXMucm93SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAobWF4V2lkdGggPiAwICYmIHRoaXMubWluV2lkdGggPiBtYXhXaWR0aCkgdGhpcy5taW5XaWR0aCA9IDAuNzUgKiB0aGlzLmNvbFdpZHRoO1xyXG4gICAgICAgIGlmIChtYXhIZWlnaHQgPiAwICYmIHRoaXMubWluSGVpZ2h0ID4gbWF4SGVpZ2h0KSB0aGlzLm1pbkhlaWdodCA9IDAuNzUgKiB0aGlzLnJvd0hlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWluV2lkdGggPiB0aGlzLmNvbFdpZHRoKSB0aGlzLm1pbkNvbHMgPSBNYXRoLm1heCh0aGlzLm1pbkNvbHMsIE1hdGguY2VpbCh0aGlzLm1pbldpZHRoIC8gdGhpcy5jb2xXaWR0aCkpO1xyXG4gICAgICAgIGlmICh0aGlzLm1pbkhlaWdodCA+IHRoaXMucm93SGVpZ2h0KSB0aGlzLm1pblJvd3MgPSBNYXRoLm1heCh0aGlzLm1pblJvd3MsIE1hdGguY2VpbCh0aGlzLm1pbkhlaWdodCAvIHRoaXMucm93SGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9tYXhDb2xzID4gMCAmJiB0aGlzLm1pbkNvbHMgPiB0aGlzLl9tYXhDb2xzKSB0aGlzLm1pbkNvbHMgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXhSb3dzID4gMCAmJiB0aGlzLm1pblJvd3MgPiB0aGlzLl9tYXhSb3dzKSB0aGlzLm1pblJvd3MgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVSYXRpbygpO1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUZyb21HcmlkKGl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtLnNldENhc2NhZGVNb2RlKHRoaXMuY2FzY2FkZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW06IE5nR3JpZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5yZWNhbGN1bGF0ZVNlbGYoKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkVG9HcmlkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbVBvc2l0aW9uKGl0ZW1JZDogc3RyaW5nKTogTmdHcmlkSXRlbVBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaGFzKGl0ZW1JZCkgPyB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKS5nZXRHcmlkUG9zaXRpb24oKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW1TaXplKGl0ZW1JZDogc3RyaW5nKTogTmdHcmlkSXRlbVNpemUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5oYXMoaXRlbUlkKSA/IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpLmdldFNpemUoKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nRG9DaGVjaygpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fZGlmZmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZXMgPSB0aGlzLl9kaWZmZXIuZGlmZih0aGlzLl9jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbHlDaGFuZ2VzKGNoYW5nZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1hcmdpbnMobWFyZ2luczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFyZ2luVG9wID0gTWF0aC5tYXgocGFyc2VJbnQobWFyZ2luc1swXSksIDApO1xyXG4gICAgICAgIHRoaXMubWFyZ2luUmlnaHQgPSBtYXJnaW5zLmxlbmd0aCA+PSAyID8gTWF0aC5tYXgocGFyc2VJbnQobWFyZ2luc1sxXSksIDApIDogdGhpcy5tYXJnaW5Ub3A7XHJcbiAgICAgICAgdGhpcy5tYXJnaW5Cb3R0b20gPSBtYXJnaW5zLmxlbmd0aCA+PSAzID8gTWF0aC5tYXgocGFyc2VJbnQobWFyZ2luc1syXSksIDApIDogdGhpcy5tYXJnaW5Ub3A7XHJcbiAgICAgICAgdGhpcy5tYXJnaW5MZWZ0ID0gbWFyZ2lucy5sZW5ndGggPj0gNCA/IE1hdGgubWF4KHBhcnNlSW50KG1hcmdpbnNbM10pLCAwKSA6IHRoaXMubWFyZ2luUmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZURyYWcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzYWJsZURyYWcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZVJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZUVuYWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVSZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVFbmFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSXRlbShuZ0l0ZW06IE5nR3JpZEl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBuZ0l0ZW0uc2V0Q2FzY2FkZU1vZGUodGhpcy5jYXNjYWRlKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9wcmVmZXJOZXcpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1BvcyA9IHRoaXMuX2ZpeEdyaWRQb3NpdGlvbihuZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCksIG5nSXRlbS5nZXRTaXplKCkpO1xyXG4gICAgICAgICAgICBuZ0l0ZW0uc2V0R3JpZFBvc2l0aW9uKG5ld1Bvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmdJdGVtLnVpZCA9PT0gbnVsbCB8fCB0aGlzLl9pdGVtcy5oYXMobmdJdGVtLnVpZCkpIHtcclxuICAgICAgICAgICAgbmdJdGVtLnVpZCA9IHRoaXMuZ2VuZXJhdGVJdGVtVWlkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pdGVtcy5zZXQobmdJdGVtLnVpZCwgbmdJdGVtKTtcclxuICAgICAgICB0aGlzLl9hZGRUb0dyaWQobmdJdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnRyaWdnZXJDYXNjYWRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG5nSXRlbS5yZWNhbGN1bGF0ZVNlbGYoKTtcclxuICAgICAgICAgICAgbmdJdGVtLm9uQ2FzY2FkZUV2ZW50KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lbWl0T25JdGVtQ2hhbmdlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKG5nSXRlbTogTmdHcmlkSXRlbSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlbW92ZUZyb21HcmlkKG5nSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZShuZ0l0ZW0udWlkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnRyaWdnZXJDYXNjYWRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4gaXRlbS5yZWNhbGN1bGF0ZVNlbGYoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtaXRPbkl0ZW1DaGFuZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlSXRlbShuZ0l0ZW06IE5nR3JpZEl0ZW0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZChuZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX2FkZFRvR3JpZChuZ0l0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLnRyaWdnZXJDYXNjYWRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuICAgICAgICAgICAgbmdJdGVtLm9uQ2FzY2FkZUV2ZW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyaWdnZXJDYXNjYWRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FzY2FkZVByb21pc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FzY2FkZVByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZTogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FzY2FkZVByb21pc2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXNjYWRlUHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJpZ2dlclJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZUV2ZW50SGFuZGxlcihudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzaXplRXZlbnRIYW5kbGVyKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZUNvbFdpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlUm93SGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJhdGlvKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9saW1pdFRvU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01heENvbHVtbnMgPSB0aGlzLl9nZXRDb250YWluZXJDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhDb2xzICE9PSBuZXdNYXhDb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXhDb2xzID0gbmV3TWF4Q29sdW1ucztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uc0FmdGVyTWF4Q2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXNjYWRlR3JpZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2VudGVyVG9TY3JlZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuTWFyZ2luID0gdGhpcy5fZ2V0U2NyZWVuTWFyZ2luKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbTogTmdHcmlkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVjYWxjdWxhdGVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYXV0b1Jlc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlY2FsY3VsYXRlU2VsZigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW91c2VEb3duRXZlbnRIYW5kbGVyKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIG1vdXNlUG9zID0gdGhpcy5fZ2V0TW91c2VQb3NpdGlvbihlKTtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuX2dldEl0ZW1Gcm9tUG9zaXRpb24obW91c2VQb3MpO1xyXG5cclxuICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZURpcmVjdGlvbjogc3RyaW5nID0gaXRlbS5jYW5SZXNpemUoZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZUVuYWJsZSAmJiByZXNpemVEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXplUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemVEaXJlY3Rpb24gPSByZXNpemVEaXJlY3Rpb247XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRyYWdFbmFibGUgJiYgaXRlbS5jYW5EcmFnKGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbSA9IGl0ZW07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtUG9zID0gaXRlbS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NPZmZzZXQgPSB7ICdsZWZ0JzogKG1vdXNlUG9zLmxlZnQgLSBpdGVtUG9zLmxlZnQpLCAndG9wJzogKG1vdXNlUG9zLnRvcCAtIGl0ZW1Qb3MudG9wKSB9XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3VzZVVwRXZlbnRIYW5kbGVyKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnU3RvcChlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZXNpemluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemVTdG9wKGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZHJhZ1JlYWR5IHx8IHRoaXMuX3Jlc2l6ZVJlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuRHJhZygpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhblJlc2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZVJlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZVN0YXJ0KGUpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2RyYWdSZWFkeSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnQoZSk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnKGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Jlc2l6aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZShlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbW91c2VQb3MgPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuX2dldEl0ZW1Gcm9tUG9zaXRpb24obW91c2VQb3MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ub25Nb3VzZU1vdmUoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gICAgUHJpdmF0ZSBtZXRob2RzXHJcbiAgICBwcml2YXRlIF9nZXRGaXhEaXJlY3Rpb25Gcm9tQ2FzY2FkZSgpOiBOZ0NvbmZpZ0ZpeERpcmVjdGlvbiB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNhc2NhZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF91cGRhdGVQb3NpdGlvbnNBZnRlck1heENoYW5nZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBpdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB2YXIgZGltcyA9IGl0ZW0uZ2V0U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9oYXNHcmlkQ29sbGlzaW9uKHBvcywgZGltcykgJiYgdGhpcy5faXNXaXRoaW5Cb3VuZHMocG9zLCBkaW1zKSAmJiBkaW1zLnggPD0gdGhpcy5fbWF4Q29scyAmJiBkaW1zLnkgPD0gdGhpcy5fbWF4Um93cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhDb2xzID4gMCAmJiBkaW1zLnggPiB0aGlzLl9tYXhDb2xzKSB7XHJcbiAgICAgICAgICAgICAgICBkaW1zLnggPSB0aGlzLl9tYXhDb2xzO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRTaXplKGRpbXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21heFJvd3MgPiAwICYmIGRpbXMueSA+IHRoaXMuX21heFJvd3MpIHtcclxuICAgICAgICAgICAgICAgIGRpbXMueSA9IHRoaXMuX21heFJvd3M7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldFNpemUoZGltcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNHcmlkQ29sbGlzaW9uKHBvcywgZGltcykgfHwgIXRoaXMuX2lzV2l0aGluQm91bmRzKHBvcywgZGltcywgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMuX2ZpeEdyaWRQb3NpdGlvbihwb3MsIGRpbXMpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRHcmlkUG9zaXRpb24obmV3UG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9hZGRUb0dyaWQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ29sV2lkdGgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9SZXNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21heENvbHMgPiAwIHx8IHRoaXMuX3Zpc2libGVDb2xzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heENvbHMgPSB0aGlzLl9tYXhDb2xzID4gMCA/IHRoaXMuX21heENvbHMgOiB0aGlzLl92aXNpYmxlQ29scztcclxuICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aDogbnVtYmVyID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjb2xXaWR0aDogbnVtYmVyID0gTWF0aC5mbG9vcihtYXhXaWR0aCAvIG1heENvbHMpO1xyXG4gICAgICAgICAgICAgICAgY29sV2lkdGggLT0gKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbFdpZHRoID4gMCkgdGhpcy5jb2xXaWR0aCA9IGNvbFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29sV2lkdGggPCB0aGlzLm1pbldpZHRoIHx8IHRoaXMubWluQ29scyA+IHRoaXMuX2NvbmZpZy5taW5fY29scykge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkNvbHMgPSBNYXRoLm1heCh0aGlzLl9jb25maWcubWluX2NvbHMsIE1hdGguY2VpbCh0aGlzLm1pbldpZHRoIC8gdGhpcy5jb2xXaWR0aCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWxjdWxhdGVSb3dIZWlnaHQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9SZXNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21heFJvd3MgPiAwIHx8IHRoaXMuX3Zpc2libGVSb3dzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heFJvd3MgPSB0aGlzLl9tYXhSb3dzID4gMCA/IHRoaXMuX21heFJvd3MgOiB0aGlzLl92aXNpYmxlUm93cztcclxuICAgICAgICAgICAgICAgIGxldCBtYXhIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZWxlbWVudEJhc2VkRHluYW1pY1Jvd0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMubWFyZ2luVG9wIC0gdGhpcy5tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJvd0hlaWdodDogbnVtYmVyID0gTWF0aC5tYXgoTWF0aC5mbG9vcihtYXhIZWlnaHQgLyBtYXhSb3dzKSwgdGhpcy5taW5IZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0IC09ICh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dIZWlnaHQgPiAwKSB0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvd0hlaWdodCA8IHRoaXMubWluSGVpZ2h0IHx8IHRoaXMubWluUm93cyA+IHRoaXMuX2NvbmZpZy5taW5fcm93cykge1xyXG4gICAgICAgICAgICB0aGlzLm1pblJvd3MgPSBNYXRoLm1heCh0aGlzLl9jb25maWcubWluX3Jvd3MsIE1hdGguY2VpbCh0aGlzLm1pbkhlaWdodCAvIHRoaXMucm93SGVpZ2h0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVJhdGlvKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fYXV0b1Jlc2l6ZSB8fCAhdGhpcy5fbWFpbnRhaW5SYXRpbykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWF4Q29scyA+IDAgJiYgdGhpcy5fdmlzaWJsZVJvd3MgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvd0hlaWdodCA9IHRoaXMuY29sV2lkdGggLyB0aGlzLl9hc3BlY3RSYXRpbztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21heFJvd3MgPiAwICYmIHRoaXMuX3Zpc2libGVDb2xzIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xXaWR0aCA9IHRoaXMuX2FzcGVjdFJhdGlvICogdGhpcy5yb3dIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9tYXhDb2xzID09IDAgJiYgdGhpcy5fbWF4Um93cyA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aXNpYmxlQ29scyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93SGVpZ2h0ID0gdGhpcy5jb2xXaWR0aCAvIHRoaXMuX2FzcGVjdFJhdGlvO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3Zpc2libGVSb3dzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xXaWR0aCA9IHRoaXMuX2FzcGVjdFJhdGlvICogdGhpcy5yb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwbHlDaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbSgocmVjb3JkOiBhbnkpID0+IHsgdGhpcy5fY29uZmlnW3JlY29yZC5rZXldID0gcmVjb3JkLmN1cnJlbnRWYWx1ZTsgfSk7XHJcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoQ2hhbmdlZEl0ZW0oKHJlY29yZDogYW55KSA9PiB7IHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XSA9IHJlY29yZC5jdXJyZW50VmFsdWU7IH0pO1xyXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaFJlbW92ZWRJdGVtKChyZWNvcmQ6IGFueSkgPT4geyBkZWxldGUgdGhpcy5fY29uZmlnW3JlY29yZC5rZXldOyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb25maWcodGhpcy5fY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZXNpemVTdGFydChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVzaXplRW5hYmxlIHx8ICF0aGlzLl9yZXNpemluZ0l0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gICAgU2V0dXBcclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc3RhcnRNb3ZpbmcoKTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZCh0aGlzLl9yZXNpemluZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyKHRoaXMuX3Jlc2l6aW5nSXRlbSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbGxvd092ZXJsYXApIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnpJbmRleCA9IHRoaXMuX2xhc3RaVmFsdWUrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIFN0YXR1cyBGbGFnc1xyXG4gICAgICAgIHRoaXMuaXNSZXNpemluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmVzaXplUmVhZHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgRXZlbnRzXHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZVN0YXJ0LmVtaXQodGhpcy5fcmVzaXppbmdJdGVtKTtcclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0ub25SZXNpemVTdGFydEV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ1N0YXJ0KGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kcmFnRW5hYmxlIHx8ICF0aGlzLl9kcmFnZ2luZ0l0ZW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gICAgU3RhcnQgZHJhZ2dpbmdcclxuICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0uc3RhcnRNb3ZpbmcoKTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyKHRoaXMuX2RyYWdnaW5nSXRlbSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbGxvd092ZXJsYXApIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtLnpJbmRleCA9IHRoaXMuX2xhc3RaVmFsdWUrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIFN0YXR1cyBGbGFnc1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1JlYWR5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vICAgIEV2ZW50c1xyXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbS5vbkRyYWdTdGFydEV2ZW50KCk7XHJcblxyXG4gICAgICAgIC8vICAgIFpvb21cclxuICAgICAgICBpZiAodGhpcy5fem9vbU9uRHJhZykge1xyXG4gICAgICAgICAgICB0aGlzLl96b29tT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3pvb21PdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICdzY2FsZSgwLjUsIDAuNSknKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZXNldFpvb20oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kcmFnKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoKDxhbnk+ZG9jdW1lbnQpLnNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAoPGFueT5kb2N1bWVudCkuc2VsZWN0aW9uLmVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbW91c2VQb3MgPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG4gICAgICAgIHZhciBuZXdMID0gKG1vdXNlUG9zLmxlZnQgLSB0aGlzLl9wb3NPZmZzZXQubGVmdCk7XHJcbiAgICAgICAgdmFyIG5ld1QgPSAobW91c2VQb3MudG9wIC0gdGhpcy5fcG9zT2Zmc2V0LnRvcCk7XHJcblxyXG4gICAgICAgIHZhciBpdGVtUG9zID0gdGhpcy5fZHJhZ2dpbmdJdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBncmlkUG9zID0gdGhpcy5fY2FsY3VsYXRlR3JpZFBvc2l0aW9uKG5ld0wsIG5ld1QpO1xyXG4gICAgICAgIHZhciBkaW1zID0gdGhpcy5fZHJhZ2dpbmdJdGVtLmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgZ3JpZFBvcyA9IHRoaXMuX2ZpeFBvc1RvQm91bmRzWChncmlkUG9zLCBkaW1zKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1koZ3JpZFBvcywgZGltcykpIHtcclxuICAgICAgICAgICAgZ3JpZFBvcyA9IHRoaXMuX2ZpeFBvc1RvQm91bmRzWShncmlkUG9zLCBkaW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChncmlkUG9zLmNvbCAhPSBpdGVtUG9zLmNvbCB8fCBncmlkUG9zLnJvdyAhPSBpdGVtUG9zLnJvdykge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0uc2V0R3JpZFBvc2l0aW9uKGdyaWRQb3MsIHRoaXMuX2ZpeFRvR3JpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyUmVmLmluc3RhbmNlLnNldEdyaWRQb3NpdGlvbihncmlkUG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChbJ3VwJywgJ2Rvd24nLCAnbGVmdCcsICdyaWdodCddLmluZGV4T2YodGhpcy5jYXNjYWRlKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maXhHcmlkQ29sbGlzaW9ucyhncmlkUG9zLCBkaW1zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKGdyaWRQb3MsIGRpbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2ZpeFRvR3JpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0uc2V0UG9zaXRpb24obmV3TCwgbmV3VCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KHRoaXMuX2RyYWdnaW5nSXRlbSk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtLm9uRHJhZ0V2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzaXplKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Jlc2l6aW5nKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKCg8YW55PmRvY3VtZW50KS5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgKDxhbnk+ZG9jdW1lbnQpLnNlbGVjdGlvbi5lbXB0eSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW91c2VQb3MgPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1Qb3MgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBpdGVtRGltcyA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5nZXREaW1lbnNpb25zKCk7XHJcbiAgICAgICAgY29uc3QgZW5kQ29ybmVyID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiBpdGVtUG9zLmxlZnQgKyBpdGVtRGltcy53aWR0aCxcclxuICAgICAgICAgICAgdG9wOiBpdGVtUG9zLnRvcCArIGl0ZW1EaW1zLmhlaWdodCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZVRvcCA9IHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygndG9wJyk7XHJcbiAgICAgICAgY29uc3QgcmVzaXplQm90dG9tID0gdGhpcy5fcmVzaXplRGlyZWN0aW9uLmluY2x1ZGVzKCdib3R0b20nKTtcclxuICAgICAgICBjb25zdCByZXNpemVMZWZ0ID0gdGhpcy5fcmVzaXplRGlyZWN0aW9uLmluY2x1ZGVzKCdsZWZ0JylcclxuICAgICAgICBjb25zdCByZXNpemVSaWdodCA9IHRoaXMuX3Jlc2l6ZURpcmVjdGlvbi5pbmNsdWRlcygncmlnaHQnKTtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyB3aWR0aCBhbmQgaGVpZ2h0IGJhc2VkIHVwb24gcmVzaXplIGRpcmVjdGlvblxyXG4gICAgICAgIGxldCBuZXdXID0gcmVzaXplUmlnaHRcclxuICAgICAgICAgICAgPyAobW91c2VQb3MubGVmdCAtIGl0ZW1Qb3MubGVmdCArIDEpXHJcbiAgICAgICAgICAgIDogcmVzaXplTGVmdFxyXG4gICAgICAgICAgICAgICAgPyAoZW5kQ29ybmVyLmxlZnQgLSBtb3VzZVBvcy5sZWZ0ICsgMSlcclxuICAgICAgICAgICAgICAgIDogaXRlbURpbXMud2lkdGg7XHJcbiAgICAgICAgbGV0IG5ld0ggPSByZXNpemVCb3R0b21cclxuICAgICAgICAgICAgPyAobW91c2VQb3MudG9wIC0gaXRlbVBvcy50b3AgKyAxKVxyXG4gICAgICAgICAgICA6IHJlc2l6ZVRvcFxyXG4gICAgICAgICAgICAgICAgPyAoZW5kQ29ybmVyLnRvcCAtIG1vdXNlUG9zLnRvcCArIDEpXHJcbiAgICAgICAgICAgICAgICA6IGl0ZW1EaW1zLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKG5ld1cgPCB0aGlzLm1pbldpZHRoKVxyXG4gICAgICAgICAgICBuZXdXID0gdGhpcy5taW5XaWR0aDtcclxuICAgICAgICBpZiAobmV3SCA8IHRoaXMubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICBuZXdIID0gdGhpcy5taW5IZWlnaHQ7XHJcbiAgICAgICAgaWYgKG5ld1cgPCB0aGlzLl9yZXNpemluZ0l0ZW0ubWluV2lkdGgpXHJcbiAgICAgICAgICAgIG5ld1cgPSB0aGlzLl9yZXNpemluZ0l0ZW0ubWluV2lkdGg7XHJcbiAgICAgICAgaWYgKG5ld0ggPCB0aGlzLl9yZXNpemluZ0l0ZW0ubWluSGVpZ2h0KVxyXG4gICAgICAgICAgICBuZXdIID0gdGhpcy5fcmVzaXppbmdJdGVtLm1pbkhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IG5ld1ggPSBpdGVtUG9zLmxlZnQ7XHJcbiAgICAgICAgbGV0IG5ld1kgPSBpdGVtUG9zLnRvcDtcclxuXHJcbiAgICAgICAgaWYgKHJlc2l6ZUxlZnQpXHJcbiAgICAgICAgICAgIG5ld1ggPSBlbmRDb3JuZXIubGVmdCAtIG5ld1c7XHJcbiAgICAgICAgaWYgKHJlc2l6ZVRvcClcclxuICAgICAgICAgICAgbmV3WSA9IGVuZENvcm5lci50b3AgLSBuZXdIO1xyXG5cclxuICAgICAgICBsZXQgY2FsY1NpemUgPSB0aGlzLl9jYWxjdWxhdGVHcmlkU2l6ZShuZXdXLCBuZXdIKTtcclxuICAgICAgICBjb25zdCBpdGVtU2l6ZSA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgY29uc3QgaUdyaWRQb3MgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgYm90dG9tUmlnaHRDb3JuZXIgPSB7XHJcbiAgICAgICAgICAgIGNvbDogaUdyaWRQb3MuY29sICsgaXRlbVNpemUueCxcclxuICAgICAgICAgICAgcm93OiBpR3JpZFBvcy5yb3cgKyBpdGVtU2l6ZS55LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBpR3JpZFBvcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9yZXNpemVEaXJlY3Rpb24uaW5jbHVkZXMoJ3RvcCcpKVxyXG4gICAgICAgICAgICB0YXJnZXRQb3Mucm93ID0gYm90dG9tUmlnaHRDb3JuZXIucm93IC0gY2FsY1NpemUueTtcclxuICAgICAgICBpZiAodGhpcy5fcmVzaXplRGlyZWN0aW9uLmluY2x1ZGVzKCdsZWZ0JykpXHJcbiAgICAgICAgICAgIHRhcmdldFBvcy5jb2wgPSBib3R0b21SaWdodENvcm5lci5jb2wgLSBjYWxjU2l6ZS54O1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWCh0YXJnZXRQb3MsIGNhbGNTaXplKSlcclxuICAgICAgICAgICAgY2FsY1NpemUgPSB0aGlzLl9maXhTaXplVG9Cb3VuZHNYKHRhcmdldFBvcywgY2FsY1NpemUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWSh0YXJnZXRQb3MsIGNhbGNTaXplKSlcclxuICAgICAgICAgICAgY2FsY1NpemUgPSB0aGlzLl9maXhTaXplVG9Cb3VuZHNZKHRhcmdldFBvcywgY2FsY1NpemUpO1xyXG5cclxuICAgICAgICBjYWxjU2l6ZSA9IHRoaXMuX3Jlc2l6aW5nSXRlbS5maXhSZXNpemUoY2FsY1NpemUpO1xyXG5cclxuICAgICAgICBpZiAoY2FsY1NpemUueCAhPSBpdGVtU2l6ZS54IHx8IGNhbGNTaXplLnkgIT0gaXRlbVNpemUueSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc2V0R3JpZFBvc2l0aW9uKHRhcmdldFBvcywgdGhpcy5fZml4VG9HcmlkKTtcclxuICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXJSZWYuaW5zdGFuY2Uuc2V0R3JpZFBvc2l0aW9uKHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbS5zZXRTaXplKGNhbGNTaXplLCB0aGlzLl9maXhUb0dyaWQpO1xyXG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZi5pbnN0YW5jZS5zZXRTaXplKGNhbGNTaXplKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChbJ3VwJywgJ2Rvd24nLCAnbGVmdCcsICdyaWdodCddLmluZGV4T2YodGhpcy5jYXNjYWRlKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maXhHcmlkQ29sbGlzaW9ucyh0YXJnZXRQb3MsIGNhbGNTaXplKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKHRhcmdldFBvcywgY2FsY1NpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2ZpeFRvR3JpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc2V0RGltZW5zaW9ucyhuZXdXLCBuZXdIKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnNldFBvc2l0aW9uKG5ld1gsIG5ld1kpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZS5lbWl0KHRoaXMuX3Jlc2l6aW5nSXRlbSk7XHJcbiAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLm9uUmVzaXplRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kcmFnU3RvcChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1Qb3MgPSB0aGlzLl9kcmFnZ2luZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbS5zZXRHcmlkUG9zaXRpb24oaXRlbVBvcyk7XHJcbiAgICAgICAgdGhpcy5fYWRkVG9HcmlkKHRoaXMuX2RyYWdnaW5nSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0uc3RvcE1vdmluZygpO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbS5vbkRyYWdTdG9wRXZlbnQoKTtcclxuICAgICAgICB0aGlzLm9uRHJhZ1N0b3AuZW1pdCh0aGlzLl9kcmFnZ2luZ0l0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLl9jbGVhbkRyYWcoKTtcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2VtaXRPbkl0ZW1DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21PbkRyYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRab29tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Jlc2l6ZVN0b3AoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVzaXppbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc1Jlc2l6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1EaW1zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldFNpemUoKTtcclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc2V0U2l6ZShpdGVtRGltcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1Qb3MgPSB0aGlzLl9yZXNpemluZ0l0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5fcmVzaXppbmdJdGVtLnNldEdyaWRQb3NpdGlvbihpdGVtUG9zKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkVG9HcmlkKHRoaXMuX3Jlc2l6aW5nSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2Nhc2NhZGVHcmlkKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZXNpemluZ0l0ZW0uc3RvcE1vdmluZygpO1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbS5vblJlc2l6ZVN0b3BFdmVudCgpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemVTdG9wLmVtaXQodGhpcy5fcmVzaXppbmdJdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2xlYW5SZXNpemUoKTtcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2VtaXRPbkl0ZW1DaGFuZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGVhbkRyYWcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wb3NPZmZzZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdSZWFkeSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsZWFuUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nSXRlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcmVzaXplRGlyZWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzUmVzaXppbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9yZXNpemVSZWFkeSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUdyaWRTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogTmdHcmlkSXRlbVNpemUge1xyXG4gICAgICAgIHdpZHRoICs9IHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b207XHJcblxyXG4gICAgICAgIHZhciBzaXpleCA9IE1hdGgubWF4KHRoaXMubWluQ29scywgTWF0aC5yb3VuZCh3aWR0aCAvICh0aGlzLmNvbFdpZHRoICsgdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkpKTtcclxuICAgICAgICB2YXIgc2l6ZXkgPSBNYXRoLm1heCh0aGlzLm1pblJvd3MsIE1hdGgucm91bmQoaGVpZ2h0IC8gKHRoaXMucm93SGVpZ2h0ICsgdGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkpKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1goeyBjb2w6IDEsIHJvdzogMSB9LCB7IHg6IHNpemV4LCB5OiBzaXpleSB9KSkgc2l6ZXggPSB0aGlzLl9tYXhDb2xzO1xyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHsgY29sOiAxLCByb3c6IDEgfSwgeyB4OiBzaXpleCwgeTogc2l6ZXkgfSkpIHNpemV5ID0gdGhpcy5fbWF4Um93cztcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgJ3gnOiBzaXpleCwgJ3knOiBzaXpleSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUdyaWRQb3NpdGlvbihsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKTogTmdHcmlkSXRlbVBvc2l0aW9uIHtcclxuICAgICAgICB2YXIgY29sID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChsZWZ0IC8gKHRoaXMuY29sV2lkdGggKyB0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSkgKyAxKTtcclxuICAgICAgICB2YXIgcm93ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh0b3AgLyAodGhpcy5yb3dIZWlnaHQgKyB0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSkgKyAxKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1goeyBjb2w6IGNvbCwgcm93OiByb3cgfSwgeyB4OiAxLCB5OiAxIH0pKSBjb2wgPSB0aGlzLl9tYXhDb2xzO1xyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHsgY29sOiBjb2wsIHJvdzogcm93IH0sIHsgeDogMSwgeTogMSB9KSkgcm93ID0gdGhpcy5fbWF4Um93cztcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgJ2NvbCc6IGNvbCwgJ3Jvdyc6IHJvdyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhc0dyaWRDb2xsaXNpb24ocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHRoaXMuX2dldENvbGxpc2lvbnMocG9zLCBkaW1zKTtcclxuXHJcbiAgICAgICAgaWYgKHBvc2l0aW9ucyA9PSBudWxsIHx8IHBvc2l0aW9ucy5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9zaXRpb25zLnNvbWUoKHY6IE5nR3JpZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICEodiA9PT0gbnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0Q29sbGlzaW9ucyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBBcnJheTxOZ0dyaWRJdGVtPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FsbG93T3ZlcmxhcCkgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCByZXR1cm5zOiBBcnJheTxOZ0dyaWRJdGVtPiA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIXBvcy5jb2wpIHsgcG9zLmNvbCA9IDE7IH1cclxuICAgICAgICBpZiAoIXBvcy5yb3cpIHsgcG9zLnJvdyA9IDE7IH1cclxuXHJcbiAgICAgICAgY29uc3QgbGVmdENvbCA9IHBvcy5jb2w7XHJcbiAgICAgICAgY29uc3QgcmlnaHRDb2wgPSBwb3MuY29sICsgZGltcy54O1xyXG4gICAgICAgIGNvbnN0IHRvcFJvdyA9IHBvcy5yb3c7XHJcbiAgICAgICAgY29uc3QgYm90dG9tUm93ID0gcG9zLnJvdyArIGRpbXMueTtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXNJbkdyaWQuZm9yRWFjaCgoaXRlbUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTogTmdHcmlkSXRlbSA9IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtc0luR3JpZC5kZWxldGUoaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbUxlZnRDb2wgPSBpdGVtLmNvbDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbVJpZ2h0Q29sID0gaXRlbS5jb2wgKyBpdGVtLnNpemV4O1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtVG9wUm93ID0gaXRlbS5yb3c7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Cb3R0b21Sb3cgPSBpdGVtLnJvdyArIGl0ZW0uc2l6ZXk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3aXRoaW5Db2x1bW5zID0gbGVmdENvbCA8IGl0ZW1SaWdodENvbCAmJiBpdGVtTGVmdENvbCA8IHJpZ2h0Q29sO1xyXG4gICAgICAgICAgICBjb25zdCB3aXRoaW5Sb3dzID0gdG9wUm93IDwgaXRlbUJvdHRvbVJvdyAmJiBpdGVtVG9wUm93IDwgYm90dG9tUm93O1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpdGhpbkNvbHVtbnMgJiYgd2l0aGluUm93cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJucy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXR1cm5zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeEdyaWRDb2xsaXNpb25zKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbGxpc2lvbnM6IEFycmF5PE5nR3JpZEl0ZW0+ID0gdGhpcy5fZ2V0Q29sbGlzaW9ucyhwb3MsIGRpbXMpO1xyXG4gICAgICAgIGlmIChjb2xsaXNpb25zLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29sbGlzaW9uIG9mIGNvbGxpc2lvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUdyaWQoY29sbGlzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EaW1zOiBOZ0dyaWRJdGVtU2l6ZSA9IGNvbGxpc2lvbi5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Qb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IGNvbGxpc2lvbi5nZXRHcmlkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IG5ld0l0ZW1Qb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IHsgY29sOiBpdGVtUG9zLmNvbCwgcm93OiBpdGVtUG9zLnJvdyB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbGxpc2lvbkZpeERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgbmV3SXRlbVBvcy5yb3cgPSBwb3Mucm93ICsgZGltcy55O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKG5ld0l0ZW1Qb3MsIGl0ZW1EaW1zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1Qb3MuY29sID0gcG9zLmNvbCArIGRpbXMueDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtUG9zLnJvdyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29sbGlzaW9uRml4RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0l0ZW1Qb3MuY29sID0gcG9zLmNvbCArIGRpbXMueDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzV2l0aGluQm91bmRzWChuZXdJdGVtUG9zLCBpdGVtRGltcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtUG9zLmNvbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SXRlbVBvcy5yb3cgPSBwb3Mucm93ICsgZGltcy55O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb2xsaXNpb24uc2V0R3JpZFBvc2l0aW9uKG5ld0l0ZW1Qb3MpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZml4R3JpZENvbGxpc2lvbnMobmV3SXRlbVBvcywgaXRlbURpbXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRUb0dyaWQoY29sbGlzaW9uKTtcclxuICAgICAgICAgICAgY29sbGlzaW9uLm9uQ2FzY2FkZUV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maXhHcmlkQ29sbGlzaW9ucyhwb3MsIGRpbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Nhc2NhZGVHcmlkKHBvcz86IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltcz86IE5nR3JpZEl0ZW1TaXplKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbGxvd092ZXJsYXApIHJldHVybjtcclxuICAgICAgICBpZiAoIXBvcyAhPT0gIWRpbXMpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNhc2NhZGUgd2l0aCBvbmx5IHBvc2l0aW9uIGFuZCBub3QgZGltZW5zaW9ucycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nICYmIHRoaXMuX2RyYWdnaW5nSXRlbSAmJiAhcG9zICYmICFkaW1zKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuX2RyYWdnaW5nSXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgZGltcyA9IHRoaXMuX2RyYWdnaW5nSXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUmVzaXppbmcgJiYgdGhpcy5fcmVzaXppbmdJdGVtICYmICFwb3MgJiYgIWRpbXMpIHtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBkaW1zID0gdGhpcy5fcmVzaXppbmdJdGVtLmdldFNpemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpdGVtc0luR3JpZDogTmdHcmlkSXRlbVtdID0gQXJyYXkuZnJvbSh0aGlzLl9pdGVtc0luR3JpZCwgKGl0ZW1JZDogc3RyaW5nKSA9PiB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jYXNjYWRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICBpdGVtc0luR3JpZCA9IGl0ZW1zSW5HcmlkLnNvcnQoTmdHcmlkSGVscGVyLnNvcnRJdGVtc0J5UG9zaXRpb25WZXJ0aWNhbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb3dlc3RSb3dQZXJDb2x1bW46IE1hcDxudW1iZXIsIG51bWJlcj4gPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXNJbkdyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0ZpeGVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbURpbXM6IE5nR3JpZEl0ZW1TaXplID0gaXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVBvczogTmdHcmlkSXRlbVBvc2l0aW9uID0gaXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VzdFJvd0Zvckl0ZW06IG51bWJlciA9IGxvd2VzdFJvd1BlckNvbHVtbi5nZXQoaXRlbVBvcy5jb2wpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBpdGVtRGltcy54OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG93ZXN0Um93Rm9yQ29sdW1uID0gbG93ZXN0Um93UGVyQ29sdW1uLmdldChpdGVtUG9zLmNvbCArIGkpIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFJvd0Zvckl0ZW0gPSBNYXRoLm1heChsb3dlc3RSb3dGb3JDb2x1bW4sIGxvd2VzdFJvd0Zvckl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVmdENvbCA9IGl0ZW1Qb3MuY29sO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q29sID0gaXRlbVBvcy5jb2wgKyBpdGVtRGltcy54O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zICYmIGRpbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2l0aGluQ29sdW1ucyA9IHJpZ2h0Q29sID4gcG9zLmNvbCAmJiBsZWZ0Q29sIDwgKHBvcy5jb2wgKyBkaW1zLngpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpdGhpbkNvbHVtbnMpIHsgICAgICAgICAgLy8gSWYgb3VyIGVsZW1lbnQgaXMgaW4gb25lIG9mIHRoZSBpdGVtJ3MgY29sdW1uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vbUFib3ZlSXRlbSA9IGl0ZW1EaW1zLnkgPD0gKHBvcy5yb3cgLSBsb3dlc3RSb3dGb3JJdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJvb21BYm92ZUl0ZW0pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gY2FuJ3QgZml0IGFib3ZlIG91ciBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0Um93Rm9ySXRlbSA9IE1hdGgubWF4KGxvd2VzdFJvd0Zvckl0ZW0sIHBvcy5yb3cgKyBkaW1zLnkpOyAgIC8vIFNldCB0aGUgbG93ZXN0IHJvdyB0byBiZSBiZWxvdyBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IHsgY29sOiBpdGVtUG9zLmNvbCwgcm93OiBsb3dlc3RSb3dGb3JJdGVtIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFdoYXQgaWYgaXQncyBub3Qgd2l0aGluIGJvdW5kcyBZP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb3dlc3RSb3dGb3JJdGVtICE9IGl0ZW1Qb3Mucm93ICYmIHRoaXMuX2lzV2l0aGluQm91bmRzWShuZXdQb3MsIGl0ZW1EaW1zKSkgeyAvLyBJZiB0aGUgaXRlbSBpcyBub3QgYWxyZWFkeSBvbiB0aGlzIHJvdyBtb3ZlIGl0IHVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUZyb21HcmlkKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRHcmlkUG9zaXRpb24obmV3UG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub25DYXNjYWRlRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkVG9HcmlkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1EaW1zLng7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RSb3dQZXJDb2x1bW4uc2V0KGl0ZW1Qb3MuY29sICsgaSwgbG93ZXN0Um93Rm9ySXRlbSArIGl0ZW1EaW1zLnkpOyAvLyBVcGRhdGUgdGhlIGxvd2VzdCByb3cgdG8gYmUgYmVsb3cgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zSW5HcmlkID0gaXRlbXNJbkdyaWQuc29ydChOZ0dyaWRIZWxwZXIuc29ydEl0ZW1zQnlQb3NpdGlvbkhvcml6b250YWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG93ZXN0Q29sdW1uUGVyUm93OiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zSW5HcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbURpbXM6IE5nR3JpZEl0ZW1TaXplID0gaXRlbS5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVBvczogTmdHcmlkSXRlbVBvc2l0aW9uID0gaXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VzdENvbHVtbkZvckl0ZW06IG51bWJlciA9IGxvd2VzdENvbHVtblBlclJvdy5nZXQoaXRlbVBvcy5yb3cpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBpdGVtRGltcy55OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VzdE9mZnNldENvbHVtbjogbnVtYmVyID0gbG93ZXN0Q29sdW1uUGVyUm93LmdldChpdGVtUG9zLnJvdyArIGkpIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdENvbHVtbkZvckl0ZW0gPSBNYXRoLm1heChsb3dlc3RPZmZzZXRDb2x1bW4sIGxvd2VzdENvbHVtbkZvckl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wUm93ID0gaXRlbVBvcy5yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm90dG9tUm93ID0gaXRlbVBvcy5yb3cgKyBpdGVtRGltcy55O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zICYmIGRpbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2l0aGluUm93cyA9IGJvdHRvbVJvdyA+IHBvcy5jb2wgJiYgdG9wUm93IDwgKHBvcy5jb2wgKyBkaW1zLngpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpdGhpblJvd3MpIHsgICAgICAgICAgLy8gSWYgb3VyIGVsZW1lbnQgaXMgaW4gb25lIG9mIHRoZSBpdGVtJ3Mgcm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vbU5leHRUb0l0ZW0gPSBpdGVtRGltcy54IDw9IChwb3MuY29sIC0gbG93ZXN0Q29sdW1uRm9ySXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyb29tTmV4dFRvSXRlbSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gY2FuJ3QgZml0IG5leHQgdG8gb3VyIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RDb2x1bW5Gb3JJdGVtID0gTWF0aC5tYXgobG93ZXN0Q29sdW1uRm9ySXRlbSwgcG9zLmNvbCArIGRpbXMueCk7ICAvLyBTZXQgdGhlIGxvd2VzdCBjb2wgdG8gYmUgdGhlIG90aGVyIHNpZGUgb2YgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSB7IGNvbDogbG93ZXN0Q29sdW1uRm9ySXRlbSwgcm93OiBpdGVtUG9zLnJvdyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0Q29sdW1uRm9ySXRlbSAhPSBpdGVtUG9zLmNvbCAmJiB0aGlzLl9pc1dpdGhpbkJvdW5kc1gobmV3UG9zLCBpdGVtRGltcykpIHsgLy8gSWYgdGhlIGl0ZW0gaXMgbm90IGFscmVhZHkgb24gdGhpcyBjb2wgbW92ZSBpdCB1cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVGcm9tR3JpZChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0R3JpZFBvc2l0aW9uKG5ld1Bvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9uQ2FzY2FkZUV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZFRvR3JpZChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtRGltcy55OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0Q29sdW1uUGVyUm93LnNldChpdGVtUG9zLnJvdyArIGksIGxvd2VzdENvbHVtbkZvckl0ZW0gKyBpdGVtRGltcy54KTsgLy8gVXBkYXRlIHRoZSBsb3dlc3QgY29sIHRvIGJlIGJlbG93IHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZml4R3JpZFBvc2l0aW9uKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9oYXNHcmlkQ29sbGlzaW9uKHBvcywgZGltcykpIHJldHVybiBwb3M7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFJvdyA9IHRoaXMuX21heFJvd3MgPT09IDAgPyB0aGlzLl9nZXRNYXhSb3coKSA6IHRoaXMuX21heFJvd3M7XHJcbiAgICAgICAgY29uc3QgbWF4Q29sID0gdGhpcy5fbWF4Q29scyA9PT0gMCA/IHRoaXMuX2dldE1heENvbCgpIDogdGhpcy5fbWF4Q29scztcclxuICAgICAgICBjb25zdCBuZXdQb3MgPSB7XHJcbiAgICAgICAgICAgIGNvbDogcG9zLmNvbCxcclxuICAgICAgICAgICAgcm93OiBwb3Mucm93LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pdGVtRml4RGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGZpeExvb3A6XHJcbiAgICAgICAgICAgIGZvciAoOyBuZXdQb3MuY29sIDw9IG1heFJvdzspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zSW5QYXRoID0gdGhpcy5fZ2V0SXRlbXNJblZlcnRpY2FsUGF0aChuZXdQb3MsIGRpbXMsIG5ld1Bvcy5yb3cpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRSb3cgPSBuZXdQb3Mucm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXNJblBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5yb3cgLSBuZXh0Um93ID49IGRpbXMueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3Mucm93ID0gbmV4dFJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgZml4TG9vcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRSb3cgPSBpdGVtLnJvdyArIGl0ZW0uc2l6ZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1heFJvdyAtIG5leHRSb3cgPj0gZGltcy55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zLnJvdyA9IG5leHRSb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWsgZml4TG9vcDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBuZXdQb3MuY29sID0gTWF0aC5tYXgobmV3UG9zLmNvbCArIDEsIE1hdGgubWluLmFwcGx5KE1hdGgsIGl0ZW1zSW5QYXRoLm1hcCgoaXRlbSkgPT4gaXRlbS5jb2wgKyBkaW1zLngpKSk7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3Mucm93ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXRlbUZpeERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGZpeExvb3A6XHJcbiAgICAgICAgICAgIGZvciAoOyBuZXdQb3Mucm93IDw9IG1heFJvdzspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zSW5QYXRoID0gdGhpcy5fZ2V0SXRlbXNJbkhvcml6b250YWxQYXRoKG5ld1BvcywgZGltcywgbmV3UG9zLmNvbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dENvbCA9IG5ld1Bvcy5jb2w7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0luUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvbCAtIG5leHRDb2wgPj0gZGltcy54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvcy5jb2wgPSBuZXh0Q29sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBmaXhMb29wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dENvbCA9IGl0ZW0uY29sICsgaXRlbS5zaXpleDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF4Q29sIC0gbmV4dENvbCA+PSBkaW1zLngpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdQb3MuY29sID0gbmV4dENvbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhayBmaXhMb29wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5ld1Bvcy5yb3cgPSBNYXRoLm1heChuZXdQb3Mucm93ICsgMSwgTWF0aC5taW4uYXBwbHkoTWF0aCwgaXRlbXNJblBhdGgubWFwKChpdGVtKSA9PiBpdGVtLnJvdyArIGRpbXMueSkpKTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvcy5jb2wgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3UG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEl0ZW1zSW5Ib3Jpem9udGFsUGF0aChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIHN0YXJ0Q29sdW1uOiBudW1iZXIgPSAwKTogTmdHcmlkSXRlbVtdIHtcclxuICAgICAgICBjb25zdCBpdGVtc0luUGF0aDogTmdHcmlkSXRlbVtdID0gW107XHJcbiAgICAgICAgY29uc3QgdG9wUm93OiBudW1iZXIgPSBwb3Mucm93ICsgZGltcy55IC0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXNJbkdyaWQuZm9yRWFjaCgoaXRlbUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jb2wgKyBpdGVtLnNpemV4IC0gMSA8IHN0YXJ0Q29sdW1uKSB7IHJldHVybjsgfSAgICAvLyBJdGVtIGZhbGxzIGFmdGVyIHN0YXJ0IGNvbHVtblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5yb3cgPiB0b3BSb3cpIHsgcmV0dXJuOyB9ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJdGVtIGZhbGxzIGFib3ZlIHBhdGhcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucm93ICsgaXRlbS5zaXpleSAtIDEgPCBwb3Mucm93KSB7IHJldHVybjsgfSAgICAgICAgLy8gSXRlbSBmYWxscyBiZWxvdyBwYXRoXHJcbiAgICAgICAgICAgIGl0ZW1zSW5QYXRoLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtc0luUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRJdGVtc0luVmVydGljYWxQYXRoKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSwgc3RhcnRSb3c6IG51bWJlciA9IDApOiBOZ0dyaWRJdGVtW10ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zSW5QYXRoOiBOZ0dyaWRJdGVtW10gPSBbXTtcclxuICAgICAgICBjb25zdCByaWdodENvbDogbnVtYmVyID0gcG9zLmNvbCArIGRpbXMueCAtIDE7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zSW5HcmlkLmZvckVhY2goKGl0ZW1JZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucm93ICsgaXRlbS5zaXpleSAtIDEgPCBzdGFydFJvdykgeyByZXR1cm47IH0gICAvLyBJdGVtIGZhbGxzIGFib3ZlIHN0YXJ0IHJvd1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jb2wgPiByaWdodENvbCkgeyByZXR1cm47IH0gICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gZmFsbHMgYWZ0ZXIgcGF0aFxyXG4gICAgICAgICAgICBpZiAoaXRlbS5jb2wgKyBpdGVtLnNpemV4IC0gMSA8IHBvcy5jb2wpIHsgcmV0dXJuOyB9ICAgIC8vIEl0ZW0gZmFsbHMgYmVmb3JlIHBhdGhcclxuICAgICAgICAgICAgaXRlbXNJblBhdGgucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zSW5QYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzV2l0aGluQm91bmRzWChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIGFsbG93RXhjZXNzaXZlSXRlbXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhDb2xzID09IDAgfHwgKGFsbG93RXhjZXNzaXZlSXRlbXMgJiYgcG9zLmNvbCA9PSAxKSB8fCAocG9zLmNvbCArIGRpbXMueCAtIDEpIDw9IHRoaXMuX21heENvbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZml4UG9zVG9Cb3VuZHNYKHBvczogTmdHcmlkSXRlbVBvc2l0aW9uLCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSk6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1gocG9zLCBkaW1zKSkge1xyXG4gICAgICAgICAgICBwb3MuY29sID0gTWF0aC5tYXgodGhpcy5fbWF4Q29scyAtIChkaW1zLnggLSAxKSwgMSk7XHJcbiAgICAgICAgICAgIHBvcy5yb3cgKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZml4U2l6ZVRvQm91bmRzWChwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1gocG9zLCBkaW1zKSkge1xyXG4gICAgICAgICAgICBkaW1zLnggPSBNYXRoLm1heCh0aGlzLl9tYXhDb2xzIC0gKHBvcy5jb2wgLSAxKSwgMSk7XHJcbiAgICAgICAgICAgIGRpbXMueSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGltcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc1dpdGhpbkJvdW5kc1kocG9zOiBOZ0dyaWRJdGVtUG9zaXRpb24sIGRpbXM6IE5nR3JpZEl0ZW1TaXplLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4Um93cyA9PSAwIHx8IChhbGxvd0V4Y2Vzc2l2ZUl0ZW1zICYmIHBvcy5yb3cgPT0gMSkgfHwgKHBvcy5yb3cgKyBkaW1zLnkgLSAxKSA8PSB0aGlzLl9tYXhSb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeFBvc1RvQm91bmRzWShwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNXaXRoaW5Cb3VuZHNZKHBvcywgZGltcykpIHtcclxuICAgICAgICAgICAgcG9zLnJvdyA9IE1hdGgubWF4KHRoaXMuX21heFJvd3MgLSAoZGltcy55IC0gMSksIDEpO1xyXG4gICAgICAgICAgICBwb3MuY29sKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZml4U2l6ZVRvQm91bmRzWShwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1dpdGhpbkJvdW5kc1kocG9zLCBkaW1zKSkge1xyXG4gICAgICAgICAgICBkaW1zLnkgPSBNYXRoLm1heCh0aGlzLl9tYXhSb3dzIC0gKHBvcy5yb3cgLSAxKSwgMSk7XHJcbiAgICAgICAgICAgIGRpbXMueCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGltcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc1dpdGhpbkJvdW5kcyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUsIGFsbG93RXhjZXNzaXZlSXRlbXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1dpdGhpbkJvdW5kc1gocG9zLCBkaW1zLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zKSAmJiB0aGlzLl9pc1dpdGhpbkJvdW5kc1kocG9zLCBkaW1zLCBhbGxvd0V4Y2Vzc2l2ZUl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maXhQb3NUb0JvdW5kcyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXhQb3NUb0JvdW5kc1godGhpcy5fZml4UG9zVG9Cb3VuZHNZKHBvcywgZGltcyksIGRpbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpeFNpemVUb0JvdW5kcyhwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgZGltczogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpeFNpemVUb0JvdW5kc1gocG9zLCB0aGlzLl9maXhTaXplVG9Cb3VuZHNZKHBvcywgZGltcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZFRvR3JpZChpdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBvczogTmdHcmlkSXRlbVBvc2l0aW9uID0gaXRlbS5nZXRHcmlkUG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBkaW1zOiBOZ0dyaWRJdGVtU2l6ZSA9IGl0ZW0uZ2V0U2l6ZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faGFzR3JpZENvbGxpc2lvbihwb3MsIGRpbXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpeEdyaWRDb2xsaXNpb25zKHBvcywgZGltcyk7XHJcbiAgICAgICAgICAgIHBvcyA9IGl0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWxsb3dPdmVybGFwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uekluZGV4ID0gdGhpcy5fbGFzdFpWYWx1ZSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXNJbkdyaWQuYWRkKGl0ZW0udWlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW1vdmVGcm9tR3JpZChpdGVtOiBOZ0dyaWRJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faXRlbXNJbkdyaWQuZGVsZXRlKGl0ZW0udWlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVTaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHJldHVybjtcclxuICAgICAgICBsZXQgbWF4Q29sOiBudW1iZXIgPSB0aGlzLl9nZXRNYXhDb2woKTtcclxuICAgICAgICBsZXQgbWF4Um93OiBudW1iZXIgPSB0aGlzLl9nZXRNYXhSb3coKTtcclxuXHJcbiAgICAgICAgaWYgKG1heENvbCAhPSB0aGlzLl9jdXJNYXhDb2wgfHwgbWF4Um93ICE9IHRoaXMuX2N1ck1heFJvdykge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJNYXhDb2wgPSBtYXhDb2w7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1ck1heFJvdyA9IG1heFJvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcxMDAlJyk7Ly8obWF4Q29sICogKHRoaXMuY29sV2lkdGggKyB0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSkrJ3B4Jyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50QmFzZWREeW5hbWljUm93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAobWF4Um93ICogKHRoaXMucm93SGVpZ2h0ICsgdGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkpICsgJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE1heFJvdygpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zUm93czogbnVtYmVyW10gPSBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zSW5HcmlkLCAoaXRlbUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2l0ZW1zLmdldChpdGVtSWQpO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiAwO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5yb3cgKyBpdGVtLnNpemV5IC0gMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGl0ZW1zUm93cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TWF4Q29sKCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgaXRlbXNDb2xzOiBudW1iZXJbXSA9IEFycmF5LmZyb20odGhpcy5faXRlbXNJbkdyaWQsIChpdGVtSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCk7XHJcbiAgICAgICAgICAgIGlmICghaXRlbSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmNvbCArIGl0ZW0uc2l6ZXggLSAxO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgaXRlbXNDb2xzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRNb3VzZVBvc2l0aW9uKGU6IGFueSk6IE5nR3JpZFJhd1Bvc2l0aW9uIHtcclxuICAgICAgICBpZiAoKCg8YW55PndpbmRvdykuVG91Y2hFdmVudCAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkgfHwgKGUudG91Y2hlcyB8fCBlLmNoYW5nZWRUb3VjaGVzKSkge1xyXG4gICAgICAgICAgICBlID0gZS50b3VjaGVzLmxlbmd0aCA+IDAgPyBlLnRvdWNoZXNbMF0gOiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVmUG9zOiBhbnkgPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0OiBudW1iZXIgPSBlLmNsaWVudFggLSByZWZQb3MubGVmdDtcclxuICAgICAgICBsZXQgdG9wOiBudW1iZXIgPSBlLmNsaWVudFkgLSByZWZQb3MudG9wO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXNjYWRlID09ICdkb3duJykgdG9wID0gcmVmUG9zLnRvcCArIHJlZlBvcy5oZWlnaHQgLSBlLmNsaWVudFk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FzY2FkZSA9PSAncmlnaHQnKSBsZWZ0ID0gcmVmUG9zLmxlZnQgKyByZWZQb3Mud2lkdGggLSBlLmNsaWVudFg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcgJiYgdGhpcy5fem9vbU9uRHJhZykge1xyXG4gICAgICAgICAgICBsZWZ0ICo9IDI7XHJcbiAgICAgICAgICAgIHRvcCAqPSAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgdG9wOiB0b3BcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEFic29sdXRlTW91c2VQb3NpdGlvbihlOiBhbnkpOiBOZ0dyaWRSYXdQb3NpdGlvbiB7XHJcbiAgICAgICAgaWYgKCgoPGFueT53aW5kb3cpLlRvdWNoRXZlbnQgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHx8IChlLnRvdWNoZXMgfHwgZS5jaGFuZ2VkVG91Y2hlcykpIHtcclxuICAgICAgICAgICAgZSA9IGUudG91Y2hlcy5sZW5ndGggPiAwID8gZS50b3VjaGVzWzBdIDogZS5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgdG9wOiBlLmNsaWVudFlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbnRhaW5lckNvbHVtbnMoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBtYXhXaWR0aDogbnVtYmVyID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1XaWR0aDogbnVtYmVyID0gdGhpcy5jb2xXaWR0aCArIHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWF4V2lkdGggLyBpdGVtV2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbnRhaW5lclJvd3MoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBtYXhIZWlnaHQ6IG51bWJlciA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMubWFyZ2luVG9wIC0gdGhpcy5tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWF4SGVpZ2h0IC8gKHRoaXMucm93SGVpZ2h0ICsgdGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFNjcmVlbk1hcmdpbigpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG1heFdpZHRoOiBudW1iZXIgPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgY29uc3QgaXRlbVdpZHRoOiBudW1iZXIgPSB0aGlzLmNvbFdpZHRoICsgdGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodDtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigobWF4V2lkdGggLSAodGhpcy5fbWF4Q29scyAqIGl0ZW1XaWR0aCkpIC8gMik7O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEl0ZW1Gcm9tUG9zaXRpb24ocG9zaXRpb246IE5nR3JpZFJhd1Bvc2l0aW9uKTogTmdHcmlkSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faXRlbXNJbkdyaWQsIChpdGVtSWQ6IHN0cmluZykgPT4gdGhpcy5faXRlbXMuZ2V0KGl0ZW1JZCkpLmZpbmQoKGl0ZW06IE5nR3JpZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaXplOiBOZ0dyaWRJdGVtRGltZW5zaW9ucyA9IGl0ZW0uZ2V0RGltZW5zaW9ucygpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3M6IE5nR3JpZFJhd1Bvc2l0aW9uID0gaXRlbS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uLmxlZnQgPj0gcG9zLmxlZnQgJiYgcG9zaXRpb24ubGVmdCA8IChwb3MubGVmdCArIHNpemUud2lkdGgpICYmXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA+PSBwb3MudG9wICYmIHBvc2l0aW9uLnRvcCA8IChwb3MudG9wICsgc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVBsYWNlaG9sZGVyKGl0ZW06IE5nR3JpZEl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwb3M6IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IGl0ZW0uZ2V0R3JpZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZGltczogTmdHcmlkSXRlbVNpemUgPSBpdGVtLmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE5nR3JpZFBsYWNlaG9sZGVyKTtcclxuICAgICAgICB2YXIgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TmdHcmlkUGxhY2Vob2xkZXI+ID0gaXRlbS5jb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyUmVmID0gY29tcG9uZW50UmVmO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyOiBOZ0dyaWRQbGFjZWhvbGRlciA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgICBwbGFjZWhvbGRlci5yZWdpc3RlckdyaWQodGhpcyk7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIuc2V0Q2FzY2FkZU1vZGUodGhpcy5jYXNjYWRlKTtcclxuICAgICAgICBwbGFjZWhvbGRlci5zZXRHcmlkUG9zaXRpb24oeyBjb2w6IHBvcy5jb2wsIHJvdzogcG9zLnJvdyB9KTtcclxuICAgICAgICBwbGFjZWhvbGRlci5zZXRTaXplKHsgeDogZGltcy54LCB5OiBkaW1zLnkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZW1pdE9uSXRlbUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBpdGVtT3V0cHV0OiBhbnlbXSA9IEFycmF5LmZyb20odGhpcy5faXRlbXNJbkdyaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKGl0ZW1JZDogc3RyaW5nKSA9PiB0aGlzLl9pdGVtcy5nZXQoaXRlbUlkKSlcclxuICAgICAgICAgICAgLmZpbHRlcigoaXRlbTogTmdHcmlkSXRlbSkgPT4gISFpdGVtKVxyXG4gICAgICAgICAgICAubWFwKChpdGVtOiBOZ0dyaWRJdGVtKSA9PiBpdGVtLmdldEV2ZW50T3V0cHV0KCkpO1xyXG5cclxuICAgICAgICB0aGlzLm9uSXRlbUNoYW5nZS5lbWl0KGl0ZW1PdXRwdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RlZmluZUxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICB0aGlzLl9kb2N1bWVudE1vdXNlbW92ZSQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdtb3VzZW1vdmUnKTtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudE1vdXNldXAkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KGRvY3VtZW50LCAnbW91c2V1cCcpO1xyXG4gICAgICAgIHRoaXMuX21vdXNlZG93biQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ21vdXNlZG93bicpO1xyXG4gICAgICAgIHRoaXMuX21vdXNlbW92ZSQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ21vdXNlbW92ZScpO1xyXG4gICAgICAgIHRoaXMuX21vdXNldXAkID0gZnJvbUV2ZW50KGVsZW1lbnQsICdtb3VzZXVwJyk7XHJcbiAgICAgICAgdGhpcy5fdG91Y2hzdGFydCQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ3RvdWNoc3RhcnQnKTtcclxuICAgICAgICB0aGlzLl90b3VjaG1vdmUkID0gZnJvbUV2ZW50KGVsZW1lbnQsICd0b3VjaG1vdmUnKTtcclxuICAgICAgICB0aGlzLl90b3VjaGVuZCQgPSBmcm9tRXZlbnQoZWxlbWVudCwgJ3RvdWNoZW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5hYmxlTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbmFibGVkTGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZW5hYmxlTW91c2VMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVG91Y2hEZXZpY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmFibGVUb3VjaExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZW5hYmxlZExpc3RlbmVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kaXNhYmxlTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3ViczogU3Vic2NyaXB0aW9uKSA9PiBzdWJzLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZWRMaXN0ZW5lciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzVG91Y2hEZXZpY2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIF9lbmFibGVUb3VjaExpc3RlbmVycygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0b3VjaHN0YXJ0U3VicyA9IHRoaXMuX3RvdWNoc3RhcnQkLnN1YnNjcmliZSgoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5tb3VzZURvd25FdmVudEhhbmRsZXIoZSkpO1xyXG4gICAgICAgIGNvbnN0IHRvdWNobW92ZVN1YnMgPSB0aGlzLl90b3VjaG1vdmUkLnN1YnNjcmliZSgoZTogVG91Y2hFdmVudCkgPT4gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIoZSkpO1xyXG4gICAgICAgIGNvbnN0IHRvdWNoZW5kU3VicyA9IHRoaXMuX3RvdWNoZW5kJC5zdWJzY3JpYmUoKGU6IFRvdWNoRXZlbnQpID0+IHRoaXMubW91c2VVcEV2ZW50SGFuZGxlcihlKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgICAgICAgdG91Y2hzdGFydFN1YnMsXHJcbiAgICAgICAgICAgIHRvdWNobW92ZVN1YnMsXHJcbiAgICAgICAgICAgIHRvdWNoZW5kU3Vic1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5hYmxlTW91c2VMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnRNb3VzZW1vdmVTdWJzID0gdGhpcy5fZG9jdW1lbnRNb3VzZW1vdmUkLnN1YnNjcmliZSgoZTogTW91c2VFdmVudCkgPT4gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIoZSkpO1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50TW91c2V1cFN1YnMgPSB0aGlzLl9kb2N1bWVudE1vdXNldXAkLnN1YnNjcmliZSgoZTogTW91c2VFdmVudCkgPT4gdGhpcy5tb3VzZVVwRXZlbnRIYW5kbGVyKGUpKTtcclxuICAgICAgICBjb25zdCBtb3VzZWRvd25TdWJzID0gdGhpcy5fbW91c2Vkb3duJC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMubW91c2VEb3duRXZlbnRIYW5kbGVyKGUpKTtcclxuICAgICAgICBjb25zdCBtb3VzZW1vdmVTdWJzID0gdGhpcy5fbW91c2Vtb3ZlJC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKGUpKTtcclxuICAgICAgICBjb25zdCBtb3VzZXVwU3VicyA9IHRoaXMuX21vdXNldXAkLnN1YnNjcmliZSgoZTogTW91c2VFdmVudCkgPT4gdGhpcy5tb3VzZVVwRXZlbnRIYW5kbGVyKGUpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICBkb2N1bWVudE1vdXNlbW92ZVN1YnMsXHJcbiAgICAgICAgICAgIGRvY3VtZW50TW91c2V1cFN1YnMsXHJcbiAgICAgICAgICAgIG1vdXNlZG93blN1YnMsXHJcbiAgICAgICAgICAgIG1vdXNlbW92ZVN1YnMsXHJcbiAgICAgICAgICAgIG1vdXNldXBTdWJzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ0dyaWQgfSBmcm9tICcuL05nR3JpZCc7XHJcbmltcG9ydCB7IE5nR3JpZEl0ZW1Db25maWcsIE5nR3JpZEl0ZW1FdmVudCwgTmdHcmlkSXRlbVBvc2l0aW9uLCBOZ0dyaWRJdGVtU2l6ZSwgTmdHcmlkUmF3UG9zaXRpb24sIE5nR3JpZEl0ZW1EaW1lbnNpb25zLCBSZXNpemVIYW5kbGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lOZ0dyaWQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgRXZlbnRFbWl0dGVyLCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NvbnRhaW5lclJlZiwgT3V0cHV0LCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW25nR3JpZEl0ZW1dJyxcclxuICAgIGlucHV0czogWydjb25maWc6IG5nR3JpZEl0ZW0nXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuICAgIC8vIEV2ZW50IEVtaXR0ZXJzXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oZmFsc2UpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdTdG9wOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdBbnk6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlc2l6ZVN0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplQW55OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25DaGFuZ2VTdG9wOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZUFueTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbmdHcmlkSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1Db25maWc+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtQ29uZmlnPigpO1xyXG5cclxuICAgIC8vIERlZmF1bHQgY29uZmlnXHJcbiAgICBwcml2YXRlIHN0YXRpYyBDT05TVF9ERUZBVUxUX0NPTkZJRzogTmdHcmlkSXRlbUNvbmZpZyA9IHtcclxuICAgICAgICB1aWQ6IG51bGwsXHJcbiAgICAgICAgY29sOiAxLFxyXG4gICAgICAgIHJvdzogMSxcclxuICAgICAgICBzaXpleDogMSxcclxuICAgICAgICBzaXpleTogMSxcclxuICAgICAgICBkcmFnSGFuZGxlOiBudWxsLFxyXG4gICAgICAgIHJlc2l6ZUhhbmRsZTogbnVsbCxcclxuICAgICAgICBmaXhlZDogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgICAgICBib3JkZXJTaXplOiAyNSxcclxuICAgICAgICByZXNpemVEaXJlY3Rpb25zOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgaXNGaXhlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzRHJhZ2dhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBpc1Jlc2l6YWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgbWluV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbWluSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHVpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xyXG4gICAgcHJpdmF0ZSBfcGF5bG9hZDogYW55O1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudFBvc2l0aW9uOiBOZ0dyaWRJdGVtUG9zaXRpb24gPSB7IGNvbDogMSwgcm93OiAxIH07XHJcbiAgICBwcml2YXRlIF9zaXplOiBOZ0dyaWRJdGVtU2l6ZSA9IHsgeDogMSwgeTogMSB9O1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnID0gTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRztcclxuICAgIHByaXZhdGUgX3VzZXJDb25maWcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ0hhbmRsZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplSGFuZGxlOiBSZXNpemVIYW5kbGU7XHJcbiAgICBwcml2YXRlIF9ib3JkZXJTaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9lbGVtV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2VsZW1IZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2VsZW1MZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9lbGVtVG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hZGRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfZGlmZmVyOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XHJcbiAgICBwcml2YXRlIF9jYXNjYWRlTW9kZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbWF4Q29sczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX21pbkNvbHM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9tYXhSb3dzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbWluUm93czogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3Jlc2l6ZURpcmVjdGlvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIF96SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc2V0IHpJbmRleCh6SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3otaW5kZXgnLCB6SW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5fekluZGV4ID0gekluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB6SW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fekluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFtuZy1ncmlkLWl0ZW1dIGhhbmRsZXJcclxuICAgIHNldCBjb25maWcodjogTmdHcmlkSXRlbUNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJDb25maWcgPSB2O1xyXG5cclxuICAgICAgICBjb25zdCBjb25maWdPYmplY3QgPSBPYmplY3QuYXNzaWduKHt9LCBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHLCB2KTtcclxuICAgICAgICBmb3IgKGxldCB4IGluIE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcpXHJcbiAgICAgICAgICAgIGlmIChjb25maWdPYmplY3RbeF0gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGNvbmZpZ09iamVjdFt4XSA9IE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUdbeF07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q29uZmlnKGNvbmZpZ09iamVjdCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl91c2VyQ29uZmlnICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RpZmZlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWZmZXIgPSB0aGlzLl9kaWZmZXJzLmZpbmQodGhpcy5fdXNlckNvbmZpZykuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuX3VzZXJDb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9hZGRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX25nR3JpZC5hZGRJdGVtKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaXpleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplLng7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpemV5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemUueTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5jb2w7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJvdygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50Q29sKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5jb2w7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnRSb3coKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uLnJvdztcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxyXG4gICAgICAgIHByaXZhdGUgX25nRWw6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIF9uZ0dyaWQ6IE5nR3JpZCxcclxuICAgICAgICBwdWJsaWMgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgb25SZXNpemVTdGFydEV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZVN0YXJ0LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemVBbnkuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVN0YXJ0LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemVFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemUuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZUFueS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemVTdG9wRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplU3RvcC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VTdG9wLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMub25Db25maWdDaGFuZ2VFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRHJhZ1N0YXJ0RXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25EcmFnQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VTdGFydC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRHJhZ0V2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdBbnkuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRHJhZ1N0b3BFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG4gICAgICAgIHRoaXMub25EcmFnU3RvcC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uRHJhZ0FueS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlU3RvcC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQW55LmVtaXQoZXZlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlRXZlbnQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkNhc2NhZGVFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnZ3JpZC1pdGVtJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nR3JpZC5hdXRvU3R5bGUpIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBGb3JjZSBhIGNvbmZpZyB1cGRhdGUgaW4gY2FzZSB0aGVyZSBpcyBubyBjb25maWcgYXNzaWduZWRcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX3VzZXJDb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHB1YmxpYyBjYW5EcmFnKGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0RyYWdnYWJsZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZHJhZ0hhbmRsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kSGFuZGxlKHRoaXMuX2RyYWdIYW5kbGUsIGUudGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kSGFuZGxlKGhhbmRsZVNlbGVjdG9yOiBzdHJpbmcsIHN0YXJ0RWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0RWxlbTogYW55ID0gc3RhcnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldEVsZW0gJiYgdGFyZ2V0RWxlbSAhPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRNYXRjaGVzKHRhcmdldEVsZW0sIGhhbmRsZVNlbGVjdG9yKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxlbSA9IHRhcmdldEVsZW0ucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5SZXNpemUoZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZXNpemFibGUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcmVzaXplSGFuZGxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fcmVzaXplSGFuZGxlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZEhhbmRsZSh0aGlzLl9yZXNpemVIYW5kbGUsIGUudGFyZ2V0KSA/ICdib3R0b21yaWdodCcgOiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Jlc2l6ZUhhbmRsZSAhPT0gJ29iamVjdCcpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzaXplRGlyZWN0aW9ucyA9IFsgJ2JvdHRvbXJpZ2h0JywgJ2JvdHRvbWxlZnQnLCAndG9wcmlnaHQnLCAndG9wbGVmdCcsICdyaWdodCcsICdsZWZ0JywgJ2JvdHRvbScsICd0b3AnIF07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGRpcmVjdGlvbiBvZiByZXNpemVEaXJlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uIGluIHRoaXMuX3Jlc2l6ZUhhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbmRIYW5kbGUodGhpcy5fcmVzaXplSGFuZGxlW2RpcmVjdGlvbl0sIGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fYm9yZGVyU2l6ZSA8PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgbW91c2VQb3M6IE5nR3JpZFJhd1Bvc2l0aW9uID0gdGhpcy5fZ2V0TW91c2VQb3NpdGlvbihlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIHRoaXMuX3Jlc2l6ZURpcmVjdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuUmVzaXplSW5EaXJlY3Rpb24oZGlyZWN0aW9uLCBtb3VzZVBvcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk1vdXNlTW92ZShlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbmdHcmlkLmF1dG9TdHlsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbmdHcmlkLnJlc2l6ZUVuYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzaXplRGlyZWN0aW9uID0gdGhpcy5jYW5SZXNpemUoZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnNvcjogc3RyaW5nID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNpemVEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b21yaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wbGVmdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9ICdud3NlLXJlc2l6ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcHJpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b21sZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gJ25lc3ctcmVzaXplJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSAnbnMtcmVzaXplJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSAnZXctcmVzaXplJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25nR3JpZC5kcmFnRW5hYmxlICYmIHRoaXMuY2FuRHJhZyhlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsIGN1cnNvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbmdHcmlkLmRyYWdFbmFibGUgJiYgdGhpcy5jYW5EcmFnKGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAnbW92ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FkZGVkKSB0aGlzLl9uZ0dyaWQucmVtb3ZlSXRlbSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgICBHZXR0ZXJzXHJcbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBFbGVtZW50UmVmIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmdFbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RHJhZ0hhbmRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kcmFnSGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXNpemVIYW5kbGUoKTogUmVzaXplSGFuZGxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzaXplSGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREaW1lbnNpb25zKCk6IE5nR3JpZEl0ZW1EaW1lbnNpb25zIHtcclxuICAgICAgICByZXR1cm4geyAnd2lkdGgnOiB0aGlzLl9lbGVtV2lkdGgsICdoZWlnaHQnOiB0aGlzLl9lbGVtSGVpZ2h0IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemUoKTogTmdHcmlkSXRlbVNpemUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBOZ0dyaWRSYXdQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHsgJ2xlZnQnOiB0aGlzLl9lbGVtTGVmdCwgJ3RvcCc6IHRoaXMuX2VsZW1Ub3AgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R3JpZFBvc2l0aW9uKCk6IE5nR3JpZEl0ZW1Qb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgICBTZXR0ZXJzXHJcbiAgICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogTmdHcmlkSXRlbUNvbmZpZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5fcGF5bG9hZCA9IGNvbmZpZy5wYXlsb2FkO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5jb2wgPSBjb25maWcuY29sID8gY29uZmlnLmNvbCA6IE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcuY29sO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3cgPSBjb25maWcucm93ID8gY29uZmlnLnJvdyA6IE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcucm93O1xyXG4gICAgICAgIHRoaXMuX3NpemUueCA9IGNvbmZpZy5zaXpleCA/IGNvbmZpZy5zaXpleCA6IE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcuc2l6ZXg7XHJcbiAgICAgICAgdGhpcy5fc2l6ZS55ID0gY29uZmlnLnNpemV5ID8gY29uZmlnLnNpemV5IDogTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRy5zaXpleTtcclxuICAgICAgICB0aGlzLl9kcmFnSGFuZGxlID0gY29uZmlnLmRyYWdIYW5kbGU7XHJcbiAgICAgICAgdGhpcy5fcmVzaXplSGFuZGxlID0gY29uZmlnLnJlc2l6ZUhhbmRsZTtcclxuICAgICAgICB0aGlzLl9ib3JkZXJTaXplID0gY29uZmlnLmJvcmRlclNpemU7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnYWJsZSA9IGNvbmZpZy5kcmFnZ2FibGUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1Jlc2l6YWJsZSA9IGNvbmZpZy5yZXNpemFibGUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0ZpeGVkID0gY29uZmlnLmZpeGVkID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Jlc2l6ZURpcmVjdGlvbnMgPSBjb25maWcucmVzaXplRGlyZWN0aW9ucyB8fCB0aGlzLl9uZ0dyaWQucmVzaXplRGlyZWN0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy5fbWF4Q29scyA9ICFpc05hTihjb25maWcubWF4Q29scykgJiYgaXNGaW5pdGUoY29uZmlnLm1heENvbHMpID8gY29uZmlnLm1heENvbHMgOiAwO1xyXG4gICAgICAgIHRoaXMuX21pbkNvbHMgPSAhaXNOYU4oY29uZmlnLm1pbkNvbHMpICYmIGlzRmluaXRlKGNvbmZpZy5taW5Db2xzKSA/IGNvbmZpZy5taW5Db2xzIDogMDtcclxuICAgICAgICB0aGlzLl9tYXhSb3dzID0gIWlzTmFOKGNvbmZpZy5tYXhSb3dzKSAmJiBpc0Zpbml0ZShjb25maWcubWF4Um93cykgPyBjb25maWcubWF4Um93cyA6IDA7XHJcbiAgICAgICAgdGhpcy5fbWluUm93cyA9ICFpc05hTihjb25maWcubWluUm93cykgJiYgaXNGaW5pdGUoY29uZmlnLm1pblJvd3MpID8gY29uZmlnLm1pblJvd3MgOiAwO1xyXG5cclxuICAgICAgICB0aGlzLm1pbldpZHRoID0gIWlzTmFOKGNvbmZpZy5taW5XaWR0aCkgJiYgaXNGaW5pdGUoY29uZmlnLm1pbldpZHRoKSA/IGNvbmZpZy5taW5XaWR0aCA6IDA7XHJcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSAhaXNOYU4oY29uZmlnLm1pbkhlaWdodCkgJiYgaXNGaW5pdGUoY29uZmlnLm1pbkhlaWdodCkgPyBjb25maWcubWluSGVpZ2h0IDogMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX21pbkNvbHMgPiAwICYmIHRoaXMuX21heENvbHMgPiAwICYmIHRoaXMuX21pbkNvbHMgPiB0aGlzLl9tYXhDb2xzKSB0aGlzLl9taW5Db2xzID0gMDtcclxuICAgICAgICBpZiAodGhpcy5fbWluUm93cyA+IDAgJiYgdGhpcy5fbWF4Um93cyA+IDAgJiYgdGhpcy5fbWluUm93cyA+IHRoaXMuX21heFJvd3MpIHRoaXMuX21pblJvd3MgPSAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWRkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmdHcmlkLnVwZGF0ZUl0ZW0odGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zaXplID0gdGhpcy5maXhSZXNpemUodGhpcy5fc2l6ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdEb0NoZWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9kaWZmZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VzOiBhbnkgPSB0aGlzLl9kaWZmZXIuZGlmZih0aGlzLl91c2VyQ29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2l6ZShuZXdTaXplOiBOZ0dyaWRJdGVtU2l6ZSwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIG5ld1NpemUgPSB0aGlzLmZpeFJlc2l6ZShuZXdTaXplKTtcclxuICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICBpZiAodXBkYXRlKSB0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkl0ZW1DaGFuZ2UuZW1pdCh0aGlzLmdldEV2ZW50T3V0cHV0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRHcmlkUG9zaXRpb24oZ3JpZFBvc2l0aW9uOiBOZ0dyaWRJdGVtUG9zaXRpb24sIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24gPSBncmlkUG9zaXRpb247XHJcbiAgICAgICAgaWYgKHVwZGF0ZSkgdGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLm9uSXRlbUNoYW5nZS5lbWl0KHRoaXMuZ2V0RXZlbnRPdXRwdXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV2ZW50T3V0cHV0KCk6IE5nR3JpZEl0ZW1FdmVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxOZ0dyaWRJdGVtRXZlbnQ+e1xyXG4gICAgICAgICAgICB1aWQ6IHRoaXMudWlkLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB0aGlzLl9wYXlsb2FkLFxyXG4gICAgICAgICAgICBjb2w6IHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5jb2wsXHJcbiAgICAgICAgICAgIHJvdzogdGhpcy5fY3VycmVudFBvc2l0aW9uLnJvdyxcclxuICAgICAgICAgICAgc2l6ZXg6IHRoaXMuX3NpemUueCxcclxuICAgICAgICAgICAgc2l6ZXk6IHRoaXMuX3NpemUueSxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuX2VsZW1XaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9lbGVtSGVpZ2h0LFxyXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLl9lbGVtTGVmdCxcclxuICAgICAgICAgICAgdG9wOiB0aGlzLl9lbGVtVG9wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2Nhc2NhZGVNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgeCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgeSArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgeCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgeSArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHggKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIHkgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbUxlZnQgPSB4O1xyXG4gICAgICAgIHRoaXMuX2VsZW1Ub3AgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDYXNjYWRlTW9kZShjYXNjYWRlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYXNjYWRlTW9kZSA9IGNhc2NhZGU7XHJcbiAgICAgICAgc3dpdGNoIChjYXNjYWRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgdGhpcy5fZWxlbUxlZnQgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHRoaXMuX2VsZW1Ub3AgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIHRoaXMuX2VsZW1MZWZ0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB0aGlzLl9lbGVtVG9wICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB0aGlzLl9lbGVtTGVmdCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgdGhpcy5fZWxlbVRvcCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREaW1lbnNpb25zKHc6IG51bWJlciwgaDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHcgPCB0aGlzLm1pbldpZHRoKSB3ID0gdGhpcy5taW5XaWR0aDtcclxuICAgICAgICBpZiAoaCA8IHRoaXMubWluSGVpZ2h0KSBoID0gdGhpcy5taW5IZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgdyArICdweCcpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGggKyAncHgnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbVdpZHRoID0gdztcclxuICAgICAgICB0aGlzLl9lbGVtSGVpZ2h0ID0gaDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRNb3ZpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbW92aW5nJyk7XHJcbiAgICAgICAgY29uc3Qgc3R5bGU6IGFueSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nR3JpZC5hdXRvU3R5bGUpIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3otaW5kZXgnLCAocGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnei1pbmRleCcpKSArIDEpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wTW92aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ21vdmluZycpO1xyXG4gICAgICAgIGNvbnN0IHN0eWxlOiBhbnkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgKHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3otaW5kZXgnKSkgLSAxKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVjYWxjdWxhdGVTZWxmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZml4UmVzaXplKG5ld1NpemU6IE5nR3JpZEl0ZW1TaXplKTogTmdHcmlkSXRlbVNpemUge1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXhDb2xzID4gMCAmJiBuZXdTaXplLnggPiB0aGlzLl9tYXhDb2xzKSBuZXdTaXplLnggPSB0aGlzLl9tYXhDb2xzO1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXhSb3dzID4gMCAmJiBuZXdTaXplLnkgPiB0aGlzLl9tYXhSb3dzKSBuZXdTaXplLnkgPSB0aGlzLl9tYXhSb3dzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWluQ29scyA+IDAgJiYgbmV3U2l6ZS54IDwgdGhpcy5fbWluQ29scykgbmV3U2l6ZS54ID0gdGhpcy5fbWluQ29scztcclxuICAgICAgICBpZiAodGhpcy5fbWluUm93cyA+IDAgJiYgbmV3U2l6ZS55IDwgdGhpcy5fbWluUm93cykgbmV3U2l6ZS55ID0gdGhpcy5fbWluUm93cztcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbVdpZHRoID0gKG5ld1NpemUueCAqIHRoaXMuX25nR3JpZC5jb2xXaWR0aCkgKyAoKHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0ICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0KSAqIChuZXdTaXplLnggLSAxKSk7XHJcbiAgICAgICAgaWYgKGl0ZW1XaWR0aCA8IHRoaXMubWluV2lkdGgpIG5ld1NpemUueCA9IE1hdGguY2VpbCgodGhpcy5taW5XaWR0aCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0KSAvICh0aGlzLl9uZ0dyaWQuY29sV2lkdGggKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCkpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gKG5ld1NpemUueSAqIHRoaXMuX25nR3JpZC5yb3dIZWlnaHQpICsgKCh0aGlzLl9uZ0dyaWQubWFyZ2luVG9wICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSkgKiAobmV3U2l6ZS55IC0gMSkpO1xyXG4gICAgICAgIGlmIChpdGVtSGVpZ2h0IDwgdGhpcy5taW5IZWlnaHQpIG5ld1NpemUueSA9IE1hdGguY2VpbCgodGhpcy5taW5IZWlnaHQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tICsgdGhpcy5fbmdHcmlkLm1hcmdpblRvcCkgLyAodGhpcy5fbmdHcmlkLnJvd0hlaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20gKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50TWF0Y2hlcyhlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKSByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudC5kb2N1bWVudCB8fCAhZWxlbWVudC5vd25lckRvY3VtZW50KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdGNoZXM6IGFueSA9IChlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgICAgbGV0IGk6IG51bWJlciA9IG1hdGNoZXMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCAmJiBtYXRjaGVzLml0ZW0oaSkgIT09IGVsZW1lbnQpIHsgfVxyXG4gICAgICAgIHJldHVybiBpID4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVjYWxjdWxhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB4OiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLmNvbFdpZHRoICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQpICogKHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5jb2wgLSAxKSArIHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0ICsgdGhpcy5fbmdHcmlkLnNjcmVlbk1hcmdpbjtcclxuICAgICAgICBjb25zdCB5OiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLnJvd0hlaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3AgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tKSAqICh0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93IC0gMSkgKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wO1xyXG5cclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc2l6ZS54IDwgdGhpcy5fbmdHcmlkLm1pbkNvbHMpIHRoaXMuX3NpemUueCA9IHRoaXMuX25nR3JpZC5taW5Db2xzO1xyXG4gICAgICAgIGlmICh0aGlzLl9zaXplLnkgPCB0aGlzLl9uZ0dyaWQubWluUm93cykgdGhpcy5fc2l6ZS55ID0gdGhpcy5fbmdHcmlkLm1pblJvd3M7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1dpZHRoOiBudW1iZXIgPSAodGhpcy5fbmdHcmlkLmNvbFdpZHRoICogdGhpcy5fc2l6ZS54KSArICgodGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQpICogKHRoaXMuX3NpemUueCAtIDEpKTtcclxuICAgICAgICBjb25zdCBuZXdIZWlnaHQ6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQucm93SGVpZ2h0ICogdGhpcy5fc2l6ZS55KSArICgodGhpcy5fbmdHcmlkLm1hcmdpblRvcCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20pICogKHRoaXMuX3NpemUueSAtIDEpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdzogbnVtYmVyID0gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgdGhpcy5fbmdHcmlkLm1pbldpZHRoLCBuZXdXaWR0aCk7XHJcbiAgICAgICAgY29uc3QgaDogbnVtYmVyID0gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIHRoaXMuX25nR3JpZC5taW5IZWlnaHQsIG5ld0hlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGltZW5zaW9ucyh3LCBoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRNb3VzZVBvc2l0aW9uKGU6IGFueSk6IE5nR3JpZFJhd1Bvc2l0aW9uIHtcclxuICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC50b3VjaGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9lOiBhbnkgPSBlLm9yaWdpbmFsRXZlbnQ7XHJcbiAgICAgICAgICAgIGUgPSBvZS50b3VjaGVzLmxlbmd0aCA/IG9lLnRvdWNoZXNbMF0gOiAob2UuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID8gb2UuY2hhbmdlZFRvdWNoZXNbMF0gOiBlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudG91Y2hlcykge1xyXG4gICAgICAgICAgICBlID0gZS50b3VjaGVzLmxlbmd0aCA/IGUudG91Y2hlc1swXSA6IChlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCByZWZQb3M6IE5nR3JpZFJhd1Bvc2l0aW9uID0gdGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBlLmNsaWVudFggLSByZWZQb3MubGVmdCxcclxuICAgICAgICAgICAgdG9wOiBlLmNsaWVudFkgLSByZWZQb3MudG9wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hcHBseUNoYW5nZXMoY2hhbmdlczogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGNoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBjaGFuZ2VDaGVjayA9IChyZWNvcmQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnW3JlY29yZC5rZXldICE9PSByZWNvcmQuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdbcmVjb3JkLmtleV0gPSByZWNvcmQuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbShjaGFuZ2VDaGVjayk7XHJcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoQ2hhbmdlZEl0ZW0oY2hhbmdlQ2hlY2spO1xyXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaFJlbW92ZWRJdGVtKChyZWNvcmQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25maWcodGhpcy5fY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Db25maWdDaGFuZ2VFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdXNlckNvbmZpZyA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9jb25maWcuc2l6ZXggPSB0aGlzLl91c2VyQ29uZmlnLnNpemV4ID0gdGhpcy5fc2l6ZS54O1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZy5zaXpleSA9IHRoaXMuX3VzZXJDb25maWcuc2l6ZXkgPSB0aGlzLl9zaXplLnk7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnLmNvbCA9IHRoaXMuX3VzZXJDb25maWcuY29sID0gdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbDtcclxuICAgICAgICB0aGlzLl9jb25maWcucm93ID0gdGhpcy5fdXNlckNvbmZpZy5yb3cgPSB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93O1xyXG4gICAgICAgIHRoaXMubmdHcmlkSXRlbUNoYW5nZS5lbWl0KHRoaXMuX3VzZXJDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FuUmVzaXplSW5EaXJlY3Rpb24oZGlyZWN0aW9uOiBzdHJpbmcsIG1vdXNlUG9zOiBOZ0dyaWRSYXdQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbXJpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fZWxlbVdpZHRoICYmIG1vdXNlUG9zLmxlZnQgPiB0aGlzLl9lbGVtV2lkdGggLSB0aGlzLl9ib3JkZXJTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgbW91c2VQb3MudG9wIDwgdGhpcy5fZWxlbUhlaWdodCAmJiBtb3VzZVBvcy50b3AgPiB0aGlzLl9lbGVtSGVpZ2h0IC0gdGhpcy5fYm9yZGVyU2l6ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTppbmRlbnRcclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tbGVmdCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MubGVmdCA8IHRoaXMuX2JvcmRlclNpemUgJiYgbW91c2VQb3MudG9wIDwgdGhpcy5fZWxlbUhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICYmIG1vdXNlUG9zLnRvcCA+IHRoaXMuX2VsZW1IZWlnaHQgLSB0aGlzLl9ib3JkZXJTaXplOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmluZGVudFxyXG4gICAgICAgICAgICBjYXNlICd0b3ByaWdodCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MubGVmdCA8IHRoaXMuX2VsZW1XaWR0aCAmJiBtb3VzZVBvcy5sZWZ0ID4gdGhpcy5fZWxlbVdpZHRoIC0gdGhpcy5fYm9yZGVyU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICYmIG1vdXNlUG9zLnRvcCA8IHRoaXMuX2JvcmRlclNpemU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6aW5kZW50XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcGxlZnQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9ib3JkZXJTaXplICYmIG1vdXNlUG9zLnRvcCA8IHRoaXMuX2JvcmRlclNpemU7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fZWxlbVdpZHRoICYmIG1vdXNlUG9zLmxlZnQgPiB0aGlzLl9lbGVtV2lkdGggLSB0aGlzLl9ib3JkZXJTaXplO1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fYm9yZGVyU2l6ZTtcclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy50b3AgPCB0aGlzLl9lbGVtSGVpZ2h0ICYmIG1vdXNlUG9zLnRvcCA+IHRoaXMuX2VsZW1IZWlnaHQgLSB0aGlzLl9ib3JkZXJTaXplO1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLnRvcCA8IHRoaXMuX2JvcmRlclNpemU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nR3JpZCB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvTmdHcmlkJztcclxuaW1wb3J0IHsgTmdHcmlkSXRlbSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvTmdHcmlkSXRlbSc7XHJcbmltcG9ydCB7IE5nR3JpZFBsYWNlaG9sZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OZ0dyaWRQbGFjZWhvbGRlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogICAgIFsgTmdHcmlkLCBOZ0dyaWRJdGVtLCBOZ0dyaWRQbGFjZWhvbGRlciBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogIFsgTmdHcmlkUGxhY2Vob2xkZXIgXSxcclxuICBleHBvcnRzOiAgICAgICAgICBbIE5nR3JpZCwgTmdHcmlkSXRlbSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0dyaWRNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIk5nR3JpZEhlbHBlci5nZW5lcmF0ZVV1aWQiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiTmdHcmlkSGVscGVyLnNvcnRJdGVtc0J5UG9zaXRpb25WZXJ0aWNhbCIsIk5nR3JpZEhlbHBlci5zb3J0SXRlbXNCeVBvc2l0aW9uSG9yaXpvbnRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTtJQUNDLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUM7UUFDeEUscUJBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxtQkFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDdEIsQ0FBQyxDQUFDO0NBQ0g7Ozs7OztBQUVELHVDQUE4QyxDQUFhLEVBQUUsQ0FBYTtJQUN6RSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQUU7SUFDOUMsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7Q0FDckI7Ozs7OztBQUVELHFDQUE0QyxDQUFhLEVBQUUsQ0FBYTtJQUN2RSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQUU7SUFDOUMsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7Q0FDckI7Ozs7OztBQ2ZEO0lBWUksMkJBQW9CLEtBQWlCLEVBQVUsU0FBbUI7UUFBOUMs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QUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUUxTSxxQkFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25JLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFOU0sT0FBTyxPQUFPLENBQUM7Ozs7Ozs7SUFJWCxtQ0FBYzs7Ozs7Y0FBQyxPQUFZLEVBQUUsUUFBZ0I7UUFDakQsSUFBSSxDQUFDLE9BQU87WUFB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