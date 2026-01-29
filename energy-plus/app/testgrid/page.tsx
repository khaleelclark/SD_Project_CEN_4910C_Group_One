'use client';

import TestGridComponent, { Task } from './TestGrid'; // or wherever your component is
import * as React from 'react';

export default function Page() {
    const rows: Task[] = [
        { id: 1, name: 'Task One', status: 'Pending' },
        { id: 2, name: 'Task Two', status: 'Complete' },
        { id: 3, name: 'Task Three', status: 'In Progress' },
    ];

    return (
        <div style={{ padding: 24 }}>
            <h1>Supabase Example Grid</h1>
            <TestGridComponent rows={rows} />
        </div>
    );
}