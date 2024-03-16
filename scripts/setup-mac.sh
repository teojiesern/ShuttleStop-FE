CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "Installing vs code extensions"
VS_CODE_EXTENSIONS_FILE=$CURRENT_DIR/../.vscode/extensions.json
recommended_extensions=$(awk -F'[:,"]' '/"recommendations"/{p=1; next} p && /\]/{p=0} p && !/^ *$/ {gsub(/\/\/.*/, ""); if ($2) print $2}' $VS_CODE_EXTENSIONS_FILE)
for extension in $recommended_extensions; do
    code --install-extension "$extension"
done