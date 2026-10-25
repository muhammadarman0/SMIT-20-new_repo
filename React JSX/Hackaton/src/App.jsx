import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, CalendarCheck, CalendarDays, Wallet, Building2,
  Bell, Bot, LogOut, Menu, Search, Plus, Check, X, Clock3, TrendingUp,
  CircleDollarSign, UserRound, ChevronDown, Download, Send, ShieldCheck,
  BriefcaseBusiness, Filter, Megaphone, ClipboardList, Sparkles
} from "lucide-react";

/*
  HCM Lite — single-file React frontend prototype.
  Dependencies: react, react-dom, react-router-dom, lucide-react
  Install: npm install react-router-dom lucide-react
  This is a front-end demo using local in-memory state. Connect the handlers
  to your backend API before using real employee/payroll data.
*/

const initialEmployees = [
  { id: 1, name: "Ayesha Khan", email: "ayesha@company.com", department: "Engineering", designation: "Frontend Developer", status: "Active", salary: 95000, joined: "2025-02-12" },
  { id: 2, name: "Hamza Ali", email: "hamza@company.com", department: "Design", designation: "UI Designer", status: "Active", salary: 85000, joined: "2024-11-04" },
  { id: 3, name: "Sara Ahmed", email: "sara@company.com", department: "Human Resources", designation: "HR Executive", status: "Active", salary: 78000, joined: "2025-05-19" },
  { id: 4, name: "Usman Raza", email: "usman@company.com", department: "Engineering", designation: "Backend Developer", status: "On leave", salary: 110000, joined: "2024-08-20" },
];
const initialLeaves = [
  { id: 1, name: "Ayesha Khan", type: "Casual", from: "2026-10-28", to: "2026-10-29", days: 2, reason: "Family commitment", status: "Pending" },
  { id: 2, name: "Hamza Ali", type: "Sick", from: "2026-10-24", to: "2026-10-24", days: 1, reason: "Not feeling well", status: "Approved" },
  { id: 3, name: "Usman Raza", type: "Annual", from: "2026-10-30", to: "2026-11-02", days: 2, reason: "Personal travel", status: "Pending" },
];
const initialAttendance = [
  { id: 1, name: "Ayesha Khan", department: "Engineering", checkIn: "09:02 AM", checkOut: "05:12 PM", status: "Present" },
  { id: 2, name: "Hamza Ali", department: "Design", checkIn: "09:24 AM", checkOut: "05:00 PM", status: "Late" },
  { id: 3, name: "Sara Ahmed", department: "Human Resources", checkIn: "08:56 AM", checkOut: "05:16 PM", status: "Present" },
  { id: 4, name: "Usman Raza", department: "Engineering", checkIn: "—", checkOut: "—", status: "On leave" },
];

