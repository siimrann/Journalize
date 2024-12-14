"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Journalize looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-y-1">
            <Label>Profile</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how you look on Journalize.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-y-1">
            <Label>Team Spaces</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Journalize works with team
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-y-1">
            <Label>Security and Data</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Your security is our top most priority
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
