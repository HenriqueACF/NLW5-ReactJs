webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Player/styles.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Player/styles.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".styles_playerContainer__2kTpC {\\n  padding: 3rem 4rem;\\n  width: 26.5rem;\\n  height: 100vh;\\n  background: var(--purple-500);\\n  color: var(--white);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.styles_playerContainer__2kTpC header {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 1rem;\\n  gap: 1rem;\\n}\\n.styles_playerContainer__2kTpC strong {\\n  font-family: Lexend, sans-serif;\\n  font-weight: 600;\\n}\\n.styles_playerContainer__2kTpC footer {\\n  align-self: stretch;\\n}\\n.styles_playerContainer__2kTpC footer.styles_empty__XvMyC {\\n  opacity: 0.5;\\n}\\n\\n.styles_emptyPlayer__WHPi6 {\\n  width: 100%;\\n  height: 20rem;\\n  border: 1.5px dashed var(--purple-300);\\n  border-radius: 1.5rem;\\n  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);\\n  padding: 4rem;\\n  text-align: center;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.styles_progress__ULW9V {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 0.5rem;\\n  gap: 0.5rem;\\n  font-size: 0.875rem;\\n}\\n.styles_progress__ULW9V span {\\n  display: inline-block;\\n  width: 4rem;\\n  text-align: center;\\n}\\n.styles_progress__ULW9V .styles_slider__3_Mkb {\\n  flex: 1 1;\\n}\\n.styles_progress__ULW9V .styles_slider__3_Mkb .styles_emptySlider__3p9Ad {\\n  width: 100%;\\n  height: 4px;\\n  background: var(--purple-300);\\n  border-radius: 2px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,kBAAA;EACA,cAAA;EACA,aAAA;EAEA,6BAAA;EACA,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AADJ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;AADR;AAII;EACI,+BAAA;EACA,gBAAA;AAFR;AAKI;EACI,mBAAA;AAHR;AAKQ;EACI,YAAA;AAHZ;;AAQA;EACI,WAAA;EACA,aAAA;EACA,sCAAA;EACA,qBAAA;EACA,yFAAA;EAEA,aAAA;EACA,kBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAPJ;;AAUA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EAAA,WAAA;EACA,mBAAA;AAPJ;AASI;EACI,qBAAA;EACA,WAAA;EACA,kBAAA;AAPR;AAUI;EACI,SAAA;AARR;AAUQ;EACI,WAAA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;AARZ\",\"sourcesContent\":[\".playerContainer{\\n    padding: 3rem 4rem;\\n    width: 26.5rem;\\n    height: 100vh;\\n\\n    background: var(--purple-500);\\n    color: var(--white);\\n\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n\\n    header{\\n        display: flex;\\n        align-items: center;\\n        gap: 1rem;\\n    }\\n\\n    strong{\\n        font-family: Lexend, sans-serif;\\n        font-weight: 600;\\n    }\\n\\n    footer{\\n        align-self: stretch;\\n\\n        &.empty{\\n            opacity: 0.5;\\n        }\\n    }\\n}\\n\\n.emptyPlayer{\\n    width: 100%;\\n    height: 20rem;\\n    border:1.5px dashed var(--purple-300);\\n    border-radius: 1.5rem;\\n    background: linear-gradient(143.8deg, rgba(145,100,250,0.8)0%, rgba(0,0,0,0)100%);\\n\\n    padding: 4rem;\\n    text-align: center;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.progress{\\n    display: flex;\\n    align-items: center;\\n    gap: 0.5rem;\\n    font-size:0.875rem;\\n\\n    span{\\n        display: inline-block;\\n        width: 4rem;\\n        text-align: center;\\n    }\\n\\n    .slider{\\n        flex: 1;\\n        \\n        .emptySlider{\\n            width: 100%;\\n            height: 4px;\\n            background: var(--purple-300);\\n            border-radius: 2px;\\n        }\\n    }\\n\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"playerContainer\": \"styles_playerContainer__2kTpC\",\n\t\"empty\": \"styles_empty__XvMyC\",\n\t\"emptyPlayer\": \"styles_emptyPlayer__WHPi6\",\n\t\"progress\": \"styles_progress__ULW9V\",\n\t\"slider\": \"styles_slider__3_Mkb\",\n\t\"emptySlider\": \"styles_emptySlider__3p9Ad\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL3N0eWxlcy5tb2R1bGUuc2Nzcz8yOWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxtQ0FBbUMsdUJBQXVCLG1CQUFtQixrQkFBa0Isa0NBQWtDLHdCQUF3QixrQkFBa0IsMkJBQTJCLHdCQUF3QixtQ0FBbUMsR0FBRyx5Q0FBeUMsa0JBQWtCLHdCQUF3QixtQkFBbUIsY0FBYyxHQUFHLHlDQUF5QyxvQ0FBb0MscUJBQXFCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLDZEQUE2RCxpQkFBaUIsR0FBRyxnQ0FBZ0MsZ0JBQWdCLGtCQUFrQiwyQ0FBMkMsMEJBQTBCLDhGQUE4RixrQkFBa0IsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsNkJBQTZCLGtCQUFrQix3QkFBd0IscUJBQXFCLGdCQUFnQix3QkFBd0IsR0FBRyxnQ0FBZ0MsMEJBQTBCLGdCQUFnQix1QkFBdUIsR0FBRyxpREFBaUQsY0FBYyxHQUFHLDRFQUE0RSxnQkFBZ0IsZ0JBQWdCLGtDQUFrQyx1QkFBdUIsR0FBRyxPQUFPLG1GQUFtRixXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLDBDQUEwQyx5QkFBeUIscUJBQXFCLG9CQUFvQixzQ0FBc0MsMEJBQTBCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLHFDQUFxQyxlQUFlLHdCQUF3Qiw4QkFBOEIsb0JBQW9CLE9BQU8sZUFBZSwwQ0FBMEMsMkJBQTJCLE9BQU8sZUFBZSw4QkFBOEIsb0JBQW9CLDJCQUEyQixXQUFXLE9BQU8sR0FBRyxpQkFBaUIsa0JBQWtCLG9CQUFvQiw0Q0FBNEMsNEJBQTRCLHdGQUF3RixzQkFBc0IseUJBQXlCLHNCQUFzQiwwQkFBMEIsOEJBQThCLEdBQUcsY0FBYyxvQkFBb0IsMEJBQTBCLGtCQUFrQix5QkFBeUIsYUFBYSxnQ0FBZ0Msc0JBQXNCLDZCQUE2QixPQUFPLGdCQUFnQixrQkFBa0IsaUNBQWlDLDBCQUEwQiwwQkFBMEIsNENBQTRDLGlDQUFpQyxXQUFXLE9BQU8sS0FBSyxtQkFBbUI7QUFDbDRHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDIHtcXG4gIHBhZGRpbmc6IDNyZW0gNHJlbTtcXG4gIHdpZHRoOiAyNi41cmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS01MDApO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDIGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uc3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcEMgc3Ryb25nIHtcXG4gIGZvbnQtZmFtaWx5OiBMZXhlbmQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uc3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcEMgZm9vdGVyIHtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcbi5zdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQyBmb290ZXIuc3R5bGVzX2VtcHR5X19Ydk15QyB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zdHlsZXNfZW1wdHlQbGF5ZXJfX1dIUGk2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIGJvcmRlcjogMS41cHggZGFzaGVkIHZhcigtLXB1cnBsZS0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0My44ZGVnLCByZ2JhKDE0NSwgMTAwLCAyNTAsIDAuOCkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN0eWxlc19wcm9ncmVzc19fVUxXOVYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG4uc3R5bGVzX3Byb2dyZXNzX19VTFc5ViBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3R5bGVzX3Byb2dyZXNzX19VTFc5ViAuc3R5bGVzX3NsaWRlcl9fM19Na2Ige1xcbiAgZmxleDogMSAxO1xcbn1cXG4uc3R5bGVzX3Byb2dyZXNzX19VTFc5ViAuc3R5bGVzX3NsaWRlcl9fM19Na2IgLnN0eWxlc19lbXB0eVNsaWRlcl9fM3A5QWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUVBLDZCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBREo7QUFHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBRFI7QUFJSTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUtJO0VBQ0ksbUJBQUE7QUFIUjtBQUtRO0VBQ0ksWUFBQTtBQUhaOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUZBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVBKOztBQVVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFBQSxXQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVVJO0VBQ0ksU0FBQTtBQVJSO0FBVVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFSWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucGxheWVyQ29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAzcmVtIDRyZW07XFxuICAgIHdpZHRoOiAyNi41cmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtNTAwKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBoZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgfVxcblxcbiAgICBzdHJvbmd7XFxuICAgICAgICBmb250LWZhbWlseTogTGV4ZW5kLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgfVxcblxcbiAgICBmb290ZXJ7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcblxcbiAgICAgICAgJi5lbXB0eXtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmVtcHR5UGxheWVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgYm9yZGVyOjEuNXB4IGRhc2hlZCB2YXIoLS1wdXJwbGUtMzAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzLjhkZWcsIHJnYmEoMTQ1LDEwMCwyNTAsMC44KTAlLCByZ2JhKDAsMCwwLDApMTAwJSk7XFxuXFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9ncmVzc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTowLjg3NXJlbTtcXG5cXG4gICAgc3BhbntcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5zbGlkZXJ7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgXFxuICAgICAgICAuZW1wdHlTbGlkZXJ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLTMwMCk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBsYXllckNvbnRhaW5lclwiOiBcInN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDXCIsXG5cdFwiZW1wdHlcIjogXCJzdHlsZXNfZW1wdHlfX1h2TXlDXCIsXG5cdFwiZW1wdHlQbGF5ZXJcIjogXCJzdHlsZXNfZW1wdHlQbGF5ZXJfX1dIUGk2XCIsXG5cdFwicHJvZ3Jlc3NcIjogXCJzdHlsZXNfcHJvZ3Jlc3NfX1VMVzlWXCIsXG5cdFwic2xpZGVyXCI6IFwic3R5bGVzX3NsaWRlcl9fM19Na2JcIixcblx0XCJlbXB0eVNsaWRlclwiOiBcInN0eWxlc19lbXB0eVNsaWRlcl9fM3A5QWRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Player/styles.module.scss\n");

/***/ })

})