/* ---------- helpers ---------- */
const nowTime = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const isLateNow = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes() > 9 * 60 + 15; };
const greeting = () => { const h = new Date().getHours(); return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening"; };
function countWorkingDays(from, to) {
  let n = 0;
  const d = new Date(from + "T00:00:00");
  const end = new Date(to + "T00:00:00");
  while (d <= end) { const w = d.getDay(); if (w !== 0 && w !== 6) n++; d.setDate(d.getDate() + 1); }
  return n;
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
:root{font-family:'DM Sans',sans-serif;color:#172033;background:#f5f7fb;font-synthesis:none;text-rendering:optimizeLegibility}*{box-sizing:border-box}body{margin:0}button,input,select,textarea{font:inherit}button{cursor:pointer}.app{min-height:100vh;display:flex;background:#f5f7fb}.sidebar{width:250px;background:#111b35;color:#d8deee;display:flex;flex-direction:column;padding:24px 14px;flex-shrink:0}.brand{display:flex;align-items:center;gap:11px;padding:0 12px 28px;color:#fff;font-family:Manrope,sans-serif;font-weight:800;font-size:17px}.brandmark{width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,#5b8cff,#7c5cff);display:grid;place-items:center;color:#fff}.brand small{display:block;font:500 10px 'DM Sans';letter-spacing:1.8px;color:#9ba9c9;margin-top:2px}.nav-label{font-size:10px;font-weight:700;letter-spacing:1.5px;color:#7584a7;padding:12px 14px 8px}.nav{display:flex;flex-direction:column;gap:5px}.nav a{display:flex;align-items:center;gap:12px;padding:11px 13px;border-radius:10px;color:#aeb9d2;text-decoration:none;font-size:13px;font-weight:600;transition:.18s}.nav a:hover,.nav a.active{background:#253456;color:white}.nav a.active{box-shadow:inset 3px 0 #6b8cff}.side-bottom{margin-top:auto;padding:16px 10px 0}.help-card{border:1px solid #344365;border-radius:13px;padding:14px;font-size:12px;color:#aeb9d2;line-height:1.6}.help-card strong{color:#fff;display:block;margin-bottom:5px}.main{flex:1;min-width:0}.topbar{height:78px;background:#fff;border-bottom:1px solid #e8ecf4;display:flex;align-items:center;justify-content:space-between;padding:0 34px;gap:18px}.top-left{display:flex;align-items:center;gap:12px}.crumb{font-size:12px;color:#8993a8}.topbar h1{font:800 19px Manrope;margin:3px 0 0;color:#172033}.top-actions{display:flex;align-items:center;gap:14px}.searchbox{position:relative}.searchbox input{border:1px solid #e5e9f2;background:#f8f9fc;border-radius:10px;padding:10px 12px 10px 35px;width:205px;outline:none;font-size:12px}.searchbox svg{position:absolute;left:11px;top:10px;color:#9aa4b8}.icon-btn{width:38px;height:38px;border:1px solid #e9edf5;background:#fff;border-radius:11px;display:grid;place-items:center;color:#64708a;position:relative}.dot{position:absolute;width:7px;height:7px;background:#f16b75;border:1px solid white;border-radius:50%;right:8px;top:7px}.userchip{display:flex;align-items:center;gap:9px;padding-left:12px;border-left:1px solid #e9edf5}.avatar{width:36px;height:36px;border-radius:12px;background:#e4eaff;color:#4e67c8;display:grid;place-items:center;font-weight:800;font-size:12px;flex-shrink:0}.userchip strong{display:block;font-size:12px}.userchip small{font-size:10px;color:#8b95aa}.content{padding:28px 34px 40px;max-width:1600px;margin:auto}.welcome{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:24px}.welcome h2{font:800 23px Manrope;margin:0 0 7px;letter-spacing:-.5px}.welcome p{margin:0;color:#8791a5;font-size:13px}.primary,.secondary,.danger{border:0;border-radius:9px;padding:11px 15px;font-weight:700;font-size:12px;display:inline-flex;align-items:center;justify-content:center;gap:8px}.primary{background:#526fe4;color:#fff;box-shadow:0 5px 12px #526fe426}.primary:hover{background:#405ed0}.secondary{background:#fff;color:#52617d;border:1px solid #e3e8f1}.danger{background:#fff0f1;color:#cf4c5c}.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin-bottom:20px}.stat,.panel{background:#fff;border:1px solid #e9edf5;border-radius:15px;box-shadow:0 3px 12px #24365b04}.stat{padding:19px}.stat-top{display:flex;align-items:center;justify-content:space-between;color:#77839a;font-size:12px;font-weight:600}.stat-icon{width:38px;height:38px;border-radius:12px;display:grid;place-items:center}.stat-value{font:800 25px Manrope;margin:14px 0 7px;letter-spacing:-.6px}.stat-foot{font-size:11px;color:#8792a7}.positive{color:#1ba77a;font-weight:700}.grid2{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(280px,1fr);gap:18px;margin-bottom:18px}.panel{padding:21px;min-width:0}.panel-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:20px}.panel-head h3{font:800 14px Manrope;margin:0}.panel-head p{font-size:11px;color:#8993a7;margin:5px 0 0}.link-button{border:0;background:transparent;color:#526fe4;font-size:11px;font-weight:700}.bar-chart{height:190px;display:flex;align-items:flex-end;gap:15px;padding:10px 6px 0;border-bottom:1px solid #eef1f6;background:repeating-linear-gradient(to bottom,transparent 0,transparent 46px,#f0f2f7 47px)}.bar-group{height:100%;flex:1;display:flex;align-items:flex-end;justify-content:center;gap:5px;position:relative;padding-bottom:0}.bar{width:12px;border-radius:5px 5px 0 0;background:#6b83ed;min-height:4px}.bar.alt{background:#b9c6ff}.bar-label{position:absolute;bottom:-23px;font-size:10px;color:#8993a7}.legend{display:flex;gap:14px;font-size:10px;color:#8792a7;margin-top:32px}.legend span{display:flex;align-items:center;gap:6px}.legend i{width:7px;height:7px;border-radius:3px;display:inline-block;background:#6b83ed}.legend i.alt{background:#b9c6ff}.progress-row{display:flex;align-items:center;gap:10px;margin:17px 0}.progress-name{width:95px;font-size:11px;color:#66728b}.progress-track{flex:1;background:#f0f2f8;height:7px;border-radius:9px;overflow:hidden}.progress-fill{height:100%;border-radius:9px;background:#6c82ec}.progress-value{width:28px;text-align:right;font-size:11px;color:#66728b;font-weight:700}.table-panel{padding:0;overflow:hidden}.table-panel .panel-head{padding:21px 21px 0}.table-wrap{overflow:auto}table{width:100%;border-collapse:collapse;white-space:nowrap}th{text-align:left;background:#fafbfe;color:#8a95aa;font-size:10px;text-transform:uppercase;letter-spacing:.7px;font-weight:700;padding:13px 20px;border-top:1px solid #f0f2f7;border-bottom:1px solid #f0f2f7}td{padding:14px 20px;border-bottom:1px solid #f0f2f7;font-size:12px;color:#526079}tbody tr:last-child td{border-bottom:0}.person{display:flex;align-items:center;gap:10px}.person strong{display:block;color:#25304a;font-size:12px}.person small{display:block;color:#9aa3b5;font-size:10px;margin-top:3px}.mini-avatar{width:32px;height:32px;border-radius:10px;display:grid;place-items:center;background:#eef1ff;color:#5a6fca;font-size:10px;font-weight:800;flex-shrink:0}.badge{display:inline-flex;align-items:center;gap:5px;border-radius:20px;padding:5px 9px;font-size:10px;font-weight:700}.badge:before{content:'';width:5px;height:5px;background:currentColor;border-radius:50%}.badge.Active,.badge.Present,.badge.Approved,.badge.Finalized{background:#e7f8f1;color:#1a9a70}.badge.Pending,.badge.Late,.badge.Draft{background:#fff4df;color:#c18423}.badge.Rejected,.badge.Absent{background:#ffebed;color:#d65162}.badge.On.leave{background:#eeeaff;color:#7561cf}.filters{display:flex;gap:9px;align-items:center;flex-wrap:wrap}.field,.select,.textarea{border:1px solid #e2e7f0;border-radius:9px;padding:10px 12px;background:#fff;color:#33405b;outline:none;font-size:12px;width:100%}.field:focus,.select:focus,.textarea:focus{border-color:#7f96f4;box-shadow:0 0 0 3px #7f96f41a}.filter-input{width:210px;padding-left:34px}.search-wrap{position:relative}.search-wrap svg{position:absolute;left:11px;top:10px;color:#9aa4b8}.filters .select{width:auto;min-width:130px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.form-field{display:flex;flex-direction:column;gap:7px}.form-field label{font-size:11px;font-weight:700;color:#66728b}.form-field.full{grid-column:1/-1}.modal-backdrop{position:fixed;inset:0;background:#111b3577;display:grid;place-items:center;padding:20px;z-index:20}.modal{width:min(540px,100%);background:#fff;border-radius:17px;padding:24px;box-shadow:0 25px 80px #101a3540;max-height:90vh;overflow:auto}.modal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.modal-head h3{font:800 17px Manrope;margin:0}.close-btn{border:0;background:#f3f5fa;border-radius:9px;width:32px;height:32px;display:grid;place-items:center;color:#67738b}.modal-actions{display:flex;justify-content:flex-end;gap:9px;margin-top:22px}.empty{padding:35px;text-align:center;color:#8b95a9;font-size:12px}.tabs{display:flex;gap:6px;background:#f3f5fa;padding:4px;border-radius:10px;width:max-content;margin-bottom:18px}.tab{border:0;background:transparent;color:#78849a;padding:8px 12px;border-radius:7px;font-size:11px;font-weight:700}.tab.active{background:#fff;color:#526fe4;box-shadow:0 2px 6px #23314e0a}.profile-grid{display:grid;grid-template-columns:300px minmax(0,1fr);gap:18px}.profile-card{text-align:center;padding:28px}.profile-big{width:74px;height:74px;border-radius:24px;background:#e7ebff;color:#526fe4;display:grid;place-items:center;font-size:22px;font-weight:800;margin:0 auto 14px}.profile-card h3{font:800 17px Manrope;margin:0 0 6px}.profile-card p{font-size:12px;color:#8993a7;margin:0 0 18px}.detail-row{display:flex;justify-content:space-between;gap:15px;padding:14px 0;border-bottom:1px solid #eef1f6;font-size:12px}.detail-row:last-child{border:0}.detail-row span{color:#8792a7}.detail-row strong{color:#34405a;text-align:right}.ai-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:18px}.chat-panel{height:530px;display:flex;flex-direction:column;padding:0;overflow:hidden}.chat-head{padding:18px 20px;border-bottom:1px solid #edf0f6;display:flex;align-items:center;gap:10px}.ai-orb{width:36px;height:36px;border-radius:12px;background:#eeebff;color:#7b61d1;display:grid;place-items:center}.chat-head strong{font-size:13px}.chat-head small{display:block;color:#8b95a8;font-size:10px;margin-top:4px}.chat-messages{flex:1;overflow:auto;padding:20px;display:flex;flex-direction:column;gap:14px}.message{max-width:80%;padding:12px 14px;border-radius:13px;background:#f4f6fb;color:#56627a;font-size:12px;line-height:1.6}.message.user{align-self:flex-end;background:#526fe4;color:white;border-bottom-right-radius:4px}.message.bot{align-self:flex-start;border-bottom-left-radius:4px}.chat-input{display:flex;gap:8px;padding:14px;border-top:1px solid #edf0f6}.chat-input input{flex:1;border:1px solid #e3e8f1;border-radius:9px;padding:11px;outline:none;font-size:12px}.chat-side-item{padding:12px;border:1px solid #edf0f6;border-radius:10px;font-size:11px;color:#66728b;margin-bottom:9px;cursor:pointer}.chat-side-item:hover{border-color:#9cafff;background:#fafbff}.notice{display:flex;gap:12px;padding:14px 0;border-bottom:1px solid #edf0f6}.notice:last-child{border:0}.notice-icon{width:34px;height:34px;border-radius:10px;background:#eff2ff;color:#647ae2;display:grid;place-items:center;flex-shrink:0}.notice strong{font-size:12px;display:block;margin-bottom:4px}.notice p{font-size:11px;color:#7f8aa0;margin:0;line-height:1.5}.notice small{font-size:10px;color:#a0a9b8;display:block;margin-top:5px}.settings-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.settings-card{padding:18px;border:1px solid #edf0f6;border-radius:12px}.settings-card svg{color:#6077e6;margin-bottom:14px}.settings-card h4{margin:0 0 6px;font-size:13px}.settings-card p{margin:0;color:#8993a7;font-size:11px;line-height:1.5}.mobile-menu{display:none}.toast{position:fixed;right:22px;bottom:22px;z-index:40;background:#172541;color:#fff;border-radius:11px;padding:13px 17px;font-size:12px;box-shadow:0 12px 30px #111b3530}.login-screen{min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at top right,#dfe7ff,transparent 40%),#f5f7fb;padding:20px}.login-card{background:#fff;border:1px solid #e8edf5;border-radius:20px;padding:32px;width:min(420px,100%);box-shadow:0 20px 70px #25345b0b}.login-card h1{font:800 23px Manrope;margin:20px 0 8px}.login-card>p{font-size:12px;color:#8993a7;line-height:1.6;margin-bottom:25px}.login-card .form-field{margin-bottom:14px}.login-card .primary{width:100%;margin-top:8px}.role-select{display:flex;gap:6px;margin:15px 0}.role-select button{flex:1;padding:8px 3px;border:1px solid #e3e8f1;background:#fff;border-radius:8px;font-size:10px;color:#71809a}.role-select button.active{border-color:#7188ed;background:#f2f4ff;color:#526fe4;font-weight:700}.footnote{font-size:10px;color:#9aa4b7;line-height:1.6;margin-top:16px}.checkline{display:flex;align-items:center;gap:9px;font-size:11px;color:#6e7b93}.checkline input{accent-color:#526fe4}.divider{height:1px;background:#edf0f6;margin:15px 0}.small-actions{display:flex;gap:6px}.small-actions button{border:1px solid #e7ebf3;background:white;color:#73809a;border-radius:7px;padding:6px;display:grid;place-items:center}.mobile-backdrop{display:none}.mobile-open .sidebar{display:flex}.mobile-open .sidebar{position:fixed;z-index:30;left:0;top:0;bottom:0;box-shadow:15px 0 50px #101a3530}.mobile-open .mobile-backdrop{display:block;position:fixed;inset:0;background:#111b3555;z-index:25}
@media(max-width:1100px){.sidebar{width:220px}.content{padding:24px}.topbar{padding:0 24px}.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.grid2{grid-template-columns:1fr}.profile-grid{grid-template-columns:1fr 1.4fr}}
@media(max-width:760px){.sidebar{display:none}.mobile-menu{display:grid}.topbar{height:68px;padding:0 15px}.topbar h1{font-size:16px}.crumb,.searchbox,.userchip>div:not(.mini-avatar){display:none}.top-actions{gap:8px}.userchip{padding-left:8px}.content{padding:20px 14px 30px}.welcome{flex-direction:column}.welcome h2{font-size:21px}.stats{gap:10px}.stat{padding:14px}.stat-value{font-size:22px}.stat-top{font-size:11px}.stat-icon{width:32px;height:32px}.panel{padding:15px}.table-panel{padding:0}.table-panel .panel-head{padding:16px 15px 0}.grid2,.ai-layout,.profile-grid{grid-template-columns:1fr}.ai-layout .panel:not(.chat-panel){order:2}.chat-panel{height:490px}.form-grid,.settings-list{grid-template-columns:1fr}.form-field.full{grid-column:auto}.filters{align-items:stretch}.filters .select,.filter-input{width:100%}.bar-chart{gap:8px}.bar{width:9px}th,td{padding:12px 14px}.modal{padding:19px}.welcome .primary{width:100%}}
`;

/* ---------- small components ---------- */
// "On leave" -> className "badge On leave" which matches .badge.On.leave in CSS
function Status({ children }) { return <span className={`badge ${String(children)}`}>{children}</span>; }
function Avatar({ name = "User", large = false }) {
  const initials = name.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase();
  return <div className={large ? "profile-big" : "mini-avatar"}>{initials}</div>;
}
function Button({ children, variant = "primary", ...props }) { return <button className={variant} {...props}>{children}</button>; }

function AppShell({ role, onSignOut, employees, setEmployees, leaves, setLeaves, attendance, setAttendance, toast }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [query, setQuery] = useState("");
  const currentUser = role === "Employee" ? "Ayesha Khan" : role === "HR" ? "Sara Ahmed" : "Admin User";
  const location = useLocation();
  const navigate = useNavigate();
  const titleMap = {
    "/dashboard": "Dashboard", "/employees": "Employees", "/attendance": "Attendance",
    "/leave": "Leave Management", "/payroll": "Payroll & Payslips", "/organization": "Organization Setup",
    "/analytics": "Analytics & Insights", "/assistant": "AI Assistant", "/communications": "Communications",
    "/audit": "Audit Log", "/profile": "My Profile"
  };
  const title = titleMap[location.pathname] || "HCM Lite";
  const adminLinks = [
    ["Dashboard", "/dashboard", LayoutDashboard], ["Employees", "/employees", Users],
    ["Attendance", "/attendance", CalendarCheck], ["Leave Management", "/leave", CalendarDays],
    ["Payroll & Payslips", "/payroll", Wallet], ["Organization Setup", "/organization", Building2],
    ["Analytics & Insights", "/analytics", TrendingUp], ["AI Assistant", "/assistant", Bot],
    ["Communications", "/communications", Megaphone], ["Audit Log", "/audit", ClipboardList]
  ];
  const hrLinks = adminLinks.filter(x => !["Organization Setup", "Audit Log"].includes(x[0]));
  const employeeLinks = [
    ["Dashboard", "/dashboard", LayoutDashboard], ["My Attendance", "/attendance", CalendarCheck],
    ["My Leave", "/leave", CalendarDays], ["My Payslips", "/payroll", Wallet],
    ["AI Assistant", "/assistant", Bot], ["Communications", "/communications", Megaphone],
    ["My Profile", "/profile", UserRound]
  ];
  const links = role === "Admin" ? adminLinks : role === "HR" ? hrLinks : employeeLinks;
  // Role guard: a route is only reachable if it is in the role's menu (profile is open to everyone).
  const allowed = new Set([...links.map(l => l[1]), "/profile"]);
  const guard = (path, element) => (allowed.has(path) ? element : <Navigate to="/dashboard" replace />);

  const visibleEmployees = employees.filter(e => `${e.name} ${e.email} ${e.department} ${e.designation}`.toLowerCase().includes(query.toLowerCase()));

  function onSearch(value) {
    setQuery(value);
    if (value && location.pathname !== "/employees") navigate("/employees");
  }
  function addEmployee(form) {
    if (!form.name.trim() || !form.email.trim() || !form.department.trim()) return toast("Please fill name, email and department.");
    if (employees.some(e => e.email.toLowerCase() === form.email.trim().toLowerCase())) return toast("An employee with this email already exists.");
    setEmployees(prev => [...prev, { ...form, name: form.name.trim(), email: form.email.trim(), id: Date.now(), salary: Number(form.salary) || 0, status: "Active", joined: form.joined || new Date().toISOString().slice(0, 10) }]);
    setModal(null); toast("Employee added (demo only).");
  }
  function changeLeave(id, status) {
    setLeaves(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    toast(`Leave request ${status.toLowerCase()} (demo only).`);
  }
  function checkIn() {
    const found = attendance.find(a => a.name === currentUser);
    if (found && found.checkIn !== "—") return toast("You have already checked in today.");
    const status = isLateNow() ? "Late" : "Present";
    const time = nowTime();
    const dept = employees.find(e => e.name === currentUser)?.department || "General";
    setAttendance(prev => found
      ? prev.map(a => a.name === currentUser ? { ...a, checkIn: time, status } : a)
      : [...prev, { id: Date.now(), name: currentUser, department: dept, checkIn: time, checkOut: "—", status }]);
    toast("Check-in recorded (demo only).");
  }
  function checkOut() {
    const found = attendance.find(a => a.name === currentUser);
    if (!found || found.checkIn === "—") return toast("Please check in first.");
    if (found.checkOut !== "—") return toast("You have already checked out today.");
    setAttendance(prev => prev.map(a => a.name === currentUser ? { ...a, checkOut: nowTime() } : a));
    toast("Check-out recorded (demo only).");
  }

  return <div className={`app ${mobileOpen ? "mobile-open" : ""}`}>
    <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />
    <aside className="sidebar">
      <div className="brand"><div className="brandmark"><BriefcaseBusiness size={19} /></div><div>HCM LITE<small>PEOPLE PLATFORM</small></div></div>
      <div className="nav-label">WORKSPACE</div>
      <nav className="nav">{links.map(([label, path, Icon]) => <NavLink key={path} to={path} onClick={() => setMobileOpen(false)}><Icon size={17} /><span>{label}</span></NavLink>)}</nav>
      <div className="side-bottom">
        <div className="help-card"><strong><Sparkles size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />HCM Assistant</strong>Get quick answers about leave, attendance and company policies.<button onClick={() => { setMobileOpen(false); navigate("/assistant"); }} style={{ display: "block", marginTop: 9, border: 0, background: "transparent", padding: 0, color: "#9db1ff", fontSize: 11, fontWeight: 700 }}>Ask a question →</button></div>
        <button onClick={onSignOut} style={{ margin: "17px 10px 0", border: 0, background: "transparent", color: "#9aa8c7", display: "flex", gap: 9, alignItems: "center", fontSize: 12 }}><LogOut size={15} /> Sign out</button>
      </div>
    </aside>
    <main className="main">
      <header className="topbar">
        <div className="top-left"><button className="icon-btn mobile-menu" aria-label="Open menu" onClick={() => setMobileOpen(!mobileOpen)}><Menu size={18} /></button><div><div className="crumb">Workspace / {title}</div><h1>{title}</h1></div></div>
        <div className="top-actions">
          {role !== "Employee" && <div className="searchbox"><Search size={15} /><input placeholder="Search employees..." value={query} onChange={e => onSearch(e.target.value)} /></div>}
          <button className="icon-btn" onClick={() => navigate("/communications")} aria-label="Notifications"><Bell size={17} /><i className="dot" /></button>
          <div className="userchip"><Avatar name={currentUser} /><div><strong>{currentUser}</strong><small>{role}</small></div><ChevronDown size={14} color="#98a2b5" /></div>
        </div>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard role={role} employees={employees} leaves={leaves} attendance={attendance} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} navigate={navigate} />} />
          <Route path="/employees" element={guard("/employees", <EmployeesPage employees={visibleEmployees} allCount={employees.length} openAdd={() => setModal("employee")} role={role} toast={toast} />)} />
          <Route path="/attendance" element={<AttendancePage attendance={attendance} role={role} currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} toast={toast} />} />
          <Route path="/leave" element={<LeavePage leaves={leaves} role={role} currentUser={currentUser} openApply={() => setModal("leave")} changeLeave={changeLeave} toast={toast} />} />
          <Route path="/payroll" element={<PayrollPage employees={employees} role={role} currentUser={currentUser} toast={toast} />} />
          <Route path="/organization" element={guard("/organization", <OrganizationPage toast={toast} />)} />
          <Route path="/analytics" element={guard("/analytics", <AnalyticsPage employees={employees} attendance={attendance} leaves={leaves} />)} />
          <Route path="/assistant" element={<AssistantPage role={role} currentUser={currentUser} employees={employees} attendance={attendance} leaves={leaves} />} />
          <Route path="/communications" element={<CommunicationsPage role={role} toast={toast} />} />
          <Route path="/audit" element={guard("/audit", <AuditPage />)} />
          <Route path="/profile" element={<ProfilePage name={currentUser} role={role} employees={employees} toast={toast} />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </main>
    {modal === "employee" && <EmployeeModal onClose={() => setModal(null)} onSave={addEmployee} />}
    {modal === "leave" && <LeaveModal currentUser={currentUser} onClose={() => setModal(null)} onSave={item => { setLeaves(prev => [{ ...item, id: Date.now(), status: "Pending" }, ...prev]); setModal(null); toast("Leave request submitted (demo only)."); }} toast={toast} />}
  </div>;
}

function Welcome({ title, subtitle, action, onAction }) {
  return <div className="welcome"><div><h2>{title}</h2><p>{subtitle}</p></div>{action && <Button onClick={onAction}>{action}</Button>}</div>;
}
function Stat({ title, value, foot, Icon, tint = "#eef1ff", color = "#6078e6" }) {
  return <div className="stat"><div className="stat-top"><span>{title}</span><span className="stat-icon" style={{ background: tint, color }}><Icon size={18} /></span></div><div className="stat-value">{value}</div><div className="stat-foot">{foot}</div></div>;
}
function Panel({ title, subtitle, children, action }) {
  return <section className="panel"><div className="panel-head"><div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div>{action}</div>{children}</section>;
}
function Progress({ label, value, max, suffix }) { return <div className="progress-row"><div className="progress-name">{label}</div><div className="progress-track"><div className="progress-fill" style={{ width: `${Math.min(100, value / Math.max(max, 1) * 100)}%` }} /></div><div className="progress-value">{suffix ?? value}</div></div>; }

function Dashboard({ role, employees, leaves, attendance, currentUser, checkIn, checkOut, navigate }) {
  const isEmployee = role === "Employee";
  const present = attendance.filter(a => ["Present", "Late"].includes(a.status)).length;
  const pending = leaves.filter(l => l.status === "Pending").length;
  const recent = employees.slice(-4).reverse();
  const deptCount = d => employees.filter(e => e.department === d).length;
  const total = Math.max(employees.length, 1);
  return <>
    <Welcome title={`${greeting()}, ${role === "Admin" ? "Admin" : currentUser.split(" ")[0]} 👋`} subtitle="Here’s what’s happening with your people today." action={isEmployee ? "View my profile" : "Add employee"} onAction={() => navigate(isEmployee ? "/profile" : "/employees")} />
    {isEmployee ? <>
      <div className="stats"><Stat title="Hours This Week" value="32.5h" foot={<><span className="positive">↑ 4.5h</span> vs last week</>} Icon={Clock3} /><Stat title="Late Count" value="2" foot="This month" Icon={CalendarCheck} tint="#fff3df" color="#c48a28" /><Stat title="Leave Balance" value="18 days" foot="Across all leave types" Icon={CalendarDays} tint="#e9f9f2" color="#21a478" /><Stat title="Last Payslip" value="PKR 95,000" foot="September 2026" Icon={Wallet} tint="#f1eaff" color="#8665d9" /></div>
      <div className="grid2">
        <Panel title="Today's Attendance" subtitle="Record your working hours"><div style={{ display: "flex", gap: 10, alignItems: "center", padding: "18px 0" }}><div className="stat-icon" style={{ background: "#e8f8f1", color: "#1da779" }}><CalendarCheck /></div><div><strong style={{ fontSize: 14 }}>You're doing great!</strong><p style={{ margin: "5px 0", fontSize: 11, color: "#8a95aa" }}>Please remember to check out before leaving.</p></div></div><div style={{ display: "flex", gap: 9 }}><Button onClick={checkIn}><Check size={15} /> Check in</Button><Button variant="secondary" onClick={checkOut}><Clock3 size={15} /> Check out</Button></div></Panel>
        <Panel title="Leave balance" subtitle="Your remaining leave days"><Progress label="Annual leave" value={10} max={14} suffix="10" /><Progress label="Sick leave" value={6} max={8} suffix="6" /><Progress label="Casual leave" value={8} max={10} suffix="8" /></Panel>
      </div>
    </> : <>
      <div className="stats"><Stat title="Total Employees" value={employees.length} foot={<><span className="positive">↑ 8.2%</span> from last month</>} Icon={Users} /><Stat title="Present Today" value={present} foot={`${attendance.length ? Math.round(present / attendance.length * 100) : 0}% attendance rate`} Icon={CalendarCheck} tint="#e7f8f1" color="#20a578" /><Stat title="On Leave" value={attendance.filter(a => a.status === "On leave").length} foot="Employees away today" Icon={CalendarDays} tint="#fff3df" color="#c48a28" /><Stat title="Pending Approvals" value={pending} foot="Leave requests to review" Icon={ClipboardList} tint="#f1eaff" color="#8665d9" /></div>
      <div className="grid2">
        <Panel title="Attendance overview" subtitle="Illustrative weekly attendance" action={<button className="link-button" onClick={() => navigate("/analytics")}>View report →</button>}><div className="bar-chart">{[["Mon", 70, 35], ["Tue", 82, 48], ["Wed", 65, 42], ["Thu", 92, 55], ["Fri", 77, 46], ["Sat", 42, 20], ["Sun", 25, 12]].map(([d, a, b]) => <div className="bar-group" key={d}><div className="bar" style={{ height: `${a}%` }} /><div className="bar alt" style={{ height: `${b}%` }} /><span className="bar-label">{d}</span></div>)}</div><div className="legend"><span><i /> Present</span><span><i className="alt" /> On leave / other</span></div></Panel>
        <Panel title="Department distribution" subtitle="Employees by department">
          <Progress label="Engineering" value={deptCount("Engineering")} max={total} />
          <Progress label="Design" value={deptCount("Design")} max={total} />
          <Progress label="Human Resources" value={deptCount("Human Resources")} max={total} />
          <Progress label="Other" value={employees.filter(e => !["Engineering", "Design", "Human Resources"].includes(e.department)).length} max={total} />
        </Panel>
      </div>
      <div className="grid2">
        <div className="panel table-panel"><div className="panel-head"><div><h3>Recent employees</h3><p>Latest people in your organization</p></div><button className="link-button" onClick={() => navigate("/employees")}>View all →</button></div><div className="table-wrap"><table><thead><tr><th>Employee</th><th>Department</th><th>Status</th></tr></thead><tbody>{recent.map(e => <tr key={e.id}><td><div className="person"><Avatar name={e.name} /><div><strong>{e.name}</strong><small>{e.designation}</small></div></div></td><td>{e.department}</td><td><Status>{e.status}</Status></td></tr>)}</tbody></table></div></div>
        <Panel title="Pending leave requests" subtitle="Requests awaiting review" action={<button className="link-button" onClick={() => navigate("/leave")}>See all →</button>}>{leaves.filter(l => l.status === "Pending").slice(0, 3).map(l => <div className="notice" key={l.id}><Avatar name={l.name} /><div style={{ flex: 1 }}><strong>{l.name}</strong><p>{l.type} leave · {l.days} day(s)</p><small>{l.from} – {l.to}</small></div><Status>{l.status}</Status></div>)}{pending === 0 && <div className="empty">No pending requests.</div>}</Panel>
      </div>
    </>}
  </>;
}

function EmployeesPage({ employees, allCount, openAdd, role, toast }) {
  const [department, setDepartment] = useState("All departments");
  const filtered = employees.filter(e => department === "All departments" || e.department === department);
  return <><Welcome title="Employee directory" subtitle={`${allCount} people across your organization.`} action={role === "Employee" ? null : "Add employee"} onAction={openAdd} />
    <div className="panel table-panel"><div className="panel-head"><div><h3>All employees</h3><p>Search, review and manage employee records.</p></div><div className="filters"><select className="select" value={department} onChange={e => setDepartment(e.target.value)}><option>All departments</option>{[...new Set(employees.map(e => e.department))].map(d => <option key={d}>{d}</option>)}</select><Button variant="secondary" onClick={() => toast("CSV export demo: connect this action to your API.")}><Download size={14} /> Export CSV</Button></div></div>
      <div className="table-wrap"><table><thead><tr><th>Employee</th><th>Department</th><th>Designation</th><th>Joined</th><th>Salary</th><th>Status</th><th>Action</th></tr></thead><tbody>{filtered.map(e => <tr key={e.id}><td><div className="person"><Avatar name={e.name} /><div><strong>{e.name}</strong><small>{e.email}</small></div></div></td><td>{e.department}</td><td>{e.designation || "—"}</td><td>{e.joined}</td><td>PKR {Number(e.salary).toLocaleString()}</td><td><Status>{e.status}</Status></td><td><Button variant="secondary" style={{ padding: "6px 10px", fontSize: 10 }} onClick={() => toast(`${e.name} profile opened in demo.`)}>View</Button></td></tr>)}</tbody></table>{!filtered.length && <div className="empty">No employees found. Try changing your search or filter.</div>}</div></div></>;
}

function AttendancePage({ attendance, role, currentUser, checkIn, checkOut, toast }) {
  const [filter, setFilter] = useState("All statuses");
  const shown = attendance.filter(a => (role !== "Employee" || a.name === currentUser) && (filter === "All statuses" || a.status === filter));
  return <><Welcome title={role === "Employee" ? "My attendance" : "Attendance management"} subtitle="Track daily check-ins, check-outs and attendance status." action={role === "Employee" ? "Check in now" : "Export report"} onAction={role === "Employee" ? checkIn : () => toast("Attendance report export is a demo action.")} />
    {role === "Employee" && <div className="stats"><Stat title="Hours this week" value="32.5h" foot="Target: 40 hours" Icon={Clock3} /><Stat title="Present days" value="18" foot="This month" Icon={CalendarCheck} tint="#e7f8f1" color="#20a578" /><Stat title="Late arrivals" value="2" foot="This month" Icon={Clock3} tint="#fff3df" color="#c48a28" /><Stat title="Leave days" value="1" foot="This month" Icon={CalendarDays} tint="#f1eaff" color="#8665d9" /></div>}
    <div className="panel table-panel"><div className="panel-head"><div><h3>{role === "Employee" ? "My attendance records" : "Daily attendance board"}</h3><p>Server timestamps and final rules should be enforced by the backend.</p></div><select className="select" value={filter} onChange={e => setFilter(e.target.value)}><option>All statuses</option><option>Present</option><option>Late</option><option>Absent</option><option>On leave</option></select></div>
      <div className="table-wrap"><table><thead><tr><th>Employee</th><th>Department</th><th>Check in</th><th>Check out</th><th>Status</th><th>Action</th></tr></thead><tbody>{shown.map(a => <tr key={a.id}><td><div className="person"><Avatar name={a.name} /><strong>{a.name}</strong></div></td><td>{a.department}</td><td>{a.checkIn}</td><td>{a.checkOut}</td><td><Status>{a.status}</Status></td><td>{role === "Employee" ? <div className="small-actions"><button onClick={checkIn} title="Check in" aria-label="Check in"><Check size={14} /></button><button onClick={checkOut} title="Check out" aria-label="Check out"><Clock3 size={14} /></button></div> : <button className="link-button" onClick={() => toast("Correction review is a demo action.")}>Review correction</button>}</td></tr>)}</tbody></table>{!shown.length && <div className="empty">No attendance records found.</div>}</div></div></>;
}

function LeavePage({ leaves, role, currentUser, openApply, changeLeave, toast }) {
  const [filter, setFilter] = useState("All requests");
  const scoped = leaves.filter(l => role !== "Employee" || l.name === currentUser);
  const shown = scoped.filter(l => filter === "All requests" || l.status === filter);
  return <><Welcome title={role === "Employee" ? "My leave" : "Leave management"} subtitle="Submit requests, check balances and review approvals." action={role === "Employee" ? "Apply for leave" : "Export requests"} onAction={role === "Employee" ? openApply : () => toast("Leave export is a demo action.")} />
    <div className="stats"><Stat title="Annual leave" value="10 / 14 days" foot="4 days used" Icon={CalendarDays} /><Stat title="Sick leave" value="6 / 8 days" foot="2 days used" Icon={ShieldCheck} tint="#e7f8f1" color="#20a578" /><Stat title="Casual leave" value="8 / 10 days" foot="2 days used" Icon={CalendarCheck} tint="#f1eaff" color="#8665d9" /><Stat title="Pending requests" value={scoped.filter(l => l.status === "Pending").length} foot="Awaiting decision" Icon={Clock3} tint="#fff3df" color="#c48a28" /></div>
    <div className="panel table-panel"><div className="panel-head"><div><h3>Leave requests</h3><p>Working-day counts and policy validation belong on the backend.</p></div><select className="select" value={filter} onChange={e => setFilter(e.target.value)}><option>All requests</option><option>Pending</option><option>Approved</option><option>Rejected</option></select></div>
      <div className="table-wrap"><table><thead><tr><th>Employee</th><th>Leave type</th><th>Dates</th><th>Days</th><th>Reason</th><th>Status</th>{role !== "Employee" && <th>Decision</th>}</tr></thead><tbody>{shown.map(l => <tr key={l.id}><td><div className="person"><Avatar name={l.name} /><strong>{l.name}</strong></div></td><td>{l.type}</td><td>{l.from} – {l.to}</td><td>{l.days}</td><td>{l.reason}</td><td><Status>{l.status}</Status></td>{role !== "Employee" && <td>{l.status === "Pending" ? <div className="small-actions"><button title="Approve" aria-label="Approve" onClick={() => changeLeave(l.id, "Approved")}><Check size={14} /></button><button title="Reject" aria-label="Reject" onClick={() => changeLeave(l.id, "Rejected")}><X size={14} /></button></div> : <span style={{ color: "#9aa4b8" }}>Reviewed</span>}</td>}</tr>)}</tbody></table>{!shown.length && <div className="empty">No leave requests match this filter.</div>}</div></div></>;
}

function PayrollPage({ employees, role, currentUser, toast }) {
  const [month, setMonth] = useState("October 2026");
  const [finalizedMonths, setFinalizedMonths] = useState({});
  const finalized = !!finalizedMonths[month];
  const rows = employees.filter(e => role !== "Employee" || e.name === currentUser);
  const total = rows.reduce((sum, e) => sum + (Number(e.salary) || 0), 0);
  const action = role === "Admin" ? "Finalize payroll" : role === "HR" ? "Run payroll draft" : null;
  function onAction() {
    if (role === "Admin") {
      if (finalized) return toast(`${month} payroll is already finalized.`);
      setFinalizedMonths(prev => ({ ...prev, [month]: true }));
      toast("Payroll locked in this demo.");
    } else toast("Payroll draft calculated in demo only.");
  }
  return <><Welcome title={role === "Employee" ? "My payslips" : "Payroll"} subtitle="Review salary structures, prepare monthly payroll and manage payslips." action={action} onAction={onAction} />
    <div className="stats"><Stat title={role === "Employee" ? "My basic salary" : "Monthly basic total"} value={`PKR ${total.toLocaleString()}`} foot="Illustrative basic salaries" Icon={CircleDollarSign} /><Stat title="Employees in payroll" value={rows.length} foot="Active records shown" Icon={Users} tint="#e7f8f1" color="#20a578" /><Stat title="Payroll period" value={month.split(" ")[0]} foot={month.split(" ")[1]} Icon={CalendarDays} tint="#f1eaff" color="#8665d9" /><Stat title="Payroll status" value={finalized ? "Finalized" : "Draft"} foot={finalized ? "Locked in demo" : "Not yet finalized"} Icon={ShieldCheck} tint={finalized ? "#e7f8f1" : "#fff3df"} color={finalized ? "#20a578" : "#c48a28"} /></div>
    <div className="panel table-panel"><div className="panel-head"><div><h3>{role === "Employee" ? "My payslip" : "Monthly payroll run"}</h3><p>Connect to real payroll calculations before production.</p></div><select className="select" value={month} onChange={e => setMonth(e.target.value)}><option>October 2026</option><option>September 2026</option><option>August 2026</option></select></div>
      <div className="table-wrap"><table><thead><tr><th>Employee</th><th>Basic salary</th><th>Allowances (demo)</th><th>Gross (demo)</th><th>Status</th><th>Payslip</th></tr></thead><tbody>{rows.map(e => { const basic = Number(e.salary) || 0; const allow = Math.round(basic * .5); return <tr key={e.id}><td><div className="person"><Avatar name={e.name} /><div><strong>{e.name}</strong><small>{e.designation}</small></div></div></td><td>PKR {basic.toLocaleString()}</td><td>PKR {allow.toLocaleString()}</td><td><strong>PKR {(basic + allow).toLocaleString()}</strong></td><td><Status>{finalized ? "Finalized" : "Draft"}</Status></td><td><Button variant="secondary" onClick={() => toast("Payslip PDF needs backend/PDF generation integration.")}><Download size={13} /> Download</Button></td></tr>; })}</tbody></table>{!rows.length && <div className="empty">No payroll records found.</div>}</div></div></>;
}

function OrganizationPage({ toast }) {
  const [company, setCompany] = useState({ name: "Acme Technologies", start: "09:00", grace: "15", weekend: "Saturday & Sunday", radius: "150", location: "Karachi, Pakistan" });
  const [departments, setDepartments] = useState(["Engineering", "Design", "Human Resources", "Marketing"]);
  const [newDept, setNewDept] = useState("");
  function addDept() {
    const name = newDept.trim();
    if (!name) return;
    if (departments.some(d => d.toLowerCase() === name.toLowerCase())) return toast("This department already exists.");
    setDepartments([...departments, name]); setNewDept(""); toast("Department added locally.");
  }
  return <><Welcome title="Organization setup" subtitle="Configure company rules, departments, leave types and holidays." action="Save settings" onAction={() => toast("Settings saved locally for this demo.")} />
    <div className="grid2">
      <Panel title="Company settings" subtitle="These settings should govern new records"><div className="form-grid">{[["Company name", "name"], ["Office start time", "start"], ["Grace period (minutes)", "grace"], ["Office location", "location"], ["Attendance radius (meters)", "radius"]].map(([label, key]) => <div className="form-field" key={key}><label>{label}</label><input className="field" value={company[key]} onChange={e => setCompany({ ...company, [key]: e.target.value })} /></div>)}<div className="form-field"><label>Weekend</label><select className="select" value={company.weekend} onChange={e => setCompany({ ...company, weekend: e.target.value })}><option>Saturday & Sunday</option><option>Friday & Saturday</option><option>Sunday only</option></select></div></div></Panel>
      <Panel title="Departments" subtitle="Manage your organization structure"><div style={{ display: "flex", gap: 8, marginBottom: 14 }}><input className="field" placeholder="New department" value={newDept} onChange={e => setNewDept(e.target.value)} onKeyDown={e => e.key === "Enter" && addDept()} /><Button aria-label="Add department" onClick={addDept}><Plus size={14} /></Button></div>{departments.map(d => <div className="detail-row" key={d}><strong>{d}</strong><button className="link-button" onClick={() => { setDepartments(departments.filter(x => x !== d)); toast("Department removed locally."); }}>Remove</button></div>)}</Panel>
    </div>
    <div className="settings-list">
      <div className="settings-card"><CalendarDays size={20} /><h4>Leave types & quotas</h4><p>Annual: 14 days · Sick: 8 days · Casual: 10 days · Unpaid: unlimited</p><button className="link-button" onClick={() => toast("Leave policy editor is a demo action.")}>Configure policy →</button></div>
      <div className="settings-card"><CalendarCheck size={20} /><h4>Public holidays</h4><p>Manage holidays and ensure they are excluded from working-day leave calculations.</p><button className="link-button" onClick={() => toast("Holiday calendar is a demo action.")}>Manage holidays →</button></div>
      <div className="settings-card"><Users size={20} /><h4>Accounts & roles</h4><p>Create HR accounts, deactivate accounts and reset temporary passwords.</p><button className="link-button" onClick={() => toast("Account management requires backend integration.")}>Manage accounts →</button></div>
      <div className="settings-card"><ShieldCheck size={20} /><h4>Security rules</h4><p>Server-side role permissions, password hashing and secure session handling.</p><button className="link-button" onClick={() => toast("Security must be enforced by the backend.")}>Review rules →</button></div>
    </div></>;
}

function AnalyticsPage({ employees, attendance, leaves }) {
  const late = attendance.filter(a => a.status === "Late").length;
  const present = attendance.filter(a => ["Present", "Late"].includes(a.status)).length;
  const aMax = Math.max(attendance.length, 1);
  const lMax = Math.max(leaves.length, 1);
  return <><Welcome title="Analytics & insights" subtitle="Understand attendance, leave usage and people metrics." />
    <div className="stats"><Stat title="Headcount" value={employees.length} foot="Current employee records" Icon={Users} /><Stat title="Attendance rate" value={`${attendance.length ? Math.round(present / attendance.length * 100) : 0}%`} foot="Based on current demo records" Icon={CalendarCheck} tint="#e7f8f1" color="#20a578" /><Stat title="Late arrivals" value={late} foot="In current sample records" Icon={Clock3} tint="#fff3df" color="#c48a28" /><Stat title="Pending leave" value={leaves.filter(l => l.status === "Pending").length} foot="Awaiting decision" Icon={CalendarDays} tint="#f1eaff" color="#8665d9" /></div>
    <div className="grid2">
      <Panel title="Attendance status" subtitle="Current records"><Progress label="Present / late" value={present} max={aMax} /><Progress label="On leave" value={attendance.filter(a => a.status === "On leave").length} max={aMax} /><Progress label="Absent" value={attendance.filter(a => a.status === "Absent").length} max={aMax} /><p style={{ fontSize: 10, color: "#98a2b5", lineHeight: 1.6 }}>For production, calculate metrics from database aggregates using date and department filters.</p></Panel>
      <Panel title="Leave status" subtitle="Requests by decision"><Progress label="Pending" value={leaves.filter(l => l.status === "Pending").length} max={lMax} /><Progress label="Approved" value={leaves.filter(l => l.status === "Approved").length} max={lMax} /><Progress label="Rejected" value={leaves.filter(l => l.status === "Rejected").length} max={lMax} /></Panel>
    </div>
    <Panel title="Department headcount" subtitle="Employee distribution">{[...new Set(employees.map(e => e.department))].map(d => <Progress key={d} label={d} value={employees.filter(e => e.department === d).length} max={Math.max(employees.length, 1)} />)}</Panel></>;
}

function AssistantPage({ role, currentUser, employees, attendance, leaves }) {
  const isEmployee = role === "Employee";
  const [messages, setMessages] = useState([{ from: "bot", text: `Hi! I'm the HCM Lite assistant. I can help with ${isEmployee ? "your attendance, leave balance and company policies" : "headcount, attendance, leave summaries and company policies"}. This demo answers from the current sample data.` }]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);
  useEffect(() => { endRef.current?.scrollIntoView({ block: "end" }); }, [messages]);
  const suggestions = isEmployee
    ? ["What is my attendance status?", "How many of my leave requests are pending?"]
    : ["How many employees are there?", "Who is on leave?", "How many leave requests are pending?", "What is the attendance rate?"];

  function answerFor(q) {
    if (isEmployee) {
      // Employees only get answers about their own records.
      const mine = attendance.find(a => a.name === currentUser);
      if (q.includes("pending")) return `You have ${leaves.filter(l => l.name === currentUser && l.status === "Pending").length} pending leave request(s).`;
      if (q.includes("attendance") || q.includes("present") || q.includes("status")) return mine ? `Today you are marked "${mine.status}" (check-in ${mine.checkIn}, check-out ${mine.checkOut}).` : "I couldn't find an attendance record for you today.";
      if (q.includes("employee") || q.includes("headcount") || q.includes("who")) return "I can only share information about your own records with your access level.";
      return "I can answer questions about your own attendance and leave in this demo. For real AI responses, connect a hosted LLM through your backend API and apply the same role permissions.";
    }
    if (q.includes("who") && q.includes("leave")) { const names = attendance.filter(a => a.status === "On leave").map(a => a.name); return `Employees currently marked on leave: ${names.join(", ") || "none"}.`; }
    if (q.includes("pending")) return `There are ${leaves.filter(l => l.status === "Pending").length} pending leave requests in this demo.`;
    if (q.includes("employee") || q.includes("headcount")) return `There are ${employees.length} employee records in the current demo data.`;
    if (q.includes("attendance") || q.includes("present")) { const n = attendance.filter(a => ["Present", "Late"].includes(a.status)).length; return `Current demo attendance rate is ${attendance.length ? Math.round(n / attendance.length * 100) : 0}%, calculated from ${attendance.length} sample records.`; }
    return "I can answer basic questions about the current demo records. For real AI responses, connect a hosted LLM through your backend API and apply the same role permissions.";
  }
  function ask(text) {
    const t = text.trim();
    if (!t) return;
    const answer = answerFor(t.toLowerCase());
    setMessages(prev => [...prev, { from: "user", text: t }, { from: "bot", text: answer }]);
    setInput("");
  }
  return <><Welcome title="AI assistant" subtitle="Ask questions about people operations and company policies." />
    <div className="ai-layout">
      <div className="panel chat-panel"><div className="chat-head"><div className="ai-orb"><Bot size={19} /></div><div><strong>HCM Intelligence</strong><small><span style={{ color: "#1ba77a" }}>●</span> Demo assistant · {role} scope</small></div></div>
        <div className="chat-messages">{messages.map((m, i) => <div key={i} className={`message ${m.from}`}>{m.text}</div>)}<div ref={endRef} /></div>
        <form className="chat-input" onSubmit={e => { e.preventDefault(); ask(input); }}><input placeholder="Ask about attendance, leave or employees..." value={input} onChange={e => setInput(e.target.value)} /><button className="primary" type="submit" aria-label="Send"><Send size={15} /></button></form></div>
      <div className="panel"><h3 style={{ font: "800 14px Manrope", margin: "0 0 7px" }}>Suggested questions</h3><p style={{ fontSize: 11, color: "#8993a7", lineHeight: 1.6, margin: "0 0 16px" }}>Try one of these common questions.</p>{suggestions.map(s => <div className="chat-side-item" key={s} onClick={() => ask(s)}>{s} <span style={{ float: "right" }}>↗</span></div>)}<div className="divider" /><div style={{ fontSize: 10, color: "#9aa4b8", lineHeight: 1.7 }}><ShieldCheck size={14} style={{ verticalAlign: "middle", marginRight: 5 }} />AI answers must be scoped to the signed-in user's permissions. This prototype does not call an LLM.</div></div>
    </div></>;
}

function CommunicationsPage({ role, toast }) {
  const [announcements, setAnnouncements] = useState([{ id: 1, title: "October payroll processing", body: "Payroll review is scheduled for the final working day of this month.", date: "Today", author: "Admin" }, { id: 2, title: "Updated leave policy", body: "Please review the annual, sick and casual leave balances in your profile.", date: "Yesterday", author: "Human Resources" }, { id: 3, title: "Team town hall", body: "The monthly team meeting will be held on Friday at 3:00 PM.", date: "2 days ago", author: "Admin" }]);
  const [form, setForm] = useState({ title: "", body: "" });
  return <><Welcome title="Communications" subtitle="Announcements and notifications for your organization." />
    <div className="grid2">
      <Panel title="Announcements" subtitle="Company-wide updates">{announcements.map(a => <div className="notice" key={a.id}><div className="notice-icon"><Megaphone size={16} /></div><div style={{ flex: 1 }}><strong>{a.title}</strong><p>{a.body}</p><small>{a.author} · {a.date}</small></div></div>)}</Panel>
      {role !== "Employee"
        ? <Panel title="Post an announcement" subtitle="Share an update with all employees"><form onSubmit={e => { e.preventDefault(); if (!form.title.trim() || !form.body.trim()) return toast("Enter a title and announcement."); setAnnouncements([{ id: Date.now(), title: form.title.trim(), body: form.body.trim(), date: "Just now", author: role }, ...announcements]); setForm({ title: "", body: "" }); toast("Announcement published locally."); }}>
          <div className="form-field" style={{ marginBottom: 13 }}><label>Announcement title</label><input className="field" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Office update" /></div>
          <div className="form-field"><label>Message</label><textarea className="textarea" rows="5" value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} placeholder="Write your announcement..." /></div>
          <Button type="submit" style={{ marginTop: 16 }}><Send size={14} /> Publish announcement</Button></form></Panel>
        : <Panel title="Notification preferences" subtitle="Manage how updates appear"><label className="checkline"><input type="checkbox" defaultChecked /> Leave decisions</label><div style={{ height: 13 }} /><label className="checkline"><input type="checkbox" defaultChecked /> Payslip available</label><div style={{ height: 13 }} /><label className="checkline"><input type="checkbox" defaultChecked /> Company announcements</label></Panel>}
    </div></>;
}

function AuditPage() {
  const rows = [["Admin User", "EMPLOYEE_CREATED", "Employee", "Ayesha Khan", "Today, 09:42 AM"], ["Sara Ahmed", "LEAVE_APPROVED", "Leave request", "Hamza Ali", "Today, 09:15 AM"], ["Admin User", "PAYROLL_DRAFTED", "Payroll", "October 2026", "Yesterday"], ["Sara Ahmed", "ATTENDANCE_CORRECTION", "Attendance", "Usman Raza", "Yesterday"]];
  return <><Welcome title="Audit log" subtitle="Review important changes and actions across the organization." />
    <div className="panel table-panel"><div className="panel-head"><div><h3>Recent activity</h3><p>Audit entries must be immutable and recorded by the backend.</p></div><Button variant="secondary"><Filter size={14} /> Filter log</Button></div>
      <div className="table-wrap"><table><thead><tr><th>Actor</th><th>Action</th><th>Entity</th><th>Record</th><th>Timestamp</th></tr></thead><tbody>{rows.map((r, i) => <tr key={i}>{r.map((v, j) => <td key={j}>{j === 1 ? <span style={{ fontSize: 10, fontWeight: 700, color: "#596fe0" }}>{v}</span> : v}</td>)}</tr>)}</tbody></table></div></div></>;
}

function ProfilePage({ name, role, employees, toast }) {
  const me = employees.find(e => e.name === name);
  const email = me?.email || `${name.toLowerCase().replace(/\s+/g, ".")}@company.com`;
  const department = me?.department || "People Operations";
  return <><Welcome title="My profile" subtitle="View your personal details and account information." action="Edit profile" onAction={() => toast("Profile editing needs an API connection.")} />
    <div className="profile-grid">
      <div className="panel profile-card"><Avatar name={name} large /><h3>{name}</h3><p>{role} · HCM Lite</p><Status>Active</Status><div className="divider" /><Button variant="secondary" onClick={() => toast("Password change needs secure backend integration.")}>Change password</Button></div>
      <div className="panel"><div className="panel-head"><h3>Personal information</h3></div>
        <div className="detail-row"><span>Full name</span><strong>{name}</strong></div>
        <div className="detail-row"><span>Work email</span><strong>{email}</strong></div>
        <div className="detail-row"><span>Role</span><strong>{role}</strong></div>
        <div className="detail-row"><span>Department</span><strong>{department}</strong></div>
        <div className="detail-row"><span>Account status</span><strong style={{ color: "#1ba77a" }}>Active</strong></div>
        <div className="detail-row"><span>Phone</span><strong>Not provided</strong></div>
        <div className="detail-row"><span>Address</span><strong>Not provided</strong></div></div>
    </div></>;
}

function EmployeeModal({ onClose, onSave }) {
  const [form, setForm] = useState({ name: "", email: "", department: "Engineering", designation: "", salary: "", joined: new Date().toISOString().slice(0, 10) });
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}><div className="modal"><div className="modal-head"><h3>Add employee</h3><button className="close-btn" type="button" aria-label="Close" onClick={onClose}><X size={16} /></button></div>
    <form onSubmit={e => { e.preventDefault(); onSave(form); }}><div className="form-grid">
      <div className="form-field"><label>Full name *</label><input className="field" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Employee name" /></div>
      <div className="form-field"><label>Work email *</label><input className="field" required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="name@company.com" /></div>
      <div className="form-field"><label>Department *</label><select className="select" value={form.department} onChange={e => setForm({ ...form, department: e.target.value })}><option>Engineering</option><option>Design</option><option>Human Resources</option><option>Marketing</option><option>Finance</option></select></div>
      <div className="form-field"><label>Designation</label><input className="field" value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })} placeholder="Job title" /></div>
      <div className="form-field"><label>Basic salary (PKR)</label><input className="field" type="number" min="0" value={form.salary} onChange={e => setForm({ ...form, salary: e.target.value })} placeholder="50000" /></div>
      <div className="form-field"><label>Joining date</label><input className="field" type="date" value={form.joined} onChange={e => setForm({ ...form, joined: e.target.value })} /></div>
    </div><div className="modal-actions"><Button variant="secondary" type="button" onClick={onClose}>Cancel</Button><Button type="submit"><Plus size={14} /> Add employee</Button></div></form>
    <p className="footnote">Prototype only: this form does not create a real login or save data to a database.</p></div></div>;
}

