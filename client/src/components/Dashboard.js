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
  ArrowLeft,
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
  Target
} from 'lucide-react';

const Dashboard = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [integrationStatus, setIntegrationStatus] = useState(null);

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
    { id: 'apis', label: 'APIs & Webhooks', icon: Webhook },
    { id: 'logic', label: 'Core Logic', icon: Settings },
    { id: 'verisae', label: 'Veri Sae Focus', icon: Users },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'golive', label: 'Go Live', icon: CheckCircle },
    { id: 'future', label: 'Future', icon: BarChart3 }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="dacha-card rounded-xl shadow-lg p-8">
        <h2 className="dacha-title text-3xl font-bold mb-6 flex items-center">
          <Activity className="h-8 w-8 dacha-icon mr-3" />
          Integration Overview
        </h2>
        <p className="dacha-subtitle text-lg mb-6">
          The Atera → simPRO V4 Integration is a comprehensive system that automatically synchronizes 
          service tickets from Atera's ticketing system to simPRO's job management platform, specifically 
          designed for Dacha SSI's Veri Sae (PureGym) operations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="feature-card p-6 rounded-xl">
            <h3 className="font-bold text-white text-lg mb-2">Real-time Sync</h3>
            <p className="text-orange-100 text-sm">Webhook-driven ticket synchronization</p>
          </div>
          <div className="feature-card p-6 rounded-xl">
            <h3 className="font-bold text-white text-lg mb-2">SLA Management</h3>
            <p className="text-orange-100 text-sm">Automated due date calculations</p>
          </div>
          <div className="feature-card p-6 rounded-xl">
            <h3 className="font-bold text-white text-lg mb-2">Bidirectional</h3>
            <p className="text-orange-100 text-sm">Comments and updates sync both ways</p>
          </div>
        </div>
      </div>

      {integrationStatus && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Server className="h-5 w-5 text-green-600 mr-2" />
            System Status
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{integrationStatus.status}</div>
              <div className="text-sm text-gray-600">Status</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">v{integrationStatus.version}</div>
              <div className="text-sm text-gray-600">Version</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{integrationStatus.environment}</div>
              <div className="text-sm text-gray-600">Environment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {Object.values(integrationStatus.features).filter(Boolean).length}
              </div>
              <div className="text-sm text-gray-600">Active Features</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderArchitecture = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Database className="h-6 w-6 text-blue-600 mr-2" />
          System Architecture
        </h2>
        
        <div className="architecture-card rounded-lg p-6 text-white mb-6">
          <h3 className="text-xl font-bold mb-4">High-Level Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
  );

  const renderProcessFlow = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Zap className="h-6 w-6 text-blue-600 mr-2" />
          Functional Process Flow
        </h2>
        
        <div className="space-y-4">
          {[
            { step: 1, title: "Atera Webhook Trigger", desc: "Ticket created or updated in Atera", icon: Webhook },
            { step: 2, title: "Payload Validation", desc: "Railway webhook endpoint validates incoming data", icon: Shield },
            { step: 3, title: "Duplicate Detection", desc: "Check PlanetScale for existing job", icon: Database },
            { step: 4, title: "simPRO Job Creation", desc: "Create new job via simPRO API", icon: Target },
            { step: 5, title: "Custom Field Update", desc: "Update Custom Field 40 with Atera ticket ID", icon: Settings },
            { step: 6, title: "Bidirectional Sync", desc: "Comments and updates sync both ways", icon: RefreshCw },
            { step: 7, title: "Periodic Polling", desc: "Update simPRO notes from Atera tickets", icon: Clock },
            { step: 8, title: "Logging & Monitoring", desc: "Record logs and track system health", icon: FileText },
            { step: 9, title: "Cost Centre Assignment", desc: "Assign cost centre post-job creation", icon: Building }
          ].map((item, index) => (
            <div key={item.step} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
              </div>
              <div className="flex-shrink-0">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              {index < 8 && (
                <div className="flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAPIs = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Webhook className="h-6 w-6 text-blue-600 mr-2" />
          Communication Methods & APIs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Incoming (Atera → Integration)</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <ArrowRight className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">Atera Webhooks</div>
                  <div className="text-sm text-gray-600">Ticket created, updated, status changed</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <ArrowRight className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">Atera API Calls</div>
                  <div className="text-sm text-gray-600">Fetch ticket details, comments</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Outgoing (Integration → simPRO)</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <ArrowLeft className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">simPRO Job Creation</div>
                  <div className="text-sm text-gray-600">POST /companies/0/jobs</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <ArrowLeft className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">simPRO Job Updates</div>
                  <div className="text-sm text-gray-600">PATCH /companies/0/jobs/{"{id}"}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <ArrowLeft className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">simPRO Notes & Comments</div>
                  <div className="text-sm text-gray-600">POST /companies/0/jobs/{"{id}"}/notes</div>
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
              <li>• Atera → simPRO comments</li>
              <li>• simPRO → Atera updates</li>
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
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Shield className="h-6 w-6 text-blue-600 mr-2" />
          Security & Access Controls
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="security-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Railway Security</h3>
            <ul className="space-y-2 text-sm">
              <li>• HTTPS enforced</li>
              <li>• Environment-level API keys</li>
              <li>• Rate limiting (100 req/15min)</li>
              <li>• Helmet security headers</li>
              <li>• CORS protection</li>
            </ul>
          </div>
          
          <div className="security-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Dashboard Access</h3>
            <ul className="space-y-2 text-sm">
              <li>• Password-protected access</li>
              <li>• Session management</li>
              <li>• Internal staff only</li>
              <li>• No sensitive data exposure</li>
              <li>• Secure logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGoLive = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
          Go Live Checklist
        </h2>
        
        <div className="space-y-4">
          {[
            { task: "Remove TEST and IGNORE tags from subjects and names", status: "pending" },
            { task: "Replace hardcoded IDs with live configuration", status: "pending" },
            { task: "Confirm final API keys in Railway environment variables", status: "completed" },
            { task: "Activate production webhook endpoints in Atera", status: "pending" },
            { task: "Validate cost centre assignment logic with live data", status: "pending" },
            { task: "Enable structured logging and monitoring", status: "completed" },
            { task: "Confirm timezones and SLA calculations align with simPRO", status: "completed" },
            { task: "Deploy to stable Railway environment", status: "completed" },
            { task: "Test with live PureGym tickets", status: "pending" }
          ].map((item, index) => (
            <div key={index} className={`checklist-item flex items-center space-x-3 p-4 rounded-lg ${
              item.status === 'completed' ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
            }`}>
              <div className="flex-shrink-0">
                {item.status === 'completed' ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                )}
              </div>
              <div className="flex-grow">
                <div className="font-medium text-gray-900">{item.task}</div>
              </div>
              <div className="flex-shrink-0">
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

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return renderOverview();
      case 'architecture': return renderArchitecture();
      case 'flow': return renderProcessFlow();
      case 'apis': return renderAPIs();
      case 'logic': return renderCoreLogic();
      case 'verisae': return renderVeriSae();
      case 'security': return renderSecurity();
      case 'golive': return renderGoLive();
      case 'future': return renderFuture();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Dacha Brand Header */}
      <header className="dacha-header shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 dacha-card rounded-xl flex items-center justify-center dacha-pulse-glow">
                <Shield className="h-7 w-7 dacha-icon" />
              </div>
              <div>
                <h1 className="dacha-title text-2xl font-bold text-white">
                  Atera → simPRO V4 Integration
                </h1>
                <p className="text-orange-100 text-sm font-medium">Dacha SSI Internal Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-white bg-opacity-20 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">Live</span>
              </div>
              <button
                onClick={onLogout}
                className="dacha-btn-secondary flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Dacha Brand Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="dacha-sidebar space-y-2 p-4 rounded-xl">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`dacha-sidebar-item w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? 'active text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="dacha-slide-in">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
