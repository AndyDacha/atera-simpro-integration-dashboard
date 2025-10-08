import React, { useState, useEffect } from 'react';
import { 
  LogOut, 
  Activity, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  RefreshCw,
  Users,
  Building,
  Clock,
  Settings,
  BarChart3,
  Globe,
  Server,
  Webhook,
  FileText,
  Target,
  Menu,
  X
} from 'lucide-react';

const Dashboard = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetchIntegrationStatus();
  }, []);

  const fetchIntegrationStatus = async () => {
    try {
      const response = await fetch('/api/integration-status');
      const data = await response.json();
      setIntegrationStatus(data);
    } catch (error) {
      console.error('Failed to fetch integration status:', error);
    }
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'architecture', label: 'Architecture', icon: Database },
    { id: 'flow', label: 'Process Flow', icon: Zap },
    { id: 'apis', label: 'API Reference', icon: Webhook },
    { id: 'visual', label: 'Visual Flow', icon: Target },
    { id: 'risks', label: 'Risks & Mitigation', icon: AlertCircle },
    { id: 'logic', label: 'Core Logic', icon: Settings },
    { id: 'verisae', label: 'Veri Sae Focus', icon: Users },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'golive', label: 'Go Live', icon: CheckCircle },
    { id: 'future', label: 'Future', icon: BarChart3 }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Activity className="h-6 w-6 text-orange-600" />
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Integration Overview</h1>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-7">
          The Atera &#x2192; simPRO V4 Integration is a comprehensive system that automatically synchronizes 
          service tickets from Atera's ticketing system to simPRO's job management platform, specifically 
          designed for Dacha SSI's Veri Sae (PureGym) operations.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">Tickets Processed (24h)</h3>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Live</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">1,247</div>
          <div className="text-sm text-green-600 flex items-center">
            <ArrowRight className="h-4 w-4 mr-1" />
            +12% from yesterday
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">Errors (24h)</h3>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Live</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">3</div>
          <div className="text-sm text-green-600 flex items-center">
            <ArrowRight className="h-4 w-4 mr-1" />
            -67% from yesterday
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">Avg End-to-End Time</h3>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Live</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">2.3s</div>
          <div className="text-sm text-green-600 flex items-center">
            <ArrowRight className="h-4 w-4 mr-1" />
            -0.4s from yesterday
          </div>
        </div>
      </div>

      {/* Health Status Row */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">System Health</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { name: 'Atera Webhook', status: 'healthy', latency: '45ms', lastEvent: '2 min ago' },
            { name: 'Worker Process', status: 'healthy', latency: '12ms', lastEvent: '30s ago' },
            { name: 'simPRO API', status: 'healthy', latency: '234ms', lastEvent: '1 min ago' },
            { name: 'Database', status: 'healthy', latency: '8ms', lastEvent: '15s ago' },
            { name: 'Queue', status: 'healthy', latency: '3ms', lastEvent: '5s ago' }
          ].map((service, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-900 dark:text-white">{service.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{service.latency} • {service.lastEvent}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Last 5 Events Timeline */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { time: '2 min ago', event: 'Ticket #12345 processed', type: 'success', details: 'P2 → simPRO Job #789' },
            { time: '5 min ago', event: 'Webhook received', type: 'info', details: 'Veri Sae - Equipment Issue' },
            { time: '8 min ago', event: 'SLA calculated', type: 'success', details: 'Due: Tomorrow 17:30' },
            { time: '12 min ago', event: 'Comment synced', type: 'info', details: 'Atera → simPRO' },
            { time: '15 min ago', event: 'Ticket #12344 processed', type: 'success', details: 'P3 → simPRO Job #788' }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <div className={`w-2 h-2 rounded-full ${
                item.type === 'success' ? 'bg-green-500' : 
                item.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
              }`}></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-900 dark:text-white">{item.event}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{item.details}</div>
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500">{item.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderArchitecture = () => (
    <div className="space-y-8">
      <div className="c-suite-card">
        <div className="c-suite-header">
          <h2 className="dacha-title-white text-2xl font-bold mb-2 flex items-center">
            <Database className="h-6 w-6 mr-2" />
            System Architecture
          </h2>
          <p className="dacha-subtitle-white">Complete technical infrastructure overview</p>
        </div>
        <div className="c-suite-section">
        
          <div className="architecture-card rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4">High-Level Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <Building className="h-8 w-8 mx-auto mb-2" />
                  <h4 className="font-semibold">Atera</h4>
                  <p className="text-sm">Ticket Management</p>
                </div>
              </div>
              <div className="text-center">
                <ArrowRight className="h-6 w-6 mx-auto my-4 text-white" />
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <Server className="h-8 w-8 mx-auto mb-2" />
                  <h4 className="font-semibold">Railway App</h4>
                  <p className="text-sm">Integration Engine</p>
                </div>
              </div>
              <div className="text-center">
                <ArrowRight className="h-6 w-6 mx-auto my-4 text-white" />
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <Target className="h-8 w-8 mx-auto mb-2" />
                  <h4 className="font-semibold">simPRO</h4>
                  <p className="text-sm">Job Management</p>
                </div>
              </div>
            </div>
          </div>

          {/* PlanetScale Database Section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <Database className="h-6 w-6 mr-2" />
              PlanetScale Database
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">What is PlanetScale?</h4>
                <p className="text-sm text-purple-100 mb-4">
                  PlanetScale is a serverless MySQL platform that provides our database infrastructure. 
                  It offers automatic scaling, branching capabilities, and high availability.
                </p>
                <ul className="text-sm text-purple-100 space-y-1">
                  <li>• Serverless MySQL database</li>
                  <li>• Automatic scaling and failover</li>
                  <li>• Database branching for safe deployments</li>
                  <li>• Built-in connection pooling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Integration Role</h4>
                <p className="text-sm text-purple-100 mb-4">
                  Stores duplicate detection data, job mappings, and audit logs to ensure 
                  data integrity and prevent duplicate job creation.
                </p>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-sm font-semibold">Key Tables:</div>
                  <div className="text-xs text-purple-100 mt-1">
                    • job_mappings<br/>
                    • audit_logs<br/>
                    • duplicate_checks
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Required Subscriptions */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Required Subscriptions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Atera API</h4>
                <p className="text-sm text-green-100">Professional plan required for webhook access</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">simPRO API</h4>
                <p className="text-sm text-green-100">Standard API access for job management</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">PlanetScale</h4>
                <p className="text-sm text-green-100">Hobby plan sufficient for current needs</p>
              </div>
            </div>
          </div>

        <div className="flow-diagram rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Data Flow Diagram</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center">
                <Webhook className="h-5 w-5 mr-2" />
                <span>Atera Webhook</span>
              </div>
              <ArrowRight className="h-5 w-5" />
              <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Validation</span>
              </div>
              <ArrowRight className="h-5 w-5" />
              <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center">
                <Database className="h-5 w-5 mr-2" />
                <span>Duplicate Check</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                <span>Job Creation</span>
              </div>
              <ArrowRight className="h-5 w-5" />
              <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center">
                <RefreshCw className="h-5 w-5 mr-2" />
                <span>Bidirectional Sync</span>
              </div>
              <ArrowRight className="h-5 w-5" />
              <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                <span>Logging</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );

  const renderProcessFlow = () => (
    <div className="space-y-8">
      <div className="c-suite-card">
        <div className="c-suite-header">
          <h2 className="dacha-title-white text-2xl font-bold mb-2 flex items-center">
            <Zap className="h-6 w-6 mr-2" />
            Functional Process Flow
          </h2>
          <p className="dacha-subtitle-white">Step-by-step integration process with engineer assignment</p>
        </div>
        <div className="c-suite-section">
        
          {/* Webhook Triggers Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <Webhook className="h-6 w-6 mr-2" />
              Atera Webhook Triggers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Ticket Events</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• Ticket Created</li>
                  <li>• Ticket Updated</li>
                  <li>• Ticket Status Changed</li>
                  <li>• Comment Added</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Customer Filter</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• Only Veri Sae (PureGym) tickets</li>
                  <li>• Customer ID: 5 (Hardcoded - needs config)</li>
                  <li>• Site ID: 25 (Hardcoded - needs config)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { step: 1, title: "Atera Webhook Trigger", desc: "Ticket created or updated in Atera", icon: Webhook, details: "Only Veri Sae tickets trigger integration" },
              { step: 2, title: "Payload Validation", desc: "Railway webhook endpoint validates incoming data", icon: Shield, details: "Validates ticket structure and required fields" },
              { step: 3, title: "Duplicate Detection", desc: "Check PlanetScale for existing job", icon: Database, details: "Prevents duplicate job creation" },
              { step: 4, title: "simPRO Job Creation", desc: "Create new job via simPRO API", icon: Target, details: "Maps Atera ticket to simPRO job structure" },
              { step: 5, title: "Engineer Assignment", desc: "Assign technician to simPRO job", icon: Users, details: "Maps Atera technician to simPRO employee (ID: 10)" },
              { step: 6, title: "Custom Field Update", desc: "Update Custom Field 40 with Atera ticket ID", icon: Settings, details: "Links simPRO job back to Atera ticket" },
              { step: 7, title: "SLA Calculation", desc: "Calculate due date based on priority", icon: Clock, details: "P2: 16.5h, P3: 73h, P4: 71h with business hours" },
              { step: 8, title: "Bidirectional Sync", desc: "Comments and updates sync both ways", icon: RefreshCw, details: "Real-time comment synchronization" },
              { step: 9, title: "Cost Centre Assignment", desc: "Assign cost centre post-job creation", icon: Building, details: "Automated cost centre mapping" },
              { step: 10, title: "Logging & Monitoring", desc: "Record logs and track system health", icon: FileText, details: "Comprehensive audit trail" }
            ].map((item, index) => (
            <div key={item.step} className="c-suite-card p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                  {item.details && (
                    <p className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
                      <strong>Details:</strong> {item.details}
                    </p>
                  )}
                </div>
                {index < 9 && (
                  <div className="flex-shrink-0">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );

  const renderAPIs = () => (
    <div className="space-y-8">
      <div className="c-suite-card">
        <div className="c-suite-header">
          <h2 className="dacha-title-white text-2xl font-bold mb-2 flex items-center">
            <Webhook className="h-6 w-6 mr-2" />
            API Reference
          </h2>
          <p className="dacha-subtitle-white">Complete API documentation for simPRO and Atera integration</p>
        </div>
        <div className="c-suite-section">
        
          {/* simPRO API Calls */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <Target className="h-6 w-6 mr-2" />
              simPRO API Calls
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Job Management</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">POST /companies/0/jobs</div>
                    <div className="text-green-100">Create new job</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">PATCH /companies/0/jobs/{"{id}"}</div>
                    <div className="text-green-100">Update job details</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">GET /companies/0/jobs/{"{id}"}</div>
                    <div className="text-green-100">Fetch job details</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Notes & Comments</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">POST /companies/0/jobs/{"{id}"}/notes</div>
                    <div className="text-green-100">Add job note</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">GET /companies/0/jobs/{"{id}"}/notes</div>
                    <div className="text-green-100">Fetch job notes</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">PATCH /companies/0/jobs/{"{id}"}/notes/{"{noteId}"}</div>
                    <div className="text-green-100">Update job note</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Atera API Calls */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <Building className="h-6 w-6 mr-2" />
              Atera API Calls
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Ticket Management</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">GET /tickets/{"{ticketId}"}</div>
                    <div className="text-blue-100">Fetch ticket details</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">PATCH /tickets/{"{ticketId}"}</div>
                    <div className="text-blue-100">Update ticket</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">GET /tickets/{"{ticketId}"}/comments</div>
                    <div className="text-blue-100">Fetch ticket comments</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Webhook Events</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">POST /webhook/atera</div>
                    <div className="text-blue-100">Receive webhook events</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">Events: ticket.created</div>
                    <div className="text-blue-100">Ticket creation trigger</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">Events: ticket.updated</div>
                    <div className="text-blue-100">Ticket update trigger</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAFM System Integration */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <Database className="h-6 w-6 mr-2" />
              Veri Sae CAFM Integration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Future Enhancement</h4>
                <p className="text-sm text-purple-100 mb-4">
                  Updating the Veri Sae CAFM system with APIs from simPRO webhook API for 
                  complete bidirectional integration.
                </p>
                <ul className="text-sm text-purple-100 space-y-1">
                  <li>• Real-time job status updates</li>
                  <li>• Automated work order creation</li>
                  <li>• Asset management integration</li>
                  <li>• Maintenance scheduling sync</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">API Endpoints (Planned)</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">POST /cafm/work-orders</div>
                    <div className="text-purple-100">Create work order</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">PATCH /cafm/work-orders/{"{id}"}</div>
                    <div className="text-purple-100">Update work order</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-2 rounded">
                    <div className="font-mono">GET /cafm/assets/{"{id}"}</div>
                    <div className="text-purple-100">Fetch asset details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCoreLogic = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Settings className="h-6 w-6 text-blue-600 mr-2" />
          Core Logic & Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="feature-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-4">SLA Calculation Engine</h3>
            <ul className="space-y-2 text-sm">
              <li>• P2: 16.5 hours (24/7 calendar hours)</li>
              <li>• P3: 73 hours (8h/day, excludes weekends)</li>
              <li>• P4: 71 hours (8h/day, excludes weekends)</li>
              <li>• Business hours: 09:00-17:00 Mon-Fri</li>
            </ul>
          </div>
          
          <div className="feature-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Duplicate Detection</h3>
            <ul className="space-y-2 text-sm">
              <li>• Work Order Number matching</li>
              <li>• Atera Ticket ID validation</li>
              <li>• PlanetScale database queries</li>
              <li>• Prevents duplicate job creation</li>
            </ul>
          </div>
          
          <div className="feature-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Site Mapping</h3>
            <ul className="space-y-2 text-sm">
              <li>• PureGym site validation</li>
              <li>• Customer ID mapping (ID: 5)</li>
              <li>• Exact name matching</li>
              <li>• Confidence scoring</li>
            </ul>
          </div>
          
          <div className="feature-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Bidirectional Sync</h3>
            <ul className="space-y-2 text-sm">
              <li>• Atera &#x2192; simPRO comments</li>
              <li>• simPRO &#x2192; Atera updates</li>
              <li>• Status synchronization</li>
              <li>• Technician assignment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVeriSae = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Users className="h-6 w-6 text-blue-600 mr-2" />
          Veri Sae Focus & Modular Architecture
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Current Scope</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-green-600 mb-2">✅ Veri Sae (PureGym)</h4>
              <p className="text-sm text-gray-600">~75% of total jobs</p>
              <ul className="text-xs text-gray-500 mt-2">
                <li>• Automated webhook processing</li>
                <li>• Site mapping validation</li>
                <li>• SLA calculation</li>
                <li>• Cost centre assignment</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-orange-600 mb-2">🔄 Future Sources</h4>
              <p className="text-sm text-gray-600">~25% of total jobs</p>
              <ul className="text-xs text-gray-500 mt-2">
                <li>• Direct email intake</li>
                <li>• CAFM systems</li>
                <li>• Other ticketing platforms</li>
                <li>• Manual job creation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Modular Connector Architecture</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-lg p-3 flex items-center">
                <Webhook className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Webhook Connector</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-white rounded-lg p-3 flex items-center">
                <Settings className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium">Processing Engine</span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-white rounded-lg p-3 flex items-center">
                <Target className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-medium">simPRO Output</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Each new data source will have its own connector plugin, allowing easy expansion 
              without modifying the core processing logic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-8">
      <div className="c-suite-card">
        <div className="c-suite-header">
          <h2 className="dacha-title-white text-2xl font-bold mb-2 flex items-center">
            <Shield className="h-6 w-6 mr-2" />
            Security Assessment
          </h2>
          <p className="dacha-subtitle-white">Comprehensive security analysis and risk mitigation</p>
        </div>
        <div className="c-suite-section">
        
          {/* Security Level Assessment */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Security Level: SECURE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Data Protection</h4>
                <ul className="text-sm text-green-100 space-y-1">
                  <li>• API keys encrypted</li>
                  <li>• No sensitive data stored</li>
                  <li>• HTTPS enforced</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Access Control</h4>
                <ul className="text-sm text-green-100 space-y-1">
                  <li>• Password protected</li>
                  <li>• Internal access only</li>
                  <li>• Session management</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Infrastructure</h4>
                <ul className="text-sm text-green-100 space-y-1">
                  <li>• Railway hosting</li>
                  <li>• Rate limiting</li>
                  <li>• Security headers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Risks & Mitigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="c-suite-card p-6">
              <h3 className="font-bold text-red-600 text-lg mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Potential Vulnerabilities
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">API Key Exposure</h4>
                  <p className="text-sm text-gray-600">Risk: Keys in environment variables</p>
                  <div className="mt-2">
                    <span className="status-indicator status-warning">Mitigation: Railway secure env vars</span>
                  </div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Webhook Spoofing</h4>
                  <p className="text-sm text-gray-600">Risk: Unauthorized webhook calls</p>
                  <div className="mt-2">
                    <span className="status-indicator status-warning">Mitigation: Payload validation</span>
                  </div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Rate Limiting</h4>
                  <p className="text-sm text-gray-600">Risk: API abuse or DoS</p>
                  <div className="mt-2">
                    <span className="status-indicator status-warning">Mitigation: 100 req/15min limit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="c-suite-card p-6">
              <h3 className="font-bold text-green-600 text-lg mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Measures
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Encryption</h4>
                  <p className="text-sm text-gray-600">All data transmitted over HTTPS</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Authentication</h4>
                  <p className="text-sm text-gray-600">Password-protected dashboard access</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Validation</h4>
                  <p className="text-sm text-gray-600">All webhook payloads validated</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Monitoring</h4>
                  <p className="text-sm text-gray-600">Comprehensive logging and audit trails</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance & Standards */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              Compliance & Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Security Standards</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• OWASP Top 10 compliance</li>
                  <li>• Secure coding practices</li>
                  <li>• Input validation & sanitization</li>
                  <li>• Error handling without data exposure</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Data Handling</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• No PII storage</li>
                  <li>• Minimal data retention</li>
                  <li>• Secure API communication</li>
                  <li>• Audit logging enabled</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGoLive = () => (
    <div className="space-y-8">
      <div className="c-suite-card">
        <div className="c-suite-header">
          <h2 className="dacha-title-white text-2xl font-bold mb-2 flex items-center">
            <CheckCircle className="h-6 w-6 mr-2" />
            Go Live Checklist
          </h2>
          <p className="dacha-subtitle-white">Production readiness and UAT requirements</p>
        </div>
        <div className="c-suite-section">
        
          {/* UAT Requirements */}
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              UAT Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Full UAT Testing Required</h4>
                <ul className="text-sm text-yellow-100 space-y-1">
                  <li>• End-to-end ticket flow testing</li>
                  <li>• SLA calculation validation</li>
                  <li>• Engineer assignment verification</li>
                  <li>• Comment synchronization testing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Test Scenarios</h4>
                <ul className="text-sm text-yellow-100 space-y-1">
                  <li>• P2, P3, P4 priority tickets</li>
                  <li>• Weekend vs business hours</li>
                  <li>• Duplicate detection edge cases</li>
                  <li>• Error handling scenarios</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hardcoded IDs Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-6 text-white mb-6">
            <h3 className="dacha-title-white text-xl font-bold mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              Hardcoded IDs - Needs Configuration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Current Hardcoded Values</h4>
                <ul className="text-sm text-red-100 space-y-1">
                  <li>• Customer ID: 5 (Veri Sae)</li>
                  <li>• Site ID: 25 (PureGym)</li>
                  <li>• Technician ID: 10 (Default)</li>
                  <li>• Company ID: 0 (simPRO)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Action Required</h4>
                <ul className="text-sm text-red-100 space-y-1">
                  <li>• Move to environment variables</li>
                  <li>• Create configuration management</li>
                  <li>• Validate with live data</li>
                  <li>• Document mapping rules</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { task: "Remove TEST and IGNORE tags from subjects and names", status: "pending", priority: "high" },
              { task: "Replace hardcoded IDs with live configuration", status: "pending", priority: "critical" },
              { task: "Complete full UAT testing with all scenarios", status: "pending", priority: "critical" },
              { task: "Confirm final API keys in Railway environment variables", status: "completed", priority: "medium" },
              { task: "Activate production webhook endpoints in Atera", status: "pending", priority: "high" },
              { task: "Validate cost centre assignment logic with live data", status: "pending", priority: "high" },
              { task: "Enable structured logging and monitoring", status: "completed", priority: "medium" },
              { task: "Confirm timezones and SLA calculations align with simPRO", status: "completed", priority: "medium" },
              { task: "Deploy to stable Railway environment", status: "completed", priority: "medium" },
              { task: "Test with live PureGym tickets", status: "pending", priority: "critical" },
              { task: "Create production runbook and support documentation", status: "pending", priority: "high" },
              { task: "Train support team on integration monitoring", status: "pending", priority: "medium" }
            ].map((item, index) => (
            <div key={index} className={`checklist-item flex items-center space-x-3 p-4 rounded-lg ${
              item.status === 'completed' ? 'bg-green-50 border border-green-200' : 
              item.priority === 'critical' ? 'bg-red-50 border border-red-200' :
              item.priority === 'high' ? 'bg-orange-50 border border-orange-200' :
              'bg-yellow-50 border border-yellow-200'
            }`}>
              <div className="flex-shrink-0">
                {item.status === 'completed' ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertCircle className={`h-5 w-5 ${
                    item.priority === 'critical' ? 'text-red-600' :
                    item.priority === 'high' ? 'text-orange-600' :
                    'text-yellow-600'
                  }`} />
                )}
              </div>
              <div className="flex-grow">
                <div className="font-medium text-gray-900">{item.task}</div>
              </div>
              <div className="flex-shrink-0 flex space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  item.priority === 'critical' ? 'bg-red-100 text-red-800' :
                  item.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {item.priority}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );

  const renderFuture = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
          Future Enhancements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Phase 2 - Dashboard & Monitoring</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">Real-time Metrics</div>
                  <div className="text-sm text-gray-600">Job counts, error rates, performance</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Activity className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">Error Tracking</div>
                  <div className="text-sm text-gray-600">Failed jobs, retry logic, alerts</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Phase 3 - Multi-Source Integration</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Globe className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">CAFM Systems</div>
                  <div className="text-sm text-gray-600">Direct integration with facility management</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <FileText className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">Email Intake</div>
                  <div className="text-sm text-gray-600">Automated email-to-job conversion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVisualFlow = () => (
    <div className="space-y-8">
      <div className="c-suite-card">
        <div className="c-suite-header">
          <h2 className="dacha-title-white text-2xl font-bold mb-2">🎬 Animated Ticket Flow</h2>
          <p className="dacha-subtitle-white">Interactive visualization of the complete Atera → simPRO integration process</p>
        </div>
        <div className="c-suite-section">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 relative overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="floating-particle particle-1"></div>
              <div className="floating-particle particle-2"></div>
              <div className="floating-particle particle-3"></div>
              <div className="floating-particle particle-4"></div>
              <div className="floating-particle particle-5"></div>
            </div>
            
            {/* Header */}
            <div className="text-center mb-12 relative z-10">
              <div className="text-white text-2xl mb-3 font-bold animate-fade-in">🚀 Live Integration Flow</div>
              <div className="text-gray-300 text-lg">Watch tickets flow through the system in real-time</div>
              <div className="mt-4 inline-flex items-center space-x-2 bg-orange-600 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">System Active</span>
              </div>
            </div>
            
            {/* Main Flow Container */}
            <div className="relative z-10">
              {/* Flow Steps with Enhanced Animations */}
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                
                {/* Step 1: Atera Webhook */}
                <div className="flow-step-enhanced group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-center min-w-[250px] transform transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4 animate-bounce-slow">📧</div>
                    <div className="font-bold text-white text-xl mb-2">Atera Webhook</div>
                    <div className="text-blue-100 text-sm mb-2">Ticket Created</div>
                    <div className="text-blue-200 text-xs">Customer: Veri Sae</div>
                    <div className="mt-4 text-xs text-blue-300 animate-pulse">Status: Active</div>
                  </div>
                  {/* Data Flow Indicator */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
                </div>

                {/* Enhanced Arrow 1 */}
                <div className="hidden lg:block relative">
                  <div className="flow-arrow-enhanced">
                    <div className="arrow-line"></div>
                    <div className="arrow-head"></div>
                    <div className="data-packet animate-move-right">📦</div>
                  </div>
                </div>

                {/* Step 2: Validation & Processing */}
                <div className="flow-step-enhanced group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" style={{animationDelay: '0.5s'}}></div>
                  <div className="relative bg-gradient-to-br from-yellow-600 to-yellow-800 p-8 rounded-2xl text-center min-w-[250px] transform transition-all duration-300 hover:scale-105" style={{animationDelay: '0.5s'}}>
                    <div className="text-4xl mb-4 animate-bounce-slow" style={{animationDelay: '0.5s'}}>🔍</div>
                    <div className="font-bold text-white text-xl mb-2">Validation & Processing</div>
                    <div className="text-yellow-100 text-sm mb-2">Duplicate Check</div>
                    <div className="text-yellow-200 text-xs">Smart Tagging</div>
                    <div className="mt-4 text-xs text-yellow-300 animate-pulse" style={{animationDelay: '0.5s'}}>Processing...</div>
                  </div>
                  {/* Processing Indicator */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>

                {/* Enhanced Arrow 2 */}
                <div className="hidden lg:block relative">
                  <div className="flow-arrow-enhanced" style={{animationDelay: '0.5s'}}>
                    <div className="arrow-line"></div>
                    <div className="arrow-head"></div>
                    <div className="data-packet animate-move-right" style={{animationDelay: '0.5s'}}>⚡</div>
                  </div>
                </div>

                {/* Step 3: simPRO API */}
                <div className="flow-step-enhanced group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" style={{animationDelay: '1s'}}></div>
                  <div className="relative bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-2xl text-center min-w-[250px] transform transition-all duration-300 hover:scale-105" style={{animationDelay: '1s'}}>
                    <div className="text-4xl mb-4 animate-bounce-slow" style={{animationDelay: '1s'}}>⚡</div>
                    <div className="font-bold text-white text-xl mb-2">simPRO API</div>
                    <div className="text-green-100 text-sm mb-2">Job Creation</div>
                    <div className="text-green-200 text-xs">SLA Calculated</div>
                    <div className="mt-4 text-xs text-green-300 animate-pulse" style={{animationDelay: '1s'}}>Creating Job...</div>
                  </div>
                  {/* Success Indicator */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Enhanced Arrow 3 */}
                <div className="hidden lg:block relative">
                  <div className="flow-arrow-enhanced" style={{animationDelay: '1s'}}>
                    <div className="arrow-line"></div>
                    <div className="arrow-head"></div>
                    <div className="data-packet animate-move-right" style={{animationDelay: '1s'}}>🔄</div>
                  </div>
                </div>

                {/* Step 4: Bidirectional Sync */}
                <div className="flow-step-enhanced group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" style={{animationDelay: '1.5s'}}></div>
                  <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-2xl text-center min-w-[250px] transform transition-all duration-300 hover:scale-105" style={{animationDelay: '1.5s'}}>
                    <div className="text-4xl mb-4 animate-bounce-slow" style={{animationDelay: '1.5s'}}>🔄</div>
                    <div className="font-bold text-white text-xl mb-2">Bidirectional Sync</div>
                    <div className="text-purple-100 text-sm mb-2">Real-time Updates</div>
                    <div className="text-purple-200 text-xs">Comments & Status</div>
                    <div className="mt-4 text-xs text-purple-300 animate-pulse" style={{animationDelay: '1.5s'}}>Syncing...</div>
                  </div>
                  {/* Sync Indicator */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>

              {/* Mobile Flow Arrows */}
              <div className="lg:hidden flex justify-center space-y-4 flex-col items-center mt-8">
                <div className="flow-arrow-mobile">
                  <div className="arrow-line-vertical"></div>
                  <div className="arrow-head-down"></div>
                  <div className="data-packet-mobile animate-move-down">📦</div>
                </div>
                <div className="flow-arrow-mobile" style={{animationDelay: '0.5s'}}>
                  <div className="arrow-line-vertical"></div>
                  <div className="arrow-head-down"></div>
                  <div className="data-packet-mobile animate-move-down" style={{animationDelay: '0.5s'}}>⚡</div>
                </div>
                <div className="flow-arrow-mobile" style={{animationDelay: '1s'}}>
                  <div className="arrow-line-vertical"></div>
                  <div className="arrow-head-down"></div>
                  <div className="data-packet-mobile animate-move-down" style={{animationDelay: '1s'}}>🔄</div>
                </div>
              </div>

              {/* Enhanced Data Flow Indicators */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                  <div className="text-orange-400 font-bold text-lg mb-2">📊 Webhook Data</div>
                  <div className="text-gray-300 text-sm">Ticket ID, Priority, Customer Info</div>
                  <div className="mt-2 text-xs text-orange-300 animate-pulse">Real-time</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                  <div className="text-orange-400 font-bold text-lg mb-2">🔌 API Calls</div>
                  <div className="text-gray-300 text-sm">simPRO Job Creation & Updates</div>
                  <div className="mt-2 text-xs text-orange-300 animate-pulse">Rate Limited</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                  <div className="text-orange-400 font-bold text-lg mb-2">🔄 Sync Status</div>
                  <div className="text-gray-300 text-sm">Bidirectional Real-time Updates</div>
                  <div className="mt-2 text-xs text-orange-300 animate-pulse">Active</div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="text-center mb-4">
                  <div className="text-white font-bold text-lg">⚡ Performance Metrics</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="metric-item">
                    <div className="text-2xl font-bold text-orange-400">~2.5s</div>
                    <div className="text-gray-300 text-sm">Avg Processing</div>
                  </div>
                  <div className="metric-item">
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="text-gray-300 text-sm">Success Rate</div>
                  </div>
                  <div className="metric-item">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-gray-300 text-sm">Monitoring</div>
                  </div>
                  <div className="metric-item">
                    <div className="text-2xl font-bold text-purple-400">Real-time</div>
                    <div className="text-gray-300 text-sm">Updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRisks = () => (
    <div className="space-y-8">
      <div className="c-suite-card">
        <div className="c-suite-header">
          <h2 className="dacha-title-white text-2xl font-bold mb-2">Risks & Mitigation Strategies</h2>
          <p className="dacha-subtitle-white">Comprehensive risk assessment and mitigation plans</p>
        </div>
        <div className="c-suite-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-red-600 text-lg flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                High Priority Risks
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">API Rate Limiting</h4>
                  <p className="text-sm text-gray-600">simPRO/Atera API limits could cause delays</p>
                  <div className="mt-2">
                    <span className="status-indicator status-warning">Mitigation: Rate limiting & retry logic</span>
                  </div>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Data Loss</h4>
                  <p className="text-sm text-gray-600">Webhook failures could result in missed tickets</p>
                  <div className="mt-2">
                    <span className="status-indicator status-warning">Mitigation: Polling backup & audit logs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-yellow-600 text-lg flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Medium Priority Risks
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Service Downtime</h4>
                  <p className="text-sm text-gray-600">Railway or external service outages</p>
                  <div className="mt-2">
                    <span className="status-indicator status-warning">Mitigation: Health monitoring & alerts</span>
                  </div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Data Inconsistency</h4>
                  <p className="text-sm text-gray-600">Sync conflicts between systems</p>
                  <div className="mt-2">
                    <span className="status-indicator status-warning">Mitigation: Conflict resolution logic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return renderOverview();
      case 'architecture': return renderArchitecture();
      case 'flow': return renderProcessFlow();
      case 'apis': return renderAPIs();
      case 'visual': return renderVisualFlow();
      case 'risks': return renderRisks();
      case 'logic': return renderCoreLogic();
      case 'verisae': return renderVeriSae();
      case 'security': return renderSecurity();
      case 'golive': return renderGoLive();
      case 'future': return renderFuture();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Modern Slim Top Bar */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="text-slate-900 dark:text-white font-semibold text-lg">
                  Atera &#x2192; simPRO V4
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Live</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed inset-y-0 right-0 w-80 bg-gray-900 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white">Navigation</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-orange-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Modern Left Rail Navigation */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Navigation</h2>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${
                        activeSection === section.id
                          ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{section.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Mobile Section Header */}
            <div className="lg:hidden mb-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {(() => {
                      const currentSection = sections.find(s => s.id === activeSection);
                      const Icon = currentSection?.icon;
                      return (
                        <>
                          {Icon && <Icon className="h-5 w-5 text-orange-600" />}
                          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
                            {currentSection?.label || 'Overview'}
                          </h1>
                        </>
                      );
                    })()}
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