function LeaveModal({ currentUser, onClose, onSave, toast }) {
  const [form, setForm] = useState({ name: currentUser, type: "Casual", from: "", to: "", days: 1, reason: "" });
  function submit(e) {
    e.preventDefault();
    if (!form.from || !form.to || form.to < form.from) return toast("Please choose a valid date range.");
    const days = countWorkingDays(form.from, form.to);
    if (days === 0) return toast("The selected dates fall on a weekend. Choose working days.");
    onSave({ ...form, days });
  }
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}><div className="modal"><div className="modal-head"><h3>Apply for leave</h3><button className="close-btn" type="button" aria-label="Close" onClick={onClose}><X size={16} /></button></div>
    <form onSubmit={submit}><div className="form-grid">
      <div className="form-field"><label>Employee</label><input className="field" value={form.name} readOnly /></div>
      <div className="form-field"><label>Leave type</label><select className="select" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}><option>Annual</option><option>Sick</option><option>Casual</option><option>Unpaid</option></select></div>
      <div className="form-field"><label>From *</label><input className="field" type="date" required value={form.from} onChange={e => setForm({ ...form, from: e.target.value, to: form.to && form.to < e.target.value ? e.target.value : form.to })} /></div>
      <div className="form-field"><label>To *</label><input className="field" type="date" min={form.from} required value={form.to} onChange={e => setForm({ ...form, to: e.target.value })} /></div>
      <div className="form-field full"><label>Reason *</label><textarea className="textarea" required rows="3" value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })} placeholder="Tell us why you need leave..." /></div>
    </div><div className="modal-actions"><Button variant="secondary" type="button" onClick={onClose}>Cancel</Button><Button type="submit"><Send size={14} /> Submit request</Button></div></form>
    <p className="footnote">Demo only: weekends are excluded from the day count. The production backend must also exclude public holidays and check leave balance and overlaps.</p></div></div>;
}

