import React from "react";

import { Button, Empty } from "@douyinfe/semi-ui";
import { IconSemiLogo } from "@douyinfe/semi-icons";
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";

import "./App.css";

/**
 * Write a demo based on this PR
 */
export default function App() {
  return (
    <div className="app">
      {/* Write area start  */}
      <Button icon={<IconSemiLogo />}>hello semi</Button>
      <Empty
        image={<IllustrationConstruction />}
        darkModeImage={<IllustrationConstructionDark />}
        title={"Write a demo about this pull request"}
        description="Semi build on this PR"
      />
      {/* Write area end */}
    </div>
  );
}
