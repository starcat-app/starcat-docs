/**
 * 渠道胶囊。
 * 只标「这一边才有」的能力：App Store 红、Direct 绿。
 * 两边都有的功能不要放胶囊。
 * 用实色底和白字，明暗主题都读得清。
 */

const pill = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  margin: "0 8px 0 0",
  padding: "3px 10px 3px 8px",
  borderRadius: 999,
  color: "#fff",
  fontSize: 12,
  fontWeight: 650,
  lineHeight: "18px",
  letterSpacing: "0.01em",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
}

const dot = {
  width: 6,
  height: 6,
  borderRadius: 999,
  background: "rgba(255,255,255,0.92)",
  flexShrink: 0,
}

const version = {
  opacity: 0.88,
  fontWeight: 550,
}

export function AppStoreBadge() {
  return (
    <span style={{ ...pill, background: "#E10600" }} title="仅 Mac App Store 版">
      <span style={dot} />
      App Store
    </span>
  )
}

export function DirectBadge() {
  return (
    <span style={{ ...pill, background: "#178A45" }} title="仅 Direct 版">
      <span style={dot} />
      Direct
    </span>
  )
}

/** 当前 Direct 1.9.6 已有、App Store 1.9.1 还没有。不是沙盒永远做不到。 */
export function DirectVersionBadge() {
  return (
    <span style={{ ...pill, background: "#178A45" }} title="当前仅 Direct 1.9.6。App Store 仍是 1.9.1">
      <span style={dot} />
      Direct
      <span style={version}>1.9.6</span>
    </span>
  )
}
