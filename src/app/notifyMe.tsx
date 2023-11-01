"use client"

import { notify } from '@/components/hooks/notify'
import { Button } from '@/components/ui/button'
import { Cookie } from 'lucide-react'
import React from 'react'

export default function NotifyMe() {
  return (
    <Button 
        variant="outline" 
        size="icon" 
        onClick={() => notify("Notification Title", "This is Notification Body")}
        >
        <Cookie/>
    </Button>
  )
}
