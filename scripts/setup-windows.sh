$CURRENT_DIR = Split-Path $MyInvocation.MyCommand.Path

Write-Host "Installing vs code extensions"
$VS_CODE_EXTENSIONS_FILE = Join-Path $CURRENT_DIR "..\.vscode\extensions.json"
$recommended_extensions = Get-Content $VS_CODE_EXTENSIONS_FILE | ConvertFrom-Json | Select-Object -ExpandProperty recommendations

foreach ($extension in $recommended_extensions) {
    code --install-extension $extension
}