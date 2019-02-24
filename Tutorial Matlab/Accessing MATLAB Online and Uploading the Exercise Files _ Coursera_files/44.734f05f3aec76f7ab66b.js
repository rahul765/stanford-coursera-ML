webpackJsonp([44],{"+Ail":function(module,exports,e){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),r=_interopRequireDefault(t),u=e("zwoO"),n=_interopRequireDefault(u),a=e("Pf15"),o=_interopRequireDefault(a),i=e("U7vG"),l=_interopRequireWildcard(i),d=e("41m7"),f=_interopRequireDefault(d),s=e("/YQH"),c=_interopRequireDefault(s),p=e("ERIb"),m=_interopRequireDefault(p),I=e("jVzB"),R=_interopRequireDefault(I),D=function(e){function ItemHeader(){return(0,r.default)(this,ItemHeader),(0,n.default)(this,e.apply(this,arguments))}return(0,o.default)(ItemHeader,e),ItemHeader.prototype.render=function render(){var e=this.props.course,t=void 0;return e&&e.get("brandingImage")&&(t={id:e.get("id"),name:e.get("name"),brandingImageUrl:e.get("brandingImage")}),l.createElement("div",{className:"rc-ItemHeader"},l.createElement(c.default,{hasCatalogButton:!0,hideEnterprise:!0,catalogSubBannerProps:{hidePromoBanner:!0},course:t}),l.createElement(m.default,null))},ItemHeader}(l.Component);module.exports=f.default.compose((0,R.default)(["CourseStore"],function(e,t){var r=e.CourseStore;return{course:r.getMetadata(),courseId:r.getCourseId()}}))(D)},"/WH3":function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),r=_interopRequireDefault(t),u=e("zwoO"),n=_interopRequireDefault(u),a=e("Pf15"),o=_interopRequireDefault(a),i=e("U7vG"),l=_interopRequireDefault(i),d=e("zpMW"),f=e("dmSb"),s=_interopRequireDefault(f),c=e("x4Kt"),p=_interopRequireDefault(c),m=e("+Ail"),I=_interopRequireDefault(m),R=e("VpAu"),D=_interopRequireDefault(R),g=e("DR9D"),q=_interopRequireDefault(g),h=e("M8tz"),v=_interopRequireDefault(h),y=e("yoYc"),M=_interopRequireDefault(y),E=e("pLbm"),C=_interopRequireDefault(E),b=e("gwtd"),N=_interopRequireDefault(b),P=e("FhE3"),S=e("USna"),w=_interopRequireDefault(S),k=e("p2kh"),x=_interopRequireDefault(k),L=e("Op7C"),W=_interopRequireDefault(L),O=e("AxQc"),z=_interopRequireDefault(O),F=e("Rb6Q"),B=_interopRequireDefault(F),A=e("mPdR"),T=_interopRequireDefault(A);e("tij5");var H=function(e){function ItemPage(){return(0,r.default)(this,ItemPage),(0,n.default)(this,e.apply(this,arguments))}return(0,o.default)(ItemPage,e),ItemPage.prototype.render=function render(){var e=this.props,t=e.computedItem,r=e.computedItem,u=r.id,n=r.name,a=r.gradingLatePenalty,o=r.weekNumber,i=e.children,d=e.itemMetadata,f=(0,P.getIsLockedFully)(t)||(0,P.getIsLockedForSessions)(t);return l.default.createElement("div",{className:"rc-ItemPage"},l.default.createElement(p.default,{title:n,description:d.get("lesson.module.description")}),l.default.createElement(I.default,null),l.default.createElement(D.default,{currentItemId:u,currentLesson:d.get("lesson"),weekNumber:o},!!a&&l.default.createElement(N.default,{latePenalty:new T.default(a)}),l.default.createElement("div",{className:"item-page-content",style:{height:"100%"}},!f&&l.default.cloneElement(i,{itemMetadata:d,computedItem:t,key:u}),f&&l.default.createElement(C.default,{computedItem:t}))),(0,P.getIsGradable)(t)&&l.default.createElement(v.default,null),l.default.createElement(M.default,null))},ItemPage}(l.default.Component);module.exports=(0,d.compose)((0,w.default)(function(e){return{itemId:e.params.item_id}}),(0,x.default)(["CourseStore","SessionStore"],function(e,t){var r=e.CourseStore,u=e.SessionStore,n=t.itemId,a=r.getCourseId(),o=r.getCourseSlug();return{courseId:a,courseName:r.getMetadata().get("name"),courseSlug:o,courseBranchId:u.getBranchId()||a,itemMetadata:r.getMaterials().getItemMetadata(n)}}),(0,d.branch)(function(e){return!e.itemMetadata},(0,d.renderComponent)(q.default)),W.default,s.default.createTrackedContainer(function(e){return{namespace:{page:"item_layout"},course_id:e.courseId,item_id:e.itemId}}),(0,B.default)(function(e){var t=e.courseBranchId,r=e.computedItem,u=r.id;if(["quiz","exam"].includes(r.contentSummary.typeName))return null;return new z.default({courseBranchId:t,itemId:u})},function(e){return{course_id:e.courseId}}))(H)},"7ix2":function(module,exports,e){var t=e("tM8s");"string"==typeof t&&(t=[[module.i,t,""]]);var r,u={};u.transform=void 0;var n=e("MTIv")(t,u);t.locals&&(module.exports=t.locals)},AxQc:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),r=_interopRequireDefault(t),u=e("zwoO"),n=_interopRequireDefault(u),a=e("Pf15"),o=_interopRequireDefault(a),i=e("xXQy"),l=e("QeeQ"),d=l.ITEM_VIEW,f=function(e){function AliceItemViewEvent(t){var u=t.courseBranchId,a=t.itemId;(0,r.default)(this,AliceItemViewEvent);var o=(0,n.default)(this,e.call(this,{type:d,courseBranchId:u}));return o.itemId=a,o.id=d+"~"+u+"~"+a,o}return(0,o.default)(AliceItemViewEvent,e),AliceItemViewEvent}(i);module.exports=f},DR9D:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),r=_interopRequireDefault(t),u=e("zwoO"),n=_interopRequireDefault(u),a=e("Pf15"),o=_interopRequireDefault(a),i=e("U7vG"),l=_interopRequireDefault(i),d=e("zpMW"),f=e("USna"),s=_interopRequireDefault(f),c=e("p2kh"),p=_interopRequireDefault(c),m=function(e){function ItemNotFound(){return(0,r.default)(this,ItemNotFound),(0,n.default)(this,e.apply(this,arguments))}return(0,o.default)(ItemNotFound,e),ItemNotFound.prototype.componentDidMount=function componentDidMount(){var e=this.props,t=e.router,r=e.courseRootPath;t.push(r+"/home/welcome")},ItemNotFound.prototype.render=function render(){return null},ItemNotFound}(l.default.Component);module.exports=(0,d.compose)((0,s.default)(function(e){return{router:e}}),(0,p.default)(["CourseStore"],function(e){return{courseRootPath:e.CourseStore.getCourseRootPath()}}))(m)},NnyT:function(module,exports){},gwtd:function(module,exports,e){"use strict";var t=e("U7vG"),r=e("Gg64"),u=e("iy/N"),n=u.FormattedHTMLMessage,a=e("obmD");e("7ix2");var o=function LatePenaltyNotification(e){var u=e.latePenalty;return t.createElement(r,{type:"info",message:t.createElement(n,{message:a("This item has a late penalty. {penaltyLabel}. {actionLabel}"),penaltyLabel:u.learnerLabel,actionLabel:t.createElement("a",{href:"//learner.coursera.help",target:"_blank",rel:"noopener noreferrer"},a("Learn More"))}),isDismissible:!1,htmlAttributes:{"data-classname":"late-penalty-notification"}})};module.exports=o},tM8s:function(module,exports){},tij5:function(module,exports,e){var t=e("NnyT");"string"==typeof t&&(t=[[module.i,t,""]]);var r,u={};u.transform=void 0;var n=e("MTIv")(t,u);t.locals&&(module.exports=t.locals)},yoYc:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),r=_interopRequireDefault(t),u=e("zwoO"),n=_interopRequireDefault(u),a=e("Pf15"),o=_interopRequireDefault(a),i=e("U7vG"),l=_interopRequireDefault(i),d=e("zpMW"),f=e("coqm"),s=_interopRequireDefault(f),c=e("jVzB"),p=_interopRequireDefault(c),m=e("ccRX"),I=_interopRequireDefault(m),R=function(e){function WeekOneNpsModal(){return(0,r.default)(this,WeekOneNpsModal),(0,n.default)(this,e.apply(this,arguments))}return(0,o.default)(WeekOneNpsModal,e),WeekOneNpsModal.prototype.render=function render(){var e=this.props,t=e.courseId,r=e.computedCourseProgress,u=r.isWeekOneComplete,n=r.isWeekTwoComplete;if(!u||n)return null;return l.default.createElement(s.default,{courseId:t,feedbackSystem:"NPS_FIRST_WEEK",followupSurveyLink:"https://www.surveymonkey.com/r/FCYKNDL"})},WeekOneNpsModal}(l.default.Component);module.exports=(0,d.compose)(I.default,(0,p.default)(["CourseStore"],function(e){return{courseId:e.CourseStore.getCourseId()}}))(R)}});
//# sourceMappingURL=44.734f05f3aec76f7ab66b.js.map