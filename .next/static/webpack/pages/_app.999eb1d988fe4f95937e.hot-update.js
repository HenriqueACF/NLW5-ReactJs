webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Player/styles.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Player/styles.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".styles_playerContainer__2kTpC {\\n  padding: 3rem 4rem;\\n  width: 26.5rem;\\n  height: 100vh;\\n  background: var(--purple-500);\\n  color: var(--white);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.styles_playerContainer__2kTpC header {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 1rem;\\n  gap: 1rem;\\n}\\n.styles_playerContainer__2kTpC strong {\\n  font-family: Lexend, sans-serif;\\n  font-weight: 600;\\n}\\n.styles_playerContainer__2kTpC footer {\\n  align-self: stretch;\\n}\\n.styles_playerContainer__2kTpC footer.styles_empty__XvMyC {\\n  opacity: 0.5;\\n}\\n\\n.styles_emptyPlayer__WHPi6 {\\n  width: 100%;\\n  height: 20rem;\\n  border: 1.5px dashed var(--purple-300);\\n  border-radius: 1.5rem;\\n  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);\\n  padding: 4rem;\\n  text-align: center;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.styles_progress__ULW9V {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 0.5rem;\\n  gap: 0.5rem;\\n  font-size: 0.875rem;\\n}\\n.styles_progress__ULW9V span {\\n  display: inline-block;\\n  width: 4rem;\\n  text-align: center;\\n}\\n.styles_progress__ULW9V .styles_slider__3_Mkb {\\n  flex: 1 1;\\n}\\n.styles_progress__ULW9V .styles_slider__3_Mkb .styles_emptySlider__3p9Ad {\\n  width: 100%;\\n  height: 4px;\\n  background: var(--purple-300);\\n  border-radius: 2px;\\n}\\n\\n.styles_buttons__i4fo8 {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin-top: 2.5rem;\\n  grid-gap: 1.5rem;\\n  gap: 1.5rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,kBAAA;EACA,cAAA;EACA,aAAA;EAEA,6BAAA;EACA,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AADJ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;AADR;AAII;EACI,+BAAA;EACA,gBAAA;AAFR;AAKI;EACI,mBAAA;AAHR;AAKQ;EACI,YAAA;AAHZ;;AAQA;EACI,WAAA;EACA,aAAA;EACA,sCAAA;EACA,qBAAA;EACA,yFAAA;EAEA,aAAA;EACA,kBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAPJ;;AAUA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EAAA,WAAA;EACA,mBAAA;AAPJ;AASI;EACI,qBAAA;EACA,WAAA;EACA,kBAAA;AAPR;AAUI;EACI,SAAA;AARR;AAUQ;EACI,WAAA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;AARZ;;AAaA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EAAA,WAAA;AAVJ\",\"sourcesContent\":[\".playerContainer{\\n    padding: 3rem 4rem;\\n    width: 26.5rem;\\n    height: 100vh;\\n\\n    background: var(--purple-500);\\n    color: var(--white);\\n\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n\\n    header{\\n        display: flex;\\n        align-items: center;\\n        gap: 1rem;\\n    }\\n\\n    strong{\\n        font-family: Lexend, sans-serif;\\n        font-weight: 600;\\n    }\\n\\n    footer{\\n        align-self: stretch;\\n\\n        &.empty{\\n            opacity: 0.5;\\n        }\\n    }\\n}\\n\\n.emptyPlayer{\\n    width: 100%;\\n    height: 20rem;\\n    border:1.5px dashed var(--purple-300);\\n    border-radius: 1.5rem;\\n    background: linear-gradient(143.8deg, rgba(145,100,250,0.8)0%, rgba(0,0,0,0)100%);\\n\\n    padding: 4rem;\\n    text-align: center;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.progress{\\n    display: flex;\\n    align-items: center;\\n    gap: 0.5rem;\\n    font-size:0.875rem;\\n\\n    span{\\n        display: inline-block;\\n        width: 4rem;\\n        text-align: center;\\n    }\\n\\n    .slider{\\n        flex: 1;\\n        \\n        .emptySlider{\\n            width: 100%;\\n            height: 4px;\\n            background: var(--purple-300);\\n            border-radius: 2px;\\n        }\\n    }\\n}\\n\\n.buttons{\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-top: 2.5rem;\\n    gap: 1.5rem;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"playerContainer\": \"styles_playerContainer__2kTpC\",\n\t\"empty\": \"styles_empty__XvMyC\",\n\t\"emptyPlayer\": \"styles_emptyPlayer__WHPi6\",\n\t\"progress\": \"styles_progress__ULW9V\",\n\t\"slider\": \"styles_slider__3_Mkb\",\n\t\"emptySlider\": \"styles_emptySlider__3p9Ad\",\n\t\"buttons\": \"styles_buttons__i4fo8\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL3N0eWxlcy5tb2R1bGUuc2Nzcz8yOWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxtQ0FBbUMsdUJBQXVCLG1CQUFtQixrQkFBa0Isa0NBQWtDLHdCQUF3QixrQkFBa0IsMkJBQTJCLHdCQUF3QixtQ0FBbUMsR0FBRyx5Q0FBeUMsa0JBQWtCLHdCQUF3QixtQkFBbUIsY0FBYyxHQUFHLHlDQUF5QyxvQ0FBb0MscUJBQXFCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLDZEQUE2RCxpQkFBaUIsR0FBRyxnQ0FBZ0MsZ0JBQWdCLGtCQUFrQiwyQ0FBMkMsMEJBQTBCLDhGQUE4RixrQkFBa0IsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsNkJBQTZCLGtCQUFrQix3QkFBd0IscUJBQXFCLGdCQUFnQix3QkFBd0IsR0FBRyxnQ0FBZ0MsMEJBQTBCLGdCQUFnQix1QkFBdUIsR0FBRyxpREFBaUQsY0FBYyxHQUFHLDRFQUE0RSxnQkFBZ0IsZ0JBQWdCLGtDQUFrQyx1QkFBdUIsR0FBRyw0QkFBNEIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHFCQUFxQixnQkFBZ0IsR0FBRyxPQUFPLG1GQUFtRixXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSwwQ0FBMEMseUJBQXlCLHFCQUFxQixvQkFBb0Isc0NBQXNDLDBCQUEwQixzQkFBc0IsNkJBQTZCLDBCQUEwQixxQ0FBcUMsZUFBZSx3QkFBd0IsOEJBQThCLG9CQUFvQixPQUFPLGVBQWUsMENBQTBDLDJCQUEyQixPQUFPLGVBQWUsOEJBQThCLG9CQUFvQiwyQkFBMkIsV0FBVyxPQUFPLEdBQUcsaUJBQWlCLGtCQUFrQixvQkFBb0IsNENBQTRDLDRCQUE0Qix3RkFBd0Ysc0JBQXNCLHlCQUF5QixzQkFBc0IsMEJBQTBCLDhCQUE4QixHQUFHLGNBQWMsb0JBQW9CLDBCQUEwQixrQkFBa0IseUJBQXlCLGFBQWEsZ0NBQWdDLHNCQUFzQiw2QkFBNkIsT0FBTyxnQkFBZ0Isa0JBQWtCLGlDQUFpQywwQkFBMEIsMEJBQTBCLDRDQUE0QyxpQ0FBaUMsV0FBVyxPQUFPLEdBQUcsYUFBYSxvQkFBb0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsa0JBQWtCLEdBQUcsbUJBQW1CO0FBQ252SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDIHtcXG4gIHBhZGRpbmc6IDNyZW0gNHJlbTtcXG4gIHdpZHRoOiAyNi41cmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS01MDApO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDIGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uc3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcEMgc3Ryb25nIHtcXG4gIGZvbnQtZmFtaWx5OiBMZXhlbmQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uc3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcEMgZm9vdGVyIHtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcbi5zdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQyBmb290ZXIuc3R5bGVzX2VtcHR5X19Ydk15QyB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zdHlsZXNfZW1wdHlQbGF5ZXJfX1dIUGk2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIGJvcmRlcjogMS41cHggZGFzaGVkIHZhcigtLXB1cnBsZS0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0My44ZGVnLCByZ2JhKDE0NSwgMTAwLCAyNTAsIDAuOCkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN0eWxlc19wcm9ncmVzc19fVUxXOVYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG4uc3R5bGVzX3Byb2dyZXNzX19VTFc5ViBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3R5bGVzX3Byb2dyZXNzX19VTFc5ViAuc3R5bGVzX3NsaWRlcl9fM19Na2Ige1xcbiAgZmxleDogMSAxO1xcbn1cXG4uc3R5bGVzX3Byb2dyZXNzX19VTFc5ViAuc3R5bGVzX3NsaWRlcl9fM19Na2IgLnN0eWxlc19lbXB0eVNsaWRlcl9fM3A5QWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uc3R5bGVzX2J1dHRvbnNfX2k0Zm84IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBRUEsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFEUjtBQUlJO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS0k7RUFDSSxtQkFBQTtBQUhSO0FBS1E7RUFDSSxZQUFBO0FBSFo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSx5RkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxtQkFBQTtBQVBKO0FBU0k7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVBSO0FBVUk7RUFDSSxTQUFBO0FBUlI7QUFVUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQVJaOztBQWFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtBQVZKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wbGF5ZXJDb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDNyZW0gNHJlbTtcXG4gICAgd2lkdGg6IDI2LjVyZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS01MDApO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGhlYWRlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIHN0cm9uZ3tcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMZXhlbmQsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlcntcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuXFxuICAgICAgICAmLmVtcHR5e1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZW1wdHlQbGF5ZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICBib3JkZXI6MS41cHggZGFzaGVkIHZhcigtLXB1cnBsZS0zMDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDMuOGRlZywgcmdiYSgxNDUsMTAwLDI1MCwwLjgpMCUsIHJnYmEoMCwwLDAsMCkxMDAlKTtcXG5cXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2dyZXNze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOjAuODc1cmVtO1xcblxcbiAgICBzcGFue1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDRyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnNsaWRlcntcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBcXG4gICAgICAgIC5lbXB0eVNsaWRlcntcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtMzAwKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICAgIGdhcDogMS41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwbGF5ZXJDb250YWluZXJcIjogXCJzdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQ1wiLFxuXHRcImVtcHR5XCI6IFwic3R5bGVzX2VtcHR5X19Ydk15Q1wiLFxuXHRcImVtcHR5UGxheWVyXCI6IFwic3R5bGVzX2VtcHR5UGxheWVyX19XSFBpNlwiLFxuXHRcInByb2dyZXNzXCI6IFwic3R5bGVzX3Byb2dyZXNzX19VTFc5VlwiLFxuXHRcInNsaWRlclwiOiBcInN0eWxlc19zbGlkZXJfXzNfTWtiXCIsXG5cdFwiZW1wdHlTbGlkZXJcIjogXCJzdHlsZXNfZW1wdHlTbGlkZXJfXzNwOUFkXCIsXG5cdFwiYnV0dG9uc1wiOiBcInN0eWxlc19idXR0b25zX19pNGZvOFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Player/styles.module.scss\n");

/***/ })

})