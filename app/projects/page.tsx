import Link from "next/link";
import { ArrowLeft, FolderGit2, ExternalLink, Database, ScanLine, LayoutTemplate } from "lucide-react";

export default function Projects() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-neutral-400 font-sans selection:bg-blue-500/30 selection:text-blue-200">

            {/* Simple Header */}
            <header className="fixed w-full backdrop-blur-md bg-[#0a0a0a]/80 border-b border-neutral-800 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center">
                    <Link href="/" className="flex items-center text-sm font-mono text-neutral-400 hover:text-neutral-100 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        cd ../home
                    </Link>
                </div>
            </header>

            {/* Projects Section */}
            <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4 tracking-tight flex items-center">
                    <FolderGit2 className="mr-3 w-8 h-8 text-neutral-500" />
                    Project Repository
                </h1>
                <p className="max-w-2xl text-base leading-relaxed mb-12">
                    A showcase of systems, applications, and architectures I have developed to solve operational challenges and streamline business processes.
                </p>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Project 1 */}
                    <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors group flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Database className="w-6 h-6 text-blue-400" />
                            </div>
                            <a href="#" className="text-neutral-500 hover:text-neutral-300">
                                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-100 mb-2">Factory Ops & Dashboard System</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed flex-grow mb-6">
                            A comprehensive tracking system for factory operations paired with a real-time monitoring dashboard to improve data visibility and executive decision-making.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-neutral-500">PHP</span>
                            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-neutral-500">JavaScript</span>
                            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-neutral-500">MySQL</span>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors group flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <LayoutTemplate className="w-6 h-6 text-emerald-400" />
                            </div>
                            <a href="#" className="text-neutral-500 hover:text-neutral-300">
                                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-100 mb-2">Corporate CMS & Asset Manager</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed flex-grow mb-6">
                            A dual-purpose system designed to manage dynamic digital content efficiently while simultaneously tracking physical company assets and inventory lifecycles.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-neutral-500">Laravel</span>
                            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-neutral-500">PHP</span>
                            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-neutral-500">Architecture</span>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors group flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-500/10 rounded-lg">
                                <ScanLine className="w-6 h-6 text-purple-400" />
                            </div>
                            <a href="#" className="text-neutral-500 hover:text-neutral-300">
                                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-100 mb-2">Product Reconcile Application</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed flex-grow mb-6">
                            A specialized application built with direct hardware integration for barcode scanner tools, designed to automate and enhance the accuracy of product reconciliation.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-neutral-500">Hardware Integration</span>
                            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-neutral-500">JavaScript</span>
                            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-neutral-500">MySQL</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 mt-auto text-center border-t border-neutral-800 font-mono text-xs text-neutral-600">
                <p>&copy; {new Date().getFullYear()} Rizky Erlangga. Built with Next.js.</p>
            </footer>

        </main>
    );
}