function LoginPage({ onLogin }) {
  const [selected, setSelected] = useState("Admin");
  const [email, setEmail] = useState("admin@hcm-lite.demo");
  const [password, setPassword] = useState("demo1234");
  const navigate = useNavigate();
  const emails = { Admin: "admin@hcm-lite.demo", HR: "hr@hcm-lite.demo", Employee: "employee@hcm-lite.demo" };
  return <div className="login-screen"><div className="login-card">
    <div className="brand" style={{ padding: 0, color: "#172033" }}><div className="brandmark"><BriefcaseBusiness size={19} /></div><div>HCM LITE<small style={{ color: "#8b96ad" }}>PEOPLE PLATFORM</small></div></div>
    <h1>Welcome back</h1><p>Sign in to your workspace and manage your people operations.</p>
    <form onSubmit={e => { e.preventDefault(); onLogin(selected); navigate("/dashboard"); }}>
      <div className="form-field"><label>Email address</label><input className="field" type="email" required value={email} onChange={e => setEmail(e.target.value)} /></div>
      <div className="form-field"><label>Password</label><input className="field" type="password" required value={password} onChange={e => setPassword(e.target.value)} /></div>
      <label style={{ fontSize: 11, fontWeight: 700, color: "#66728b" }}>Preview role</label>
      <div className="role-select">{["Admin", "HR", "Employee"].map(r => <button key={r} type="button" className={selected === r ? "active" : ""} onClick={() => { setSelected(r); setEmail(emails[r]); }}>{r}</button>)}</div>
      <button className="primary" type="submit">Enter demo workspace <span>→</span></button>
    </form>
    <div className="footnote">Prototype sign-in only. Any email/password will enter the selected role. Add real backend authentication, password hashing, JWT/session management and server-side role guards before deployment.</div>
  </div></div>;
}

