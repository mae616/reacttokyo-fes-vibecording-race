import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TimelinePage } from "./pages/TimelinePage";
import { UserListPage } from "./pages/UserListPage";
import { ProfilePage } from "./pages/ProfilePage";

/**
 * アプリケーションルート
 * 3画面のルーティングを定義
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimelinePage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
