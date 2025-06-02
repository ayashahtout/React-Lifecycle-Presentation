"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Rocket,
  RefreshCw,
  Trash2,
  Server,
  Monitor,
  Code,
  Play,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ReactLifecycleWebsite() {
  const [demoCount, setDemoCount] = useState(0);
  const [showDemo, setShowDemo] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  React Lifecycle
                </h1>
                <p className="text-sm text-gray-600">
                  Complete Guide to React Lifecycle
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Understanding React Component Lifecycle
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn how React components work through their lifecycle phases using
            hooks.
          </p>
        </div>
      </section>

      {/* Lifecycle Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Three Phases of React Lifecycle
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader className="text-center">
                <Rocket className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Mounting</CardTitle>
                <p className="text-green-600">
                  Component is created and added to the DOM
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Initialize all values (useState, useMemo, consts, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Initial render
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    DOM elements created
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    useLayoutEffect runs (runs before paint)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Browser paints the UI
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    useEffect with empty deps runs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader className="text-center">
                <RefreshCw className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">Re-rendering</CardTitle>
                <p className="text-blue-600">
                  Component updates due to state or props changes
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    State or props change
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    Component function re-executes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    Virtual DOM is checked
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    DOM updated (if needed)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    useLayoutEffect runs (runs before paint)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    Browser paints the UI
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    useEffect with deps runs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader className="text-center">
                <Trash2 className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-800">Unmounting</CardTitle>
                <p className="text-red-600">
                  Component is removed from the DOM
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    Cleanup functions run (<code>useEffect</code> cleanup)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    Cancel async tasks (timers, subscriptions, fetches)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    Event listeners removed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    DOM elements destroyed
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Virtual DOM Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Understanding the Virtual DOM
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The Virtual DOM is React's secret weapon for efficient updates.
              It's a JavaScript representation of the real DOM that enables
              React to optimize rendering and provide better performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Code className="w-6 h-6" />
                  What is Virtual DOM?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  A lightweight JavaScript representation of the real DOM kept
                  in memory and synced with the "real" DOM.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold">Enhancements:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>
                        It’s a plain JavaScript object that mirrors the
                        structure of the UI.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>
                        React uses it to figure out the most efficient way to
                        update the browser
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>
                        Unlike the real DOM, the Virtual DOM is fast to create,
                        read, and modify.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Characteristics:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>JavaScript objects representing DOM elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Faster to manipulate than real DOM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>
                        Enables batching of updates (multiple changes in one go)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>
                        Platform agnostic: works in React Native, web, and other
                        platforms
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>
                        Keeps performance high even with frequent or complex
                        updates
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Virtual DOM Structure:</h5>
                  <pre className="text-xs bg-gray-900 text-gray-100 p-2 rounded">{`// Virtual DOM representation
{
  type: 'div',
  props: {
    className: 'container',
    children: [
      {
        type: 'h1',
        props: {
          children: 'Hello World'
        }
      }
    ]
  }
}`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <RefreshCw className="w-6 h-6" />
                  How Virtual DOM Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  React uses a process called "reconciliation" to efficiently
                  update the real DOM.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <div>
                      <p className="font-medium">Create Virtual DOM</p>
                      <p className="text-sm text-gray-600">
                        React creates a virtual representation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    <div>
                      <p className="font-medium">State Changes</p>
                      <p className="text-sm text-gray-600">
                        Component state or props update
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    <div>
                      <p className="font-medium">Create New Virtual DOM</p>
                      <p className="text-sm text-gray-600">
                        React re-renders the component and builds a new Virtual
                        DOM tree.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                      4
                    </span>
                    <div>
                      <p className="font-medium">Diffing Algorithm</p>
                      <p className="text-sm text-gray-600">
                        React compares the new Virtual DOM with the previous one
                        and calculates the minimal changes (also called
                        “reconciliation”).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                      5
                    </span>
                    <div>
                      <p className="font-medium">Update Real DOM</p>
                      <p className="text-sm text-gray-600">
                        React patches only what changed into the real DOM—this
                        makes updates fast and efficient.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Class Components Lifecycle Section */}
      <section className="mb-12   p-6">
        <h2 className="text-2xl font-bold text-gray-900 ">
          React Lifecycle: From Class Components to Hooks
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Traditional Class Component Lifecycle
          </h3>
          <p className="text-gray-600 mb-4">
            Before React Hooks, class components used specific lifecycle methods
            to handle component behavior:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-700 mb-2">Mounting</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  constructor() → used for initializing state and binding
                  methods.
                </li>
                <li>
                  componentDidMount() → used for fetching data or setting up
                  subscriptions (runs once after initial render).
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-blue-700 mb-2">Updating</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  componentDidUpdate(prevProps, prevState) → runs after any
                  update.
                </li>
                <li>
                  getSnapshotBeforeUpdate(prevProps, prevState) → rarely used,
                  but helpful for reading scroll position before DOM changes.
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-red-700 mb-2">Unmounting</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  componentWillUnmount() → cleanup function: remove timers,
                  listeners, cancel network requests, etc.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> With the introduction of React Hooks in
              React 16.8, functional components can now handle all lifecycle
              behavior using hooks like
              <code className="bg-yellow-100 px-1 rounded mx-1">useEffect</code>
              ,{" "}
              <code className="bg-yellow-100 px-1 rounded mx-1">useState</code>,
              and others. This guide focuses on the modern hooks-based approach.
              Hooks allow for cleaner, more reusable logic without the
              complexity of classes and the <code>this</code> keyword. They also
              enable easier sharing of logic via custom hooks, improving code
              organization and maintainability.
            </p>
          </div>
        </div>
      </section>
      {/* Detailed Lifecycle Steps */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Step-by-Step Lifecycle Breakdown
          </h2>

          <Tabs defaultValue="mounting" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mounting" className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Mounting
              </TabsTrigger>
              <TabsTrigger value="updating" className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Re-rendering
              </TabsTrigger>
              <TabsTrigger
                value="unmounting"
                className="flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Unmounting
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mounting" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Rocket className="w-6 h-6" />
                    Mounting Phase - Component Creation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">
                        What Happens During Mounting:
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            1
                          </span>
                          <div>
                            <p className="font-medium">Run all code</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            2
                          </span>
                          <div>
                            <p className="font-medium">intialize all values</p>
                            <p className="text-sm text-gray-600">
                              useState , useMemo variables get their initial
                              values
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            3
                          </span>
                          <div>
                            <p className="font-medium">JSX Returned</p>
                            <p className="text-sm text-gray-600">
                              Component returns JSX to be rendered
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            4
                          </span>
                          <div>
                            <p className="font-medium">Virtual DOM Diff</p>
                            <p className="text-sm text-gray-600">
                              React compares virtual DOM to update the real DOM
                              efficiently
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            5
                          </span>
                          <div>
                            <p className="font-medium">DOM Updated</p>
                            <p className="text-sm text-gray-600">
                              React creates DOM elements
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            6
                          </span>
                          <div>
                            <p className="font-medium">useEffect Runs</p>
                            <p className="text-sm text-gray-600">
                              Effects with empty dependency arrays execute
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Code Example:</h4>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                        <pre>{`function MyComponent() {
  // 1. Component function executes
  console.log('Component rendering');
  
  // 2. useState initializes
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  
  // 5. useEffect runs after DOM update
  useEffect(() => {
    console.log('Component mounted!');
    
    // Fetch data, set up subscriptions
    fetchData();
    
    return () => {
      // Cleanup function (runs on unmount)
      console.log('Cleanup');
    };
  }, []); // Empty deps = mount only
  
  // 3. JSX returned
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}</pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="updating" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <RefreshCw className="w-6 h-6" />
                    Re-rendering Phase - Component Updates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">
                        What Triggers Re-rendering:
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div>
                            <p className="font-medium">State Changes</p>
                            <p className="text-sm text-gray-600">
                              useState setter functions called
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Props Changes</p>
                            <p className="text-sm text-gray-600">
                              Parent component passes new props
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Parent Re-renders</p>
                            <p className="text-sm text-gray-600">
                              Parent component re-renders
                            </p>
                          </div>
                        </div>
                      </div>

                      <h4 className="font-semibold mb-3 mt-6">
                        Re-rendering Process:
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            1
                          </span>
                          <div>
                            <p className="font-medium">Component Re-executes</p>
                            <p className="text-sm text-gray-600">
                              Function runs again with new state/props
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            2
                          </span>
                          <div>
                            <p className="font-medium">Virtual DOM Diff</p>
                            <p className="text-sm text-gray-600">
                              React compares new vs old virtual DOM
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            3
                          </span>
                          <div>
                            <p className="font-medium">DOM Updates</p>
                            <p className="text-sm text-gray-600">
                              Only changed elements are updated
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            4
                          </span>
                          <div className="flex-1 max-w-md">
                            <p className="font-medium">useEffect Runs</p>
                            <p className="text-sm text-gray-600 mb-2">
                              Effects with changed dependencies execute
                            </p>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                              <p className="text-xs text-blue-800 font-medium mb-1">
                                💡 Pro Tip:
                              </p>
                              <p className="text-xs text-blue-700">
                                React knows that some values never change even
                                though they're declared inside the component.
                                For example, the{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  set
                                </code>{" "}
                                function from{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  useState
                                </code>{" "}
                                and the{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  ref
                                </code>{" "}
                                object from{" "}
                                <code className="bg-blue-100 px-1 rounded">
                                  useRef
                                </code>{" "}
                                are stable—they're guaranteed to not change on
                                re-render. Stable values aren't reactive, so you
                                may omit them from the dependency list.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Code Example:</h4>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                        <pre>{`function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // Runs on every render
  useEffect(() => {
    console.log('Component rendered');
  });
  
  // Runs when count changes
  useEffect(() => {
    console.log('Count changed:', count);
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  // Runs when name changes
  useEffect(() => {
    console.log('Name changed:', name);
  }, [name]);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment {/* This triggers re-render */}
      </button>
      
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
}`}</pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="unmounting" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Trash2 className="w-6 h-6" />
                    Unmounting Phase - Component Cleanup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">
                        When Components Unmount:
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Conditional Rendering</p>
                            <p className="text-sm text-gray-600">
                              Component is conditionally hidden
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Route Changes</p>
                            <p className="text-sm text-gray-600">
                              Navigation to different page/route
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Parent Unmounts</p>
                            <p className="text-sm text-gray-600">
                              Parent component is removed
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Key Changes</p>
                            <p className="text-sm text-gray-600">
                              React key prop changes
                            </p>
                          </div>
                        </div>
                      </div>

                      <h4 className="font-semibold mb-3 mt-6">
                        Cleanup Process:
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            1
                          </span>
                          <div>
                            <p className="font-medium">Cleanup Functions Run</p>
                            <p className="text-sm text-gray-600">
                              useEffect cleanup functions execute
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            2
                          </span>
                          <div>
                            <p className="font-medium">
                              Event Listeners Removed
                            </p>
                            <p className="text-sm text-gray-600">
                              Prevent memory leaks
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            3
                          </span>
                          <div>
                            <p className="font-medium">DOM Elements Removed</p>
                            <p className="text-sm text-gray-600">
                              Component removed from DOM tree
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Code Example:</h4>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                        <pre>{`function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    console.log('Timer mounted');
    
    // Set up interval
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    // Set up event listener
    const handleVisibility = () => {
      console.log('Visibility changed');
    };
    document.addEventListener(
      'visibilitychange', 
      handleVisibility
    );
    
    // Cleanup function - runs on unmount
    return () => {
      console.log('Timer unmounting - cleanup');
      
      // Clear interval
      clearInterval(interval);
      
      // Remove event listener
      document.removeEventListener(
        'visibilitychange', 
        handleVisibility
      );
      
    };
  }, []);
  
  return <div>Timer: {seconds}s</div>;
}

// Usage with conditional rendering
function App() {
  const [showTimer, setShowTimer] = useState(true);
  
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        Toggle Timer
      </button>
    </div>
  );
}`}</pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="font-semibold text-purple-700 mb-2">
          Hooks: <code>useEffect</code> vs <code>useLayoutEffect</code>
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>
            <code>useEffect()</code> → runs after the component renders and
            paints to the screen. Used for side effects like data fetching,
            subscriptions, or updating the DOM. It does **not** block browser
            painting.
          </li>
          <li>
            <code>useLayoutEffect()</code> → runs synchronously **after** React
            has performed all DOM mutations but **before** the browser paints.
            Useful for measuring layout or synchronously re-rendering before the
            user sees the changes.
          </li>
          <li>
            <strong>Key difference:</strong> <code>useLayoutEffect</code> blocks
            the painting until it finishes, while <code>useEffect</code> does
            not. So use <code>useLayoutEffect</code> if you need to make DOM
            measurements or mutations that must happen before the browser
            updates the screen.
          </li>
        </ul>
      </div>
      <div className="py-20 px-8 bg-white">
        <h3 className="text-xl font-semibold mb-4">
          🧭 Lifecycle Hook Equivalents
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b font-medium">
                  Class Lifecycle
                </th>
                <th className="px-4 py-2 border-b font-medium">
                  Hook Equivalent
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded font-mono">
                    componentDidMount
                  </code>
                </td>
                <td className="px-4 py-2">
                  <code className="bg-blue-50 px-2 py-1 rounded font-mono">
                    useEffect(() =&gt; {}, [])
                  </code>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded font-mono">
                    componentDidUpdate
                  </code>
                </td>
                <td className="px-4 py-2">
                  <code className="bg-blue-50 px-2 py-1 rounded font-mono">
                    useEffect(() =&gt; {}, [deps])
                  </code>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded font-mono">
                    componentWillUnmount
                  </code>
                </td>
                <td className="px-4 py-2">
                  <code className="bg-blue-50 px-2 py-1 rounded font-mono">
                    useEffect(() =&gt; return () =&gt; {}, [])
                  </code>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded font-mono">
                    shouldComponentUpdate
                  </code>
                </td>
                <td className="px-4 py-2 text-gray-700">
                  <code className="bg-blue-50 px-1 py-0.5 rounded font-mono text-xs">
                    React.memo
                  </code>
                  ,{" "}
                  <code className="bg-blue-50 px-1 py-0.5 rounded font-mono text-xs">
                    useMemo
                  </code>
                  , or{" "}
                  <code className="bg-blue-50 px-1 py-0.5 rounded font-mono text-xs">
                    useCallback
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Client vs Server Side */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client-Side vs Server-Side Rendering
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Monitor className="w-6 h-6" />
                  Client-Side Rendering (CSR)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Components render in the browser after JavaScript loads
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold">Lifecycle Behavior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Full lifecycle runs in browser</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>useEffect runs after DOM creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Interactive immediately after mount</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Example:</h5>
                  <pre className="text-xs bg-gray-900 text-gray-100 p-2 rounded">{`function ClientComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Runs in browser only
    console.log('Window width:', window.innerWidth);
    fetchUserData();
  }, []);
  
  return <div>{data?.name}</div>;
}`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Server className="w-6 h-6" />
                  Server-Side Rendering (SSR)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Components render on the server before sending HTML to browser
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold">Lifecycle Behavior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Initial render happens on server</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      <span>useEffect doesn't run on server</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Example:</h5>
                  <pre className="text-xs bg-gray-900 text-gray-100 p-2 rounded">{`// Server-rendered component

function ServerComponent({ initialData }) {
  // Runs on server with pre-fetched data
  const users = initialData;
  
  // No useEffect needed for initial data
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Interactive Lifecycle Demo
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Live Component Lifecycle</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button
                    onClick={() => setShowDemo(!showDemo)}
                    variant={showDemo ? "destructive" : "default"}
                  >
                    {showDemo ? "Unmount Component" : "Mount Component"}
                  </Button>
                  {showDemo && (
                    <Button onClick={() => setDemoCount(demoCount + 1)}>
                      Trigger Re-render (Count: {demoCount})
                    </Button>
                  )}
                </div>

                <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg min-h-[200px]">
                  {showDemo ? (
                    <DemoComponent count={demoCount} />
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      Component is unmounted. Click "Mount Component" to see it
                      in action.
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

// Demo component for interactive example
function DemoComponent({ count }: { count: number }) {
  const [internalState, setInternalState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setInternalState((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-center space-y-4">
      <h3 className="text-xl font-semibold">Demo Component</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-medium">External Count (from props)</p>
          <p className="text-2xl font-bold text-blue-600">{count}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="font-medium">Internal Timer</p>
          <p className="text-2xl font-bold text-green-600">{internalState}</p>
        </div>
      </div>
    </div>
  );
}