function HcmApp() {
  const [role, setRole] = useState("Admin");
  const [loggedIn, setLoggedIn] = useState(false);
  const [employees, setEmployees] = useState(initialEmployees);
  const [leaves, setLeaves] = useState(initialLeaves);
  const [attendance, setAttendance] = useState(initialAttendance);
  const [toastMessage, setToastMessage] = useState("");
  const timer = useRef(null);
  const navigate = useNavigate();
  useEffect(() => () => clearTimeout(timer.current), []);
  const toast = msg => { setToastMessage(msg); clearTimeout(timer.current); timer.current = setTimeout(() => setToastMessage(""), 2600); };
  const onLogin = r => { setRole(r); setLoggedIn(true); };
  const onSignOut = () => { setLoggedIn(false); navigate("/login"); };
  return <><style>{css}</style>
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
      <Route path="/*" element={loggedIn
        ? <AppShell role={role} onSignOut={onSignOut} employees={employees} setEmployees={setEmployees} leaves={leaves} setLeaves={setLeaves} attendance={attendance} setAttendance={setAttendance} toast={toast} />
        : <Navigate to="/login" replace />} />
    </Routes>
    {toastMessage && <div className="toast" role="status">{toastMessage}</div>}</>;
}

export default function App() { return <BrowserRouter><HcmApp /></BrowserRouter>; }
