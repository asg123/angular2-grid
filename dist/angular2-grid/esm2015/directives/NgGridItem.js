/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgGrid } from './NgGrid';
import { Directive, ElementRef, Renderer2, EventEmitter, KeyValueDiffers, ViewContainerRef, Output } from '@angular/core';
export class NgGridItem {
    /**
     * @param {?} _differs
     * @param {?} _ngEl
     * @param {?} _renderer
     * @param {?} _ngGrid
     * @param {?} containerRef
     */
    constructor(_differs, _ngEl, _renderer, _ngGrid, containerRef) {
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
    /**
     * @param {?} zIndex
     * @return {?}
     */
    set zIndex(zIndex) {
        this._renderer.setStyle(this._ngEl.nativeElement, 'z-index', zIndex.toString());
        this._zIndex = zIndex;
    }
    /**
     * @return {?}
     */
    get zIndex() {
        return this._zIndex;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set config(v) {
        this._userConfig = v;
        const /** @type {?} */ configObject = Object.assign({}, NgGridItem.CONST_DEFAULT_CONFIG, v);
        for (let /** @type {?} */ x in NgGridItem.CONST_DEFAULT_CONFIG)
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
    }
    /**
     * @return {?}
     */
    get sizex() {
        return this._size.x;
    }
    /**
     * @return {?}
     */
    get sizey() {
        return this._size.y;
    }
    /**
     * @return {?}
     */
    get col() {
        return this._currentPosition.col;
    }
    /**
     * @return {?}
     */
    get row() {
        return this._currentPosition.row;
    }
    /**
     * @return {?}
     */
    get currentCol() {
        return this._currentPosition.col;
    }
    /**
     * @return {?}
     */
    get currentRow() {
        return this._currentPosition.row;
    }
    /**
     * @return {?}
     */
    onResizeStartEvent() {
        const /** @type {?} */ event = this.getEventOutput();
        this.onResizeStart.emit(event);
        this.onResizeAny.emit(event);
        this.onChangeStart.emit(event);
        this.onChangeAny.emit(event);
    }
    /**
     * @return {?}
     */
    onResizeEvent() {
        const /** @type {?} */ event = this.getEventOutput();
        this.onResize.emit(event);
        this.onResizeAny.emit(event);
        this.onChange.emit(event);
        this.onChangeAny.emit(event);
    }
    /**
     * @return {?}
     */
    onResizeStopEvent() {
        const /** @type {?} */ event = this.getEventOutput();
        this.onResizeStop.emit(event);
        this.onResizeAny.emit(event);
        this.onChangeStop.emit(event);
        this.onChangeAny.emit(event);
        this.onConfigChangeEvent();
    }
    /**
     * @return {?}
     */
    onDragStartEvent() {
        const /** @type {?} */ event = this.getEventOutput();
        this.onDragStart.emit(event);
        this.onDragAny.emit(event);
        this.onChangeStart.emit(event);
        this.onChangeAny.emit(event);
    }
    /**
     * @return {?}
     */
    onDragEvent() {
        const /** @type {?} */ event = this.getEventOutput();
        this.onDrag.emit(event);
        this.onDragAny.emit(event);
        this.onChange.emit(event);
        this.onChangeAny.emit(event);
    }
    /**
     * @return {?}
     */
    onDragStopEvent() {
        const /** @type {?} */ event = this.getEventOutput();
        this.onDragStop.emit(event);
        this.onDragAny.emit(event);
        this.onChangeStop.emit(event);
        this.onChangeAny.emit(event);
        this.onConfigChangeEvent();
    }
    /**
     * @return {?}
     */
    onCascadeEvent() {
        this.onConfigChangeEvent();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._ngEl.nativeElement, 'grid-item');
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'position', 'absolute');
        this._recalculateDimensions();
        this._recalculatePosition();
        // Force a config update in case there is no config assigned
        this.config = this._userConfig;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    canDrag(e) {
        if (!this.isDraggable)
            return false;
        if (this._dragHandle) {
            return this.findHandle(this._dragHandle, e.target);
        }
        return true;
    }
    /**
     * @param {?} handleSelector
     * @param {?} startElement
     * @return {?}
     */
    findHandle(handleSelector, startElement) {
        try {
            let /** @type {?} */ targetElem = startElement;
            while (targetElem && targetElem != this._ngEl.nativeElement) {
                if (this.elementMatches(targetElem, handleSelector))
                    return true;
                targetElem = targetElem.parentElement;
            }
        }
        catch (/** @type {?} */ err) { }
        return false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    canResize(e) {
        if (!this.isResizable)
            return null;
        if (this._resizeHandle) {
            if (typeof this._resizeHandle === 'string') {
                return this.findHandle(this._resizeHandle, e.target) ? 'bottomright' : null;
            }
            if (typeof this._resizeHandle !== 'object')
                return null;
            const /** @type {?} */ resizeDirections = ['bottomright', 'bottomleft', 'topright', 'topleft', 'right', 'left', 'bottom', 'top'];
            for (let /** @type {?} */ direction of resizeDirections) {
                if (direction in this._resizeHandle) {
                    if (this.findHandle(this._resizeHandle[direction], e.target)) {
                        return direction;
                    }
                }
            }
            return null;
        }
        if (this._borderSize <= 0)
            return null;
        const /** @type {?} */ mousePos = this._getMousePosition(e);
        for (let /** @type {?} */ direction of this._resizeDirections) {
            if (this.canResizeInDirection(direction, mousePos)) {
                return direction;
            }
        }
        return null;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseMove(e) {
        if (this._ngGrid.autoStyle) {
            if (this._ngGrid.resizeEnable) {
                const /** @type {?} */ resizeDirection = this.canResize(e);
                let /** @type {?} */ cursor = 'default';
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._added)
            this._ngGrid.removeItem(this);
    }
    /**
     * @return {?}
     */
    getElement() {
        return this._ngEl;
    }
    /**
     * @return {?}
     */
    getDragHandle() {
        return this._dragHandle;
    }
    /**
     * @return {?}
     */
    getResizeHandle() {
        return this._resizeHandle;
    }
    /**
     * @return {?}
     */
    getDimensions() {
        return { 'width': this._elemWidth, 'height': this._elemHeight };
    }
    /**
     * @return {?}
     */
    getSize() {
        return this._size;
    }
    /**
     * @return {?}
     */
    getPosition() {
        return { 'left': this._elemLeft, 'top': this._elemTop };
    }
    /**
     * @return {?}
     */
    getGridPosition() {
        return this._currentPosition;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
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
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._differ != null) {
            const /** @type {?} */ changes = this._differ.diff(this._userConfig);
            if (changes != null) {
                return this._applyChanges(changes);
            }
        }
        return false;
    }
    /**
     * @param {?} newSize
     * @param {?=} update
     * @return {?}
     */
    setSize(newSize, update = true) {
        newSize = this.fixResize(newSize);
        this._size = newSize;
        if (update)
            this._recalculateDimensions();
        this.onItemChange.emit(this.getEventOutput());
    }
    /**
     * @param {?} gridPosition
     * @param {?=} update
     * @return {?}
     */
    setGridPosition(gridPosition, update = true) {
        this._currentPosition = gridPosition;
        if (update)
            this._recalculatePosition();
        this.onItemChange.emit(this.getEventOutput());
    }
    /**
     * @return {?}
     */
    getEventOutput() {
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
    }
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    setPosition(x, y) {
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
    }
    /**
     * @param {?} cascade
     * @return {?}
     */
    setCascadeMode(cascade) {
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
    }
    /**
     * @param {?} w
     * @param {?} h
     * @return {?}
     */
    setDimensions(w, h) {
        if (w < this.minWidth)
            w = this.minWidth;
        if (h < this.minHeight)
            h = this.minHeight;
        this._renderer.setStyle(this._ngEl.nativeElement, 'width', w + 'px');
        this._renderer.setStyle(this._ngEl.nativeElement, 'height', h + 'px');
        this._elemWidth = w;
        this._elemHeight = h;
    }
    /**
     * @return {?}
     */
    startMoving() {
        this._renderer.addClass(this._ngEl.nativeElement, 'moving');
        const /** @type {?} */ style = window.getComputedStyle(this._ngEl.nativeElement);
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'z-index', (parseInt(style.getPropertyValue('z-index')) + 1).toString());
    }
    /**
     * @return {?}
     */
    stopMoving() {
        this._renderer.removeClass(this._ngEl.nativeElement, 'moving');
        const /** @type {?} */ style = window.getComputedStyle(this._ngEl.nativeElement);
        if (this._ngGrid.autoStyle)
            this._renderer.setStyle(this._ngEl.nativeElement, 'z-index', (parseInt(style.getPropertyValue('z-index')) - 1).toString());
    }
    /**
     * @return {?}
     */
    recalculateSelf() {
        this._recalculatePosition();
        this._recalculateDimensions();
    }
    /**
     * @param {?} newSize
     * @return {?}
     */
    fixResize(newSize) {
        if (this._maxCols > 0 && newSize.x > this._maxCols)
            newSize.x = this._maxCols;
        if (this._maxRows > 0 && newSize.y > this._maxRows)
            newSize.y = this._maxRows;
        if (this._minCols > 0 && newSize.x < this._minCols)
            newSize.x = this._minCols;
        if (this._minRows > 0 && newSize.y < this._minRows)
            newSize.y = this._minRows;
        const /** @type {?} */ itemWidth = (newSize.x * this._ngGrid.colWidth) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (newSize.x - 1));
        if (itemWidth < this.minWidth)
            newSize.x = Math.ceil((this.minWidth + this._ngGrid.marginRight + this._ngGrid.marginLeft) / (this._ngGrid.colWidth + this._ngGrid.marginRight + this._ngGrid.marginLeft));
        const /** @type {?} */ itemHeight = (newSize.y * this._ngGrid.rowHeight) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (newSize.y - 1));
        if (itemHeight < this.minHeight)
            newSize.y = Math.ceil((this.minHeight + this._ngGrid.marginBottom + this._ngGrid.marginTop) / (this._ngGrid.rowHeight + this._ngGrid.marginBottom + this._ngGrid.marginTop));
        return newSize;
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    elementMatches(element, selector) {
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
        const /** @type {?} */ matches = (element.document || element.ownerDocument).querySelectorAll(selector);
        let /** @type {?} */ i = matches.length;
        while (--i >= 0 && matches.item(i) !== element) { }
        return i > -1;
    }
    /**
     * @return {?}
     */
    _recalculatePosition() {
        const /** @type {?} */ x = (this._ngGrid.colWidth + this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._currentPosition.col - 1) + this._ngGrid.marginLeft + this._ngGrid.screenMargin;
        const /** @type {?} */ y = (this._ngGrid.rowHeight + this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._currentPosition.row - 1) + this._ngGrid.marginTop;
        this.setPosition(x, y);
    }
    /**
     * @return {?}
     */
    _recalculateDimensions() {
        if (this._size.x < this._ngGrid.minCols)
            this._size.x = this._ngGrid.minCols;
        if (this._size.y < this._ngGrid.minRows)
            this._size.y = this._ngGrid.minRows;
        const /** @type {?} */ newWidth = (this._ngGrid.colWidth * this._size.x) + ((this._ngGrid.marginLeft + this._ngGrid.marginRight) * (this._size.x - 1));
        const /** @type {?} */ newHeight = (this._ngGrid.rowHeight * this._size.y) + ((this._ngGrid.marginTop + this._ngGrid.marginBottom) * (this._size.y - 1));
        const /** @type {?} */ w = Math.max(this.minWidth, this._ngGrid.minWidth, newWidth);
        const /** @type {?} */ h = Math.max(this.minHeight, this._ngGrid.minHeight, newHeight);
        this.setDimensions(w, h);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _getMousePosition(e) {
        if (e.originalEvent && e.originalEvent.touches) {
            const /** @type {?} */ oe = e.originalEvent;
            e = oe.touches.length ? oe.touches[0] : (oe.changedTouches.length ? oe.changedTouches[0] : e);
        }
        else if (e.touches) {
            e = e.touches.length ? e.touches[0] : (e.changedTouches.length ? e.changedTouches[0] : e);
        }
        const /** @type {?} */ refPos = this._ngEl.nativeElement.getBoundingClientRect();
        return {
            left: e.clientX - refPos.left,
            top: e.clientY - refPos.top
        };
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    _applyChanges(changes) {
        let /** @type {?} */ changed = false;
        const /** @type {?} */ changeCheck = (record) => {
            if (this._config[record.key] !== record.currentValue) {
                this._config[record.key] = record.currentValue;
                changed = true;
            }
        };
        changes.forEachAddedItem(changeCheck);
        changes.forEachChangedItem(changeCheck);
        changes.forEachRemovedItem((record) => {
            changed = true;
            delete this._config[record.key];
        });
        if (changed) {
            this.setConfig(this._config);
        }
        return changed;
    }
    /**
     * @return {?}
     */
    onConfigChangeEvent() {
        if (this._userConfig === null)
            return;
        this._config.sizex = this._userConfig.sizex = this._size.x;
        this._config.sizey = this._userConfig.sizey = this._size.y;
        this._config.col = this._userConfig.col = this._currentPosition.col;
        this._config.row = this._userConfig.row = this._currentPosition.row;
        this.ngGridItemChange.emit(this._userConfig);
    }
    /**
     * @param {?} direction
     * @param {?} mousePos
     * @return {?}
     */
    canResizeInDirection(direction, mousePos) {
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
    }
}
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
NgGridItem.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgGrid },
    { type: ViewContainerRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmdHcmlkSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWdyaWQvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL05nR3JpZEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBa0IsZUFBZSxFQUFxQixnQkFBZ0IsRUFBRSxNQUFNLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFNdEssTUFBTTs7Ozs7Ozs7SUE2SEYsWUFDWSxVQUNBLE9BQ0EsV0FDQSxTQUNEO1FBSkMsYUFBUSxHQUFSLFFBQVE7UUFDUixVQUFLLEdBQUwsS0FBSztRQUNMLGNBQVMsR0FBVCxTQUFTO1FBQ1QsWUFBTyxHQUFQLE9BQU87UUFDUixpQkFBWSxHQUFaLFlBQVk7OzRCQWhJd0MsSUFBSSxZQUFZLENBQWtCLEtBQUssQ0FBQzsyQkFDekMsSUFBSSxZQUFZLEVBQW1CO3NCQUN4QyxJQUFJLFlBQVksRUFBbUI7MEJBQy9CLElBQUksWUFBWSxFQUFtQjt5QkFDcEMsSUFBSSxZQUFZLEVBQW1COzZCQUMvQixJQUFJLFlBQVksRUFBbUI7d0JBQ3hDLElBQUksWUFBWSxFQUFtQjs0QkFDL0IsSUFBSSxZQUFZLEVBQW1COzJCQUNwQyxJQUFJLFlBQVksRUFBbUI7NkJBQ2pDLElBQUksWUFBWSxFQUFtQjt3QkFDeEMsSUFBSSxZQUFZLEVBQW1COzRCQUMvQixJQUFJLFlBQVksRUFBbUI7MkJBQ3BDLElBQUksWUFBWSxFQUFtQjtnQ0FDN0IsSUFBSSxZQUFZLEVBQW9CO3VCQWtCOUUsS0FBSzsyQkFDRCxJQUFJOzJCQUNKLElBQUk7d0JBQ1IsQ0FBQzt5QkFDQSxDQUFDO21CQUNQLElBQUk7Z0NBSXNCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO3FCQUNqQyxFQUFFLENB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LElBQUksQ0FBQyxRQUFRLENBQUM7UUFFOUUsdUJBQU0sU0FBUyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRTFNLHVCQUFNLFVBQVUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuSSxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUU5TSxNQUFNLENBQUMsT0FBTyxDQUFDOzs7Ozs7O0lBSVgsY0FBYyxDQUFDLE9BQVksRUFBRSxRQUFnQjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEYsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFOUQsdUJBQU0sT0FBTyxHQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUYscUJBQUksQ0FBQyxHQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ25ELE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBR1Ysb0JBQW9CO1FBQ3hCLHVCQUFNLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3ZMLHVCQUFNLENBQUMsR0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRTNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7OztJQUduQixzQkFBc0I7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM3RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRTdFLHVCQUFNLFFBQVEsR0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlJLHVCQUFNLFNBQVMsR0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhKLHVCQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0UsdUJBQU0sQ0FBQyxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU5RSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBR3JCLGlCQUFpQixDQUFDLENBQU07UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0MsdUJBQU0sRUFBRSxHQUFRLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDaEMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdGO1FBR0QsdUJBQU0sTUFBTSxHQUFzQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRW5GLE1BQU0sQ0FBQztZQUNILElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJO1lBQzdCLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHO1NBQzlCLENBQUM7Ozs7OztJQUdFLGFBQWEsQ0FBQyxPQUFZO1FBQzlCLHFCQUFJLE9BQU8sR0FBWSxLQUFLLENBQUM7UUFDN0IsdUJBQU0sV0FBVyxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQy9DLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDbEI7U0FDSixDQUFDO1FBQ0YsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN2QyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDOzs7OztJQUdYLG1CQUFtQjtRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUV0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7UUFDcEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7Ozs7SUFHekMsb0JBQW9CLENBQUMsU0FBaUIsRUFBRSxRQUEyQjtRQUN2RSxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssYUFBYTtnQkFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVzt1QkFDckYsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2pHLEtBQUssWUFBWTtnQkFDYixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVc7dUJBQ25FLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzlELEtBQUssVUFBVTtnQkFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVzt1QkFDckYsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzNDLEtBQUssU0FBUztnQkFDVixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMvRSxLQUFLLE9BQU87Z0JBQ1IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNqRyxLQUFLLE1BQU07Z0JBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM1QyxLQUFLLFFBQVE7Z0JBQ1QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNqRyxLQUFLLEtBQUs7Z0JBQ04sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMzQztnQkFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3BCOzs7a0NBNWtCbUQ7SUFDcEQsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsQ0FBQztJQUNOLEdBQUcsRUFBRSxDQUFDO0lBQ04sS0FBSyxFQUFFLENBQUM7SUFDUixLQUFLLEVBQUUsQ0FBQztJQUNSLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLEtBQUssRUFBRSxLQUFLO0lBQ1osU0FBUyxFQUFFLElBQUk7SUFDZixTQUFTLEVBQUUsSUFBSTtJQUNmLFVBQVUsRUFBRSxFQUFFO0lBQ2QsZ0JBQWdCLEVBQUUsSUFBSTtDQUN6Qjs7WUFuQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNqQzs7OztZQUx3RSxlQUFlO1lBQXBFLFVBQVU7WUFBRSxTQUFTO1lBRmhDLE1BQU07WUFFOEYsZ0JBQWdCOzs7MkJBUXhILE1BQU07MEJBQ04sTUFBTTtxQkFDTixNQUFNO3lCQUNOLE1BQU07d0JBQ04sTUFBTTs0QkFDTixNQUFNO3VCQUNOLE1BQU07MkJBQ04sTUFBTTswQkFDTixNQUFNOzRCQUNOLE1BQU07dUJBQ04sTUFBTTsyQkFDTixNQUFNOzBCQUNOLE1BQU07K0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nR3JpZCB9IGZyb20gJy4vTmdHcmlkJztcclxuaW1wb3J0IHsgTmdHcmlkSXRlbUNvbmZpZywgTmdHcmlkSXRlbUV2ZW50LCBOZ0dyaWRJdGVtUG9zaXRpb24sIE5nR3JpZEl0ZW1TaXplLCBOZ0dyaWRSYXdQb3NpdGlvbiwgTmdHcmlkSXRlbURpbWVuc2lvbnMsIFJlc2l6ZUhhbmRsZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvSU5nR3JpZCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBFdmVudEVtaXR0ZXIsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbmdHcmlkSXRlbV0nLFxyXG4gICAgaW5wdXRzOiBbJ2NvbmZpZzogbmdHcmlkSXRlbSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0dyaWRJdGVtIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gICAgLy8gRXZlbnQgRW1pdHRlcnNcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PihmYWxzZSk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWc6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZ1N0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZ0FueTogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemU6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplU3RvcDogRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1FdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25SZXNpemVBbnk6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlU3RhcnQ6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZVN0b3A6IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ0dyaWRJdGVtRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlQW55OiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBuZ0dyaWRJdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdHcmlkSXRlbUNvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nR3JpZEl0ZW1Db25maWc+KCk7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBjb25maWdcclxuICAgIHByaXZhdGUgc3RhdGljIENPTlNUX0RFRkFVTFRfQ09ORklHOiBOZ0dyaWRJdGVtQ29uZmlnID0ge1xyXG4gICAgICAgIHVpZDogbnVsbCxcclxuICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgcm93OiAxLFxyXG4gICAgICAgIHNpemV4OiAxLFxyXG4gICAgICAgIHNpemV5OiAxLFxyXG4gICAgICAgIGRyYWdIYW5kbGU6IG51bGwsXHJcbiAgICAgICAgcmVzaXplSGFuZGxlOiBudWxsLFxyXG4gICAgICAgIGZpeGVkOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIGJvcmRlclNpemU6IDI1LFxyXG4gICAgICAgIHJlc2l6ZURpcmVjdGlvbnM6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBpc0ZpeGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNEcmFnZ2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGlzUmVzaXphYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgdWlkOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzXHJcbiAgICBwcml2YXRlIF9wYXlsb2FkOiBhbnk7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50UG9zaXRpb246IE5nR3JpZEl0ZW1Qb3NpdGlvbiA9IHsgY29sOiAxLCByb3c6IDEgfTtcclxuICAgIHByaXZhdGUgX3NpemU6IE5nR3JpZEl0ZW1TaXplID0geyB4OiAxLCB5OiAxIH07XHJcbiAgICBwcml2YXRlIF9jb25maWcgPSBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHO1xyXG4gICAgcHJpdmF0ZSBfdXNlckNvbmZpZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9kcmFnSGFuZGxlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9yZXNpemVIYW5kbGU6IFJlc2l6ZUhhbmRsZTtcclxuICAgIHByaXZhdGUgX2JvcmRlclNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2VsZW1XaWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZWxlbUhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZWxlbUxlZnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2VsZW1Ub3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FkZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9kaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuICAgIHByaXZhdGUgX2Nhc2NhZGVNb2RlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9tYXhDb2xzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbWluQ29sczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX21heFJvd3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9taW5Sb3dzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplRGlyZWN0aW9uczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgX3pJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzZXQgekluZGV4KHpJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsIHpJbmRleC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLl96SW5kZXggPSB6SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHpJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl96SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gW25nLWdyaWQtaXRlbV0gaGFuZGxlclxyXG4gICAgc2V0IGNvbmZpZyh2OiBOZ0dyaWRJdGVtQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckNvbmZpZyA9IHY7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZ09iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIE5nR3JpZEl0ZW0uQ09OU1RfREVGQVVMVF9DT05GSUcsIHYpO1xyXG4gICAgICAgIGZvciAobGV0IHggaW4gTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRylcclxuICAgICAgICAgICAgaWYgKGNvbmZpZ09iamVjdFt4XSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY29uZmlnT2JqZWN0W3hdID0gTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJR1t4XTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb25maWcoY29uZmlnT2JqZWN0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJDb25maWcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGlmZmVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RpZmZlciA9IHRoaXMuX2RpZmZlcnMuZmluZCh0aGlzLl91c2VyQ29uZmlnKS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGlmZmVyLmRpZmYodGhpcy5fdXNlckNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2FkZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fbmdHcmlkLmFkZEl0ZW0odGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpemV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemUueDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZXkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZS55O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2woKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcm93KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3c7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnRDb2woKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudFJvdygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9kaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfbmdFbDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgX25nR3JpZDogTmdHcmlkLFxyXG4gICAgICAgIHB1YmxpYyBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlc2l6ZVN0YXJ0RXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplU3RhcnQuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZUFueS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlU3RhcnQuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFueS5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZUV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFueS5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZVN0b3BFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemVTdG9wLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25SZXNpemVBbnkuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVN0b3AuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFueS5lbWl0KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNvbmZpZ0NoYW5nZUV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25EcmFnU3RhcnRFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBldmVudDogTmdHcmlkSXRlbUV2ZW50ID0gdGhpcy5nZXRFdmVudE91dHB1dCgpO1xyXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdBbnkuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVN0YXJ0LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25EcmFnRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IE5nR3JpZEl0ZW1FdmVudCA9IHRoaXMuZ2V0RXZlbnRPdXRwdXQoKTtcclxuICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uRHJhZ0FueS5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25EcmFnU3RvcEV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBOZ0dyaWRJdGVtRXZlbnQgPSB0aGlzLmdldEV2ZW50T3V0cHV0KCk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdTdG9wLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25EcmFnQW55LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VTdG9wLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBbnkuZW1pdChldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMub25Db25maWdDaGFuZ2VFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uQ2FzY2FkZUV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Db25maWdDaGFuZ2VFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdncmlkLWl0ZW0nKTtcclxuICAgICAgICBpZiAodGhpcy5fbmdHcmlkLmF1dG9TdHlsZSkgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIEZvcmNlIGEgY29uZmlnIHVwZGF0ZSBpbiBjYXNlIHRoZXJlIGlzIG5vIGNvbmZpZyBhc3NpZ25lZFxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fdXNlckNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcHVibGljIGNhbkRyYWcoZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dhYmxlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnSGFuZGxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRIYW5kbGUodGhpcy5fZHJhZ0hhbmRsZSwgZS50YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRIYW5kbGUoaGFuZGxlU2VsZWN0b3I6IHN0cmluZywgc3RhcnRFbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRFbGVtOiBhbnkgPSBzdGFydEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0RWxlbSAmJiB0YXJnZXRFbGVtICE9IHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudE1hdGNoZXModGFyZ2V0RWxlbSwgaGFuZGxlU2VsZWN0b3IpKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtID0gdGFyZ2V0RWxlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblJlc2l6ZShlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Jlc2l6YWJsZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9yZXNpemVIYW5kbGUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9yZXNpemVIYW5kbGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kSGFuZGxlKHRoaXMuX3Jlc2l6ZUhhbmRsZSwgZS50YXJnZXQpID8gJ2JvdHRvbXJpZ2h0JyA6IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fcmVzaXplSGFuZGxlICE9PSAnb2JqZWN0JykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNpemVEaXJlY3Rpb25zID0gWyAnYm90dG9tcmlnaHQnLCAnYm90dG9tbGVmdCcsICd0b3ByaWdodCcsICd0b3BsZWZ0JywgJ3JpZ2h0JywgJ2xlZnQnLCAnYm90dG9tJywgJ3RvcCcgXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIHJlc2l6ZURpcmVjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gaW4gdGhpcy5fcmVzaXplSGFuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmluZEhhbmRsZSh0aGlzLl9yZXNpemVIYW5kbGVbZGlyZWN0aW9uXSwgZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9ib3JkZXJTaXplIDw9IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtb3VzZVBvczogTmdHcmlkUmF3UG9zaXRpb24gPSB0aGlzLl9nZXRNb3VzZVBvc2l0aW9uKGUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgdGhpcy5fcmVzaXplRGlyZWN0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5SZXNpemVJbkRpcmVjdGlvbihkaXJlY3Rpb24sIG1vdXNlUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTW91c2VNb3ZlKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ0dyaWQuYXV0b1N0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZ0dyaWQucmVzaXplRW5hYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNpemVEaXJlY3Rpb24gPSB0aGlzLmNhblJlc2l6ZShlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3Vyc29yOiBzdHJpbmcgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc2l6ZURpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbXJpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3BsZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gJ253c2UtcmVzaXplJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbWxlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSAnbmVzdy1yZXNpemUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9ICducy1yZXNpemUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9ICdldy1yZXNpemUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmdHcmlkLmRyYWdFbmFibGUgJiYgdGhpcy5jYW5EcmFnKGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgY3Vyc29yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ0dyaWQuZHJhZ0VuYWJsZSAmJiB0aGlzLmNhbkRyYWcoZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICdtb3ZlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fYWRkZWQpIHRoaXMuX25nR3JpZC5yZW1vdmVJdGVtKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICAgIEdldHRlcnNcclxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IEVsZW1lbnRSZWYge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uZ0VsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREcmFnSGFuZGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYWdIYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc2l6ZUhhbmRsZSgpOiBSZXNpemVIYW5kbGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNpemVIYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERpbWVuc2lvbnMoKTogTmdHcmlkSXRlbURpbWVuc2lvbnMge1xyXG4gICAgICAgIHJldHVybiB7ICd3aWR0aCc6IHRoaXMuX2VsZW1XaWR0aCwgJ2hlaWdodCc6IHRoaXMuX2VsZW1IZWlnaHQgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IE5nR3JpZFJhd1Bvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4geyAnbGVmdCc6IHRoaXMuX2VsZW1MZWZ0LCAndG9wJzogdGhpcy5fZWxlbVRvcCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRHcmlkUG9zaXRpb24oKTogTmdHcmlkSXRlbVBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICAgIFNldHRlcnNcclxuICAgIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBOZ0dyaWRJdGVtQ29uZmlnKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLl9wYXlsb2FkID0gY29uZmlnLnBheWxvYWQ7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbCA9IGNvbmZpZy5jb2wgPyBjb25maWcuY29sIDogTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRy5jb2w7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBvc2l0aW9uLnJvdyA9IGNvbmZpZy5yb3cgPyBjb25maWcucm93IDogTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRy5yb3c7XHJcbiAgICAgICAgdGhpcy5fc2l6ZS54ID0gY29uZmlnLnNpemV4ID8gY29uZmlnLnNpemV4IDogTmdHcmlkSXRlbS5DT05TVF9ERUZBVUxUX0NPTkZJRy5zaXpleDtcclxuICAgICAgICB0aGlzLl9zaXplLnkgPSBjb25maWcuc2l6ZXkgPyBjb25maWcuc2l6ZXkgOiBOZ0dyaWRJdGVtLkNPTlNUX0RFRkFVTFRfQ09ORklHLnNpemV5O1xyXG4gICAgICAgIHRoaXMuX2RyYWdIYW5kbGUgPSBjb25maWcuZHJhZ0hhbmRsZTtcclxuICAgICAgICB0aGlzLl9yZXNpemVIYW5kbGUgPSBjb25maWcucmVzaXplSGFuZGxlO1xyXG4gICAgICAgIHRoaXMuX2JvcmRlclNpemUgPSBjb25maWcuYm9yZGVyU2l6ZTtcclxuICAgICAgICB0aGlzLmlzRHJhZ2dhYmxlID0gY29uZmlnLmRyYWdnYWJsZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUmVzaXphYmxlID0gY29uZmlnLnJlc2l6YWJsZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRml4ZWQgPSBjb25maWcuZml4ZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVzaXplRGlyZWN0aW9ucyA9IGNvbmZpZy5yZXNpemVEaXJlY3Rpb25zIHx8IHRoaXMuX25nR3JpZC5yZXNpemVEaXJlY3Rpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl9tYXhDb2xzID0gIWlzTmFOKGNvbmZpZy5tYXhDb2xzKSAmJiBpc0Zpbml0ZShjb25maWcubWF4Q29scykgPyBjb25maWcubWF4Q29scyA6IDA7XHJcbiAgICAgICAgdGhpcy5fbWluQ29scyA9ICFpc05hTihjb25maWcubWluQ29scykgJiYgaXNGaW5pdGUoY29uZmlnLm1pbkNvbHMpID8gY29uZmlnLm1pbkNvbHMgOiAwO1xyXG4gICAgICAgIHRoaXMuX21heFJvd3MgPSAhaXNOYU4oY29uZmlnLm1heFJvd3MpICYmIGlzRmluaXRlKGNvbmZpZy5tYXhSb3dzKSA/IGNvbmZpZy5tYXhSb3dzIDogMDtcclxuICAgICAgICB0aGlzLl9taW5Sb3dzID0gIWlzTmFOKGNvbmZpZy5taW5Sb3dzKSAmJiBpc0Zpbml0ZShjb25maWcubWluUm93cykgPyBjb25maWcubWluUm93cyA6IDA7XHJcblxyXG4gICAgICAgIHRoaXMubWluV2lkdGggPSAhaXNOYU4oY29uZmlnLm1pbldpZHRoKSAmJiBpc0Zpbml0ZShjb25maWcubWluV2lkdGgpID8gY29uZmlnLm1pbldpZHRoIDogMDtcclxuICAgICAgICB0aGlzLm1pbkhlaWdodCA9ICFpc05hTihjb25maWcubWluSGVpZ2h0KSAmJiBpc0Zpbml0ZShjb25maWcubWluSGVpZ2h0KSA/IGNvbmZpZy5taW5IZWlnaHQgOiAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWluQ29scyA+IDAgJiYgdGhpcy5fbWF4Q29scyA+IDAgJiYgdGhpcy5fbWluQ29scyA+IHRoaXMuX21heENvbHMpIHRoaXMuX21pbkNvbHMgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLl9taW5Sb3dzID4gMCAmJiB0aGlzLl9tYXhSb3dzID4gMCAmJiB0aGlzLl9taW5Sb3dzID4gdGhpcy5fbWF4Um93cykgdGhpcy5fbWluUm93cyA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hZGRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZ0dyaWQudXBkYXRlSXRlbSh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NpemUgPSB0aGlzLmZpeFJlc2l6ZSh0aGlzLl9zaXplKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RpZmZlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXM6IGFueSA9IHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuX3VzZXJDb25maWcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTaXplKG5ld1NpemU6IE5nR3JpZEl0ZW1TaXplLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgbmV3U2l6ZSA9IHRoaXMuZml4UmVzaXplKG5ld1NpemUpO1xyXG4gICAgICAgIHRoaXMuX3NpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIGlmICh1cGRhdGUpIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLm9uSXRlbUNoYW5nZS5lbWl0KHRoaXMuZ2V0RXZlbnRPdXRwdXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEdyaWRQb3NpdGlvbihncmlkUG9zaXRpb246IE5nR3JpZEl0ZW1Qb3NpdGlvbiwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9IGdyaWRQb3NpdGlvbjtcclxuICAgICAgICBpZiAodXBkYXRlKSB0aGlzLl9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMub25JdGVtQ2hhbmdlLmVtaXQodGhpcy5nZXRFdmVudE91dHB1dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRPdXRwdXQoKTogTmdHcmlkSXRlbUV2ZW50IHtcclxuICAgICAgICByZXR1cm4gPE5nR3JpZEl0ZW1FdmVudD57XHJcbiAgICAgICAgICAgIHVpZDogdGhpcy51aWQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHRoaXMuX3BheWxvYWQsXHJcbiAgICAgICAgICAgIGNvbDogdGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbCxcclxuICAgICAgICAgICAgcm93OiB0aGlzLl9jdXJyZW50UG9zaXRpb24ucm93LFxyXG4gICAgICAgICAgICBzaXpleDogdGhpcy5fc2l6ZS54LFxyXG4gICAgICAgICAgICBzaXpleTogdGhpcy5fc2l6ZS55LFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fZWxlbVdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2VsZW1IZWlnaHQsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMuX2VsZW1MZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHRoaXMuX2VsZW1Ub3BcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fY2FzY2FkZU1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB4ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB5ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCB4ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB5ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgeCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgeSArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtTGVmdCA9IHg7XHJcbiAgICAgICAgdGhpcy5fZWxlbVRvcCA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENhc2NhZGVNb2RlKGNhc2NhZGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2Nhc2NhZGVNb2RlID0gY2FzY2FkZTtcclxuICAgICAgICBzd2l0Y2ggKGNhc2NhZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB0aGlzLl9lbGVtTGVmdCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgdGhpcy5fZWxlbVRvcCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgdGhpcy5fZWxlbUxlZnQgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHRoaXMuX2VsZW1Ub3AgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ2JvdHRvbScsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHRoaXMuX2VsZW1MZWZ0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCB0aGlzLl9lbGVtVG9wICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAndG9wJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERpbWVuc2lvbnModzogbnVtYmVyLCBoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodyA8IHRoaXMubWluV2lkdGgpIHcgPSB0aGlzLm1pbldpZHRoO1xyXG4gICAgICAgIGlmIChoIDwgdGhpcy5taW5IZWlnaHQpIGggPSB0aGlzLm1pbkhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB3ICsgJ3B4Jyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaCArICdweCcpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtV2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuX2VsZW1IZWlnaHQgPSBoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydE1vdmluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQsICdtb3ZpbmcnKTtcclxuICAgICAgICBjb25zdCBzdHlsZTogYW55ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBpZiAodGhpcy5fbmdHcmlkLmF1dG9TdHlsZSkgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsIChwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd6LWluZGV4JykpICsgMSkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BNb3ZpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCAnbW92aW5nJyk7XHJcbiAgICAgICAgY29uc3Qgc3R5bGU6IGFueSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nR3JpZC5hdXRvU3R5bGUpIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgJ3otaW5kZXgnLCAocGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnei1pbmRleCcpKSAtIDEpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWNhbGN1bGF0ZVNlbGYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaXhSZXNpemUobmV3U2l6ZTogTmdHcmlkSXRlbVNpemUpOiBOZ0dyaWRJdGVtU2l6ZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21heENvbHMgPiAwICYmIG5ld1NpemUueCA+IHRoaXMuX21heENvbHMpIG5ld1NpemUueCA9IHRoaXMuX21heENvbHM7XHJcbiAgICAgICAgaWYgKHRoaXMuX21heFJvd3MgPiAwICYmIG5ld1NpemUueSA+IHRoaXMuX21heFJvd3MpIG5ld1NpemUueSA9IHRoaXMuX21heFJvd3M7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9taW5Db2xzID4gMCAmJiBuZXdTaXplLnggPCB0aGlzLl9taW5Db2xzKSBuZXdTaXplLnggPSB0aGlzLl9taW5Db2xzO1xyXG4gICAgICAgIGlmICh0aGlzLl9taW5Sb3dzID4gMCAmJiBuZXdTaXplLnkgPCB0aGlzLl9taW5Sb3dzKSBuZXdTaXplLnkgPSB0aGlzLl9taW5Sb3dzO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtV2lkdGggPSAobmV3U2l6ZS54ICogdGhpcy5fbmdHcmlkLmNvbFdpZHRoKSArICgodGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQubWFyZ2luUmlnaHQpICogKG5ld1NpemUueCAtIDEpKTtcclxuICAgICAgICBpZiAoaXRlbVdpZHRoIDwgdGhpcy5taW5XaWR0aCkgbmV3U2l6ZS54ID0gTWF0aC5jZWlsKCh0aGlzLm1pbldpZHRoICsgdGhpcy5fbmdHcmlkLm1hcmdpblJpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQpIC8gKHRoaXMuX25nR3JpZC5jb2xXaWR0aCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5MZWZ0KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSAobmV3U2l6ZS55ICogdGhpcy5fbmdHcmlkLnJvd0hlaWdodCkgKyAoKHRoaXMuX25nR3JpZC5tYXJnaW5Ub3AgKyB0aGlzLl9uZ0dyaWQubWFyZ2luQm90dG9tKSAqIChuZXdTaXplLnkgLSAxKSk7XHJcbiAgICAgICAgaWYgKGl0ZW1IZWlnaHQgPCB0aGlzLm1pbkhlaWdodCkgbmV3U2l6ZS55ID0gTWF0aC5jZWlsKCh0aGlzLm1pbkhlaWdodCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20gKyB0aGlzLl9uZ0dyaWQubWFyZ2luVG9wKSAvICh0aGlzLl9uZ0dyaWQucm93SGVpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3ApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXHJcbiAgICBwcml2YXRlIGVsZW1lbnRNYXRjaGVzKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMpIHJldHVybiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmRvY3VtZW50IHx8ICFlbGVtZW50Lm93bmVyRG9jdW1lbnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2hlczogYW55ID0gKGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudC5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICBsZXQgaTogbnVtYmVyID0gbWF0Y2hlcy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gZWxlbWVudCkgeyB9XHJcbiAgICAgICAgcmV0dXJuIGkgPiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZWNhbGN1bGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHg6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQuY29sV2lkdGggKyB0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCkgKiAodGhpcy5fY3VycmVudFBvc2l0aW9uLmNvbCAtIDEpICsgdGhpcy5fbmdHcmlkLm1hcmdpbkxlZnQgKyB0aGlzLl9uZ0dyaWQuc2NyZWVuTWFyZ2luO1xyXG4gICAgICAgIGNvbnN0IHk6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQucm93SGVpZ2h0ICsgdGhpcy5fbmdHcmlkLm1hcmdpblRvcCArIHRoaXMuX25nR3JpZC5tYXJnaW5Cb3R0b20pICogKHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3cgLSAxKSArIHRoaXMuX25nR3JpZC5tYXJnaW5Ub3A7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVjYWxjdWxhdGVEaW1lbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaXplLnggPCB0aGlzLl9uZ0dyaWQubWluQ29scykgdGhpcy5fc2l6ZS54ID0gdGhpcy5fbmdHcmlkLm1pbkNvbHM7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NpemUueSA8IHRoaXMuX25nR3JpZC5taW5Sb3dzKSB0aGlzLl9zaXplLnkgPSB0aGlzLl9uZ0dyaWQubWluUm93cztcclxuXHJcbiAgICAgICAgY29uc3QgbmV3V2lkdGg6IG51bWJlciA9ICh0aGlzLl9uZ0dyaWQuY29sV2lkdGggKiB0aGlzLl9zaXplLngpICsgKCh0aGlzLl9uZ0dyaWQubWFyZ2luTGVmdCArIHRoaXMuX25nR3JpZC5tYXJnaW5SaWdodCkgKiAodGhpcy5fc2l6ZS54IC0gMSkpO1xyXG4gICAgICAgIGNvbnN0IG5ld0hlaWdodDogbnVtYmVyID0gKHRoaXMuX25nR3JpZC5yb3dIZWlnaHQgKiB0aGlzLl9zaXplLnkpICsgKCh0aGlzLl9uZ0dyaWQubWFyZ2luVG9wICsgdGhpcy5fbmdHcmlkLm1hcmdpbkJvdHRvbSkgKiAodGhpcy5fc2l6ZS55IC0gMSkpO1xyXG5cclxuICAgICAgICBjb25zdCB3OiBudW1iZXIgPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLl9uZ0dyaWQubWluV2lkdGgsIG5ld1dpZHRoKTtcclxuICAgICAgICBjb25zdCBoOiBudW1iZXIgPSBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgdGhpcy5fbmdHcmlkLm1pbkhlaWdodCwgbmV3SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREaW1lbnNpb25zKHcsIGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE1vdXNlUG9zaXRpb24oZTogYW55KTogTmdHcmlkUmF3UG9zaXRpb24ge1xyXG4gICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2U6IGFueSA9IGUub3JpZ2luYWxFdmVudDtcclxuICAgICAgICAgICAgZSA9IG9lLnRvdWNoZXMubGVuZ3RoID8gb2UudG91Y2hlc1swXSA6IChvZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBvZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50b3VjaGVzKSB7XHJcbiAgICAgICAgICAgIGUgPSBlLnRvdWNoZXMubGVuZ3RoID8gZS50b3VjaGVzWzBdIDogKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHJlZlBvczogTmdHcmlkUmF3UG9zaXRpb24gPSB0aGlzLl9uZ0VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGUuY2xpZW50WCAtIHJlZlBvcy5sZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IGUuY2xpZW50WSAtIHJlZlBvcy50b3BcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FwcGx5Q2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgY2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUNoZWNrID0gKHJlY29yZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWdbcmVjb3JkLmtleV0gIT09IHJlY29yZC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ1tyZWNvcmQua2V5XSA9IHJlY29yZC5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoQWRkZWRJdGVtKGNoYW5nZUNoZWNrKTtcclxuICAgICAgICBjaGFuZ2VzLmZvckVhY2hDaGFuZ2VkSXRlbShjaGFuZ2VDaGVjayk7XHJcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoUmVtb3ZlZEl0ZW0oKHJlY29yZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY29uZmlnW3JlY29yZC5rZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmZpZyh0aGlzLl9jb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbmZpZ0NoYW5nZUV2ZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VyQ29uZmlnID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbmZpZy5zaXpleCA9IHRoaXMuX3VzZXJDb25maWcuc2l6ZXggPSB0aGlzLl9zaXplLng7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnLnNpemV5ID0gdGhpcy5fdXNlckNvbmZpZy5zaXpleSA9IHRoaXMuX3NpemUueTtcclxuICAgICAgICB0aGlzLl9jb25maWcuY29sID0gdGhpcy5fdXNlckNvbmZpZy5jb2wgPSB0aGlzLl9jdXJyZW50UG9zaXRpb24uY29sO1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZy5yb3cgPSB0aGlzLl91c2VyQ29uZmlnLnJvdyA9IHRoaXMuX2N1cnJlbnRQb3NpdGlvbi5yb3c7XHJcbiAgICAgICAgdGhpcy5uZ0dyaWRJdGVtQ2hhbmdlLmVtaXQodGhpcy5fdXNlckNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5SZXNpemVJbkRpcmVjdGlvbihkaXJlY3Rpb246IHN0cmluZywgbW91c2VQb3M6IE5nR3JpZFJhd1Bvc2l0aW9uKTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9lbGVtV2lkdGggJiYgbW91c2VQb3MubGVmdCA+IHRoaXMuX2VsZW1XaWR0aCAtIHRoaXMuX2JvcmRlclNpemVcclxuICAgICAgICAgICAgICAgICAgICAmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9lbGVtSGVpZ2h0ICYmIG1vdXNlUG9zLnRvcCA+IHRoaXMuX2VsZW1IZWlnaHQgLSB0aGlzLl9ib3JkZXJTaXplOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmluZGVudFxyXG4gICAgICAgICAgICBjYXNlICdib3R0b21sZWZ0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fYm9yZGVyU2l6ZSAmJiBtb3VzZVBvcy50b3AgPCB0aGlzLl9lbGVtSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgJiYgbW91c2VQb3MudG9wID4gdGhpcy5fZWxlbUhlaWdodCAtIHRoaXMuX2JvcmRlclNpemU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6aW5kZW50XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcHJpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVBvcy5sZWZ0IDwgdGhpcy5fZWxlbVdpZHRoICYmIG1vdXNlUG9zLmxlZnQgPiB0aGlzLl9lbGVtV2lkdGggLSB0aGlzLl9ib3JkZXJTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgbW91c2VQb3MudG9wIDwgdGhpcy5fYm9yZGVyU2l6ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTppbmRlbnRcclxuICAgICAgICAgICAgY2FzZSAndG9wbGVmdCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MubGVmdCA8IHRoaXMuX2JvcmRlclNpemUgJiYgbW91c2VQb3MudG9wIDwgdGhpcy5fYm9yZGVyU2l6ZTtcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9lbGVtV2lkdGggJiYgbW91c2VQb3MubGVmdCA+IHRoaXMuX2VsZW1XaWR0aCAtIHRoaXMuX2JvcmRlclNpemU7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLmxlZnQgPCB0aGlzLl9ib3JkZXJTaXplO1xyXG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zLnRvcCA8IHRoaXMuX2VsZW1IZWlnaHQgJiYgbW91c2VQb3MudG9wID4gdGhpcy5fZWxlbUhlaWdodCAtIHRoaXMuX2JvcmRlclNpemU7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3MudG9wIDwgdGhpcy5fYm9yZGVyU2l6ZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19