import { NgGrid } from './NgGrid';
import { NgGridItemConfig, NgGridItemEvent, NgGridItemPosition, NgGridItemSize, NgGridRawPosition, NgGridItemDimensions, ResizeHandle } from '../interfaces/INgGrid';
import { ElementRef, Renderer2, EventEmitter, KeyValueDiffers, OnInit, OnDestroy, ViewContainerRef, DoCheck } from '@angular/core';
export declare class NgGridItem implements OnInit, OnDestroy, DoCheck {
    private _differs;
    private _ngEl;
    private _renderer;
    private _ngGrid;
    containerRef: ViewContainerRef;
    onItemChange: EventEmitter<NgGridItemEvent>;
    onDragStart: EventEmitter<NgGridItemEvent>;
    onDrag: EventEmitter<NgGridItemEvent>;
    onDragStop: EventEmitter<NgGridItemEvent>;
    onDragAny: EventEmitter<NgGridItemEvent>;
    onResizeStart: EventEmitter<NgGridItemEvent>;
    onResize: EventEmitter<NgGridItemEvent>;
    onResizeStop: EventEmitter<NgGridItemEvent>;
    onResizeAny: EventEmitter<NgGridItemEvent>;
    onChangeStart: EventEmitter<NgGridItemEvent>;
    onChange: EventEmitter<NgGridItemEvent>;
    onChangeStop: EventEmitter<NgGridItemEvent>;
    onChangeAny: EventEmitter<NgGridItemEvent>;
    ngGridItemChange: EventEmitter<NgGridItemConfig>;
    private static CONST_DEFAULT_CONFIG;
    isFixed: boolean;
    isDraggable: boolean;
    isResizable: boolean;
    minWidth: number;
    minHeight: number;
    uid: string;
    private _payload;
    private _currentPosition;
    private _size;
    private _config;
    private _userConfig;
    private _dragHandle;
    private _resizeHandle;
    private _borderSize;
    private _elemWidth;
    private _elemHeight;
    private _elemLeft;
    private _elemTop;
    private _added;
    private _differ;
    private _cascadeMode;
    private _maxCols;
    private _minCols;
    private _maxRows;
    private _minRows;
    private _resizeDirections;
    private _zIndex;
    zIndex: number;
    config: NgGridItemConfig;
    readonly sizex: number;
    readonly sizey: number;
    readonly col: number;
    readonly row: number;
    readonly currentCol: number;
    readonly currentRow: number;
    constructor(_differs: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer2, _ngGrid: NgGrid, containerRef: ViewContainerRef);
    onResizeStartEvent(): void;
    onResizeEvent(): void;
    onResizeStopEvent(): void;
    onDragStartEvent(): void;
    onDragEvent(): void;
    onDragStopEvent(): void;
    onCascadeEvent(): void;
    ngOnInit(): void;
    canDrag(e: any): boolean;
    findHandle(handleSelector: string, startElement: HTMLElement): boolean;
    canResize(e: any): string;
    onMouseMove(e: any): void;
    ngOnDestroy(): void;
    getElement(): ElementRef;
    getDragHandle(): string;
    getResizeHandle(): ResizeHandle;
    getDimensions(): NgGridItemDimensions;
    getSize(): NgGridItemSize;
    getPosition(): NgGridRawPosition;
    getGridPosition(): NgGridItemPosition;
    setConfig(config: NgGridItemConfig): void;
    ngDoCheck(): boolean;
    setSize(newSize: NgGridItemSize, update?: boolean): void;
    setGridPosition(gridPosition: NgGridItemPosition, update?: boolean): void;
    getEventOutput(): NgGridItemEvent;
    setPosition(x: number, y: number): void;
    setCascadeMode(cascade: string): void;
    setDimensions(w: number, h: number): void;
    startMoving(): void;
    stopMoving(): void;
    recalculateSelf(): void;
    fixResize(newSize: NgGridItemSize): NgGridItemSize;
    private elementMatches(element, selector);
    private _recalculatePosition();
    private _recalculateDimensions();
    private _getMousePosition(e);
    private _applyChanges(changes);
    private onConfigChangeEvent();
    private canResizeInDirection(direction, mousePos);
}
