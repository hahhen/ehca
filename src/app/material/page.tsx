"use client"

import { Separator } from '@/components/ui/separator';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

export default function Material() {
    return (
        <main className="px-2 lg:px-4 gap-4 flex flex-col">
            <section className="flex flex-col gap-4 lg:flex-row">
                <div className="flex items-center bg-card border rounded-xl w-full">
                    <div className="py-6 px-4 lg:px-8 w-full">
                        <h1 className="font-serif text-4xl lg:text-6xl font-light">Material</h1>
                        <Separator className="my-4" />
                        <div className='w-full flex justify-center'>
                            <iframe className="w-[800] aspect-video z-10" src='https://view.officeapps.live.com/op/embed.aspx?src=https://leibnizebin.vercel.app/leibniz.pptx'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}